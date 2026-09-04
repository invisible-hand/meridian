import { z } from "zod";
import { listNewsItemsSince, listRecentDigests, upsertDailyDigest } from "@/lib/db";
import { DailyDigest, DigestStory } from "@/lib/types";
import { isPaywalled } from "@/lib/paywall";
import { keenableFetchText } from "@/lib/keenable";
import { sourceTier, TIER_LABEL, hostOf } from "@/lib/source-tiers";

// Digest generation, in stages:
//   0. pool     — everything ingested in the last 48 h, minus paywalls, exclusions,
//                 URLs already published, and items with no AI signal
//   1. score    — the model rates every candidate (banking relevance, AI relevance,
//                 concreteness, geography) in batches, reading title + snippet
//   2. read     — full article text is fetched for the top candidates
//   3. select   — one call picks up to 3 banking + 3 AI stories over full text,
//                 treating one event covered by several outlets as one story
//   4. write    — one call per story, facts only, from the article text
//   5. verify   — one call per story checks every claim against the text
// A day with fewer than six good stories ships fewer stories. Nothing is padded.

// ── Schemas ───────────────────────────────────────────────────────────────────
const storySchema = z.object({
  title: z.string().min(1),
  executiveSummary: z.string().min(1),
  businessImpact: z.string().default(""),
  sourceUrl: z.string().url()
});

const scoreSchema = z.object({
  scores: z.array(z.object({
    idx: z.number().int(),
    banking: z.number().min(0).max(10),
    ai: z.number().min(0).max(10),
    concrete: z.number().min(0).max(10),
    geography: z.enum(["US", "EU", "other"]).default("other"),
    topic: z.string().default("")
  })).default([])
});

const selectSchema = z.object({
  banking: z.array(z.object({ idx: z.number().int(), reason: z.string().default("") })).default([]),
  ai: z.array(z.object({ idx: z.number().int(), reason: z.string().default("") })).default([])
});

const verifySchema = z.object({
  supported: z.boolean().default(true),
  title: z.string().optional(),
  executiveSummary: z.string().optional(),
  businessImpact: z.string().optional(),
  problems: z.array(z.string()).default([])
});

// ── Keyword pre-filter (cheap gate before any model call) ────────────────────
const AI_KEYWORDS = [
  "artificial intelligence", " ai ", " ai-", "ai.", "ai,", "genai", "gen ai", "llm", "large language model",
  "foundation model", "openai", "anthropic", "gemini", "chatgpt", "claude", "copilot", "machine learning",
  "agentic", "ai agent", "generative"
];
const EXCLUDE_KEYWORDS = ["film", "streaming", "gaming", "box office", "celebrity", "entertainment", "watch now", "trailer"];
const EXCLUDE_URL_PATTERNS = ["/video/", "/videos/", "youtube.com", "youtu.be", "tiktok.com", "/podcast/", "/webinar", "/events/"];

// ── Style rules shared by the writing and verification prompts ───────────────
const STYLE_RULES = `Style rules (apply to every field):
- Plain, direct sentences. Subject, verb, object. Present or past tense as the facts require.
- State what happened, who did it, when, and the numbers. Names of institutions, products, regulators, dollar amounts, dates and percentages from the source text belong in the summary.
- No mannered prose. Do not use: "signals", "underscores", "highlights", "marks a", "in a move that", "landmark", "significant", "major shift", "game-changer", "poised to", "it remains to be seen", "amid", "as ... continues to", "reshaping", "transforming", "landscape", "ecosystem", "journey", "leverage", "unlock", "robust", "seamless", "cutting-edge", "next-generation", "revolutionary", "at the forefront", "notably", "importantly", "crucially". No rhetorical questions. No metaphors. No adjectives that only express importance.
- Do not editorialise. Do not speculate about what may happen. Do not write "this shows" or "this means" unless the sentence then states a fact.
- Only state facts that appear in the source text. If the text does not give a number, do not invent one. Rounding is fine: write $12.93 billion, not $12,930,300,000; keep the unit the source uses.
- title: one line stating what happened, with the actor named. No colon-led headline patterns, no puns.
- executiveSummary: 4 to 5 sentences, 90 to 130 words, of facts from the source text. Sentence one states the event: who did what, when. The following sentences carry the substance the text gives: how it works or what it covers, the scale (markets, customers, volumes, dollar amounts, percentages), who is affected and how, the timeline or effective dates, and what the actor says comes next. Every sentence must add a new fact; do not restate the event or pad. Stay on the event: background figures, third-party surveys and industry statistics quoted in the text get at most one sentence. Prefer the specific detail (the product, the model, the rule section, the counterparty) over the general description. Readers who want more will open the article.
- businessImpact: one instruction in the form "Team: instruction." — the team or function at a US bank first (e.g. "Fraud operations:", "Model risk:", "Treasury technology:", "Legal and compliance:"), then one concrete thing to do or check, at most 25 words. Do not write "Direct X to", "Require X to", "Ask X to"; address the team directly. No "consider", "monitor", "explore", "keep an eye on".`;

const SELECT_PROMPT_TEXT = `You are the editor of a daily brief for executives at US banks. Two sections: "banking" (AI at banks, lenders, payments companies, fintechs serving banks, and financial regulators) and "ai" (general AI developments an executive must know: model releases, capabilities, pricing, enterprise deployments, major lab and chip moves, policy).

Pick up to 3 stories for each section from the candidates. Rules:
- One event is one story. If several candidates cover the same event, choose the best one: the original announcement, regulator page or filing beats coverage; a named publisher beats a wire copy; the most complete text beats a stub.
- Prefer US institutions and US regulators. UK/EU regulators and major European banks are acceptable when they beat the US alternatives on substance. Skip the rest of the world unless it directly affects US institutions or the vendors they buy from.
- Prefer concrete events with names and numbers over opinion, market research, listicles, event recaps and vendor marketing without an event.
- Skip anything that repeats a title in recentTitles (already published this week).
- Spread coverage: do not pick two stories about the same company in one section unless both are clearly the day's top events.
- Fewer than 3 is fine when the candidates are weak. Do not pick a weak story to fill a slot.
Return strict JSON: {"banking":[{"idx":1,"reason":"one sentence"}],"ai":[{"idx":2,"reason":"one sentence"}]}`;

const WRITE_PROMPT_TEXT = `Write one story for a daily brief read by executives at US banks, from the article text provided. Use only facts in the text.
${STYLE_RULES}
Return strict JSON: {"title":"...","executiveSummary":"...","businessImpact":"...","sourceUrl":"<the url provided, unchanged>"}`;

/** Shown on the admin page: the editorial and writing instructions in force. */
export const LLM_PROMPT = `SELECTION\n${SELECT_PROMPT_TEXT}\n\nWRITING\n${WRITE_PROMPT_TEXT}`;

// ── Types ─────────────────────────────────────────────────────────────────────
type ItemRow = {
  id?: number;
  title: string;
  summary: string | null;
  url: string;
  source_name: string | null;
  published_at?: string | Date | null;
  ingested_at?: string | Date | null;
};

type Candidate = ItemRow & {
  idx: number;
  tier: 1 | 2 | 3 | 4;
  banking: number;
  ai: number;
  concrete: number;
  geography: "US" | "EU" | "other";
  topic: string;
  bankingScore: number;
  aiScore: number;
  text?: string;
};

// ── Entry point ───────────────────────────────────────────────────────────────
export async function generateFintechDigest(): Promise<DailyDigest> {
  const date = new Date().toISOString().slice(0, 10);
  const category = "fintech_banking" as const;
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const llmErrors: string[] = [];
  if (!apiKey) llmErrors.push("OPENAI_API_KEY not set");

  // Preserve a one-off developer note on today's draft across regeneration.
  const recentDigests = await listRecentDigests(7);
  const existingToday = recentDigests.find((d) => d.digest_date === date);
  const developerNote = (existingToday?.content_json as DailyDigest | null)?.developerNote;

  // URLs and titles published in the last 7 days — never repeat a story.
  const usedUrls = new Set<string>();
  const recentTitles: string[] = [];
  for (const d of recentDigests) {
    if (d.digest_date === date) continue;
    const c = d.content_json as DailyDigest | null;
    if (!c) continue;
    for (const s of [...(c.bankingStories ?? c.stories ?? []), ...(c.aiStories ?? [])]) {
      if (s.sourceUrl) usedUrls.add(normalizeUrl(s.sourceUrl));
      recentTitles.push(s.title);
    }
  }

  // Stage 0 — the pool.
  const items = await listNewsItemsSince(48);
  const now = Date.now();
  const pool: ItemRow[] = items.filter((i) => {
    if (isPaywalled(i.url) || isExcludedUrl(i.url)) return false;
    if (usedUrls.has(normalizeUrl(i.url))) return false;
    const publishedMs = i.published_at ? new Date(i.published_at).getTime() : NaN;
    if (Number.isFinite(publishedMs) && now - publishedMs > 48 * 3600_000) return false;
    const hay = ` ${i.title} ${(i.summary ?? "").slice(0, 3000)} `.toLowerCase();
    if (!AI_KEYWORDS.some((k) => hay.includes(k))) return false;
    if (EXCLUDE_KEYWORDS.some((k) => hay.includes(k))) return false;
    return true;
  });

  const meta: Record<string, unknown> = {
    totalItems: items.length,
    poolAfterFilters: pool.length,
    model
  };

  let bankingStories: DigestStory[] = [];
  let aiStories: DigestStory[] = [];
  let selectionReasons: { banking: string[]; ai: string[] } = { banking: [], ai: [] };

  if (apiKey && pool.length > 0) {
    // Stage 1 — score everything.
    const scored = await scoreCandidates(pool, apiKey, model, llmErrors);
    meta.scored = scored.length;

    const bankingTop = [...scored]
      .filter((c) => c.banking >= 5 && c.geography !== "other")
      .sort((a, b) => b.bankingScore - a.bankingScore)
      .slice(0, 22);
    const aiTop = [...scored]
      .filter((c) => c.ai >= 6)
      .sort((a, b) => b.aiScore - a.aiScore)
      .slice(0, 22);
    meta.bankingShortlist = bankingTop.length;
    meta.aiShortlist = aiTop.length;

    // Stage 2 — read the articles.
    const toRead = dedupeByUrl([...bankingTop, ...aiTop]);
    await mapWithConcurrency(toRead, 8, async (c) => {
      c.text = await fetchArticleText(c.url, c.summary);
    });
    meta.articlesRead = toRead.filter((c) => c.text && c.text.length > 800).length;

    // Stage 3 — select.
    const selection = await selectStories(bankingTop, aiTop, recentTitles, apiKey, model, llmErrors);
    selectionReasons = { banking: selection.banking.map((s) => s.reason), ai: selection.ai.map((s) => s.reason) };

    // Stage 4 + 5 — write and verify, in parallel per story.
    const writeAll = async (picks: Candidate[]) =>
      (await Promise.all(picks.map((c) => writeAndVerify(c, apiKey, model, llmErrors)))).filter(
        (s): s is DigestStory => s !== null
      );
    [bankingStories, aiStories] = await Promise.all([
      writeAll(selection.banking.map((s) => s.candidate)),
      writeAll(selection.ai.map((s) => s.candidate))
    ]);
    bankingStories = dedupeStories(bankingStories).slice(0, 3);
    aiStories = dedupeStories(aiStories).filter((s) => !bankingStories.some((b) => normalizeUrl(b.sourceUrl) === normalizeUrl(s.sourceUrl))).slice(0, 3);
  }

  const briefSummary = apiKey && (bankingStories.length + aiStories.length) > 0
    ? (await generateBriefSummaryLlm(bankingStories, aiStories, apiKey, model, llmErrors)) || buildBriefSummary(bankingStories, aiStories)
    : buildBriefSummary(bankingStories, aiStories);

  const digest: DailyDigest = {
    date, category, bankingStories, aiStories, briefSummary,
    ...(developerNote ? { developerNote } : {})
  };

  await upsertDailyDigest({
    digestDate: date,
    category,
    contentJson: digest,
    generationMeta: {
      ...meta,
      bankingPublished: bankingStories.length,
      aiPublished: aiStories.length,
      sources: [...bankingStories, ...aiStories].map((s) => `${hostOf(s.sourceUrl)} (${TIER_LABEL[sourceTier(s.sourceUrl)]})`),
      selectionReasons,
      llmErrors
    }
  });

  return digest;
}

// ── Stage 1: scoring ──────────────────────────────────────────────────────────
const SCORE_PROMPT = `You rate news candidates for a daily brief read by executives at US banks. For each item return scores 0-10:
- banking: how directly this is about AI at a bank, credit union, lender, payments company, fintech serving banks, or a financial regulator. 10 = a named institution or regulator did something specific with AI. 0 = no banking connection.
- ai: how important this is as general AI news for a business executive: model releases, capability changes, pricing, enterprise deployments at scale, major lab or chip moves, AI policy. Developer tooling, consumer apps, entertainment, gossip score low.
- concrete: 10 = a specific event with names, numbers and dates; 0 = opinion, listicle, vendor marketing with no event, market-research report, conference recap, sponsored content.
- geography: "US" if the actors are US institutions, US regulators, or global vendors that sell to US banks; "EU" for UK/EU institutions and regulators; "other" for the rest of the world.
- topic: 3-6 words naming the event, the same wording for items about the same event.
Press releases about a named bank or vendor product are legitimate; syndicated copies of the same release should get the same topic. Return strict JSON: {"scores":[{"idx":1,"banking":0,"ai":0,"concrete":0,"geography":"US","topic":"..."}]}`;

async function scoreCandidates(pool: ItemRow[], apiKey: string, model: string, llmErrors: string[]): Promise<Candidate[]> {
  const batches: ItemRow[][] = [];
  for (let i = 0; i < pool.length; i += 40) batches.push(pool.slice(i, i + 40));
  const out: Candidate[] = [];
  const jobs = batches.map((batch, b) => async () => {
    const base = b * 40;
    const compact = batch.map((item, i) => ({
      idx: base + i + 1,
      source: item.source_name ?? "unknown",
      host: hostOf(item.url),
      tier: TIER_LABEL[sourceTier(item.url)],
      published: item.published_at ? String(item.published_at).slice(0, 10) : null,
      title: item.title,
      snippet: (item.summary ?? "").slice(0, 700)
    }));
    const response = await callLlm(apiKey, model, SCORE_PROMPT, JSON.stringify({ items: compact }), llmErrors, "score");
    const parsed = scoreSchema.safeParse(response);
    if (!parsed.success) {
      llmErrors.push(`score: batch ${b} rejected`);
      return;
    }
    for (const s of parsed.data.scores) {
      const item = batch[s.idx - base - 1];
      if (!item) continue;
      const tier = sourceTier(item.url);
      const tierBonus = { 1: 3, 2: 2, 3: 1, 4: -1 }[tier];
      out.push({
        ...item,
        idx: s.idx,
        tier,
        banking: s.banking,
        ai: s.ai,
        concrete: s.concrete,
        geography: s.geography,
        topic: s.topic,
        bankingScore: s.banking * 2 + s.concrete + tierBonus + (s.geography === "US" ? 2 : 0),
        aiScore: s.ai * 2 + s.concrete + tierBonus
      });
    }
  });
  await mapWithConcurrency(jobs, 6, (job) => job());
  return out;
}

// ── Stage 2: read ─────────────────────────────────────────────────────────────
async function fetchArticleText(url: string, fallback: string | null): Promise<string> {
  const direct = await fetchDirect(url);
  if (direct && direct.length > 800) return direct.slice(0, 7000);
  const viaKeenable = await keenableFetchText(url);
  if (viaKeenable && viaKeenable.length > 800) return viaKeenable.slice(0, 7000);
  return (direct && direct.length > (fallback?.length ?? 0) ? direct : fallback ?? "").slice(0, 7000);
}

async function fetchDirect(url: string): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 9000);
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; BankingNewsAI/2.0; +https://www.bankingnewsai.com)",
        Accept: "text/html,application/xhtml+xml"
      },
      redirect: "follow",
      signal: ctrl.signal
    });
    clearTimeout(t);
    if (!res.ok) return null;
    const type = res.headers.get("content-type") ?? "";
    if (!type.includes("html") && !type.includes("xml")) return null;
    const html = await res.text();
    return extractReadableText(html);
  } catch {
    return null;
  }
}

function extractReadableText(html: string): string {
  const main =
    html.match(/<article[\s\S]*?<\/article>/i)?.[0] ||
    html.match(/<main[\s\S]*?<\/main>/i)?.[0] ||
    html.match(/<body[\s\S]*?<\/body>/i)?.[0] ||
    html;
  return main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;|&rsquo;|&lsquo;/gi, "'")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ── Stage 3: select ───────────────────────────────────────────────────────────
const SELECT_PROMPT = SELECT_PROMPT_TEXT;

async function selectStories(
  bankingTop: Candidate[],
  aiTop: Candidate[],
  recentTitles: string[],
  apiKey: string,
  model: string,
  llmErrors: string[]
): Promise<{ banking: { candidate: Candidate; reason: string }[]; ai: { candidate: Candidate; reason: string }[] }> {
  const byIdx = new Map<number, Candidate>();
  const pack = (list: Candidate[]) =>
    list.map((c) => {
      byIdx.set(c.idx, c);
      return {
        idx: c.idx,
        host: hostOf(c.url),
        tier: TIER_LABEL[c.tier],
        published: c.published_at ? String(c.published_at).slice(0, 10) : null,
        geography: c.geography,
        topic: c.topic,
        title: c.title,
        text: (c.text ?? c.summary ?? "").slice(0, 2200)
      };
    });
  const response = await callLlm(
    apiKey, model, SELECT_PROMPT,
    JSON.stringify({ recentTitles: recentTitles.slice(0, 60), banking: pack(bankingTop), ai: pack(aiTop) }),
    llmErrors, "select"
  );
  const parsed = selectSchema.safeParse(response);
  if (!parsed.success) {
    llmErrors.push("select: schema rejected response; falling back to top scores");
    return {
      banking: bankingTop.slice(0, 3).map((candidate) => ({ candidate, reason: "fallback: top score" })),
      ai: aiTop.slice(0, 3).map((candidate) => ({ candidate, reason: "fallback: top score" }))
    };
  }
  const resolve = (picks: { idx: number; reason: string }[]) =>
    picks.map((p) => ({ candidate: byIdx.get(p.idx), reason: p.reason }))
      .filter((p): p is { candidate: Candidate; reason: string } => Boolean(p.candidate))
      .slice(0, 3);
  return { banking: resolve(parsed.data.banking), ai: resolve(parsed.data.ai) };
}

// ── Stage 4 + 5: write, then verify ───────────────────────────────────────────
const WRITE_PROMPT = WRITE_PROMPT_TEXT;

const VERIFY_PROMPT = `You check a drafted story against its source text. For every sentence in the draft, confirm the source text supports it. Remove or correct any sentence with a name, number, date or claim the text does not contain. Remove any phrase that breaks the style rules below. Keep the rest unchanged: do not shorten, compress or reword sentences the text supports, and do not add sentences.
${STYLE_RULES}
Return strict JSON: {"supported":true|false,"title":"...","executiveSummary":"...","businessImpact":"...","problems":["..."]} where the three text fields are the corrected versions (identical to the draft when nothing needed changing).`;

async function writeAndVerify(c: Candidate, apiKey: string, model: string, llmErrors: string[]): Promise<DigestStory | null> {
  const text = (c.text ?? c.summary ?? "").slice(0, 7000);
  if (text.length < 200) {
    llmErrors.push(`write: no usable text for ${c.url}`);
    return null;
  }
  const drafted = await callLlm(
    apiKey, model, WRITE_PROMPT,
    JSON.stringify({ url: c.url, source: hostOf(c.url), published: c.published_at, title: c.title, text }),
    llmErrors, "write"
  );
  const draft = storySchema.safeParse(drafted);
  if (!draft.success) {
    llmErrors.push(`write: schema rejected for ${c.url}`);
    return null;
  }
  const story: DigestStory = { ...draft.data, sourceUrl: cleanSourceUrl(c.url) };

  const checked = await callLlm(
    apiKey, model, VERIFY_PROMPT,
    JSON.stringify({ draft: story, text }),
    llmErrors, "verify"
  );
  const verified = verifySchema.safeParse(checked);
  if (!verified.success) return story;
  const v = verified.data;
  if (v.executiveSummary && v.executiveSummary.length > 60) {
    story.title = v.title || story.title;
    story.executiveSummary = v.executiveSummary;
    story.businessImpact = v.businessImpact ?? story.businessImpact;
  }
  if (v.problems.length > 0) llmErrors.push(`verify(${hostOf(c.url)}): ${v.problems.slice(0, 3).join(" | ").slice(0, 300)}`);
  return story;
}

// ── Brief summary (subject line) ──────────────────────────────────────────────
export async function generateBriefSummaryLlm(
  banking: DigestStory[], ai: DigestStory[], apiKey: string, model: string, llmErrors: string[] = []
): Promise<string | null> {
  const prompt = `Write the email subject line for today's brief: one plain sentence, at most 110 characters, stating the single most important story by actor and action. No colon patterns, no hype words, no questions. Return strict JSON: {"subject":"..."}`;
  const response = await callLlm(apiKey, model, prompt, JSON.stringify({ banking: banking.map((s) => s.title), ai: ai.map((s) => s.title) }), llmErrors, "subject");
  const subject = (response as { subject?: string } | null)?.subject?.trim();
  return subject && subject.length > 10 ? subject.slice(0, 140) : null;
}

export function buildBriefSummary(banking: DigestStory[], ai: DigestStory[]): string {
  const first = banking[0]?.title ?? ai[0]?.title;
  return first ? first.slice(0, 140) : "Banking AI Brief";
}

// ── LLM helper ────────────────────────────────────────────────────────────────
async function callLlm(
  apiKey: string, model: string, systemPrompt: string, userContent: string, llmErrors: string[], pass: string
): Promise<unknown | null> {
  const isReasoningOrGpt5 = /^(o\d|gpt-5)/i.test(model);
  const body: Record<string, unknown> = {
    model,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userContent }
    ]
  };
  if (!isReasoningOrGpt5) body.temperature = 0.2;
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const err = await res.text().catch(() => res.statusText);
      llmErrors.push(`${pass}: OpenAI API error ${res.status}: ${err.slice(0, 200)}`);
      return null;
    }
    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = json.choices?.[0]?.message?.content;
    if (!content) {
      llmErrors.push(`${pass}: empty completion`);
      return null;
    }
    return JSON.parse(content);
  } catch (e) {
    llmErrors.push(`${pass}: ${e instanceof Error ? e.message.slice(0, 200) : "unexpected error"}`);
    return null;
  }
}

// ── Utilities ─────────────────────────────────────────────────────────────────
function isExcludedUrl(url: string): boolean {
  const lower = url.toLowerCase();
  return EXCLUDE_URL_PATTERNS.some((p) => lower.includes(p));
}

/** The URL we publish: tracking parameters stripped, otherwise as the source gave it. */
function cleanSourceUrl(url: string): string {
  try {
    const u = new URL(url);
    for (const k of [...u.searchParams.keys()]) if (/^(utm_|ref$|fbclid|gclid|mc_)/i.test(k)) u.searchParams.delete(k);
    u.hash = "";
    return u.toString();
  } catch {
    return url;
  }
}

function normalizeUrl(url: string): string {
  try {
    const u = new URL(url);
    u.hash = "";
    for (const k of [...u.searchParams.keys()]) if (/^(utm_|ref$|fbclid|gclid)/i.test(k)) u.searchParams.delete(k);
    return u.toString().replace(/\/$/, "").toLowerCase();
  } catch {
    return url.trim().toLowerCase();
  }
}

function dedupeByUrl(list: Candidate[]): Candidate[] {
  const seen = new Set<string>();
  return list.filter((c) => {
    const k = normalizeUrl(c.url);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function dedupeStories(stories: DigestStory[]): DigestStory[] {
  const seen = new Set<string>();
  return stories.filter((s) => {
    const k = normalizeUrl(s.sourceUrl);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
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
