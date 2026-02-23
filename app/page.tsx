import { revalidatePath } from "next/cache";
import Link from "next/link";
import { addOrActivateSubscriber, ensureSchema, listSentDigests } from "@/lib/db";
import { DailyDigest } from "@/lib/types";

export const dynamic = "force-dynamic";

async function subscribeAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) return;
  await ensureSchema();
  await addOrActivateSubscriber(email);
  revalidatePath("/");
}

const FEATURES = [
  {
    icon: "🏦",
    color: "#3b82f6",
    title: "Banking AI",
    desc: "AI deployments at major banks, regulatory shifts, fraud tech, fintech M&A — only stories where the banking angle is explicit and concrete."
  },
  {
    icon: "🤖",
    color: "#22c55e",
    title: "General AI",
    desc: "Model releases, capability breakthroughs, enterprise AI adoption — the broader AI developments a banking executive needs to track."
  },
  {
    icon: "🔓",
    color: "#f59e0b",
    title: "Paywall-free",
    desc: "We filter out paywalled teasers automatically. Every story in your digest is one you can actually read."
  },
  {
    icon: "⚡",
    color: "#a855f7",
    title: "Under 5 minutes",
    desc: "Six curated stories. Executive summaries written for 7am between meetings. No fluff, no filler."
  }
];

const HOW = [
  {
    n: "01",
    title: "Scan 20+ sources",
    desc: "Banking Dive, Finextra, Tearsheet, Crowdfund Insider, PYMNTS, smol.ai/issues, and more — checked every morning."
  },
  {
    n: "02",
    title: "AI filters & writes",
    desc: "A dedicated LLM pass strips paywalls, removes noise, and writes concise executive summaries grounded in real facts."
  },
  {
    n: "03",
    title: "In your inbox by 8am",
    desc: "Six stories — 3 banking AI, 3 general AI — delivered before your first meeting. Read in 4 minutes."
  }
];

export default async function HomePage() {
  await ensureSchema();
  const recentDigests = await listSentDigests(3).catch(() => []);
  const latestDigest = recentDigests[0]
    ? (recentDigests[0].content_json as DailyDigest | null)
    : null;
  const latestDate = recentDigests[0]?.digest_date ?? null;

  const allBankingStories = latestDigest?.bankingStories ?? latestDigest?.stories ?? [];
  const allAiStories = latestDigest?.aiStories ?? [];

  return (
    <>
      {/* ── NAV ────────────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(8,15,30,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 2rem"
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#fff", letterSpacing: "-0.02em" }}>
            <span style={{ color: "#3b82f6" }}>M</span>eridian
          </span>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/issues" style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
              Past issues
            </Link>
            <a href="#subscribe" style={{
              background: "#3b82f6", color: "#fff", fontSize: 13, fontWeight: 600,
              padding: "7px 18px", borderRadius: 8, textDecoration: "none"
            }}>
              Subscribe free
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(160deg,#080f1e 0%,#0f2444 55%,#0a2010 100%)",
        padding: "90px 2rem 80px", textAlign: "center"
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: 999, padding: "5px 14px", marginBottom: 28
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#93c5fd", letterSpacing: "0.06em" }}>
              DAILY · FREE · BANKING &amp; AI
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 900, color: "#fff",
            lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 20px"
          }}>
            The AI brief built for<br />
            <span style={{ color: "#3b82f6" }}>banking executives</span>
          </h1>

          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: "#94a3b8", lineHeight: 1.65, margin: "0 0 40px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Every morning, Meridian scans 20+ sources, strips paywalls and noise,
            and delivers <strong style={{ color: "#e2e8f0" }}>6 curated stories</strong> — 3 banking AI,
            3 general AI — straight to your inbox.
          </p>

          {/* Subscribe form */}
          <form
            id="subscribe"
            action={subscribeAction}
            style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", margin: "0 0 16px" }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="you@bank.com"
              style={{
                flex: "1 1 260px", maxWidth: 320, padding: "13px 18px",
                borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.07)", color: "#fff",
                fontSize: 15, outline: "none"
              }}
            />
            <button
              type="submit"
              style={{
                padding: "13px 28px", borderRadius: 10, border: "none",
                background: "#3b82f6", color: "#fff", fontSize: 15,
                fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap"
              }}
            >
              Subscribe free →
            </button>
          </form>
          <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>
            No spam. Unsubscribe in one click anytime.
          </p>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "72px 2rem" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6366f1", marginBottom: 12 }}>
            What you get
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 48px", letterSpacing: "-0.02em" }}>
            Signal, not noise
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
                padding: "24px 22px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 20,
                  background: `${f.color}18`, marginBottom: 14
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "72px 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6366f1", marginBottom: 12 }}>
            How it works
          </p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 48px", letterSpacing: "-0.02em" }}>
            Fully automated. Editorially curated.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 0 }}>
            {HOW.map((step, i) => (
              <div key={step.n} style={{ padding: "0 28px 0 0", position: "relative" }}>
                {i < HOW.length - 1 && (
                  <div style={{
                    position: "absolute", top: 20, right: 0,
                    width: 28, height: 2, background: "#e5e7eb",
                    display: "none" // hidden on mobile via inline
                  }} />
                )}
                <div style={{
                  fontSize: 12, fontWeight: 800, color: "#3b82f6",
                  letterSpacing: "0.08em", marginBottom: 10
                }}>
                  {step.n}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST DIGEST PREVIEW ──────────────────────────────────── */}
      {latestDigest && (
        <section style={{ background: "#f1f5f9", padding: "72px 2rem" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6366f1", marginBottom: 12 }}>
              Latest issue
            </p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
              Here&apos;s what it looks like
            </h2>
            <p style={{ textAlign: "center", fontSize: 13, color: "#64748b", margin: "0 0 36px" }}>
              Issue from {latestDate}
            </p>

            {allBankingStories.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  background: "#0f2444", borderRadius: "10px 10px 0 0",
                  padding: "12px 20px", display: "flex", alignItems: "center", gap: 8
                }}>
                  <span style={{ fontSize: 14 }}>🏦</span>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>Banking AI</span>
                </div>
                {allBankingStories.slice(0, 2).map((story, i) => (
                  <div key={i} style={{
                    background: "#fff", border: "1px solid #e5e7eb",
                    borderTop: i === 0 ? "none" : "1px solid #e5e7eb",
                    padding: "18px 20px",
                    borderRadius: i === allBankingStories.slice(0,2).length - 1 ? "0 0 10px 10px" : 0
                  }}>
                    <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                      <span style={{ color: "#94a3b8", fontWeight: 500, marginRight: 6 }}>{i + 1}.</span>
                      {story.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>
                      {story.executiveSummary.slice(0, 160)}{story.executiveSummary.length > 160 ? "…" : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {allAiStories.length > 0 && (
              <div style={{ marginBottom: 28 }}>
                <div style={{
                  background: "#0f2e1a", borderRadius: "10px 10px 0 0",
                  padding: "12px 20px", display: "flex", alignItems: "center", gap: 8
                }}>
                  <span style={{ fontSize: 14 }}>🤖</span>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff" }}>General AI</span>
                </div>
                {allAiStories.slice(0, 2).map((story, i) => (
                  <div key={i} style={{
                    background: "#fff", border: "1px solid #e5e7eb",
                    borderTop: i === 0 ? "none" : "1px solid #e5e7eb",
                    padding: "18px 20px",
                    borderRadius: i === allAiStories.slice(0,2).length - 1 ? "0 0 10px 10px" : 0
                  }}>
                    <p style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                      <span style={{ color: "#94a3b8", fontWeight: 500, marginRight: 6 }}>{i + 1}.</span>
                      {story.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>
                      {story.executiveSummary.slice(0, 160)}{story.executiveSummary.length > 160 ? "…" : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div style={{ textAlign: "center" }}>
              <Link href="/issues" style={{
                display: "inline-block", fontSize: 13, fontWeight: 600,
                color: "#3b82f6", textDecoration: "none"
              }}>
                Browse all past issues →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ─────────────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg,#080f1e 0%,#0f2444 100%)",
        padding: "72px 2rem", textAlign: "center"
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 800, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            Start your morning smarter
          </h2>
          <p style={{ fontSize: 15, color: "#94a3b8", margin: "0 0 36px", lineHeight: 1.6 }}>
            Join banking executives who read Meridian before their first meeting.
          </p>
          <form
            action={subscribeAction}
            style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="you@bank.com"
              style={{
                flex: "1 1 240px", maxWidth: 300, padding: "13px 18px",
                borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.07)", color: "#fff",
                fontSize: 15, outline: "none"
              }}
            />
            <button
              type="submit"
              style={{
                padding: "13px 28px", borderRadius: 10, border: "none",
                background: "#3b82f6", color: "#fff", fontSize: 15,
                fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap"
              }}
            >
              Subscribe free →
            </button>
          </form>
          <p style={{ fontSize: 12, color: "#475569", marginTop: 14 }}>
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer style={{
        background: "#080f1e", borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 2rem"
      }}>
        <div style={{
          maxWidth: 1080, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12
        }}>
          <span style={{ fontWeight: 800, fontSize: 15, color: "#fff" }}>
            <span style={{ color: "#3b82f6" }}>M</span>eridian
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/issues" style={{ color: "#64748b", fontSize: 13, textDecoration: "none" }}>Past issues</Link>
            <Link href="/admin" style={{ color: "#64748b", fontSize: 13, textDecoration: "none" }}>Admin</Link>
          </div>
          <p style={{ color: "#475569", fontSize: 12, margin: 0 }}>
            Curated by AI · Delivered daily
          </p>
        </div>
      </footer>
    </>
  );
}
