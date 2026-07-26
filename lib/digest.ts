import { z } from "zod";
import { listNewsItemsSince, listRecentDigests, upsertDailyDigest } from "@/lib/db";
import { DailyDigest, DigestStory } from "@/lib/types";
import { isPaywalled } from "@/lib/paywall";

// ── Zod schema (shared for both LLM calls) ───────────────────────────────────
const storySchema = z.object({
  title: z.string(),
  executiveSummary: z.string(),
  businessImpact: z.string(),
  sourceUrl: z.string().url()
});

const twoSectionSchema = z.object({
  bankingStories: z.array(storySchema).max(3),
  aiStories: z.array(storySchema).max(3)
});

const topicRepeatSchema = z.object({
  bankingRepeatIndices: z.array(z.number().int()).default([]),
  aiRepeatIndices: z.array(z.number().int()).default([])
});

// ── Keyword lists ─────────────────────────────────────────────────────────────
const AI_KEYWORDS = [
  "artificial intelligence", " ai ", "genai", "llm", "foundation model",
  "openai", "anthropic", "gemini", "chatgpt", "copilot", "machine learning"
];

const BANKING_KEYWORDS = [
  "bank", "banking", "fintech", "payments", "payment", "credit", "lending",
  "lender", "loan", "mortgage", "fraud", "risk", "compliance", "regulation",
  "regulator", "aml", "kyc", "treasury", "insurance", "insurer",
  "capital markets", "wealth management", "financial services",
  "financial institution", "neobank", "digital wallet", "swift",
  "trade finance", "underwriting", "asset management", "hedge fund",
  "private equity", "investment bank", "retail banking", "commercial bank",
  "central bank", "fdic", "occ", "cfpb", "fed reserve", "federal reserve",
  "sec ", "cftc", "fca ", "money laundering", "sanctions", "deposit",
  "debit", "interchange", "stablecoin", "crypto exchange", "defi", "cbdc"
];

const EXCLUDE_KEYWORDS = [
  "film", "streaming", "gaming", "box office", "celebrity",
  "entertainment", "watch now", "trailer"
];

const EXCLUDE_URL_PATTERNS = ["/video/", "/videos/", "youtube.com", "youtu.be", "tiktok.com", "/podcast/"];

// ── Prompt for the smol.ai newsletter extraction pass ────────────────────────
const SMOL_EXTRACT_PROMPT = `You're reading this morning's AI newsletter so a banking executive doesn't have to. They're walking into their 8am board call in 20 minutes. What do they actually need to know?

This executive runs a US bank. Their world is US institutions and US regulators.

From the newsletter provided, pull out:
- Up to 3 bankingStories: AI moves that directly touch their world — a real bank, a named regulator, a specific financial product. Not "could affect banks someday." Happening now.
- Up to 3 aiStories: The AI developments big enough that they'd kick themselves for missing. Model releases, capability leaps, enterprise deployments already reshaping their vendor landscape.

GEOGRAPHY — this matters as much as the topic:
- Default to the US. A US bank, a US fintech, or a US regulator (Fed, OCC, FDIC, SEC, CFPB, CFTC, FinCEN, Treasury, state regulators) is what they care about.
- If a slot would otherwise go empty, European news (ECB, Bank of England, FCA, EU AI Act, a major European bank) is an acceptable second choice.
- Otherwise skip it. A regulator in Asia, Africa, or Latin America telling local firms what to do is NOT their world — leave the slot empty rather than filling it with one. An empty slot is better than an irrelevant story.
- The exception: any country's news that directly moves US institutions or the global AI vendors US banks buy from.

Skip anything from paywalled sources (FT, WSJ, Bloomberg, The Information, American Banker, Economist, Barrons). Skip developer gossip, consumer apps, entertainment AI.

For each story, write like you're briefing a sharp colleague who has no patience for filler:
- title: The actual point, not a repackaged headline. What happened and why it matters in one line.
- executiveSummary: 2-3 sentences. What happened, who did it, what it means. No hedging, no "it remains to be seen." Stick to what is known.
- businessImpact: One concrete thing they should do or watch. Start with a verb. Not "banks should consider exploring..." — try "Pressure your core banking vendor on this at your next QBR" or "This is the model your fraud team should be evaluating right now."
- sourceUrl: Use the newsletter URL exactly as provided — do not invent external URLs.

Return strict JSON: {"bankingStories":[{"title":"...","executiveSummary":"...","businessImpact":"...","sourceUrl":"..."}],"aiStories":[...]}`;


// ── Main prompt for the supplementary RSS candidates pass ─────────────────────
export const LLM_PROMPT = `You're a trusted intelligence analyst who knows banking inside-out. The smol.ai newsletter stories are already handled — now scan these RSS items for anything else worth surfacing.

The executive reading this is sharp, time-constrained, and allergic to filler. They read between 7am meetings. Your job isn't to summarize the internet — it's to find the 1-3 things they'd actually wish they knew about today.

WHAT TO INCLUDE
- bankingStories (up to 3): AI news where the banking angle is explicit and concrete. Not "could apply to financial services someday." A named bank deployed it. A regulator issued guidance. A fintech raised on it. Real, specific, now.
- aiStories (up to 3): General AI developments a banking executive would feel behind on if they missed — new model capabilities, enterprise adoption at scale, meaningful moves from the major labs.

WHERE IT MATTERS
The executive reading this runs a US bank.
- Default to the US: US banks, US fintechs, US regulators (Fed, OCC, FDIC, SEC, CFPB, CFTC, FinCEN, Treasury, state regulators).
- Europe is the fallback when there is genuinely nothing US-relevant for a slot — ECB, Bank of England, FCA, EU AI Act, a major European bank.
- Beyond that, skip. A central bank in Asia, Africa, or Latin America issuing guidance to its own supervised firms is not their world, no matter how well it fits the AI angle. Return fewer stories instead — an empty slot beats an irrelevant one.
- Exception: non-US news that directly moves US institutions or the AI vendors US banks buy from.

WHAT TO SKIP
- Paywalled articles with no actual content. A headline and a wall isn't a story.
- Social, entertainment, lifestyle. Not their world.
- Vague opinion pieces with no new data or concrete developments.
- Anything already covered by the smol.ai stories.

HOW TO WRITE IT
Think of it as explaining to a very smart colleague who's been heads-down in a board meeting for a week. They don't need the background. They need: what changed, why it matters, what to do about it.

- title: The actual point in one line — not a repackaged headline.
- executiveSummary: 2-3 sentences. Direct, active voice. What changed, who moved, what's different now. Avoid: "it's worth noting," "this highlights," "in a significant development."
- businessImpact: One or two sentences starting with an action verb. Specific enough they could say it in a meeting. Avoid: "banks should monitor this space," "this could impact the industry," "leaders may want to consider."

Return strict JSON only — no commentary, no markdown wrapper.

{
  "bankingStories": [
    {
      "title": "...",
      "executiveSummary": "...",
      "businessImpact": "...",
      "sourceUrl": "https://..."
    }
  ],
  "aiStories": [
    {
      "title": "...",
      "executiveSummary": "...",
      "businessImpact": "...",
      "sourceUrl": "https://..."
    }
  ]
}`;

// ── Types ─────────────────────────────────────────────────────────────────────
type ItemRow = {
  title: string;
  summary: string | null;
  url: string;
  source_name: string | null;
  published_at?: string | Date | null;
};

// ── Entry point ───────────────────────────────────────────────────────────────
export async function generateFintechDigest(): Promise<DailyDigest> {
  const items = await listNewsItemsSince(72);
  const date = new Date().toISOString().slice(0, 10);
  const category = "fintech_banking" as const;

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  // Collect URLs already published in recent digests to avoid cross-day repeats
  const recentDigests = await listRecentDigests(3);
  const recentlyUsedUrls = new Set<string>();
  for (const d of recentDigests) {
    if (d.digest_date === date) continue; // skip today's own draft if regenerating
    const content = d.content_json as DailyDigest | null;
    if (!content) continue;
    for (const s of [...(content.bankingStories ?? content.stories ?? []), ...(content.aiStories ?? [])]) {
      if (s.sourceUrl) recentlyUsedUrls.add(normalizeUrl(s.sourceUrl));
    }
  }

  // Split smol.ai items (newsletter blobs) from regular RSS items
  const smolItems = items.filter((i) => i.source_name === "Smol AI Issues" && i.summary);
  // Remove paywalled, excluded, and already-published URLs from the RSS pool
  const rssItems = items.filter(
    (i) => i.source_name !== "Smol AI Issues"
      && !isPaywalled(i.url)
      && !isExcludedUrl(i.url)
      && !recentlyUsedUrls.has(normalizeUrl(i.url))
  );

  // Pass 1: extract stories from the smol.ai newsletter (primary source)
  const smolResult = apiKey && smolItems.length > 0
    ? await extractFromSmolNewsletter(smolItems, apiKey, model)
    : { bankingStories: [], aiStories: [] };

  // Pass 2: supplementary stories from RSS candidates (fill remaining slots)
  const neededBanking = 3 - smolResult.bankingStories.length;
  const neededAi = 3 - smolResult.aiStories.length;
  const usedUrls = new Set([
    ...smolResult.bankingStories.map((s) => s.sourceUrl),
    ...smolResult.aiStories.map((s) => s.sourceUrl)
  ]);

  let rssResult: { bankingStories: DigestStory[]; aiStories: DigestStory[] } = {
    bankingStories: [],
    aiStories: []
  };

  if (apiKey && rssItems.length > 0 && (neededBanking > 0 || neededAi > 0)) {
    const bankingCandidates = selectCandidateItems(rssItems).filter((i) => !usedUrls.has(i.url));
    const aiCandidates = selectAiItems(rssItems).filter((i) => !usedUrls.has(i.url));
    rssResult = await tryLlmTwoSection(bankingCandidates, aiCandidates, apiKey, model);
  }

  // Collect recently-published titles for topic-level dedup (catches smol newsletter repeats
  // where sourceUrl is the newsletter URL, not the underlying article URL)
  const recentTitles = recentDigests
    .filter((d) => d.digest_date !== date)
    .flatMap((d) => {
      const c = d.content_json as DailyDigest | null;
      if (!c) return [];
      return [...(c.bankingStories ?? c.stories ?? []), ...(c.aiStories ?? [])].map((s) => s.title);
    });

  // Merge: smol stories take priority, RSS fills remaining slots up to 3 each
  const mergedBanking = dedupeStories([...smolResult.bankingStories, ...rssResult.bankingStories]);
  const mergedAi = dedupeStories([...smolResult.aiStories, ...rssResult.aiStories]);

  const deduped = apiKey
    ? await filterTopicRepeatsLlm(mergedBanking, mergedAi, recentTitles, apiKey, model)
    : {
        bankingStories: mergedBanking.filter((s) => !isTopicRepeat(s.title, recentTitles)),
        aiStories: mergedAi.filter((s) => !isTopicRepeat(s.title, recentTitles))
      };

  const bankingStories = deduped.bankingStories.slice(0, 3);
  const aiStories = deduped.aiStories.slice(0, 3);

  const briefSummary = apiKey
    ? (await generateBriefSummaryLlm(bankingStories, aiStories, apiKey, model)) ||
      buildBriefSummary(bankingStories, aiStories)
    : buildBriefSummary(bankingStories, aiStories);

  // Final fallback: if LLM produced nothing at all, use keyword-scored items
  const digest: DailyDigest = bankingStories.length + aiStories.length > 0
    ? { date, category, bankingStories, aiStories, briefSummary }
    : fallbackDigest({
        date, category,
        bankingCandidates: selectCandidateItems(rssItems),
        aiCandidates: selectAiItems(rssItems)
      });

  await upsertDailyDigest({
    digestDate: date,
    category,
    contentJson: digest,
    generationMeta: {
      totalItems: items.length,
      smolItems: smolItems.length,
      rssItems: rssItems.length,
      smolBanking: smolResult.bankingStories.length,
      smolAi: smolResult.aiStories.length,
      rssBanking: rssResult.bankingStories.length,
      rssAi: rssResult.aiStories.length
    }
  });

  return digest;
}

// ── Pass 1: dedicated smol.ai newsletter extraction ───────────────────────────
async function extractFromSmolNewsletter(
  smolItems: ItemRow[],
  apiKey: string,
  model: string
): Promise<{ bankingStories: DigestStory[]; aiStories: DigestStory[] }> {
  // Use the most recent smol issue (DB already orders by published_at desc)
  const issue = smolItems[0];
  const issueUrl = issue.url;
  // Trim to model context limits while preserving the most relevant content
  const newsletterText = (issue.summary ?? "").slice(0, 18000);

  const prompt = `${SMOL_EXTRACT_PROMPT} The newsletter URL (use as sourceUrl for all stories) is: ${issueUrl}`;

  const response = await callLlm(apiKey, model, prompt, `Newsletter content:\n\n${newsletterText}`);
  if (!response) return { bankingStories: [], aiStories: [] };

  const result = twoSectionSchema.safeParse(response);
  if (!result.success) return { bankingStories: [], aiStories: [] };

  return {
    bankingStories: dedupeStories(result.data.bankingStories),
    aiStories: dedupeStories(result.data.aiStories)
  };
}

// ── Pass 2: RSS candidates via two-section LLM ────────────────────────────────
async function tryLlmTwoSection(
  bankingItems: ItemRow[],
  aiItems: ItemRow[],
  apiKey: string,
  model: string
): Promise<{ bankingStories: DigestStory[]; aiStories: DigestStory[] }> {
  if (bankingItems.length === 0 && aiItems.length === 0) {
    return { bankingStories: [], aiStories: [] };
  }

  const seen = new Set<string>();
  const combined: Array<ItemRow & { pool: string }> = [];
  for (const item of bankingItems) {
    if (!seen.has(item.url)) { seen.add(item.url); combined.push({ ...item, pool: "banking" }); }
  }
  for (const item of aiItems) {
    if (!seen.has(item.url)) { seen.add(item.url); combined.push({ ...item, pool: "ai" }); }
  }

  const compactItems = combined.slice(0, 150).map((item, i) => ({
    idx: i + 1, pool: item.pool,
    title: item.title,
    summary: (item.summary ?? "").slice(0, 350),
    source: item.source_name ?? "unknown",
    url: item.url
  }));

  const response = await callLlm(
    apiKey, model, LLM_PROMPT,
    JSON.stringify({ items: compactItems })
  );
  if (!response) return { bankingStories: [], aiStories: [] };

  const result = twoSectionSchema.safeParse(response);
  if (!result.success) return { bankingStories: [], aiStories: [] };

  return {
    bankingStories: dedupeStories(result.data.bankingStories),
    aiStories: dedupeStories(result.data.aiStories)
  };
}

// ── Cross-day repeat filter (LLM) ────────────────────────────────────────────
// Keyword/entity matching (isTopicRepeat below) misses repeats where the same
// story is referred to by different names across days (e.g. "BoE" vs "Bank of
// England"). An LLM pass catches those by reading for meaning, not tokens.
async function filterTopicRepeatsLlm(
  bankingCandidates: DigestStory[],
  aiCandidates: DigestStory[],
  recentTitles: string[],
  apiKey: string,
  model: string
): Promise<{ bankingStories: DigestStory[]; aiStories: DigestStory[] }> {
  if (recentTitles.length === 0 || (bankingCandidates.length === 0 && aiCandidates.length === 0)) {
    return { bankingStories: bankingCandidates, aiStories: aiCandidates };
  }

  const prompt = `You catch repeat stories in a daily banking/AI newsletter. Below are today's candidate story titles and the titles already published in the last few days.

A candidate is a REPEAT if it covers the same underlying news event as a recent title — even if worded differently, using an abbreviation or acronym for the same organization (e.g. "BoE" = "Bank of England", "ECB" = "European Central Bank", "FCA" = "Financial Conduct Authority"), or emphasizing a different angle on the same event. It is NOT a repeat if it's a genuinely new development, even about the same organization.

Return strict JSON only: {"bankingRepeatIndices": [...idx numbers...], "aiRepeatIndices": [...idx numbers...]}`;

  const userContent = JSON.stringify({
    recentTitles,
    bankingCandidates: bankingCandidates.map((s, idx) => ({ idx, title: s.title })),
    aiCandidates: aiCandidates.map((s, idx) => ({ idx, title: s.title }))
  });

  const response = await callLlm(apiKey, model, prompt, userContent);
  const result = topicRepeatSchema.safeParse(response);
  if (!result.success) {
    return {
      bankingStories: bankingCandidates.filter((s) => !isTopicRepeat(s.title, recentTitles)),
      aiStories: aiCandidates.filter((s) => !isTopicRepeat(s.title, recentTitles))
    };
  }

  const bankingRepeat = new Set(result.data.bankingRepeatIndices);
  const aiRepeat = new Set(result.data.aiRepeatIndices);
  return {
    bankingStories: bankingCandidates.filter((_, idx) => !bankingRepeat.has(idx)),
    aiStories: aiCandidates.filter((_, idx) => !aiRepeat.has(idx))
  };
}

// ── Shared LLM helper ─────────────────────────────────────────────────────────
async function callLlm(
  apiKey: string,
  model: string,
  systemPrompt: string,
  userContent: string
): Promise<unknown | null> {
  // Reasoning models (o-series, gpt-5.x) don't support the temperature parameter
  const isReasoningOrGpt5 = /^(o\d|gpt-5)/i.test(model);

  const body: Record<string, unknown> = {
    model,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userContent }
    ]
  };

  if (!isReasoningOrGpt5) {
    body.temperature = 0.2;
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.text().catch(() => res.statusText);
      console.error(`[callLlm] OpenAI API error ${res.status}: ${err}`);
      return null;
    }

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = json.choices?.[0]?.message?.content;
    if (!content) return null;
    return JSON.parse(content);
  } catch (e) {
    console.error("[callLlm] Unexpected error:", e);
    return null;
  }
}

// ── Keyword-based fallback (no LLM) ──────────────────────────────────────────
function fallbackDigest(params: {
  date: string;
  category: "fintech_banking";
  bankingCandidates: ItemRow[];
  aiCandidates: ItemRow[];
}): DailyDigest {
  return {
    date: params.date,
    category: params.category,
    bankingStories: pickFallbackStories(params.bankingCandidates, 3),
    aiStories: pickFallbackStories(
      params.aiCandidates.filter(
        (a) => !params.bankingCandidates.some((b) => b.url === a.url)
      ),
      3
    )
  };
}

function pickFallbackStories(items: ItemRow[], max: number): DigestStory[] {
  const stories: DigestStory[] = [];
  const used = new Set<string>();
  for (const item of items) {
    const key = normalizeUrl(item.url) || item.title.toLowerCase().trim();
    if (!key || used.has(key)) continue;
    used.add(key);
    stories.push({
      title: item.title,
      executiveSummary: item.summary?.slice(0, 300) || "No summary available.",
      businessImpact: "Review for strategic relevance and potential operational impact.",
      sourceUrl: item.url
    });
    if (stories.length === max) break;
  }
  return stories;
}

// ── Candidate selectors ───────────────────────────────────────────────────────
function selectCandidateItems(items: ItemRow[]) {
  const now = Date.now();
  const windowMs = 72 * 60 * 60 * 1000;
  return items
    .map((item) => {
      const hay = `${item.title} ${item.summary ?? ""} ${item.source_name ?? ""}`.toLowerCase();
      const aiHits = kwHits(hay, AI_KEYWORDS);
      const bankingHits = kwHits(hay, BANKING_KEYWORDS);
      const excluded = kwHits(hay, EXCLUDE_KEYWORDS) > 0;
      const lowerUrl = item.url.toLowerCase();
      const excludedUrl = EXCLUDE_URL_PATTERNS.some((p) => lowerUrl.includes(p));
      const publishedMs = item.published_at ? new Date(item.published_at).getTime() : NaN;
      const isRecent = Number.isFinite(publishedMs) && now - publishedMs >= 0 && now - publishedMs <= windowMs;
      return { ...item, score: aiHits * 3 + bankingHits * 4 - (excluded ? 10 : 0) - (excludedUrl ? 100 : 0), isRecent, excludedUrl };
    })
    .filter((i) => {
      const hay = `${i.title} ${i.summary ?? ""} ${i.source_name ?? ""}`.toLowerCase();
      return kwHits(hay, AI_KEYWORDS) > 0 && kwHits(hay, BANKING_KEYWORDS) > 0
        && !i.excludedUrl && i.score > 0 && i.isRecent;
    })
    .sort((a, b) => b.score - a.score);
}

function selectAiItems(items: ItemRow[]) {
  const now = Date.now();
  const windowMs = 72 * 60 * 60 * 1000;
  return items
    .map((item) => {
      const hay = `${item.title} ${item.summary ?? ""} ${item.source_name ?? ""}`.toLowerCase();
      const aiHits = kwHits(hay, AI_KEYWORDS);
      const excluded = kwHits(hay, EXCLUDE_KEYWORDS) > 0;
      const lowerUrl = item.url.toLowerCase();
      const excludedUrl = EXCLUDE_URL_PATTERNS.some((p) => lowerUrl.includes(p));
      const publishedMs = item.published_at ? new Date(item.published_at).getTime() : NaN;
      const isRecent = Number.isFinite(publishedMs) && now - publishedMs >= 0 && now - publishedMs <= windowMs;
      return { ...item, aiHits, excluded, excludedUrl, isRecent };
    })
    .filter((i) => i.aiHits > 0 && !i.excluded && !i.excludedUrl && i.isRecent)
    .sort((a, b) => b.aiHits - a.aiHits);
}

function isExcludedUrl(url: string): boolean {
  const lower = url.toLowerCase();
  return EXCLUDE_URL_PATTERNS.some((p) => lower.includes(p));
}

// ── Utilities ─────────────────────────────────────────────────────────────────

/**
 * Extract key entities from a title: dollar/billion amounts and capitalized proper nouns.
 * Used to detect same-story repeats across consecutive digests.
 */
function extractKeyEntities(title: string): Set<string> {
  const entities = new Set<string>();
  // "$110B", "$4.2T", "$500M", etc.
  for (const m of title.matchAll(/\$[\d,.]+[BMKTbmkt]?/gi)) {
    entities.add(m[0].replace(/,/g, "").toLowerCase());
  }
  // Capitalised proper nouns 3+ chars (skip common sentence-starters)
  const skip = new Set(["The", "A", "An", "In", "On", "At", "For", "Of", "With", "And", "But", "Or", "As", "Is", "Are", "Its"]);
  for (const m of title.matchAll(/\b([A-Z][a-zA-Z]{2,})\b/g)) {
    if (!skip.has(m[1])) entities.add(m[1].toLowerCase());
  }
  return entities;
}

/**
 * Returns true if `title` shares ≥2 key entities with any title in `recentTitles`,
 * indicating the same story was already covered in a recent digest.
 */
function isTopicRepeat(title: string, recentTitles: string[]): boolean {
  const these = extractKeyEntities(title);
  if (these.size < 2) return false;
  for (const recent of recentTitles) {
    const those = extractKeyEntities(recent);
    let overlap = 0;
    for (const e of these) {
      if (those.has(e)) overlap++;
    }
    if (overlap >= 2) return true;
  }
  return false;
}

function kwHits(haystack: string, keywords: string[]): number {
  return keywords.reduce((n, kw) => n + (haystack.includes(kw) ? 1 : 0), 0);
}

function dedupeStories(stories: DigestStory[]): DigestStory[] {
  const used = new Set<string>();
  return stories.filter((s) => {
    const key = normalizeUrl(s.sourceUrl) || s.title.toLowerCase().trim();
    if (!key || used.has(key)) return false;
    used.add(key);
    return true;
  });
}

function normalizeUrl(input: string): string {
  try {
    const p = new URL(input);
    p.hash = "";
    if ((p.protocol === "https:" && p.port === "443") || (p.protocol === "http:" && p.port === "80")) p.port = "";
    return p.toString().replace(/\/$/, "");
  } catch {
    return input.trim().toLowerCase();
  }
}

/** LLM-written 10–15 word complete-sentence summary of the day's top stories. */
export async function generateBriefSummaryLlm(
  bankingStories: DigestStory[],
  aiStories: DigestStory[],
  apiKey: string,
  model: string
): Promise<string> {
  const all = [...bankingStories, ...aiStories].slice(0, 6);
  if (all.length === 0) return "";

  const storyList = all.map((s, i) => `${i + 1}. ${s.title}`).join("\n");

  const response = await callLlm(
    apiKey,
    model,
    `You are an editor writing the subject line for a banking and AI daily newsletter. Given today's top story headlines, write ONE complete sentence of 10–15 words that captures the single most significant development of the day. Rules: (1) name the specific company, regulator, or technology, (2) active voice, (3) no hedging words like "may" or "could", (4) end with a period, (5) do not start with "Today". Return JSON: {"briefSummary": "..."}`,
    `Today's headlines:\n${storyList}`
  );

  if (!response || typeof response !== "object" || !("briefSummary" in response)) return "";
  const s = (response as { briefSummary: unknown }).briefSummary;
  return typeof s === "string" ? s.trim() : "";
}

/** Mechanical fallback used when no API key is available. */
export function buildBriefSummary(bankingStories: DigestStory[], aiStories: DigestStory[]): string {
  const top = bankingStories[0] ?? aiStories[0];
  if (!top) return "";
  const title = top.title.trim();
  const words = title.split(/\s+/);
  if (words.length <= 15) return title;
  // Prefer a natural break at punctuation within the first 15 words
  const candidate = words.slice(0, 15).join(" ");
  const m = candidate.match(/^.+?[,;:—–]/);
  if (m) return m[0].trim();
  return words.slice(0, 12).join(" ") + "…";
}
