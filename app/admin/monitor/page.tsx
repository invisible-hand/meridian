import Link from "next/link";
import { ensureSchema, listRecentDigests, listRecentNewsItems, listRecentSendLogs } from "@/lib/db";
import { isAdminAuthenticated } from "@/lib/auth";
import { DailyDigest } from "@/lib/types";

export const dynamic = "force-dynamic";

function DigestStatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    sent: "badge badge-success",
    approved: "badge badge-info",
    pending: "badge badge-warning",
    skipped: "badge badge-neutral",
    error: "badge badge-danger"
  };
  return <span className={map[status] ?? "badge badge-neutral"}>{status}</span>;
}

function SendStatusBadge({ status }: { status: string }) {
  return (
    <span className={status === "sent" ? "badge badge-success" : "badge badge-danger"}>
      {status}
    </span>
  );
}

function formatDate(val: string | Date | null | undefined): string {
  if (!val) return "—";
  try {
    return new Date(String(val)).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  } catch {
    return String(val);
  }
}

export default async function AdminMonitorPage() {
  await ensureSchema();
  const isAuthed = await isAdminAuthenticated();

  if (!isAuthed) {
    return (
      <main>
        <h1>Admin Monitoring</h1>
        <p className="muted">
          Login required. Go to <Link href="/admin">/admin</Link>.
        </p>
      </main>
    );
  }

  const [newsItems, digests, sendLogs] = await Promise.all([
    listRecentNewsItems(100),
    listRecentDigests(20),
    listRecentSendLogs(100)
  ]);

  return (
    <main className="admin-page">
      {/* ── Header ── */}
      <div className="admin-header" style={{ marginBottom: "1.5rem" }}>
        <div>
          <h1>Monitoring</h1>
          <p className="muted">
            <Link href="/admin">← Back to admin</Link>
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span className="badge badge-neutral">{newsItems.length} items</span>
          <span className="badge badge-neutral">{digests.length} digests</span>
          <span className="badge badge-neutral">{sendLogs.length} sends</span>
        </div>
      </div>

      {/* ── Digest history ── */}
      <span className="section-label">Digest History</span>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {digests.length === 0 ? (
          <p className="muted" style={{ padding: "1.25rem" }}>
            No digests generated yet.
          </p>
        ) : (
          digests.map((digest) => {
            const content = digest.content_json as DailyDigest | null;
            return (
              <div key={digest.id} style={{ borderBottom: "1px solid var(--border)", padding: "1rem 1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem"
                  }}
                >
                  <DigestStatusBadge status={digest.status} />
                  <strong>{digest.digest_date}</strong>
                  <span className="badge badge-neutral">{digest.category}</span>
                  <span className="soft" style={{ marginLeft: "auto" }}>
                    created {formatDate(digest.created_at)}
                    {digest.sent_at ? ` · sent ${formatDate(digest.sent_at)}` : ""}
                  </span>
                </div>
                {/* Banking stories */}
                {(content?.bankingStories ?? []).length > 0 && (
                  <p className="soft" style={{ margin: "0.5rem 0 0.25rem", fontWeight: 600 }}>🏦 Banking AI</p>
                )}
                {(content?.bankingStories ?? []).map((story, index) => (
                  <div key={`${digest.id}-b${index}`} className="story-card">
                    <p className="story-title">{index + 1}. {story.title}</p>
                    <p className="story-summary">{story.executiveSummary}</p>
                    <a href={story.sourceUrl} target="_blank" rel="noreferrer" className="soft">{story.sourceUrl}</a>
                  </div>
                ))}
                {/* AI stories */}
                {(content?.aiStories ?? []).length > 0 && (
                  <p className="soft" style={{ margin: "0.75rem 0 0.25rem", fontWeight: 600 }}>🤖 General AI</p>
                )}
                {(content?.aiStories ?? []).map((story, index) => (
                  <div key={`${digest.id}-a${index}`} className="story-card" style={{ borderLeftColor: "var(--success)" }}>
                    <p className="story-title">{index + 1}. {story.title}</p>
                    <p className="story-summary">{story.executiveSummary}</p>
                    <a href={story.sourceUrl} target="_blank" rel="noreferrer" className="soft">{story.sourceUrl}</a>
                  </div>
                ))}
                {/* Legacy fallback */}
                {(content?.stories ?? []).length > 0 && !content?.bankingStories && (
                  (content?.stories ?? []).map((story, index) => (
                    <div key={`${digest.id}-l${index}`} className="story-card">
                      <p className="story-title">{index + 1}. {story.title}</p>
                      <p className="story-summary">{story.executiveSummary}</p>
                      <a href={story.sourceUrl} target="_blank" rel="noreferrer" className="soft">{story.sourceUrl}</a>
                    </div>
                  ))
                )}
              </div>
            );
          })
        )}
      </div>

      {/* ── Send logs ── */}
      <span className="section-label">Send Logs</span>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {sendLogs.length === 0 ? (
          <p className="muted" style={{ padding: "1.25rem" }}>
            No send logs yet.
          </p>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Email</th>
                <th>Digest #</th>
                <th>Sent at</th>
                <th>Error</th>
              </tr>
            </thead>
            <tbody>
              {sendLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <SendStatusBadge status={log.status} />
                  </td>
                  <td className="col-meta">{log.email}</td>
                  <td className="col-meta">#{log.digest_id}</td>
                  <td className="col-meta">{formatDate(log.created_at)}</td>
                  <td className="col-meta" style={{ color: "var(--danger)" }}>
                    {log.error ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Ingested items ── */}
      <span className="section-label">Recently Ingested ({newsItems.length})</span>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {newsItems.length === 0 ? (
          <p className="muted" style={{ padding: "1.25rem" }}>
            No items ingested yet.
          </p>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Source</th>
                <th>Published</th>
                <th>Ingested</th>
              </tr>
            </thead>
            <tbody>
              {newsItems.map((item) => (
                <tr key={item.id}>
                  <td className="col-title">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </td>
                  <td className="col-source">{item.source_name ?? "unknown"}</td>
                  <td className="col-meta">{item.published_at ? formatDate(item.published_at) : "—"}</td>
                  <td className="col-meta">{formatDate(item.ingested_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
