import { ensureSchema, listSentDigests } from "@/lib/db";
import type { DailyDigest, DigestStory } from "@/lib/types";
import { BASE_URL, SITE_DESCRIPTION, SITE_NAME, isoToArticleDate } from "@/lib/seo";

// RSS 2.0 feed of sent issues. Aggregators (Feedly, Inoreader), AI agents that
// crawl for daily news, and re-syndicators all consume this. Revalidates every
// hour as a fallback; the send cron explicitly invalidates it on each send.
export const revalidate = 3600;

const FEED_LIMIT = 30;

export async function GET() {
  await ensureSchema();
  const digests = await listSentDigests(FEED_LIMIT).catch(() => []);

  const lastBuild = digests[0]?.sent_at
    ? new Date(digests[0].sent_at).toUTCString()
    : new Date().toUTCString();

  const items = digests
    .map((d) => {
      const content = d.content_json as DailyDigest | null;
      if (!content) return "";
      const stories = [
        ...(content.bankingStories ?? content.stories ?? []),
        ...(content.aiStories ?? [])
      ];
      const url = `${BASE_URL}/issues/${d.digest_date}`;
      const pubDate = d.sent_at
        ? new Date(d.sent_at).toUTCString()
        : new Date(isoToArticleDate(d.digest_date)).toUTCString();
      const title = content.briefSummary
        ? `${content.briefSummary} — ${d.digest_date}`
        : `${SITE_NAME} — ${d.digest_date}`;
      const description = buildItemDescription(stories, content.briefSummary);
      const contentEncoded = buildItemContentHtml(stories, url);

      return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
      <content:encoded><![CDATA[${contentEncoded}]]></content:encoded>
      <category>Banking</category>
      <category>Artificial Intelligence</category>
      <category>Fintech</category>
    </item>`;
    })
    .filter(Boolean)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Daily AI Brief for Banking</title>
    <link>${escapeXml(BASE_URL)}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <ttl>60</ttl>
    <atom:link href="${escapeXml(`${BASE_URL}/rss.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}

function buildItemDescription(stories: DigestStory[], briefSummary?: string): string {
  const headlines = stories
    .slice(0, 3)
    .map((s) => s.title)
    .join(" · ");
  if (briefSummary && headlines) return `${briefSummary}. ${headlines}.`;
  return briefSummary ?? headlines ?? "Daily AI brief for banking executives.";
}

function buildItemContentHtml(stories: DigestStory[], issueUrl: string): string {
  const items = stories
    .map((s) => {
      const safeTitle = escapeXml(s.title);
      const safeSummary = escapeXml(s.executiveSummary);
      const safeImpact = escapeXml(s.businessImpact);
      const safeUrl = escapeXml(s.sourceUrl);
      return `<li><strong><a href="${safeUrl}" rel="noopener">${safeTitle}</a></strong><br/>${safeSummary}<br/><em>${safeImpact}</em></li>`;
    })
    .join("");
  return `<ul>${items}</ul><p><a href="${escapeXml(issueUrl)}">Read the full brief →</a></p>`;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
