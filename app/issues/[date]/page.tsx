import Link from "next/link";
import { notFound } from "next/navigation";
import { ensureSchema, getDigestForDate } from "@/lib/db";
import { DailyDigest, DigestStory } from "@/lib/types";

export const dynamic = "force-dynamic";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  } catch { return iso; }
}

function extractDomain(url: string): string {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return "source"; }
}

function StoryCard({ story, index, accent, accentLight }: {
  story: DigestStory;
  index: number;
  accent: string;
  accentLight: string;
}) {
  const domain = extractDomain(story.sourceUrl);
  const num = String(index).padStart(2, "0");

  return (
    <div style={{ padding: "28px 0", borderBottom: "1px solid #ede9e3" }}>
      {/* Domain + big faded number */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          fontSize: 10, fontWeight: 500, letterSpacing: "0.16em",
          textTransform: "uppercase", color: "#b0ab9a"
        }}>
          {domain}
        </span>
        <span style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 44, fontWeight: 900, color: "#ede9e3", lineHeight: 1,
          userSelect: "none", flexShrink: 0, marginLeft: 12
        }}>
          {num}
        </span>
      </div>

      {/* Title */}
      <p style={{
        margin: "0 0 12px",
        fontFamily: "var(--font-serif), Georgia, serif",
        fontSize: 20, fontWeight: 700, color: "#111111",
        lineHeight: 1.3, letterSpacing: "-0.01em"
      }}>
        {story.title}
      </p>

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
        background: "#faf9f7",
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
      <a href={story.sourceUrl} target="_blank" rel="noreferrer" style={{
        fontFamily: "var(--font-mono), 'Courier New', monospace",
        fontSize: 10, fontWeight: 500, letterSpacing: "0.1em",
        textTransform: "uppercase", color: accent,
        textDecoration: "underline", textUnderlineOffset: 3
      }}>
        Read article →
      </a>
    </div>
  );
}

export default async function IssuePage({
  params
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) notFound();

  await ensureSchema();
  const digest = await getDigestForDate({ digestDate: date, category: "fintech_banking" }).catch(() => null);

  if (!digest || digest.status !== "sent") notFound();

  const content = digest.content_json as DailyDigest | null;
  if (!content) notFound();

  const bankingStories = content.bankingStories ?? content.stories ?? [];
  const aiStories = content.aiStories ?? [];
  const formatted = formatDate(date);

  return (
    <>
      <style>{`
        .issue-root {
          min-height: 100vh;
          background: #f0ede8;
          display: flex;
          flex-direction: column;
        }

        .issue-nav {
          padding: 0 40px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0c0c0c;
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
          color: #444;
          text-decoration: none;
        }

        .issue-logo span { color: #4f7fff; }

        .issue-nav-back {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          transition: color 0.15s;
        }

        .issue-nav-back:hover { color: #aaa; }

        .issue-nav-cta {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0c0c0c;
          background: #f0ede8;
          text-decoration: none;
          padding: 7px 14px;
          transition: opacity 0.15s;
        }

        .issue-nav-cta:hover { opacity: 0.8; }

        .issue-header {
          background: #0c0c0c;
          padding: 40px 40px 44px;
          border-bottom: 1px solid #1a1a1a;
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
          color: #444;
          margin: 0 0 14px;
        }

        .issue-header-rule {
          height: 1px;
          background: #1e1e1e;
          margin: 0 auto 20px;
          max-width: 480px;
        }

        .issue-headline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
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
          color: #6b9cff;
          border-color: #1e2e5a;
          background: rgba(26,63,203,0.12);
        }

        .issue-badge-ai {
          color: #5ecb97;
          border-color: #0e3322;
          background: rgba(13,102,64,0.12);
        }

        .issue-body {
          flex: 1;
          padding: 0 40px 72px;
        }

        .issue-body-inner {
          max-width: 660px;
          margin: 0 auto;
        }

        .issue-section-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 36px 0 0;
        }

        .issue-section-label-text {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .issue-section-rule {
          flex: 1;
          height: 1px;
        }

        .issue-cta {
          margin-top: 52px;
          background: #0c0c0c;
          padding: 40px 36px;
          text-align: center;
        }

        .issue-cta h3 {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 10px;
        }

        .issue-cta p {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          margin: 0 0 24px;
        }

        .issue-cta-btn {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0c0c0c;
          background: #f0ede8;
          text-decoration: none;
          padding: 12px 28px;
          display: inline-block;
          transition: opacity 0.15s;
        }

        .issue-cta-btn:hover { opacity: 0.8; }

        .issue-footer {
          padding: 18px 40px;
          border-top: 1px solid #e8e4de;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .issue-footer-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b0ab9a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .issue-footer-link:hover { color: #5a5a5a; }

        @media (max-width: 520px) {
          .issue-nav, .issue-header, .issue-body, .issue-footer { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <div className="issue-root">
        {/* Nav */}
        <nav className="issue-nav">
          <Link href="/" className="issue-logo">Banking<span>News</span>AI</Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/issues" className="issue-nav-back">← Archive</Link>
            <Link href="/#subscribe" className="issue-nav-cta">Subscribe</Link>
          </div>
        </nav>

        {/* Header */}
        <div className="issue-header">
          <div className="issue-header-inner">
            <p className="issue-eyebrow">BankingNewsAI Daily Brief &nbsp;·&nbsp; {formatted}</p>
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
        </div>

        {/* Stories */}
        <div className="issue-body">
          <div className="issue-body-inner">

            {bankingStories.length > 0 && (
              <section>
                <div className="issue-section-label">
                  <span className="issue-section-label-text" style={{ color: "#1a3fcb" }}>Banking AI</span>
                  <div className="issue-section-rule" style={{ background: "#dce5ff" }} />
                </div>
                {bankingStories.map((story, i) => (
                  <StoryCard key={i} story={story} index={i + 1} accent="#1a3fcb" accentLight="#dce5ff" />
                ))}
              </section>
            )}

            {aiStories.length > 0 && (
              <section>
                <div className="issue-section-label">
                  <span className="issue-section-label-text" style={{ color: "#0d6640" }}>General AI</span>
                  <div className="issue-section-rule" style={{ background: "#d0f0e0" }} />
                </div>
                {aiStories.map((story, i) => (
                  <StoryCard key={i} story={story} index={i + 1} accent="#0d6640" accentLight="#d0f0e0" />
                ))}
              </section>
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

        {/* Footer */}
        <footer className="issue-footer">
          <Link href="/" className="issue-footer-link">Home</Link>
          <Link href="/issues" className="issue-footer-link">Archive</Link>
          <span className="issue-footer-link" style={{ cursor: "default" }}>Curated by AI · Delivered daily</span>
        </footer>
      </div>
    </>
  );
}
