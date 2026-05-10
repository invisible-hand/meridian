import { ensureSchema, listSentDigests } from "@/lib/db";
import type { DailyDigest } from "@/lib/types";
import { BASE_URL, SITE_NAME, isoToArticleDate } from "@/lib/seo";

// Google News sitemap: only includes articles published in the last 48 hours,
// uses the news:news namespace. Submit this URL via Search Console's Publisher
// Center (Google News) and reference it in robots.txt for crawler discovery.
// Revalidates hourly; the send cron also invalidates it on every successful send.
export const revalidate = 3600;

const NEWS_WINDOW_MS = 48 * 60 * 60 * 1000;

export async function GET() {
  await ensureSchema();
  const digests = await listSentDigests(20).catch(() => []);
  const cutoff = Date.now() - NEWS_WINDOW_MS;

  const recent = digests.filter((d) => {
    const sentMs = d.sent_at
      ? new Date(d.sent_at).getTime()
      : new Date(isoToArticleDate(d.digest_date)).getTime();
    return Number.isFinite(sentMs) && sentMs >= cutoff;
  });

  const urls = recent
    .map((d) => {
      const content = d.content_json as DailyDigest | null;
      const title = content?.briefSummary
        ? `${content.briefSummary} — ${d.digest_date}`
        : `${SITE_NAME} Daily Brief — ${d.digest_date}`;
      const publicationDate = d.sent_at
        ? new Date(d.sent_at).toISOString()
        : isoToArticleDate(d.digest_date);
      const url = `${BASE_URL}/issues/${d.digest_date}`;

      return `  <url>
    <loc>${escapeXml(url)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(SITE_NAME)}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${publicationDate}</news:publication_date>
      <news:title>${escapeXml(title)}</news:title>
    </news:news>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
