import Parser from "rss-parser";
import { insertNewsItem, listActiveSources } from "@/lib/db";
import { canonicalizeUrl, hashUrl } from "@/lib/url";

type IngestStats = {
  attempted: number;
  inserted: number;
  duplicates: number;
  failedSources: string[];
};

const parser = new Parser();
const SMOL_HOST = "news.smol.ai";
const INGEST_LOOKBACK_HOURS = parsePositiveInt(process.env.INGEST_LOOKBACK_HOURS, 72);
const INGEST_MAX_ITEMS_PER_SOURCE = parsePositiveInt(process.env.INGEST_MAX_ITEMS_PER_SOURCE, 75);

export async function runIngestion(): Promise<IngestStats> {
  const sources = await listActiveSources();
  const stats: IngestStats = {
    attempted: 0,
    inserted: 0,
    duplicates: 0,
    failedSources: []
  };

  // First-class source: always ingest today's Smol AI issues first.
  const smolFirst = await ingestSmolIssuesForToday();
  stats.attempted += smolFirst.attempted;
  stats.inserted += smolFirst.inserted;
  stats.duplicates += smolFirst.duplicates;
  if (!smolFirst.ok) {
    stats.failedSources.push("https://news.smol.ai/issues");
  }

  for (const source of sources) {
    if (source.url.includes("news.smol.ai/issues")) {
      // Already handled up front as a dedicated first-class source.
      continue;
    }
    try {
      const feed = await parser.parseURL(source.url);
      const candidateFeedItems = prioritizeFeedItems(feed.items ?? []);
      for (const item of candidateFeedItems) {
        const url = item.link?.trim();
        const title = item.title?.trim();
        if (!url || !title) {
          continue;
        }
        const summary = await resolveSummaryForItem({
          sourceUrl: source.url,
          itemUrl: url,
          rssSummary: item.contentSnippet ?? item.content ?? null
        });
        stats.attempted += 1;
        const canonicalUrl = canonicalizeUrl(url);
        const inserted = await insertNewsItem({
          title,
          url,
          canonicalUrl,
          urlHash: hashUrl(canonicalUrl),
          summary,
          publishedAt: item.isoDate ?? null,
          sourceName: source.name,
          sourceUrl: source.url,
          raw: item
        });
        if (inserted) {
          stats.inserted += 1;
        } else {
          stats.duplicates += 1;
        }
      }
    } catch {
      const recovered = await tryIngestSmolIssuesFallback(source.name, source.url);
      if (recovered) {
        stats.attempted += recovered.attempted;
        stats.inserted += recovered.inserted;
        stats.duplicates += recovered.duplicates;
      } else {
        stats.failedSources.push(source.url);
      }
    }
  }

  const discoveryCount = await ingestFromDiscoveryApi();
  stats.attempted += discoveryCount.attempted;
  stats.inserted += discoveryCount.inserted;
  stats.duplicates += discoveryCount.duplicates;

  return stats;
}

async function ingestFromDiscoveryApi(): Promise<{
  attempted: number;
  inserted: number;
  duplicates: number;
}> {
  const apiKey = process.env.EXA_API_KEY;
  if (!apiKey) {
    return { attempted: 0, inserted: 0, duplicates: 0 };
  }

  const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  let response: Response;
  try {
    response = await fetch("https://api.exa.ai/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify({
        query:
          "Most important AI news in last 24 hours for fintech, banking, payments, risk, compliance, enterprise software",
        numResults: 25,
        startPublishedDate: startDate,
        type: "keyword"
      })
    });
  } catch {
    return { attempted: 0, inserted: 0, duplicates: 0 };
  }

  if (!response.ok) {
    return { attempted: 0, inserted: 0, duplicates: 0 };
  }

  let data: {
    results?: Array<{ title?: string; url?: string; text?: string; publishedDate?: string }>;
  };
  try {
    data = (await response.json()) as {
      results?: Array<{ title?: string; url?: string; text?: string; publishedDate?: string }>;
    };
  } catch {
    return { attempted: 0, inserted: 0, duplicates: 0 };
  }

  let attempted = 0;
  let inserted = 0;
  let duplicates = 0;

  for (const result of data.results ?? []) {
    if (!result.url || !result.title) {
      continue;
    }
    attempted += 1;
    const canonicalUrl = canonicalizeUrl(result.url);
    const wasInserted = await insertNewsItem({
      title: result.title,
      url: result.url,
      canonicalUrl,
      urlHash: hashUrl(canonicalUrl),
      summary: result.text ?? null,
      publishedAt: result.publishedDate ?? null,
      sourceName: "Exa Discovery",
      sourceUrl: "https://exa.ai",
      raw: result
    });
    if (wasInserted) {
      inserted += 1;
    } else {
      duplicates += 1;
    }
  }

  return { attempted, inserted, duplicates };
}

async function resolveSummaryForItem(params: {
  sourceUrl: string;
  itemUrl: string;
  rssSummary: string | null;
}): Promise<string | null> {
  if (isSmolIssueItem(params.sourceUrl, params.itemUrl)) {
    const issueText = await fetchSmolIssueText(params.itemUrl);
    if (issueText) {
      return issueText;
    }
  }

  return params.rssSummary;
}

function isSmolIssueItem(sourceUrl: string, itemUrl: string): boolean {
  try {
    const source = new URL(sourceUrl);
    const item = new URL(itemUrl);
    return source.hostname === SMOL_HOST && item.hostname === SMOL_HOST && item.pathname.startsWith("/issues/");
  } catch {
    return false;
  }
}

async function fetchSmolIssueText(issueUrl: string): Promise<string | null> {
  try {
    const response = await fetch(issueUrl, { headers: { "User-Agent": "bankingnewsai-bot/1.0" } });
    if (!response.ok) {
      return null;
    }
    const html = await response.text();
    const text = extractReadableTextFromHtml(html);
    if (!text) {
      return null;
    }
    // Keep payload bounded for DB/LLM prompt size while preserving article details.
    return text.slice(0, 14000);
  } catch {
    return null;
  }
}

function extractReadableTextFromHtml(html: string): string {
  const mainMatch =
    html.match(/<main[\s\S]*?<\/main>/i) ||
    html.match(/<article[\s\S]*?<\/article>/i) ||
    html.match(/<body[\s\S]*?<\/body>/i);
  const content = mainMatch ? mainMatch[0] : html;

  return content
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function tryIngestSmolIssuesFallback(sourceName: string, sourceUrl: string): Promise<{
  attempted: number;
  inserted: number;
  duplicates: number;
} | null> {
  if (!sourceUrl.includes("news.smol.ai/issues")) {
    return null;
  }

  try {
    const response = await fetch("https://news.smol.ai/issues", {
      headers: { "User-Agent": "bankingnewsai-bot/1.0" }
    });
    if (!response.ok) {
      return null;
    }

    const html = await response.text();
    const issueUrls = extractSmolIssueUrls(html);

    let attempted = 0;
    let inserted = 0;
    let duplicates = 0;

    for (const issueUrl of issueUrls) {
      const issueText = await fetchSmolIssueText(issueUrl);
      if (!issueText) {
        continue;
      }
      attempted += 1;
      const canonicalUrl = canonicalizeUrl(issueUrl);
      const title = issueUrl.split("/").pop()?.replace(/-/g, " ") ?? "smol ai issue";
      const publishedAt = parseDateFromIssueUrl(issueUrl);
      const wasInserted = await insertNewsItem({
        title,
        url: issueUrl,
        canonicalUrl,
        urlHash: hashUrl(canonicalUrl),
        summary: issueText,
        publishedAt,
        sourceName,
        sourceUrl,
        raw: { fallback: "smol-issues-page", issueUrl }
      });
      if (wasInserted) {
        inserted += 1;
      } else {
        duplicates += 1;
      }
    }

    return { attempted, inserted, duplicates };
  } catch {
    return null;
  }
}

function parseDateFromIssueUrl(issueUrl: string): string | null {
  const match = issueUrl.match(/\/issues\/(\d{4}-\d{2}-\d{2})-/);
  if (!match?.[1]) {
    return null;
  }
  return `${match[1]}T12:00:00.000Z`;
}

function prioritizeFeedItems(
  items: Array<{ isoDate?: string; pubDate?: string }>
): Array<{ isoDate?: string; pubDate?: string; title?: string; link?: string; contentSnippet?: string; content?: string }> {
  const now = Date.now();
  const lookbackMs = INGEST_LOOKBACK_HOURS * 60 * 60 * 1000;

  return items
    .filter((item) => {
      const rawDate = item.isoDate ?? item.pubDate;
      if (!rawDate) {
        return true;
      }
      const publishedMs = new Date(rawDate).getTime();
      if (!Number.isFinite(publishedMs)) {
        return true;
      }
      return now - publishedMs >= 0 && now - publishedMs <= lookbackMs;
    })
    .sort((a, b) => {
      const aMs = new Date(a.isoDate ?? a.pubDate ?? "").getTime();
      const bMs = new Date(b.isoDate ?? b.pubDate ?? "").getTime();
      const aScore = Number.isFinite(aMs) ? aMs : 0;
      const bScore = Number.isFinite(bMs) ? bMs : 0;
      return bScore - aScore;
    })
    .slice(0, INGEST_MAX_ITEMS_PER_SOURCE);
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
}

async function ingestSmolIssuesForToday(): Promise<{
  ok: boolean;
  attempted: number;
  inserted: number;
  duplicates: number;
}> {
  const sourceName = "Smol AI Issues";
  const sourceUrl = "https://news.smol.ai/issues";
  const today = new Date().toISOString().slice(0, 10);

  try {
    const response = await fetch(sourceUrl, {
      headers: { "User-Agent": "bankingnewsai-bot/1.0" }
    });
    if (!response.ok) {
      return { ok: false, attempted: 0, inserted: 0, duplicates: 0 };
    }
    const html = await response.text();
    const allIssueUrls = extractSmolIssueUrls(html);

    // Always ingest the 3 most recent issues to cover weekends, gaps, and testing
    // scenarios where today's issue hasn't been published yet.
    // Issues that match today's date are kept; for the rest we stamp publishedAt
    // as today so they pass the 72-hour recency gate in digest generation.
    const targetUrls = allIssueUrls.slice(0, 3);

    let attempted = 0;
    let inserted = 0;
    let duplicates = 0;

    for (const issueUrl of targetUrls) {
      const issueText = await fetchSmolIssueText(issueUrl);
      if (!issueText) {
        continue;
      }
      attempted += 1;
      const canonicalUrl = canonicalizeUrl(issueUrl);
      const title = issueUrl.split("/").pop()?.replace(/-/g, " ") ?? "smol ai issue";
      // Use the date embedded in the URL when available. If the issue is older than
      // today (weekend gaps, etc.) override to today so it stays within the 72-hour
      // recency window used by the digest generator.
      const urlDate = parseDateFromIssueUrl(issueUrl);
      const isOlderThanWindow =
        urlDate === null ||
        Date.now() - new Date(urlDate).getTime() > 72 * 60 * 60 * 1000;
      const publishedAt = isOlderThanWindow ? `${today}T12:00:00.000Z` : urlDate;
      const wasInserted = await insertNewsItem({
        title,
        url: issueUrl,
        canonicalUrl,
        urlHash: hashUrl(canonicalUrl),
        summary: issueText,
        publishedAt,
        sourceName,
        sourceUrl,
        raw: { firstClassSource: "smol-issues", issueUrl, dateOverridden: isOlderThanWindow }
      });
      if (wasInserted) {
        inserted += 1;
      } else {
        duplicates += 1;
      }
    }

    return { ok: true, attempted, inserted, duplicates };
  } catch {
    return { ok: false, attempted: 0, inserted: 0, duplicates: 0 };
  }
}

function extractSmolIssueUrls(html: string): string[] {
  return Array.from(
    new Set(
      [...html.matchAll(/https:\/\/news\.smol\.ai\/issues\/[a-z0-9-]+/gi)].map((match) => match[0].toLowerCase())
    )
  );
}
