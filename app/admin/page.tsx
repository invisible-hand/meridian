import { revalidatePath } from "next/cache";
import Link from "next/link";
import {
  addOrActivateSubscriber,
  addSource,
  approveDigestById,
  ensureSchema,
  getDigestForDate,
  getHitlRequired,
  listActiveSubscriberEmails,
  listRecentDigests,
  listSources,
  listSubscribers,
  removeSourceById,
  removeSubscriberById,
  setHitlRequired,
  skipDigestById
} from "@/lib/db";
import {
  clearAdminAuthenticated,
  isAdminAuthenticated,
  isValidAdminPassword,
  setAdminAuthenticated
} from "@/lib/auth";
import { DailyDigest } from "@/lib/types";
import { getDigestSubject, renderDigestHtml } from "@/lib/email";
import { LLM_PROMPT } from "@/lib/digest";

export const dynamic = "force-dynamic";

async function loginAction(formData: FormData) {
  "use server";
  const password = String(formData.get("password") || "");
  if (!isValidAdminPassword(password)) {
    return;
  }
  await setAdminAuthenticated();
  revalidatePath("/admin");
}

async function logoutAction() {
  "use server";
  await clearAdminAuthenticated();
  revalidatePath("/admin");
}

async function addSubscriberAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return;
  }
  await addOrActivateSubscriber(email);
  revalidatePath("/admin");
}

async function removeSubscriberAction(formData: FormData) {
  "use server";
  const id = Number(formData.get("subscriberId") || 0);
  if (!id) {
    return;
  }
  await removeSubscriberById(id);
  revalidatePath("/admin");
}

async function addSourceAction(formData: FormData) {
  "use server";
  const name = String(formData.get("name") || "").trim();
  const url = String(formData.get("url") || "").trim();
  if (!name || !url.startsWith("http")) {
    return;
  }
  await addSource(name, url, "rss");
  revalidatePath("/admin");
}

async function removeSourceAction(formData: FormData) {
  "use server";
  const id = Number(formData.get("sourceId") || 0);
  if (!id) {
    return;
  }
  await removeSourceById(id);
  revalidatePath("/admin");
}

async function toggleHitlAction(formData: FormData) {
  "use server";
  const enabled = String(formData.get("enabled") || "false") === "true";
  await setHitlRequired(enabled);
  revalidatePath("/admin");
}

async function approveDigestAction(formData: FormData) {
  "use server";
  const digestId = Number(formData.get("digestId") || 0);
  if (!digestId) {
    return;
  }
  await approveDigestById(digestId);
  revalidatePath("/admin");
}

async function skipDigestAction(formData: FormData) {
  "use server";
  const digestId = Number(formData.get("digestId") || 0);
  if (!digestId) {
    return;
  }
  await skipDigestById(digestId);
  revalidatePath("/admin");
}

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

export default async function AdminPage() {
  await ensureSchema();
  const isAuthed = await isAdminAuthenticated();

  if (!isAuthed) {
    return (
      <main className="admin-page">
        <h1>BankingNewsAI Admin</h1>
        <p className="muted" style={{ marginBottom: "1.5rem" }}>
          Set <code>ADMIN_PASSWORD</code> in your environment to log in.
        </p>
        <div className="card" style={{ maxWidth: 360 }}>
          <h2>Login</h2>
          <form action={loginAction}>
            <input name="password" type="password" required placeholder="Admin password" />
            <button type="submit">Sign in</button>
          </form>
        </div>
      </main>
    );
  }

  const todayDate = new Date().toISOString().slice(0, 10);
  const [subscribers, sources, digests, hitlRequired, recipients, todayDigest] = await Promise.all([
    listSubscribers(),
    listSources(),
    listRecentDigests(),
    getHitlRequired(),
    listActiveSubscriberEmails(),
    getDigestForDate({ digestDate: todayDate, category: "fintech_banking" })
  ]);
  const previewDigest = (todayDigest?.content_json as DailyDigest | null) ?? null;
  const promptWordCount = LLM_PROMPT.split(/\s+/).filter(Boolean).length;

  return (
    <main className="admin-page">
      {/* ── Header ── */}
      <div className="admin-header">
        <div>
          <h1>BankingNewsAI Admin</h1>
          <p className="muted">
            {todayDate} &middot;{" "}
            <Link href="/admin/monitor">Full monitoring →</Link>
          </p>
        </div>
        <form action={logoutAction} style={{ margin: 0 }}>
          <button type="submit" className="btn-secondary">
            Logout
          </button>
        </form>
      </div>

      {/* ── KPIs ── */}
      <div className="admin-kpis">
        <div className="card">
          <p className="kpi-label">Recipients</p>
          <h3>{recipients.length}</h3>
        </div>
        <div className="card">
          <p className="kpi-label">Sources</p>
          <h3>{sources.length}</h3>
        </div>
        <div className="card">
          <p className="kpi-label">Today&apos;s digest</p>
          <h3>
            {todayDigest ? (
              <DigestStatusBadge status={todayDigest.status} />
            ) : (
              <span className="badge badge-neutral">none</span>
            )}
          </h3>
        </div>
        <div className="card">
          <p className="kpi-label">Approval gate</p>
          <h3>
            <span className={hitlRequired ? "badge badge-warning" : "badge badge-success"}>
              {hitlRequired ? "manual" : "auto"}
            </span>
          </h3>
        </div>
      </div>

      {/* ── Pipeline runner ── */}
      <span className="section-label">Pipeline</span>
      <div className="card pipeline-card">
        <div className="card-header">
          <h2>Run Pipeline</h2>
          <span className="badge badge-info">one-click</span>
        </div>
        <p className="muted" style={{ marginBottom: "1rem" }}>
          Resets today&apos;s digest, then runs <strong>ingest → generate → send</strong> in sequence.
          Use this for a fully fresh test run.
        </p>
        <form className="inline-form" action="/api/manual/reset-and-run" method="get" target="_blank">
          <button type="submit" className="btn-lg">
            Reset &amp; run full pipeline ↗
          </button>
        </form>
      </div>

      {/* ── HITL gate ── */}
      <span className="section-label">Settings</span>
      <div className="card">
        <div className="card-header">
          <h2>Approval Gate (HITL)</h2>
          <span className={hitlRequired ? "badge badge-warning" : "badge badge-success"}>
            {hitlRequired ? "Approval required" : "Fully automatic"}
          </span>
        </div>
        <p className="muted" style={{ marginBottom: "0.75rem" }}>
          When set to <em>require approval</em>, digests wait for you to approve before sending.
        </p>
        <form action={toggleHitlAction}>
          <select name="enabled" defaultValue={hitlRequired ? "true" : "false"}>
            <option value="false">Automatic send</option>
            <option value="true">Require approval before send</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>

      {/* ── Email preview ── */}
      <span className="section-label">Today&apos;s digest</span>
      <div className="card">
        <div className="card-header">
          <h2>Email Preview</h2>
          <span className="muted">{recipients.length} recipient{recipients.length !== 1 ? "s" : ""}</span>
        </div>
        {!previewDigest ? (
          <div className="alert alert-info">No digest generated yet for {todayDate}.</div>
        ) : (
          <>
            <p style={{ marginBottom: "0.75rem" }}>
              <span className="muted">Subject: </span>
              <strong>{getDigestSubject(previewDigest)}</strong>
            </p>
            <div className="preview-shell">
              <div dangerouslySetInnerHTML={{ __html: renderDigestHtml(previewDigest) }} />
            </div>
          </>
        )}
      </div>

      {/* ── Recent digests ── */}
      <span className="section-label">History</span>
      <div className="card">
        <div className="card-header">
          <h2>Recent Digests</h2>
          <Link href="/admin/monitor" className="muted">
            All logs →
          </Link>
        </div>
        {digests.length === 0 ? (
          <p className="muted">No digests yet.</p>
        ) : (
          digests.map((digest) => (
            <div key={digest.id} className="digest-row card" style={{ margin: "0.4rem 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1 }}>
                <DigestStatusBadge status={digest.status} />
                <span style={{ fontWeight: 600 }}>{digest.digest_date}</span>
                <span className="muted">{digest.category}</span>
              </div>
              <div className="row-actions">
                <form action={approveDigestAction} style={{ margin: 0, display: "inline" }}>
                  <input type="hidden" name="digestId" value={digest.id} />
                  <button type="submit" className="btn-success">
                    Approve
                  </button>
                </form>
                <form action={skipDigestAction} style={{ margin: 0, display: "inline" }}>
                  <input type="hidden" name="digestId" value={digest.id} />
                  <button type="submit" className="btn-danger">
                    Skip
                  </button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── Subscribers ── */}
      <span className="section-label">Subscribers</span>
      <div className="card">
        <div className="card-header">
          <h2>Subscribers</h2>
          <span className="badge badge-neutral">{subscribers.length} total</span>
        </div>
        <form action={addSubscriberAction}>
          <div className="form-row" style={{ display: "flex", gap: "0.5rem" }}>
            <input name="email" type="email" required placeholder="new@company.com" style={{ flex: 1 }} />
            <button type="submit">Add</button>
          </div>
        </form>
        {subscribers.map((subscriber) => (
          <form
            action={removeSubscriberAction}
            key={subscriber.id}
            style={{ margin: "0.3rem 0", display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <input type="hidden" name="subscriberId" value={subscriber.id} />
            <input
              readOnly
              value={subscriber.email}
              style={{ flex: 1 }}
            />
            <span className={`badge ${subscriber.status === "active" ? "badge-success" : "badge-neutral"}`}>
              {subscriber.status}
            </span>
            <button type="submit" className="btn-danger">
              Remove
            </button>
          </form>
        ))}
      </div>

      {/* ── Sources ── */}
      <span className="section-label">Sources</span>
      <div className="card">
        <div className="card-header">
          <h2>RSS / API Sources</h2>
          <span className="badge badge-neutral">{sources.length} active</span>
        </div>
        <form action={addSourceAction}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr auto", gap: "0.5rem" }}>
            <input name="name" required placeholder="Source name" />
            <input name="url" required placeholder="https://..." />
            <button type="submit">Add</button>
          </div>
        </form>
        {sources.map((source) => (
          <form
            action={removeSourceAction}
            key={source.id}
            style={{ margin: "0.3rem 0", display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <input type="hidden" name="sourceId" value={source.id} />
            <input readOnly value={source.name} style={{ width: 160, flexShrink: 0 }} />
            <input readOnly value={source.url} style={{ flex: 1, fontSize: "0.8rem" }} />
            <button type="submit" className="btn-danger">
              Remove
            </button>
          </form>
        ))}
      </div>

      {/* ── LLM Prompt ── */}
      <span className="section-label">AI Configuration</span>
      <div className="card">
        <div className="card-header">
          <h2>LLM System Prompt</h2>
          <span className="badge badge-neutral">{promptWordCount} words</span>
        </div>
        <pre className="prompt-block">{LLM_PROMPT}</pre>
      </div>
    </main>
  );
}
