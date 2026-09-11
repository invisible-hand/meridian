import Link from "next/link";
import { BANK_COUNT, BANK_SOURCE_COUNT } from "@/lib/banks";
import { REGULATORS } from "@/lib/regulators";
import { DOCUMENTS, upcomingDeadlines } from "@/lib/tracker";
import { listSentDigests } from "@/lib/db";
import { ensureSchema } from "@/lib/db";
import { SubscribeForm } from "@/components/subscribe-form";
import { JsonLd, homeSchema } from "@/lib/json-ld";
import { FOOTER_NAV, SiteFooter, SiteHeader, chromeCss } from "./site-chrome";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  await ensureSchema();
  const latest = await listSentDigests(1).then((d) => d[0]).catch(() => undefined);
  const latestHeadline = (latest?.content_json as { briefSummary?: string } | null)?.briefSummary;
  const deadlines = upcomingDeadlines().length;

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

        .lp-form-wrap { margin-top: clamp(40px, 6vw, 72px); max-width: 760px; }
        .lp-form-wrap .sf-form { max-width: 760px; gap: 18px; padding-bottom: 14px; }
        .lp-form-wrap .sf-input { font-size: 22px; }

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

        .lp-more { border-top: 1px solid #e4e4df; background: #fbfbf9; }
        .lp-more-inner { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 40px; padding: 40px 56px 48px; max-width: 1440px; margin: 0 auto; box-sizing: border-box; }
        .lp-more-text { margin: 8px 0 0; font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 14px; line-height: 1.7; color: #4a4a47; }
        .lp-more-text a { color: #111111; text-decoration: none; border-bottom: 1px solid #e4e4df; }
        .lp-more-text a:hover { color: #1a3fcb; border-color: #1a3fcb; }

        @media (max-width: 720px) {
          .lp-more-inner { grid-template-columns: 1fr; gap: 28px; padding: 32px 24px 40px; }
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
            { href: "/banks", label: "banks" },
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

          <div className="lp-form-wrap"><SubscribeForm src="/" /></div>

          <p className="lp-fine">the daily brief, plus a regulation tracker, {BANK_COUNT} bank profiles and an agents playbook · no paywalls · leave any morning</p>
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
              <Link href="/ai-regulation">19 regulators tracked, updated as rules change</Link>
              {" · "}
              <Link href="/agentic-banking">an operating system for AI agents in your bank</Link>
              {" · "}
              <Link href="/banks">what the {BANK_COUNT} largest banks are doing with AI</Link>
            </span>
          </div>
        </div>

        {/* what the site is, for the reader who arrived from a search and for the crawler */}
        <section className="lp-more" aria-label="What is on this site">
          <div className="lp-more-inner">
            <div className="lp-more-col">
              <p className="lp-col-label">THE DAILY BRIEF</p>
              <p className="lp-more-text">
                Six stories every morning on what AI did to banking the day before: three on banks, regulators and deals, three on the models, vendors and infrastructure behind them. Each links to its source. Nothing paywalled, nothing sponsored.
                {latest && latestHeadline ? (
                  <> Latest issue: <Link href={`/issues/${latest.digest_date}`}>{latestHeadline}</Link>.</>
                ) : (
                  <> <Link href="/issues">Read the archive</Link>.</>
                )}
              </p>
            </div>
            <div className="lp-more-col">
              <p className="lp-col-label">THE REGULATION TRACKER</p>
              <p className="lp-more-text">
                <Link href="/ai-regulation">{REGULATORS.length} authorities</Link> and <Link href="/ai-regulation/documents">{DOCUMENTS.length} documents</Link>, from the Fed, OCC and CFPB to the EU AI Act, ECB and PRA, each dated, summarised and linked to the official text. <Link href="/ai-regulation/deadlines">{deadlines} deadlines ahead</Link>, a <Link href="/ai-regulation/compliance-checklist">compliance checklist</Link>, the rules <Link href="/ai-regulation/by-use-case">by use case</Link>, and what <Link href="/ai-regulation/regulator-warnings">regulators are warning about</Link>.
              </p>
            </div>
            <div className="lp-more-col">
              <p className="lp-col-label">BANKS AND AGENTS</p>
              <p className="lp-more-text">
                The AI strategy of <Link href="/banks">each of the {BANK_COUNT} largest US banks</Link>, from the public record: platforms, use cases, leaders, numbers and the regulators each answers to, {BANK_SOURCE_COUNT} sources in all. And <Link href="/agentic-banking">an operating system for AI agents in a bank</Link>: the control plane, the lifecycle gates and what supervisors have said so far. Written for <Link href="/ai-regulation/for-bank-executives">boards and executives</Link> and for <Link href="/ai-regulation/for-compliance-officers">compliance officers</Link>.
              </p>
            </div>
          </div>
        </section>

        <SiteFooter links={FOOTER_NAV} />
      </div>
    </>
  );
}
