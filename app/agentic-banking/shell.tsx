import Link from "next/link";
import type { ReactNode } from "react";
import { trackerCss } from "../ai-regulation/tracker-styles";
import { SiteFooter, SiteHeader, chromeCss } from "../site-chrome";

// Chrome for the agentic-banking section. Same masthead and body styles as
// the tracker (one visual system), with this section's own navigation.

export const AGENT_NAV = [
  { href: "/agentic-banking", label: "overview" },
  { href: "/agentic-banking/control-plane", label: "control plane" },
  { href: "/agentic-banking/lifecycle", label: "lifecycle" },
  { href: "/agentic-banking/regulation", label: "what regulators say" },
  { href: "/ai-regulation", label: "tracker" },
  { href: "/#subscribe", label: "subscribe" }
];

export const agentCss = `
  .ag-figure { margin: 8px 0 36px; }
  .ag-figure svg { width: 100%; height: auto; display: block; }
  .ag-figcaption {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    color: #9a9a96;
    margin-top: 10px;
    line-height: 1.6;
  }
  .ag-figcaption a { color: #6a6a6a; }
  .ag-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px 28px; margin: 8px 0 12px; }
  .ag-card { border-top: 1px solid #e4e4df; padding-top: 14px; }
  .ag-card-n {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px; letter-spacing: 0.14em; color: #1a3fcb; margin: 0 0 6px;
  }
  .ag-card h3 {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-weight: 400; font-size: 1.1rem; letter-spacing: -0.02em; margin: 0 0 8px; color: #111111;
  }
  .ag-card h3 a { color: inherit; text-decoration: none; border-bottom: 1px solid #d8d8d3; }
  .ag-card h3 a:hover { border-color: #1a3fcb; color: #1a3fcb; }
  .ag-card p {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 14px; line-height: 1.65; color: #3a3a3a; margin: 0 0 8px;
  }
  .ag-docs { list-style: none; padding: 0; margin: 0; }
  .ag-docs li {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 13px; line-height: 1.55; color: #5a5a56; margin: 0 0 6px; padding-left: 14px; position: relative;
  }
  .ag-docs li::before { content: "·"; position: absolute; left: 2px; color: #1a3fcb; }
  .ag-docs a { color: #111111; text-decoration: none; border-bottom: 1px solid #d8d8d3; }
  .ag-docs a:hover { color: #1a3fcb; border-color: #1a3fcb; }
  .ag-step { display: grid; grid-template-columns: 56px 1fr; gap: 0 18px; border-top: 1px solid #e4e4df; padding: 18px 0 8px; }
  .ag-step-n {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: 2rem; font-weight: 300; letter-spacing: -0.04em; color: #1a3fcb; line-height: 1;
  }
  .ag-gate {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 14px; color: #111111; margin: 0 0 10px; padding-left: 12px; border-left: 2px solid #1a3fcb;
  }
  .ag-pill {
    display: inline-block; font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.1em;
    color: #1a3fcb; border: 1px solid #c9d3f5; border-radius: 999px; padding: 2px 8px; margin-left: 8px; vertical-align: middle;
  }
  @media (max-width: 720px) { .ag-step { grid-template-columns: 40px 1fr; } .ag-step-n { font-size: 1.5rem; } }
`;

export function AgentShell({
  eyebrow,
  title,
  updated,
  children,
  ctaTitle = "Agents move fast. So do their regulators."
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  updated: string;
  children: ReactNode;
  ctaTitle?: string;
}) {
  return (
    <>
      <style>{chromeCss}</style>
      <style>{trackerCss}</style>
      <style>{agentCss}</style>
      <div className="trk-root">
        <SiteHeader links={AGENT_NAV} />

        <div className="trk-masthead">
          <div className="trk-masthead-inner">
            <p className="trk-eyebrow">{eyebrow}</p>
            <div className="trk-masthead-rule" />
            <h1 className="trk-h1">{title}</h1>
            <p className="trk-updated">{updated}</p>
          </div>
        </div>

        <main className="trk-body">
          {children}
          <div className="trk-cta">
            <h3>{ctaTitle}</h3>
            <p>6 curated AI stories for banking executives · Every morning · Free</p>
            <Link href="/#subscribe" className="trk-cta-btn">Subscribe to BankingNewsAI →</Link>
          </div>
        </main>

        <SiteFooter
          links={[
            { href: "/", label: "home" },
            { href: "/agentic-banking", label: "agents" },
            { href: "/agentic-banking/control-plane", label: "control plane" },
            { href: "/agentic-banking/lifecycle", label: "lifecycle" },
            { href: "/agentic-banking/regulation", label: "what regulators say" },
            { href: "/ai-regulation", label: "tracker" },
            { href: "/ai-regulation/documents", label: "documents" },
            { href: "/issues", label: "archive" }
          ]}
        />
      </div>
    </>
  );
}

/** Document reference list used by every section page. */
export function DocList({ docs, resolve }: { docs: { slug: string; why: string }[]; resolve: (slug: string) => { href: string; name: string; authority: string } | null }) {
  return (
    <ul className="ag-docs">
      {docs.map((d) => {
        const r = resolve(d.slug);
        if (!r) return null;
        return (
          <li key={d.slug}>
            <Link href={r.href}>{r.name}</Link>
            <span style={{ color: "#9a9a96" }}> · {r.authority}</span> — {d.why}
          </li>
        );
      })}
    </ul>
  );
}
