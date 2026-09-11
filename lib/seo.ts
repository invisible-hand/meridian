// Centralized SEO constants and helpers shared across metadata, sitemaps,
// JSON-LD generation, and OG image routes.

export const SITE_NAME = "BankingNewsAI";
export const SITE_TAGLINE = "Daily AI Brief for Banking Executives";
export const SITE_DESCRIPTION =
  "Every morning, BankingNewsAI delivers 6 curated AI stories — 3 banking AI, 3 general AI — to C-suite executives in banking and fintech. Free. Paywall-free.";
export const SITE_DESCRIPTION_SHORT =
  "6 curated AI stories every morning — 3 banking AI, 3 general AI. Free. Paywall-free.";

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.bankingnewsai.com");

// Logo URL used in NewsMediaOrganization JSON-LD. We point at /apple-icon
// (rendered by app/apple-icon.tsx at 180x180) because schema.org recommends a
// logo at least 112x112 — the 32x32 favicon is too small.
export const ORG_LOGO_URL = `${BASE_URL}/apple-icon`;
export const ORG_LOGO_SIZE = 180;
export const ORG_SAMEAS: string[] = [];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatIssueDateLong(iso: string): string {
  try {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
  } catch {
    return iso;
  }
}

export function formatIssueDateShort(iso: string): string {
  try {
    return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    });
  } catch {
    return iso;
  }
}

// Compose a 1-2 sentence description for an issue page from its content.
// Prefers the LLM-generated brief summary; falls back to a synthesis of the
// first 2 story titles so the meta description is always issue-specific.
export function buildIssueDescription(params: {
  briefSummary?: string;
  storyTitles: string[];
  storyCount: number;
  formattedDate: string;
}): string {
  const { briefSummary, storyTitles, storyCount, formattedDate } = params;
  const headlines = storyTitles.slice(0, 2).filter(Boolean).join(" · ");
  if (briefSummary && headlines) {
    return `${briefSummary}. Today's brief: ${headlines}.`;
  }
  if (briefSummary) return briefSummary;
  if (headlines) {
    return `${formattedDate}: ${headlines}. ${storyCount} curated stories for banking executives.`;
  }
  return `${formattedDate}: ${storyCount} curated AI stories for banking executives.`;
}

export function isoToArticleDate(iso: string): string {
  // Convert "YYYY-MM-DD" → ISO datetime at noon UTC for stable Article schema.
  return `${iso}T12:00:00.000Z`;
}

// ── Length discipline for <title> and meta description ────────────────────────
// Google rewrites titles over ~60 characters and truncates descriptions over
// ~155; the 2026-09-10 review found every inner page far over both, with
// near-zero CTR at positions 2–10. These helpers cut on a word boundary.

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

/** Cut `text` to at most `max` characters on a word boundary, with an ellipsis. */
export function clampText(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const at = cut.lastIndexOf(" ");
  return `${(at > max * 0.6 ? cut.slice(0, at) : cut).replace(/[\s,;:—–-]+$/, "")}…`;
}

/**
 * Meta description from a longer answer: as many whole sentences as fit in
 * `max`, or the first sentence clamped when even that is too long.
 */
export function metaDescription(text: string, max = DESCRIPTION_MAX): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  // Split only where a terminator is followed by a space and a capital, so
  // "U.S. Treasury" and "12 CFR 1002.9" stay whole.
  const sentences = t.split(/(?<=[.!?])\s+(?=[A-Z"'(])/);
  let out = "";
  for (const s of sentences) {
    const next = out ? `${out} ${s.trim()}` : s.trim();
    if (next.length > max) break;
    out = next;
  }
  // Too little survived (a single long first sentence): clamp the text instead.
  return out.length >= 90 ? out : clampText(t, max);
}
