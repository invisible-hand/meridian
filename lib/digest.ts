import { z } from "zod";
import { listNewsItemsSince, upsertDailyDigest } from "@/lib/db";
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
const SMOL_EXTRACT_PROMPT = [
  "You are analyzing an AI industry newsletter to extract key stories for banking executives.",
  "From the full newsletter text provided, identify:",
  "- Up to 3 stories (bankingStories) that are BOTH about AI/ML AND directly relevant to banking, fintech, payments, fraud, compliance, lending, or financial regulation.",
  "- Up to 3 stories (aiStories) covering the most strategically important general AI/ML developments an executive should know about.",
  "HARD RULES:",
  "- Completely exclude any content from paywalled sources (FT, WSJ, Bloomberg, The Information, American Banker, The Economist, Barrons, etc.).",
  "- Exclude social media gossip, developer tooling minutiae, and entertainment/consumer AI.",
  "- For bankingStories: the banking/finance connection must be explicit and name a real institution, regulator, or financial product.",
  "- For each story: write a sharp title capturing the key insight, a 2-3 sentence executiveSummary with concrete facts, and a businessImpact sentence with a specific action for banking leaders.",
  "- Set sourceUrl to the newsletter URL provided — do not invent external URLs.",
  "Return strict JSON: {\"bankingStories\":[{\"title\":\"...\",\"executiveSummary\":\"...\",\"businessImpact\":\"...\",\"sourceUrl\":\"...\"}],\"aiStories\":[...]}"
].join(" ");

// ── Main prompt for the supplementary RSS candidates pass ─────────────────────
export const LLM_PROMPT = `You are a senior analyst curating a daily AI intelligence brief for C-suite banking executives. Stories from the smol.ai newsletter are already included — your job is to surface ADDITIONAL coverage from the provided RSS items.

SELECTION CRITERIA
- Up to 3 bankingStories: AI developments with a direct, explicit connection to banking, fintech, or financial services. No tenuous links.
- Up to 3 aiStories: Broad AI developments significant enough that a banking executive should know about them today.

HARD REJECT
- Paywalled articles with no substantive content
- Social media, entertainment, or lifestyle content
- Duplicate coverage of anything already in the smol.ai newsletter
- Opinion pieces without new information or data

WRITING STANDARDS
Write for a time-pressed executive who reads at 7am between meetings. Every word must earn its place.
- executiveSummary: 2–3 sentences max. What happened, why it matters. No jargon, no hedging.
- businessImpact: 1–2 sentences. Specific, actionable implication for a bank or fintech. Avoid vague statements like "this could affect the industry."

OUTPUT FORMAT
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

  // Split smol.ai items (newsletter blobs) from regular RSS items
  const smolItems = items.filter((i) => i.source_name === "Smol AI Issues" && i.summary);
  // Remove paywalled and excluded URLs from the RSS pool entirely
  const rssItems = items.filter(
    (i) => i.source_name !== "Smol AI Issues" && !isPaywalled(i.url) && !isExcludedUrl(i.url)
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

  // Merge: smol stories take priority, RSS fills remaining slots up to 3 each
  const bankingStories = dedupeStories([
    ...smolResult.bankingStories,
    ...rssResult.bankingStories
  ]).slice(0, 3);

  const aiStories = dedupeStories([
    ...smolResult.aiStories,
    ...rssResult.aiStories
  ]).slice(0, 3);

  // Final fallback: if LLM produced nothing at all, use keyword-scored items
  const digest: DailyDigest = bankingStories.length + aiStories.length > 0
    ? { date, category, bankingStories, aiStories }
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

// ── Shared LLM helper ─────────────────────────────────────────────────────────
async function callLlm(
  apiKey: string,
  model: string,
  systemPrompt: string,
  userContent: string
): Promise<unknown | null> {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent }
        ]
      })
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const content = json.choices?.[0]?.message?.content;
    if (!content) return null;
    return JSON.parse(content);
  } catch {
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
