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
          background: #f0ede8;
          display: flex;
          flex-direction: column;
        }

        .lp-nav {
          padding: 0 40px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e8e4de;
          background: #f0ede8;
        }

        .lp-logo {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #111111;
          text-decoration: none;
        }

        .lp-logo span { color: #1a3fcb; }

        .lp-nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .lp-nav-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a9a9a;
          text-decoration: none;
          padding: 6px 12px;
          transition: color 0.15s;
        }

        .lp-nav-link:hover { color: #111111; }

        .lp-nav-cta {
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

        .lp-nav-cta:hover { opacity: 0.8; }

        .lp-hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 72px 24px 88px;
          max-width: 820px;
          margin: 0 auto;
          width: 100%;
        }

        .lp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a9a9a;
          margin-bottom: 28px;
        }

        .lp-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #0d6640;
          box-shadow: 0 0 7px rgba(13,102,64,0.5);
          animation: pulse 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .lp-h1 {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 900;
          font-style: italic;
          line-height: 1.03;
          letter-spacing: -0.02em;
          color: #111111;
          margin: 0 0 28px;
        }

        .lp-h1 em {
          font-style: normal;
          color: #1a3fcb;
        }

        .lp-sub {
          font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          color: #5a5a5a;
          line-height: 1.7;
          margin: 0 0 48px;
          max-width: 400px;
        }

        .lp-form {
          display: flex;
          gap: 0;
          width: 100%;
          max-width: 440px;
          margin-bottom: 24px;
          border: 1px solid #c8c3bb;
          background: #ffffff;
        }

        .lp-input {
          flex: 1;
          padding: 14px 18px;
          background: transparent;
          border: none;
          color: #111111;
          font-size: 14px;
          outline: none;
          font-family: var(--font-sans), sans-serif;
        }

        .lp-input::placeholder {
          color: #b0ab9a;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
        }

        .lp-btn {
          padding: 14px 22px;
          background: #111111;
          color: #f0ede8;
          border: none;
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.15s;
        }

        .lp-btn:hover { opacity: 0.8; }

        .lp-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .lp-tag {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9a9a9a;
          padding: 4px 10px;
          border: 1px solid #d8d3cb;
        }

        .lp-footer {
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #e8e4de;
        }

        .lp-footer-link {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b0ab9a;
          text-decoration: none;
          transition: color 0.15s;
        }

        .lp-footer-link:hover { color: #5a5a5a; }

        @media (max-width: 520px) {
          .lp-nav { padding: 0 20px; }
          .lp-footer { padding: 16px 20px; flex-wrap: wrap; gap: 10px; }
          .lp-form { flex-direction: column; border: none; gap: 8px; }
          .lp-input { border: 1px solid #c8c3bb; }
          .lp-btn { width: 100%; }
        }
      `}</style>

      <div className="lp">
        {/* Nav */}
        <nav className="lp-nav">
          <span className="lp-logo">Banking<span>News</span>AI</span>
          <div className="lp-nav-links">
            <Link href="/about" className="lp-nav-link">About</Link>
            <Link href="/issues" className="lp-nav-link">Archive</Link>
            <Link href="/#subscribe" className="lp-nav-cta">Subscribe</Link>
          </div>
        </nav>

        {/* Hero */}
        <div className="lp-hero" id="subscribe">
          <div className="lp-eyebrow">
            <span className="lp-eyebrow-dot" />
            Daily · Banking &amp; AI
          </div>

          <h1 className="lp-h1">
            AI news that <em>actually matters</em><br />
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
              Subscribe free →
            </button>
          </form>

          <div className="lp-tags">
            <span className="lp-tag">🏦 Banking AI</span>
            <span className="lp-tag">🤖 General AI</span>
            <span className="lp-tag">🔓 No paywalls</span>
            <span className="lp-tag">Free forever</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="lp-footer">
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/issues" className="lp-footer-link">Archive</Link>
            <Link href="/about" className="lp-footer-link">About</Link>
          </div>
          <span className="lp-footer-link" style={{ cursor: "default" }}>Curated by AI · Delivered daily</span>
          <Link href="/admin" className="lp-footer-link">Admin</Link>
        </footer>
      </div>
    </>
  );
}
