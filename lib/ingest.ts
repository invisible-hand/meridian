import Parser from "rss-parser";
import { insertNewsItem, listActiveSources } from "@/lib/db";
import { canonicalizeUrl, hashUrl } from "@/lib/url";
import { keenableEnabled, keenableSearch } from "@/lib/keenable";
import { REGULATOR_HOSTS, PRIMARY_HOSTS, TRADE_HOSTS } from "@/lib/source-tiers";

// Collection has three layers, all landing in news_items keyed by canonical URL:
//   1. RSS feeds (lib/default-sources.ts, seeded into the `sources` table)
//   2. Keenable searches — site-scoped over regulators, banks, vendors and
//      feed-less trade titles, plus topical queries over the whole index
//   3. Exa, restricted to a domain allow-list (it is noise without one)
// Generation (lib/digest.ts) then works over everything ingested in 48 hours.

type IngestStats = {
  attempted: number;
  inserted: number;
  duplicates: number;
  failedSources: string[];
  keenable: { requests: number; results: number };
  exa: { results: number };
};

// Some publishers (notably occ.gov) reject rss-parser's default request headers
// with a 406 while happily serving curl. An explicit Accept header fixes it and
// is harmless everywhere else — verified: OCC news + bulletins go 406 -> 200.
const parser = new Parser({
  timeout: 20000,
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.9, */*; q=0.8"
  }
});
const INGEST_LOOKBACK_HOURS = parsePositiveInt(process.env.INGEST_LOOKBACK_HOURS, 72);
const INGEST_MAX_ITEMS_PER_SOURCE = parsePositiveInt(process.env.INGEST_MAX_ITEMS_PER_SOURCE, 75);
const FEED_CONCURRENCY = 6;
const DEAD_HOSTS = ["news.smol.ai"];

export async function runIngestion(): Promise<IngestStats> {
  const sources = (await listActiveSources()).filter(
    (s) => !DEAD_HOSTS.some((h) => s.url.includes(h))
  );
  const stats: IngestStats = {
    attempted: 0,
    inserted: 0,
    duplicates: 0,
    failedSources: [],
    keenable: { requests: 0, results: 0 },
    exa: { results: 0 }
  };

  // Layer 1 — feeds, a few at a time so 60 feeds fit comfortably in the cron budget.
  await mapWithConcurrency(sources, FEED_CONCURRENCY, async (source) => {
    try {
      const feed = await parser.parseURL(source.url);
      const candidateFeedItems = prioritizeFeedItems(feed.items ?? []);
      for (const item of candidateFeedItems) {
        const url = item.link?.trim();
        const title = item.title?.trim();
        if (!url || !title) continue;
        stats.attempted += 1;
        const canonicalUrl = canonicalizeUrl(url);
        const inserted = await insertNewsItem({
          title,
          url,
          canonicalUrl,
          urlHash: hashUrl(canonicalUrl),
          summary: item.contentSnippet ?? item.content ?? null,
          publishedAt: item.isoDate ?? null,
          sourceName: source.name,
          sourceUrl: source.url,
          raw: item
        });
        if (inserted) stats.inserted += 1;
        else stats.duplicates += 1;
      }
    } catch {
      stats.failedSources.push(source.url);
    }
  });

  // Layer 2 — Keenable.
  if (keenableEnabled()) {
    const k = await ingestFromKeenable();
    stats.attempted += k.attempted;
    stats.inserted += k.inserted;
    stats.duplicates += k.duplicates;
    stats.keenable = { requests: k.requests, results: k.results };
  }

  // Layer 3 — Exa, allow-listed.
  const exa = await ingestFromExa();
  stats.attempted += exa.attempted;
  stats.inserted += exa.inserted;
  stats.duplicates += exa.duplicates;
  stats.exa = { results: exa.results };

  return stats;
}

// ── Layer 2: Keenable ────────────────────────────────────────────────────────

// Sites watched daily with a broad "artificial intelligence" query. Regulators
// and standard-setters, the largest US banks, the core and payments vendors
// banks buy from, the model labs, and trade titles whose feeds block bots.
const KEENABLE_SITES: string[] = [
  ...REGULATOR_HOSTS.filter((h) => !["govdelivery.com", "europa.eu", "gov.uk", "whitehouse.gov", "federalregister.gov", "ffiec.gov", "fsoc.gov", "cppa.ca.gov", "oag.ca.gov", "coag.gov"].includes(h)),
  "jpmorganchase.com", "bankofamerica.com", "wellsfargo.com", "citigroup.com", "capitalone.com", "usbank.com",
  "pnc.com", "truist.com", "goldmansachs.com", "morganstanley.com",
  "fiserv.com", "fisglobal.com", "jackhenry.com", "ncino.com", "visa.com", "mastercard.com",
  "openai.com", "anthropic.com", "blog.google", "microsoft.com", "aws.amazon.com", "nvidia.com",
  "bankautomationnews.com", "thefinancialbrand.com", "fintechfutures.com", "cutimes.com"
];

// Topical queries over the whole index, last 48 hours. Phrased as a news desk
// would search, not as keywords.
const KEENABLE_TOPICS: string[] = [
  "bank deploys artificial intelligence",
  "bank launches AI agent for customers",
  "fintech launches AI product for banks",
  "AI fraud detection bank rollout",
  "AI credit underwriting lender",
  "AI anti-money laundering compliance bank",
  "regulator artificial intelligence guidance banks",
  "credit union artificial intelligence",
  "payments network agentic AI",
  "core banking provider AI",
  "wealth management AI advisor bank",
  "AI model release enterprise",
  "AI agents enterprise deployment announcement",
  "frontier AI model capabilities release",
  "AI chip data center capacity announcement"
];

async function ingestFromKeenable(): Promise<{
  attempted: number; inserted: number; duplicates: number; requests: number; results: number;
}> {
  const since48h = new Date(Date.now() - 48 * 3600_000).toISOString();
  const since7d = new Date(Date.now() - 7 * 86400_000).toISOString();
  const seen = new Set<string>();
  const collected: { title: string; url: string; snippet: string | null; publishedAt: string | null; label: string }[] = [];
  let requests = 0;

  const siteJobs = KEENABLE_SITES.map((site) => async () => {
    requests += 1;
    const results = await keenableSearch({ query: "artificial intelligence", site, maxResults: 20, publishedAfter: since7d });
    for (const r of results) collect(r, `Keenable: ${site}`);
  });
  const topicJobs = KEENABLE_TOPICS.map((q) => async () => {
    requests += 1;
    const results = await keenableSearch({ query: q, maxResults: 50, publishedAfter: since48h });
    for (const r of results) collect(r, "Keenable: topical");
  });

  function collect(r: { title?: string; url?: string; snippet?: string; description?: string; published_at?: string }, label: string) {
    if (!r.url || !r.title) return;
    const canonical = canonicalizeUrl(r.url);
    if (seen.has(canonical)) return;
    seen.add(canonical);
    collected.push({
      title: r.title.trim(),
      url: r.url,
      snippet: (r.snippet || r.description || "").trim() || null,
      publishedAt: r.published_at ?? null,
      label
    });
  }

  await mapWithConcurrency([...siteJobs, ...topicJobs], 5, (job) => job());

  let attempted = 0, inserted = 0, duplicates = 0;
  for (const c of collected) {
    attempted += 1;
    const canonicalUrl = canonicalizeUrl(c.url);
    const wasInserted = await insertNewsItem({
      title: c.title,
      url: c.url,
      canonicalUrl,
      urlHash: hashUrl(canonicalUrl),
      summary: c.snippet,
      publishedAt: c.publishedAt,
      sourceName: c.label,
      sourceUrl: "https://keenable.ai",
      raw: { keenable: true, label: c.label }
    });
    if (wasInserted) inserted += 1;
    else duplicates += 1;
  }
  return { attempted, inserted, duplicates, requests, results: collected.length };
}

// ── Layer 3: Exa, allow-listed ───────────────────────────────────────────────

const EXA_QUERIES = [
  "bank or fintech deploying AI product launch announcement",
  "financial regulator AI guidance policy ruling",
  "AI model release enterprise capability announcement"
];
const EXA_DOMAINS = [...TRADE_HOSTS, ...PRIMARY_HOSTS, ...REGULATOR_HOSTS].filter(
  (h) => !["americanbanker.com", "govdelivery.com"].includes(h)
);

type ExaResult = { title?: string; url?: string; text?: string; publishedDate?: string };

async function ingestFromExa(): Promise<{ attempted: number; inserted: number; duplicates: number; results: number }> {
  const apiKey = process.env.EXA_API_KEY;
  if (!apiKey) return { attempted: 0, inserted: 0, duplicates: 0, results: 0 };
  const startDate = new Date(Date.now() - 48 * 3600_000).toISOString();
  const seen = new Set<string>();
  const all: ExaResult[] = [];

  await Promise.all(
    EXA_QUERIES.map(async (query) => {
      try {
        const response = await fetch("https://api.exa.ai/search", {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-api-key": apiKey },
          body: JSON.stringify({
            query,
            type: "auto",
            category: "news",
            numResults: 25,
            startPublishedDate: startDate,
            includeDomains: EXA_DOMAINS,
            contents: { text: { maxCharacters: 4000 } }
          })
        });
        if (!response.ok) return;
        const data = (await response.json()) as { results?: ExaResult[] };
        for (const r of data.results ?? []) {
          if (!r.url || !r.title) continue;
          const c = canonicalizeUrl(r.url);
          if (seen.has(c)) continue;
          seen.add(c);
          all.push(r);
        }
      } catch {
        // Exa is optional; a failed query just means fewer candidates.
      }
    })
  );

  let attempted = 0, inserted = 0, duplicates = 0;
  for (const r of all) {
    attempted += 1;
    const canonicalUrl = canonicalizeUrl(r.url!);
    const wasInserted = await insertNewsItem({
      title: r.title!,
      url: r.url!,
      canonicalUrl,
      urlHash: hashUrl(canonicalUrl),
      summary: r.text ?? null,
      publishedAt: r.publishedDate ?? null,
      sourceName: "Exa Discovery",
      sourceUrl: "https://exa.ai",
      raw: r
    });
    if (wasInserted) inserted += 1;
    else duplicates += 1;
  }
  return { attempted, inserted, duplicates, results: all.length };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function prioritizeFeedItems(
  items: Array<{ link?: string; title?: string; isoDate?: string; pubDate?: string; contentSnippet?: string; content?: string }>
) {
  const now = Date.now();
  const lookbackMs = INGEST_LOOKBACK_HOURS * 3600_000;
  const withDates = items.map((item) => {
    const iso = item.isoDate ?? (item.pubDate ? new Date(item.pubDate).toISOString() : undefined);
    const ms = iso ? new Date(iso).getTime() : NaN;
    return { item: { ...item, isoDate: iso }, ms };
  });
  const recent = withDates.filter((x) => Number.isFinite(x.ms) && now - x.ms <= lookbackMs && now - x.ms >= -3600_000);
  // Feeds without dates (a few regulators) are taken as-is, newest first by feed order.
  const undated = withDates.filter((x) => !Number.isFinite(x.ms));
  return [...recent.sort((a, b) => b.ms - a.ms), ...undated].slice(0, INGEST_MAX_ITEMS_PER_SOURCE).map((x) => x.item);
}

async function mapWithConcurrency<T>(items: T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) {
      const next = queue.shift()!;
      await fn(next);
    }
  });
  await Promise.all(workers);
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
