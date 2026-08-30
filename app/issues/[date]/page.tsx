import { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ensureSchema, getDigestForDate, listSentDigests, type Digest } from "@/lib/db";
import { DailyDigest, DigestStory } from "@/lib/types";
import {
  absoluteUrl,
  buildIssueDescription,
  formatIssueDateLong,
  formatIssueDateShort,
  isoToArticleDate,
  SITE_NAME
} from "@/lib/seo";
import { JsonLd, newsArticleSchema } from "@/lib/json-ld";
import { FOOTER_NAV, SiteFooter, SiteHeader, chromeCss } from "../../site-chrome";
import { digestText, documentPath, findMentions } from "@/lib/tracker";

// Issue pages are immutable once `status === "sent"`. We let Next.js render
// them on first request and cache. The send cron revalidates the new path
// directly, so newly-sent issues appear within seconds; the 24h fallback
// covers any edge cases.
export const revalidate = 86400;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// Wrap DB reads in React `cache()` so `generateMetadata` and the page itself
// share a single Supabase round-trip per render.
const getCachedDigest = cache(async (date: string) => {
  if (!ISO_DATE.test(date)) return null;
  await ensureSchema();
  return getDigestForDate({ digestDate: date, category: "fintech_banking" }).catch(() => null);
});

const getCachedRelatedIssues = cache(async (excludeDate: string): Promise<Digest[]> => {
  await ensureSchema();
  const digests = await listSentDigests(8).catch(() => []);
  return digests.filter((d) => d.digest_date !== excludeDate).slice(0, 5);
});

function formatDate(iso: string): string {
  return formatIssueDateLong(iso);
}

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return "source"; }
}

function StoryCard({ story, index, accent }: {
  story: DigestStory;
  index: number;
  accent: string;
}) {
  const domain = extractDomain(story.sourceUrl);
  const num = String(index).padStart(2, "0");

  return (
    <article style={{ padding: "28px 0", borderBottom: "1px solid #e9e9e5" }}>
      {/* Domain + big faded number */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          fontSize: 10, fontWeight: 500, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#b3b3ae"
        }}>
          {domain}
        </span>
        <span aria-hidden="true" style={{
          fontFamily: "var(--font-serif), 'Helvetica Neue', sans-serif",
          fontSize: 44, fontWeight: 900, color: "#e9e9e5", lineHeight: 1,
          userSelect: "none", flexShrink: 0, marginLeft: 12
        }}>
          {num}
        </span>
      </div>

      {/* Title */}
      <h2 style={{
        margin: "0 0 12px",
        fontFamily: "var(--font-serif), 'Helvetica Neue', sans-serif",
        fontSize: 20, fontWeight: 700, color: "#111111",
        lineHeight: 1.3, letterSpacing: "-0.01em"
      }}>
        {story.title}
      </h2>

      {/* Summary */}
      <p style={{
        margin: "0 0 16px",
        fontFamily: "var(--font-sans), 'Helvetica Neue', sans-serif",
        fontSize: 14, color: "#5a5a5a", lineHeight: 1.75
      }}>
        {story.executiveSummary}
      </p>

      {/* Action callout */}
      <div style={{
        borderLeft: `2px solid ${accent}`,
        background: "#ffffff",
        padding: "10px 16px",
        marginBottom: 16
      }}>
        <p style={{
          margin: "0 0 3px",
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          fontSize: 9, fontWeight: 500, letterSpacing: "0.18em",
          textTransform: "uppercase", color: accent
        }}>
          Action
        </p>
        <p style={{
          margin: 0,
          fontFamily: "var(--font-sans), 'Helvetica Neue', sans-serif",
          fontSize: 13, color: "#111111", lineHeight: 1.6
        }}>
          {story.businessImpact}
        </p>
      </div>

      {/* Read link */}
      <a href={story.sourceUrl} target="_blank" rel="noopener noreferrer" style={{
        fontFamily: "var(--font-mono), 'Courier New', monospace",
        fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
        textTransform: "uppercase", color: accent,
        textDecoration: "underline", textUnderlineOffset: 3
      }}>
        Read article →
      </a>
    </article>
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  const digest = await getCachedDigest(date);
  if (!digest || digest.status !== "sent") {
    return { title: "Issue not found", robots: { index: false, follow: false } };
  }

  const content = digest.content_json as DailyDigest | null;
  const bankingStories = content?.bankingStories ?? content?.stories ?? [];
  const aiStories = content?.aiStories ?? [];
  const formatted = formatIssueDateLong(date);
  const formattedShort = formatIssueDateShort(date);
  const storyTitles = [...bankingStories, ...aiStories].map((s) => s.title);
  const storyCount = bankingStories.length + aiStories.length;
  const description = buildIssueDescription({
    briefSummary: content?.briefSummary,
    storyTitles,
    storyCount,
    formattedDate: formatted
  });
  const headline = content?.briefSummary
    ? `${content.briefSummary} — ${formattedShort}`
    : `Banking AI Brief — ${formatted}`;
  const url = `/issues/${date}`;

  return {
    title: headline,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: headline,
      description,
      siteName: SITE_NAME,
      publishedTime: digest.sent_at
        ? new Date(digest.sent_at).toISOString()
        : isoToArticleDate(date),
      modifiedTime: digest.sent_at
        ? new Date(digest.sent_at).toISOString()
        : isoToArticleDate(date),
      section: "Banking & AI",
      tags: ["banking", "fintech", "AI", "artificial intelligence", "executive brief"]
    },
    twitter: {
      card: "summary_large_image",
      title: headline,
      description
    }
  };
}

export default async function IssuePage({
  params
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  if (!ISO_DATE.test(date)) notFound();

  const digest = await getCachedDigest(date);
  if (!digest || digest.status !== "sent") notFound();

  const content = digest.content_json as DailyDigest | null;
  if (!content) notFound();

  const bankingStories = content.bankingStories ?? content.stories ?? [];
  const aiStories = content.aiStories ?? [];
  const formatted = formatDate(date);
  const allStories = [...bankingStories, ...aiStories];
  const issueDescription = buildIssueDescription({
    briefSummary: content.briefSummary,
    storyTitles: allStories.map((s) => s.title),
    storyCount: allStories.length,
    formattedDate: formatted
  });
  const publishedIso = digest.sent_at
    ? new Date(digest.sent_at).toISOString()
    : isoToArticleDate(date);
  const relatedIssues = await getCachedRelatedIssues(date);
  // Read-time cross-links into the regulation tracker: documents/authorities
  // whose aliases literally appear in this issue's stories.
  const mentions = findMentions(digestText(content)).slice(0, 6);

  return (
    <>
      <style>{chromeCss}</style>
      <style>{`
        .issue-root {
          min-height: 100vh;
          background: #fbfbf9;
          display: flex;
          flex-direction: column;
        }

        .issue-nav {
          padding: 0 40px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fbfbf9;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .issue-logo {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6a6a6a;
          text-decoration: none;
        }

        .issue-logo span { color: #1a3fcb; }

        .issue-nav-back {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a6a6a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .issue-nav-back:hover { color: #aaa; }

        .issue-nav-cta {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
          border-bottom: 1px solid #111111;
          padding-bottom: 2px;
        }

        .issue-nav-cta:hover { color: #1a3fcb; border-color: #1a3fcb; }

        .issue-header {
          background: #fbfbf9;
          padding: 40px 40px 44px;
          border-bottom: 1px solid #e4e4df;
          text-align: center;
        }

        .issue-header-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .issue-eyebrow {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b3b3ae;
          margin: 0 0 14px;
        }

        .issue-header-rule {
          height: 1px;
          background: #e4e4df;
          margin: 0 auto 20px;
          max-width: 480px;
        }

        .issue-headline {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          font-weight: 500;
          
          color: #111111;
          margin: 0 0 16px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .issue-badges {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .issue-badge {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 12px;
          border: 1px solid;
        }

        .issue-badge-bank {
          color: #1a3fcb;
          border-color: #1a3fcb;
          background: transparent;
        }

        .issue-badge-ai {
          color: #0d6640;
          border-color: #0d6640;
          background: transparent;
        }

        .issue-body {
          flex: 1;
          padding: 0 40px 72px;
        }

        .issue-body-inner {
          max-width: 660px;
          margin: 0 auto;
        }

        .issue-section-header {
          margin: 48px 0 0;
          padding: 14px 0 12px;
          border-top: 2px solid #111111;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
        }

        .issue-section-header-left {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .issue-section-name {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #111111;
          margin: 0;
        }
        .issue-section-bank .issue-section-name { color: #1a3fcb; }
        .issue-section-ai .issue-section-name { color: #0d6640; }

        .issue-section-desc {
          font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
          font-size: 11px;
          color: #6a6a6a;
          margin: 0;
        }

        .issue-section-count {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: #b3b3ae;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 520px) {
          .issue-section-header { margin-left: -20px; margin-right: -20px; padding-left: 20px; padding-right: 20px; }
        }

        .issue-cta {
          margin-top: 52px;
          border-top: 2px solid #111111;
          padding: 32px 0 0;
          text-align: left;
        }

        .issue-cta h3 {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          
          color: #111111;
          margin: 0 0 10px;
        }

        .issue-cta p {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b3b3ae;
          margin: 0 0 24px;
        }

        .issue-cta-btn {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #111111;
          text-decoration: none;
          border-bottom: 2px solid #111111;
          padding-bottom: 3px;
          display: inline-block;
        }

        .issue-cta-btn:hover { color: #1a3fcb; border-color: #1a3fcb; }

        .issue-footer {
          padding: 18px 40px;
          border-top: 1px solid #e4e4df;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .issue-footer-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6a6a6a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .issue-footer-link:hover { color: #5a5a5a; }

        .issue-tracker {
          margin-top: 36px;
          padding: 22px 24px;
          background: #ffffff;
          border-left: 3px solid #1a3fcb;
        }
        .issue-tracker-label {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; color: #1a3fcb; margin: 0 0 12px;
        }
        .issue-tracker a {
          display: block; text-decoration: none; padding: 6px 0;
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-size: 14px; font-weight: 500; color: #111; line-height: 1.4;
        }
        .issue-tracker a span {
          font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 12px; font-weight: 400; color: #6a6a6a;
        }
        .issue-tracker a:hover { color: #1a3fcb; }

        .issue-related {
          margin-top: 36px;
          padding: 28px 0 8px;
          border-top: 1px solid #e4e4df;
        }

        .issue-related-label {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a9a9a;
          margin: 0 0 14px;
        }

        .issue-related-list {
          display: flex;
          flex-direction: column;
        }

        .issue-related-item {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #e9e9e5;
          align-items: baseline;
          text-decoration: none;
        }

        .issue-related-item:last-child { border-bottom: none; }

        .issue-related-item-date {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          color: #b3b3ae;
          text-transform: uppercase;
          flex-shrink: 0;
          min-width: 92px;
        }

        .issue-related-item-title {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 14px;
          color: #111;
          line-height: 1.4;
          font-weight: 500;
          flex: 1;
        }

        .issue-related-item:hover .issue-related-item-title {
          color: #1a3fcb;
        }

        @media (max-width: 520px) {
          .issue-nav, .issue-header, .issue-body, .issue-footer { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <JsonLd
        data={newsArticleSchema({
          date,
          digest: content,
          description: issueDescription,
          headline: content.briefSummary ?? formatted,
          publishedAt: publishedIso,
          modifiedAt: publishedIso,
          ogImageUrl: absoluteUrl(`/issues/${date}/opengraph-image`)
        })}
      />

      <div className="issue-root">
        {/* Nav */}
        <SiteHeader
          links={[
            { href: "/ai-regulation", label: "regulation" },
            { href: "/issues", label: "archive" },
            { href: "/#subscribe", label: "subscribe" }
          ]}
        />

        <article>
          {/* Header */}
          <header className="issue-header">
            <div className="issue-header-inner">
              <p className="issue-eyebrow">
                BankingNewsAI Daily Brief &nbsp;·&nbsp;
                <time dateTime={publishedIso}>{formatted}</time>
              </p>
              <div className="issue-header-rule" />
              <h1 className="issue-headline">{content.briefSummary ?? formatted}</h1>
              <div className="issue-badges">
                {bankingStories.length > 0 && (
                  <span className="issue-badge issue-badge-bank">
                    🏦 {bankingStories.length} Banking AI
                  </span>
                )}
                {aiStories.length > 0 && (
                  <span className="issue-badge issue-badge-ai">
                    🤖 {aiStories.length} General AI
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* Stories */}
          <div className="issue-body">
            <div className="issue-body-inner">

              {bankingStories.length > 0 && (
                <section aria-labelledby="banking-section-heading">
                  <div className="issue-section-header issue-section-bank" style={{ borderTopColor: "#1a3fcb" }}>
                    <div className="issue-section-header-left">
                      <h2 id="banking-section-heading" className="issue-section-name">Banking AI</h2>
                      <p className="issue-section-desc">Financial institutions &amp; fintech technology</p>
                    </div>
                    <span className="issue-section-count">{bankingStories.length} {bankingStories.length === 1 ? "story" : "stories"}</span>
                  </div>
                  {bankingStories.map((story, i) => (
                    <StoryCard key={i} story={story} index={i + 1} accent="#1a3fcb" />
                  ))}
                </section>
              )}

              {aiStories.length > 0 && (
                <section aria-labelledby="ai-section-heading">
                  <div className="issue-section-header issue-section-ai" style={{ borderTopColor: "#0d6640" }}>
                    <div className="issue-section-header-left">
                      <h2 id="ai-section-heading" className="issue-section-name">General AI</h2>
                      <p className="issue-section-desc">Large language models &amp; AI infrastructure</p>
                    </div>
                    <span className="issue-section-count">{aiStories.length} {aiStories.length === 1 ? "story" : "stories"}</span>
                  </div>
                  {aiStories.map((story, i) => (
                    <StoryCard key={i} story={story} index={i + 1} accent="#0d6640" />
                  ))}
                </section>
              )}

              {mentions.length > 0 && (
                <aside className="issue-tracker" aria-labelledby="tracker-refs-heading">
                  <p id="tracker-refs-heading" className="issue-tracker-label">Referenced in the AI Regulation Tracker</p>
                  {mentions.map((m) =>
                    m.kind === "document" ? (
                      <Link key={m.doc.slug} href={documentPath(m.doc)}>
                        {m.doc.shortName} — {m.doc.title} <span>· {m.authority.name}</span>
                      </Link>
                    ) : (
                      <Link key={m.authority.slug} href={`/ai-regulation/${m.authority.slug}`}>
                        How the {m.authority.name} regulates AI in banking <span>· authority page</span>
                      </Link>
                    )
                  )}
                </aside>
              )}

              {/* Recent issues — internal linking for crawl depth and topical clustering */}
              {relatedIssues.length > 0 && (
                <aside className="issue-related" aria-labelledby="related-issues-heading">
                  <p id="related-issues-heading" className="issue-related-label">
                    Recent issues
                  </p>
                  <nav className="issue-related-list">
                    {relatedIssues.map((d) => {
                      const c = d.content_json as DailyDigest | null;
                      const dShort = formatIssueDateShort(d.digest_date);
                      const dTitle =
                        c?.briefSummary ?? formatIssueDateLong(d.digest_date);
                      return (
                        <Link
                          key={d.id}
                          href={`/issues/${d.digest_date}`}
                          className="issue-related-item"
                        >
                          <span className="issue-related-item-date">{dShort}</span>
                          <span className="issue-related-item-title">{dTitle}</span>
                        </Link>
                      );
                    })}
                  </nav>
                </aside>
              )}

              {/* Subscribe CTA */}
              <div className="issue-cta">
                <h3>Get this in your inbox every morning</h3>
                <p>Free · No spam · Unsubscribe anytime</p>
                <Link href="/#subscribe" className="issue-cta-btn">
                  Subscribe free →
                </Link>
              </div>

            </div>
          </div>
        </article>

        <SiteFooter links={FOOTER_NAV} />
      </div>
    </>
  );
}
