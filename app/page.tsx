import { redirect } from "next/navigation";
import Link from "next/link";
import { addOrActivateSubscriber, ensureSchema } from "@/lib/db";
import { JsonLd, homeSchema } from "@/lib/json-ld";
import { FOOTER_NAV, SiteFooter, SiteHeader, chromeCss } from "./site-chrome";

export const dynamic = "force-dynamic";

async function subscribeAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) return;
  await ensureSchema();
  await addOrActivateSubscriber(email);
  redirect("/?subscribed=1");
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ subscribed?: string }>;
}) {
  await ensureSchema();
  const { subscribed } = await searchParams;
  const didSubscribe = subscribed === "1";

  return (
    <>
      <JsonLd data={homeSchema()} />
      <style>{chromeCss}</style>
      <style>{`
        .lp {
          min-height: 100vh;
          background: #fbfbf9;
          color: #111111;
          display: flex;
          flex-direction: column;
        }

        /* ambient top line — the only chrome */

        /* the sentence */
        .lp-hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 56px;
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .lp-h1 {
          margin: 0;
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: clamp(2.6rem, 7.2vw, 6.75rem);
          font-weight: 300;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: #111111;
        }

        .lp-h1 strong { font-weight: 600; }
        .lp-h1 em { font-style: normal; color: #1a3fcb; }

        /* the interface is one line */
        .lp-form {
          display: flex;
          align-items: baseline;
          gap: 18px;
          margin-top: clamp(40px, 6vw, 72px);
          max-width: 760px;
          border-bottom: 2px solid #111111;
          padding-bottom: 14px;
        }

        .lp-arrow {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 13px;
          color: #1a3fcb;
          flex-shrink: 0;
        }

        .lp-input {
          flex: 1;
          min-width: 0;
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 22px;
          font-weight: 300;
          color: #111111;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          outline: none;
          box-shadow: none;
        }

        .lp-input:focus { outline: none; border: none; box-shadow: none; }
        .lp-input::placeholder { color: #b3b3ae; font-weight: 300; }

        .lp-btn {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #111111;
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .lp-btn:hover { color: #1a3fcb; background: transparent; }

        .lp-fine {
          margin-top: 18px;
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: #b3b3ae;
        }

        .lp-success {
          margin-top: clamp(40px, 6vw, 72px);
          max-width: 760px;
          border-bottom: 2px solid #1a3fcb;
          padding-bottom: 14px;
        }

        .lp-success-title {
          margin: 0;
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #1a3fcb;
        }

        .lp-success-body {
          margin: 8px 0 0;
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.06em;
          line-height: 1.7;
          color: #6a6a6a;
        }

        /* the brief, as data */
        .lp-strip {
          display: flex;
          padding: 0 56px 40px;
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .lp-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 40px;
          border-right: 1px solid #e4e4df;
        }

        .lp-col:first-child { padding-left: 0; }
        .lp-col:last-child { border-right: none; }

        .lp-col-label {
          font-family: var(--font-mono), 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          color: #b3b3ae;
        }

        .lp-col-text {
          font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #111111;
        }

        .lp-col-text a { color: #111111; text-decoration: none; border-bottom: 1px solid #e4e4df; }
        .lp-col-text a:hover { color: #1a3fcb; border-color: #1a3fcb; }

        @media (max-width: 720px) {
          .lp-hero { padding: 40px 24px; }
          .lp-strip { flex-direction: column; padding: 0 24px 32px; }
          .lp-col { padding: 12px 0; border-right: none; border-bottom: 1px solid #e4e4df; }
          .lp-col:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="lp">
        <SiteHeader
          center="daily · six stories · in your inbox by 7 am ET"
          links={[
            { href: "/ai-regulation", label: "regulation" },
            { href: "/about", label: "about" },
            { href: "/issues", label: "archive" }
          ]}
        />

        {/* the sentence */}
        <div className="lp-hero" id="subscribe">
          <h1 className="lp-h1">
            Everything AI did<br />
            to banking <strong>yesterday</strong>,<br />
            read by <em>7 am</em>.
          </h1>

          {didSubscribe ? (
            <div className="lp-success">
              <p className="lp-success-title">You&rsquo;re in.</p>
              <p className="lp-success-body">
                first issue lands tomorrow morning · check spam if it doesn&rsquo;t
              </p>
            </div>
          ) : (
            <form className="lp-form" action={subscribeAction}>
              <span className="lp-arrow">→</span>
              <input
                className="lp-input"
                name="email"
                type="email"
                required
                placeholder="your work address"
                autoComplete="email"
                aria-label="Email address"
              />
              <button className="lp-btn" type="submit">
                subscribe — free
              </button>
            </form>
          )}

          <p className="lp-fine">no paywalls · no noise · leave any morning</p>
        </div>

        {/* the brief, as data */}
        <div className="lp-strip">
          <div className="lp-col">
            <span className="lp-col-label">BANKING AI</span>
            <span className="lp-col-text">3 stories · institutions, regulators, deals</span>
          </div>
          <div className="lp-col">
            <span className="lp-col-label">GENERAL AI</span>
            <span className="lp-col-text">3 stories · models, vendors, infrastructure</span>
          </div>
          <div className="lp-col">
            <span className="lp-col-label">STANDING</span>
            <span className="lp-col-text">
              <Link href="/ai-regulation">18 regulators tracked, updated as rules change</Link>
            </span>
          </div>
        </div>

        <SiteFooter links={FOOTER_NAV} />
      </div>
    </>
  );
}
