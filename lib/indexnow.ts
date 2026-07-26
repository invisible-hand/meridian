import { BASE_URL } from "@/lib/seo";

const ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * IndexNow lets a publisher tell participating search engines the moment a URL
 * appears or changes, instead of waiting to be crawled. Bing, Yandex, Seznam
 * and Naver consume it; a submission to any one endpoint is shared with all of
 * them. Google does NOT participate — it still discovers via crawl and sitemap.
 *
 * Ownership is proven by hosting a file at /<key>.txt whose entire body is the
 * key (public/<key>.txt, served statically by Next).
 */
export type IndexNowResult =
  | { ok: true; submitted: number; status: number }
  | { ok: false; reason: string; status?: number };

export async function pingIndexNow(paths: string[]): Promise<IndexNowResult> {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) {
    return { ok: false, reason: "INDEXNOW_KEY not set" };
  }

  const host = safeHost(BASE_URL);
  if (!host) {
    return { ok: false, reason: `could not derive host from BASE_URL (${BASE_URL})` };
  }

  const urlList = [...new Set(paths)].map((p) => (p.startsWith("http") ? p : `${BASE_URL}${p}`));
  if (urlList.length === 0) {
    return { ok: false, reason: "no urls to submit" };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `${BASE_URL}/${key}.txt`,
        urlList
      })
    });

    // 200 = accepted, 202 = accepted but key still being validated. Both fine.
    if (res.status === 200 || res.status === 202) {
      return { ok: true, submitted: urlList.length, status: res.status };
    }
    const body = await res.text().catch(() => "");
    return { ok: false, reason: body.slice(0, 200) || res.statusText, status: res.status };
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : String(e) };
  }
}

function safeHost(base: string): string | null {
  try {
    return new URL(base).host;
  } catch {
    return null;
  }
}
