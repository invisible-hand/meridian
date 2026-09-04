// Keenable web search + page fetch (https://docs.keenable.ai). Independent
// index with real article URLs and ~1.8k-char snippets; `site` restricts to one
// domain, which is how we watch regulators and bank newsrooms that publish no
// usable RSS feed. Free tier is 100k requests/month; the pipeline uses ~60/day.

export type KeenableResult = {
  title?: string;
  url?: string;
  description?: string;
  snippet?: string;
  published_at?: string;
};

const BASE = "https://api.keenable.ai/v1";

function apiKey(): string | null {
  return process.env.KEENABLE_API_KEY?.trim() || null;
}

export function keenableEnabled(): boolean {
  return apiKey() !== null;
}

export async function keenableSearch(params: {
  query: string;
  site?: string;
  maxResults?: number;
  publishedAfter?: string;
  snippetMaxLength?: number;
}): Promise<KeenableResult[]> {
  const key = apiKey();
  if (!key) return [];
  const body: Record<string, unknown> = {
    query: params.query,
    max_results: Math.min(50, Math.max(1, params.maxResults ?? 20)),
    snippet_max_length: params.snippetMaxLength ?? 2000
  };
  if (params.site) body.site = params.site;
  if (params.publishedAfter) body.published_after = params.publishedAfter;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 20000);
    const res = await fetch(`${BASE}/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-Key": key },
      body: JSON.stringify(body),
      signal: ctrl.signal
    });
    clearTimeout(t);
    if (!res.ok) return [];
    const data = (await res.json()) as { results?: KeenableResult[] };
    return data.results ?? [];
  } catch {
    return [];
  }
}

/** Page text via Keenable's fetcher (works on sites that block plain requests). */
export async function keenableFetchText(url: string): Promise<string | null> {
  const key = apiKey();
  if (!key) return null;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 20000);
    const res = await fetch(`${BASE}/fetch?url=${encodeURIComponent(url)}`, {
      headers: { "X-API-Key": key },
      signal: ctrl.signal
    });
    clearTimeout(t);
    if (!res.ok) return null;
    const data = (await res.json()) as { content?: string };
    const text = (data.content ?? "").replace(/\s+/g, " ").trim();
    return text.length > 200 ? text : null;
  } catch {
    return null;
  }
}
