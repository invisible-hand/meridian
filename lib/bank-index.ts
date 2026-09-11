import { BANKS, BANKS_UPDATED, type Bank } from "@/lib/banks";

// The disclosure index behind /banks/ai-index: every bank scored on the depth
// of what it has put on the public record about AI, from the same data as
// its page. It measures disclosure, not capability — a bank can run a large
// programme and say little — and the weights are published on the page.
//
// Design note (2026-09-11): the per-page minimums enforced by the validator
// (≥6 timeline rows, ≥4 numbers, …) make raw counts alike across banks, and a
// raw source count rewards our own research effort (a page built from the
// bank's newsroom and job postings can be the longest). So the heaviest
// component is independent coverage: sources that are not the bank's own
// publications or wire copies of them — the world noticed. Dated moves in the
// last twelve months and breadth of use cases follow. A page that states the
// bank has disclosed no AI programme is capped and shown as such.

export type IndexRow = {
  bank: Bank;
  rank: number;
  score: number;
  disclosed: boolean;
  platform: boolean;
  useCases: number;
  inProduction: number;
  leaders: number;
  numbers: number;
  moves12m: number;
  sources: number;
  independent: number;
};

export const INDEX_WEIGHTS = {
  /** Sources that are neither the bank's own publications nor wire/job-board copies of them */
  independent: { each: 2, cap: 30 },
  /** The bank's own releases, filings, job postings and wire copies */
  own: { each: 0.5, cap: 5 },
  moves12m: { each: 20 / 12, cap: 20 },
  useCases: { each: 2.5, cap: 15 },
  platform: 10,
  leaders: { each: 2.5, cap: 10 },
  numbers: { each: 10 / 6, cap: 10 },
  undisclosedCap: 30
} as const;

// Words in the bank's names that identify its own publications (generic words dropped).
const GENERIC = new Set(["bank", "banks", "financial", "corporation", "corp", "group", "holdings", "company", "services", "national", "trust", "the", "and", "inc", "bancorp", "bancshares", "first", "united", "community", "capital", "one"]);
const WIRE_HOST = /businesswire|prnewswire|globenewswire|myworkdayjobs|workday|finance\.yahoo|gurufocus|marketbeat|sec\.gov/;
const WIRE_PUB = /wire|via ft markets|yahoo|workday/i;

function ownWords(bank: Bank): string[] {
  const words = new Set<string>([bank.slug.split("-")[0]]);
  for (const n of [bank.name, bank.shortName, bank.leadBank]) {
    for (const t of n.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/)) if (t.length >= 3 && !GENERIC.has(t)) words.add(t);
  }
  return [...words];
}

/** True when a source is independent reporting rather than the bank's own material or a wire copy of it. */
export function isIndependentSource(bank: Bank, source: Bank["sources"][number]): boolean {
  let host = "";
  try {
    host = new URL(source.url).hostname.toLowerCase();
  } catch {}
  if (WIRE_HOST.test(host) || WIRE_PUB.test(source.publisher)) return false;
  const pub = source.publisher.toLowerCase();
  return !ownWords(bank).some((w) => pub.includes(w) || host.includes(w));
}

export const INDEX_MAX = 100;

const NO_PROGRAMME =
  /\b(no|not) (disclosed|public|named|announced)?\s?(an? )?AI (programme|program|strategy)\b|has not (disclosed|announced) an AI (programme|program)|no AI programme|no AI program\b/i;

function yearBefore(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCFullYear(d.getUTCFullYear() - 1);
  return d.toISOString().slice(0, 10);
}

export const INDEX_SINCE = yearBefore(BANKS_UPDATED);

/** True when the bank's own page says no AI programme has been disclosed. */
export function programmeDisclosed(bank: Bank): boolean {
  const text = `${bank.posture} ${bank.answerFirst} ${bank.faq.map((f) => f.a).join(" ")}`;
  return !NO_PROGRAMME.test(text);
}

export function buildIndex(): IndexRow[] {
  const rows = BANKS.map((bank) => {
    const useCases = bank.useCases.length;
    const inProduction = bank.useCases.filter((u) => u.status === "In production").length;
    const leaders = bank.leadership.length;
    const numbers = bank.numbers.length;
    const moves12m = bank.timeline.filter((t) => t.date >= INDEX_SINCE).length;
    const sources = bank.sources.length;
    const independent = bank.sources.filter((src) => isIndependentSource(bank, src)).length;
    const platform = Boolean(bank.platform);
    const disclosed = programmeDisclosed(bank);
    const raw =
      Math.min(independent * INDEX_WEIGHTS.independent.each, INDEX_WEIGHTS.independent.cap) +
      Math.min((sources - independent) * INDEX_WEIGHTS.own.each, INDEX_WEIGHTS.own.cap) +
      Math.min(moves12m * INDEX_WEIGHTS.moves12m.each, INDEX_WEIGHTS.moves12m.cap) +
      Math.min(useCases * INDEX_WEIGHTS.useCases.each, INDEX_WEIGHTS.useCases.cap) +
      (platform ? INDEX_WEIGHTS.platform : 0) +
      Math.min(leaders * INDEX_WEIGHTS.leaders.each, INDEX_WEIGHTS.leaders.cap) +
      Math.min(numbers * INDEX_WEIGHTS.numbers.each, INDEX_WEIGHTS.numbers.cap);
    const score = Math.round((disclosed ? raw : Math.min(raw, INDEX_WEIGHTS.undisclosedCap)) * 10) / 10;
    return { bank, rank: 0, score, disclosed, platform, useCases, inProduction, leaders, numbers, moves12m, sources, independent };
  });
  // Score descending; ties by assets (BANKS is already ordered by size).
  rows.sort((a, b) => b.score - a.score || b.bank.assetsUsdMillions - a.bank.assetsUsdMillions);
  rows.forEach((r, i) => (r.rank = i + 1));
  return rows;
}
