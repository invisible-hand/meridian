import { revalidatePath } from "next/cache";
import Link from "next/link";
import { addOrActivateSubscriber, ensureSchema } from "@/lib/db";

export const dynamic = "force-dynamic";

async function subscribeAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) return;
  await ensureSchema();
  await addOrActivateSubscriber(email);
  revalidatePath("/");
}

export default async function HomePage() {
  await ensureSchema();

  return (
    <>
      <style>{`
        .lp {
          min-height: 100vh;
          background: #07101f;
          background-image:
            radial-gradient(ellipse 90% 55% at 50% -5%, rgba(59,130,246,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 85% 90%, rgba(99,75,200,0.07) 0%, transparent 55%);
          display: flex;
          flex-direction: column;
          color: #f8fafc;
          font-family: system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .lp-nav {
          padding: 28px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lp-logo {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #fff;
          text-decoration: none;
        }

        .lp-logo span { color: #3b82f6; }

        .lp-nav-link {
          font-size: 13px;
          color: #475569;
          text-decoration: none;
          transition: color 0.15s;
        }

        .lp-nav-link:hover { color: #94a3b8; }

        .lp-hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 48px 24px 64px;
          max-width: 760px;
          margin: 0 auto;
          width: 100%;
        }

        .lp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 32px;
        }

        .lp-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34,197,94,0.6);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .lp-h1 {
          font-size: clamp(2.6rem, 6.5vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #fff;
          margin: 0 0 24px;
        }

        .lp-h1 em {
          font-style: normal;
          color: #3b82f6;
        }

        .lp-sub {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 44px;
          max-width: 440px;
        }

        .lp-form {
          display: flex;
          gap: 8px;
          width: 100%;
          max-width: 480px;
          margin-bottom: 20px;
        }

        .lp-input {
          flex: 1;
          padding: 14px 18px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #fff;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          font-family: inherit;
        }

        .lp-input::placeholder { color: #334155; }

        .lp-input:focus {
          border-color: rgba(59,130,246,0.5);
          background: rgba(255,255,255,0.07);
        }

        .lp-btn {
          padding: 14px 24px;
          background: #fff;
          color: #07101f;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.15s, transform 0.1s;
          font-family: inherit;
        }

        .lp-btn:hover { opacity: 0.92; transform: translateY(-1px); }
        .lp-btn:active { transform: translateY(0); }

        .lp-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .lp-chip {
          font-size: 11px;
          font-weight: 500;
          color: #475569;
          padding: 4px 12px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 999px;
        }

        .lp-footer {
          padding: 24px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .lp-footer-link {
          font-size: 12px;
          color: #334155;
          text-decoration: none;
          transition: color 0.15s;
        }

        .lp-footer-link:hover { color: #64748b; }

        @media (max-width: 480px) {
          .lp-nav { padding: 20px 20px; }
          .lp-footer { padding: 20px; }
          .lp-form { flex-direction: column; }
          .lp-btn { width: 100%; }
        }
      `}</style>

      <div className="lp">
        {/* Nav */}
        <nav className="lp-nav">
          <span className="lp-logo"><span>M</span>eridian</span>
          <Link href="/issues" className="lp-nav-link">Past issues →</Link>
        </nav>

        {/* Hero */}
        <div className="lp-hero">
          <div className="lp-eyebrow">
            <span className="lp-eyebrow-dot" />
            Daily · Banking &amp; AI
          </div>

          <h1 className="lp-h1">
            AI news that<br />
            <em>actually matters</em><br />
            to banking.
          </h1>

          <p className="lp-sub">
            6 curated stories — 3 banking AI, 3 general AI — stripped of paywalls
            and noise, in your inbox before your first meeting.
          </p>

          <form className="lp-form" action={subscribeAction}>
            <input
              className="lp-input"
              name="email"
              type="email"
              required
              placeholder="you@bank.com"
              autoComplete="email"
            />
            <button className="lp-btn" type="submit">
              Subscribe free
            </button>
          </form>

          <div className="lp-chips">
            <span className="lp-chip">🏦 Banking AI</span>
            <span className="lp-chip">🤖 General AI</span>
            <span className="lp-chip">🔓 No paywalls</span>
            <span className="lp-chip">Free forever</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="lp-footer">
          <Link href="/issues" className="lp-footer-link">Past issues</Link>
          <p style={{ margin: 0, fontSize: 11, color: "#1e293b" }}>
            Curated by AI · Delivered daily
          </p>
          <Link href="/admin" className="lp-footer-link">Admin</Link>
        </footer>
      </div>
    </>
  );
}
