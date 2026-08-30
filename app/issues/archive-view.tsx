import Link from "next/link";
import { notFound } from "next/navigation";
import { countSentDigests, ensureSchema, listSentDigestsPage } from "@/lib/db";
import { DailyDigest } from "@/lib/types";
import { JsonLd, archiveCollectionSchema } from "@/lib/json-ld";

/** Issues per archive page. One page ≈ one month of daily issues. */
export const ARCHIVE_PAGE_SIZE = 30;

export function archivePath(page: number): string {
  return page <= 1 ? "/issues" : `/issues/page/${page}`;
}

export async function getArchivePageCount(): Promise<number> {
  const total = await countSentDigests().catch(() => 0);
  return Math.max(1, Math.ceil(total / ARCHIVE_PAGE_SIZE));
}

/**
 * Newest issue date + total count, for the page title/description. The archive
 * ranks on freshness queries ("banking ai news today", "…last 24 hours"), so
 * the date belongs in the snippet, not just on the page.
 */
export async function getArchiveSummary(): Promise<{ total: number; latest: string | null }> {
  const [total, newest] = await Promise.all([
    countSentDigests().catch(() => 0),
    listSentDigestsPage({ offset: 0, limit: 1 }).catch(() => [])
  ]);
  return { total, latest: newest[0]?.digest_date ?? null };
}

/**
 * Shared renderer for /issues (page 1) and /issues/page/[n] (pages 2+).
 * Kept in one component so the two routes can never drift visually.
 */
export default async function ArchiveView({ page }: { page: number }) {
  await ensureSchema();

  const total = await countSentDigests().catch(() => 0);
  const pageCount = Math.max(1, Math.ceil(total / ARCHIVE_PAGE_SIZE));

  // Page 1 stays reachable even with an empty archive; deeper pages must exist.
  if (page > 1 && page > pageCount) {
    notFound();
  }

  const digests = await listSentDigestsPage({
    offset: (page - 1) * ARCHIVE_PAGE_SIZE,
    limit: ARCHIVE_PAGE_SIZE
  }).catch(() => []);

  const firstIndex = (page - 1) * ARCHIVE_PAGE_SIZE + 1;
  const lastIndex = (page - 1) * ARCHIVE_PAGE_SIZE + digests.length;
  const hasNewer = page > 1;
  const hasOlder = page < pageCount;

  return (
    <>
      <JsonLd data={archiveCollectionSchema({ digests })} />
      <style>{`
        .arc-root {
          min-height: 100vh;
          background: #fbfbf9;
          display: flex;
          flex-direction: column;
        }

        .arc-nav {
          padding: 0 40px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e4e4df;
          background: #fbfbf9;
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
          color: #111111;
          text-decoration: none;
          border-bottom: 1px solid #111111;
          padding-bottom: 2px;
        }

        .arc-nav-cta:hover { color: #1a3fcb; border-color: #1a3fcb; }

        .arc-header {
          background: #fbfbf9;
          padding: 44px 40px 40px;
          border-bottom: 1px solid #e4e4df;
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
          color: #b3b3ae;
          margin: 0 0 14px;
        }

        .arc-rule {
          height: 1px;
          background: #e4e4df;
          margin: 0 0 18px;
        }

        .arc-title {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: #111111;
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
          color: #b3b3ae;
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
          color: #b3b3ae;
          text-align: center;
          padding: 72px 0;
        }

        .arc-item {
          display: block;
          text-decoration: none;
          border-bottom: 1px solid #e4e4df;
          padding: 26px 0;
          transition: background 0.1s;
        }

        .arc-item:first-child {
          border-top: 1px solid #e4e4df;
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
          color: #b3b3ae;
          margin: 0 0 6px;
        }

        .arc-item-title {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 17px;
          font-weight: 500;
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
          color: #b3b3ae;
          margin: 0;
        }

        .arc-item-arrow {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 12px;
          color: #e4e4df;
          flex-shrink: 0;
          transition: color 0.15s, transform 0.15s;
        }

        .arc-item:hover .arc-item-arrow {
          color: #1a3fcb;
          transform: translateX(3px);
        }

        /* ── Pagination ── */
        .arc-pager {
          max-width: 700px;
          margin: 36px auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .arc-pager-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
          border: 1px solid #e4e4df;
          padding: 9px 18px;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }

        .arc-pager-link:hover {
          background: #111111;
          color: #fbfbf9;
          border-color: #111111;
        }

        .arc-pager-spacer {
          /* keeps "Older" right-aligned when there is no "Newer" link */
          visibility: hidden;
          pointer-events: none;
        }

        .arc-pager-info {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b3b3ae;
          white-space: nowrap;
        }

        .arc-footer {
          padding: 18px 40px;
          border-top: 1px solid #e4e4df;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .arc-footer-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b3b3ae;
          text-decoration: none;
          transition: color 0.15s;
        }

        .arc-footer-link:hover { color: #5a5a5a; }

        @media (max-width: 520px) {
          .arc-nav, .arc-header, .arc-body, .arc-footer { padding-left: 20px; padding-right: 20px; }
          .arc-pager { flex-direction: column-reverse; gap: 12px; }
          .arc-pager-link { width: 100%; text-align: center; }
          .arc-pager-spacer { display: none; }
        }
      `}</style>

      <div className="arc-root">
        {/* Nav */}
        <nav className="arc-nav">
          <Link href="/" className="arc-logo">Banking<span>News</span>AI</Link>
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
            <Link href="/ai-regulation" className="arc-nav-link">Regulation</Link>
            <Link href="/about" className="arc-nav-link">About</Link>
            <Link href="/#subscribe" className="arc-nav-cta">Subscribe</Link>
          </div>
        </nav>

        {/* Header */}
        <div className="arc-header">
          <div className="arc-header-inner">
            <p className="arc-eyebrow">BankingNewsAI</p>
            <div className="arc-rule" />
            {/* "Archive" alone matched nothing anyone searches for. This page
                ranks on "banking ai news today"-style queries, so the H1 says
                so, and the freshest issue date leads the subtitle. */}
            <h1 className="arc-title">Banking AI News Archive</h1>
            <p className="arc-subtitle">
              {/* Only page 1 leads the newest issue — on deeper pages
                  digests[0] is that page's newest, not the archive's. */}
              {page === 1 && digests[0]
                ? `Updated ${formatIssueDateShort(digests[0].digest_date)} · `
                : ""}
              {total} issue{total !== 1 ? "s" : ""}
              {pageCount > 1 ? ` · page ${page} of ${pageCount}` : ""}
            </p>
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
                const storyTotal = bankingCount + aiCount;
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
                          {storyTotal} stor{storyTotal !== 1 ? "ies" : "y"}
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

          {pageCount > 1 ? (
            <nav className="arc-pager" aria-label="Archive pagination">
              {hasNewer ? (
                <Link href={archivePath(page - 1)} className="arc-pager-link" rel="prev">
                  ← Newer
                </Link>
              ) : (
                <span className="arc-pager-link arc-pager-spacer" aria-hidden="true">← Newer</span>
              )}

              <span className="arc-pager-info">
                {firstIndex}–{lastIndex} of {total}
              </span>

              {hasOlder ? (
                <Link href={archivePath(page + 1)} className="arc-pager-link" rel="next">
                  Older →
                </Link>
              ) : (
                <span className="arc-pager-link arc-pager-spacer" aria-hidden="true">Older →</span>
              )}
            </nav>
          ) : null}
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
    // digest_date is a bare "YYYY-MM-DD", which Date parses as UTC midnight.
    // Formatting in local time would render the previous day anywhere west of
    // Greenwich — correct on Vercel (UTC), wrong on a laptop. Pin it.
    return new Date(iso).toLocaleDateString("en-US", {
      timeZone: "UTC",
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  } catch {
    return iso;
  }
}

/** "July 28, 2026" — for titles and snippets, where the weekday is dead weight. */
export function formatIssueDateShort(iso: string): string {
  try {
    // digest_date is a bare "YYYY-MM-DD", which Date parses as UTC midnight.
    // Formatting in local time would render the previous day anywhere west of
    // Greenwich — correct on Vercel (UTC), wrong on a laptop. Pin it.
    return new Date(iso).toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "numeric", month: "long", day: "numeric"
    });
  } catch {
    return iso;
  }
}
