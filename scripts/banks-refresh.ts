// Biweekly refresh sweep for the banks section.
//
//   KEENABLE_API_KEY=… npx tsx scripts/banks-refresh.ts [slug …] [--days N] [--json]
//
// For every bank (or the slugs given) it searches Keenable on the allowed
// source hosts for AI news published since the bank's `lastUpdated` (minus a
// small overlap), drops anything whose URL is already cited on the page, and
// prints the candidates grouped by bank. It changes nothing: a person or the
// scheduled routine reads the candidates, adds the ones that matter to
// lib/banks/<slug>.ts (timeline / numbers / quotes / sources, and bumps
// `lastUpdated`), then runs `npm run tracker:check`.

import { BANKS } from "../lib/banks";
import { PRIMARY_HOSTS, REGULATOR_HOSTS, TRADE_HOSTS, hostOf } from "../lib/source-tiers";

const KEY = process.env.KEENABLE_API_KEY;
if (!KEY) {
  console.error("KEENABLE_API_KEY is not set");
  process.exit(1);
}

const args = process.argv.slice(2);
const json = args.includes("--json");
const daysIdx = args.indexOf("--days");
const overlapDays = daysIdx >= 0 ? Number(args[daysIdx + 1]) : 7;
const slugs = args.filter((a, i) => !a.startsWith("--") && args[i - 1] !== "--days");

const PRESS = ["cnbc.com", "reuters.com", "bloomberg.com", "ft.com", "wsj.com", "mckinsey.com", "thefinancialbrand.com", "bankingdive.com", "fortune.com", "fastcompany.com", "forbes.com"];
const ALLOWED = [...REGULATOR_HOSTS, ...PRIMARY_HOSTS, ...TRADE_HOSTS, ...PRESS];
const hostOk = (url: string) => {
  const h = hostOf(url);
  return Boolean(h) && ALLOWED.some((o) => h === o || h.endsWith(`.${o}`));
};

/** Per-bank query terms: the name plus the platform, if any. */
function queries(name: string, platform?: string): string[] {
  const q = [`${name} AI`, `${name} artificial intelligence agents`, `${name} generative AI employees`];
  if (platform) q.push(`${name} ${platform.split(" and ")[0]}`);
  return q;
}

type Hit = { title: string; url: string; published_at?: string; snippet?: string };

async function search(query: string, after: string, site?: string): Promise<Hit[]> {
  const body: Record<string, unknown> = { query, max_results: 10, published_after: after, snippet_max_length: 300 };
  if (site) body.site = site;
  const r = await fetch("https://api.keenable.ai/v1/search", {
    method: "POST",
    headers: { "X-API-Key": KEY!, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!r.ok) return [];
  const j = (await r.json()) as { results?: Hit[] };
  return j.results ?? [];
}

function minusDays(iso: string, days: number): string {
  const d = new Date(iso + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

(async () => {
  const banks = slugs.length ? BANKS.filter((b) => slugs.includes(b.slug)) : BANKS;
  const out: Record<string, Hit[]> = {};
  for (const b of banks) {
    const after = minusDays(b.lastUpdated, overlapDays);
    const known = new Set(b.sources.map((s) => s.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")));
    const seen = new Set<string>();
    const hits: Hit[] = [];
    const nameRe = new RegExp(`\\b(${[b.name, b.shortName, b.ticker].map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "i");
    // Own domain first (from the bank's primary sources), then the press, then an open query.
    const ownHosts = Array.from(new Set(b.sources.map((s) => hostOf(s.url)).filter((h) => PRIMARY_HOSTS.some((p) => h === p || h.endsWith(`.${p}`)))));
    const plan: { q: string; site?: string }[] = [];
    for (const h of ownHosts.slice(0, 2)) plan.push({ q: `${b.name} artificial intelligence`, site: h });
    for (const site of ["americanbanker.com", "reuters.com", "bloomberg.com", "cnbc.com", "bankingdive.com"]) plan.push({ q: `${b.name} AI`, site });
    for (const q of queries(b.name, b.platform?.name)) plan.push({ q });
    for (const p of plan) {
      for (const h of await search(p.q, after, p.site)) {
        const key = h.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "").split("?")[0];
        if (seen.has(key) || known.has(key) || !hostOk(h.url)) continue;
        const text = `${h.title} ${h.snippet ?? ""}`;
        if (!/\b(ai|artificial intelligence|agent|agentic|llm|copilot|generative|machine learning)\b/i.test(text)) continue;
        if (!nameRe.test(text)) continue;
        seen.add(key);
        hits.push(h);
      }
    }
    hits.sort((a, c) => ((a.published_at ?? "") < (c.published_at ?? "") ? 1 : -1));
    out[b.slug] = hits;
    if (!json) {
      console.log(`\n== ${b.name} (lastUpdated ${b.lastUpdated}; since ${after}) — ${hits.length} candidates`);
      for (const h of hits) console.log(`- [${(h.published_at ?? "").slice(0, 10)}] ${h.title}\n  ${h.url}\n  ${(h.snippet ?? "").replace(/\s+/g, " ").slice(0, 240)}`);
    }
  }
  if (json) console.log(JSON.stringify(out, null, 2));
})();
