import Link from "next/link";
import { ensureSchema, listSentDigests } from "@/lib/db";
import { DailyDigest } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function IssuesPage() {
  await ensureSchema();
  const digests = await listSentDigests(365).catch(() => []);

  return (
    <>
      <style>{`
        .arc-root {
          min-height: 100vh;
          background: #f0ede8;
          display: flex;
          flex-direction: column;
        }

        .arc-nav {
          padding: 0 40px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8e4de;
          background: #f0ede8;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .arc-logo {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
        }

        .arc-logo span { color: #1a3fcb; }

        .arc-nav-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a9a9a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .arc-nav-link:hover { color: #111111; }

        .arc-nav-cta {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f0ede8;
          background: #111111;
          text-decoration: none;
          padding: 7px 16px;
          transition: opacity 0.15s;
        }

        .arc-nav-cta:hover { opacity: 0.8; }

        .arc-header {
          background: #0c0c0c;
          padding: 44px 40px 40px;
          border-bottom: 1px solid #1a1a1a;
        }

        .arc-header-inner {
          max-width: 700px;
          margin: 0 auto;
        }

        .arc-eyebrow {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #444;
          margin: 0 0 14px;
        }

        .arc-rule {
          height: 1px;
          background: #1e1e1e;
          margin: 0 0 18px;
        }

        .arc-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
          line-height: 1.05;
        }

        .arc-subtitle {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          margin: 0;
        }

        .arc-body {
          flex: 1;
          padding: 0 40px 72px;
        }

        .arc-list {
          max-width: 700px;
          margin: 0 auto;
        }

        .arc-empty {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b0ab9a;
          text-align: center;
          padding: 72px 0;
        }

        .arc-item {
          display: block;
          text-decoration: none;
          border-bottom: 1px solid #e8e4de;
          padding: 26px 0;
          transition: background 0.1s;
        }

        .arc-item:first-child {
          border-top: 1px solid #e8e4de;
        }

        .arc-item-inner {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 20px;
        }

        .arc-item-left {
          min-width: 0;
          flex: 1;
        }

        .arc-item-date {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #b0ab9a;
          margin: 0 0 6px;
        }

        .arc-item-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #111111;
          margin: 0 0 6px;
          line-height: 1.35;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .arc-item:hover .arc-item-title {
          color: #1a3fcb;
        }

        .arc-item-meta {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b0ab9a;
          margin: 0;
        }

        .arc-item-arrow {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 12px;
          color: #c8c3bb;
          flex-shrink: 0;
          transition: color 0.15s, transform 0.15s;
        }

        .arc-item:hover .arc-item-arrow {
          color: #1a3fcb;
          transform: translateX(3px);
        }

        .arc-footer {
          padding: 18px 40px;
          border-top: 1px solid #e8e4de;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .arc-footer-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b0ab9a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .arc-footer-link:hover { color: #5a5a5a; }

        @media (max-width: 520px) {
          .arc-nav, .arc-header, .arc-body, .arc-footer { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <div className="arc-root">
        {/* Nav */}
        <nav className="arc-nav">
          <Link href="/" className="arc-logo">Banking<span>News</span>AI</Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/about" className="arc-nav-link">About</Link>
            <Link href="/#subscribe" className="arc-nav-cta">Subscribe</Link>
          </div>
        </nav>

        {/* Header */}
        <div className="arc-header">
          <div className="arc-header-inner">
            <p className="arc-eyebrow">BankingNewsAI</p>
            <div className="arc-rule" />
            <h1 className="arc-title">Archive</h1>
            <p className="arc-subtitle">{digests.length} issue{digests.length !== 1 ? "s" : ""} published</p>
          </div>
        </div>

        {/* List */}
        <div className="arc-body">
          <div className="arc-list">
            {digests.length === 0 ? (
              <p className="arc-empty">No issues published yet. Check back soon.</p>
            ) : (
              digests.map((digest) => {
                const content = digest.content_json as DailyDigest | null;
                const bankingCount = (content?.bankingStories ?? content?.stories ?? []).length;
                const aiCount = (content?.aiStories ?? []).length;
                const total = bankingCount + aiCount;
                const formatted = formatIssueDate(digest.digest_date);
                const briefSummary = content?.briefSummary;

                return (
                  <Link
                    key={digest.id}
                    href={`/issues/${digest.digest_date}`}
                    className="arc-item"
                  >
                    <div className="arc-item-inner">
                      <div className="arc-item-left">
                        <p className="arc-item-date">{formatted}</p>
                        <p className="arc-item-title">{briefSummary ?? formatted}</p>
                        <p className="arc-item-meta">
                          {total} stor{total !== 1 ? "ies" : "y"}
                          {bankingCount > 0 ? ` · ${bankingCount} banking AI` : ""}
                          {aiCount > 0 ? ` · ${aiCount} general AI` : ""}
                        </p>
                      </div>
                      <span className="arc-item-arrow">→</span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="arc-footer">
          <Link href="/" className="arc-footer-link">Home</Link>
          <span className="arc-footer-link" style={{ cursor: "default" }}>Curated by AI · Delivered daily</span>
          <Link href="/admin" className="arc-footer-link">Admin</Link>
        </footer>
      </div>
    </>
  );
}

function formatIssueDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  } catch {
    return iso;
  }
}
