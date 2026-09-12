import type { ReactNode } from "react";
import { SubscribeForm } from "@/components/subscribe-form";
import { trackerCss } from "../ai-regulation/tracker-styles";
import { SiteFooter, SiteHeader, chromeCss } from "../site-chrome";

// Chrome for the banks section: same masthead and body system as the tracker
// and the agents section, with this section's navigation.

export const BANK_NAV = [
  { href: "/banks", label: "banks" },
  { href: "/banks/ai-index", label: "ranking" },
  { href: "/ai-regulation", label: "tracker" },
  { href: "/agentic-banking", label: "agents" },
  { href: "/ai-regulation/for-bank-executives", label: "for executives" },
  { href: "#subscribe", label: "subscribe" }
];

export const bankCss = `
  .bk-facts { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px 28px; margin: 0 0 8px; }
  .bk-fact { border-top: 1px solid #e4e4df; padding-top: 10px; }
  .bk-fact-k { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #b3b3ae; margin: 0 0 4px; }
  .bk-fact-v { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 15px; color: #111111; line-height: 1.5; margin: 0; }
  .bk-posture { font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-size: clamp(1.15rem, 2vw, 1.4rem); letter-spacing: -0.02em; color: #1a3fcb; line-height: 1.35; margin: 0 0 28px; max-width: 860px; }
  .bk-timeline { list-style: none; margin: 0; padding: 0; }
  .bk-timeline li { display: grid; grid-template-columns: 110px 1fr; gap: 0 20px; border-top: 1px solid #e9e9e5; padding: 14px 0; }
  .bk-tl-date { font-family: var(--font-mono), 'Courier New', monospace; font-size: 11px; letter-spacing: 0.06em; color: #6a6a6a; padding-top: 3px; }
  .bk-tl-title { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 15px; font-weight: 600; color: #111111; margin: 0 0 4px; }
  .bk-tl-detail { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 14px; line-height: 1.6; color: #3a3a3a; margin: 0; }
  .bk-cite { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.04em; color: #1a3fcb; text-decoration: none; margin-left: 6px; vertical-align: super; }
  .bk-cite:hover { text-decoration: underline; }
  .bk-quote { border-left: 2px solid #1a3fcb; padding: 4px 0 4px 18px; margin: 0 0 22px; }
  .bk-quote p { font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-size: 1.15rem; letter-spacing: -0.015em; line-height: 1.5; color: #111111; margin: 0 0 6px; }
  .bk-quote cite { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: #9a9a96; font-style: normal; }
  .bk-sources { list-style: none; margin: 0; padding: 0; counter-reset: src; }
  .bk-sources li { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 13.5px; line-height: 1.6; color: #3a3a3a; padding: 8px 0 8px 36px; border-top: 1px solid #e9e9e5; position: relative; counter-increment: src; }
  .bk-sources li::before { content: counter(src); position: absolute; left: 0; top: 9px; font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; color: #1a3fcb; }
  .bk-sources a { color: #111111; text-decoration: none; border-bottom: 1px solid #d8d8d3; }
  .bk-sources a:hover { color: #1a3fcb; border-color: #1a3fcb; }
  .bk-sources .bk-src-meta { color: #9a9a96; font-size: 12px; }
  .bk-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px 28px; margin: 8px 0 12px; }
  .bk-card { border-top: 1px solid #e4e4df; padding-top: 14px; }
  .bk-card-n { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.14em; color: #1a3fcb; margin: 0 0 6px; }
  .bk-card h3 { font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-weight: 400; font-size: 1.15rem; letter-spacing: -0.02em; margin: 0 0 8px; color: #111111; }
  .bk-card h3 a { color: inherit; text-decoration: none; border-bottom: 1px solid #d8d8d3; }
  .bk-card h3 a:hover { border-color: #1a3fcb; color: #1a3fcb; }
  .bk-card p { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 14px; line-height: 1.65; color: #3a3a3a; margin: 0 0 8px; }
  .bk-card .bk-card-meta { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.08em; color: #9a9a96; }
  .bk-figure { margin: 8px 0 36px; }
  .bk-figure svg { width: 100%; height: auto; display: block; }
  .bk-figcaption { font-family: var(--font-mono), 'Courier New', monospace; font-size: 11px; letter-spacing: 0.08em; color: #9a9a96; margin-top: 10px; line-height: 1.6; }
  .bk-people { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px 28px; margin: 4px 0 8px; }
  .bk-person { border-top: 1px solid #e4e4df; padding-top: 12px; }
  .bk-person-name { font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-size: 1.08rem; letter-spacing: -0.015em; color: #111111; margin: 0 0 4px; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .bk-person-role { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 13.5px; line-height: 1.55; color: #3a3a3a; margin: 0; }
  .bk-li { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: #1a3fcb; text-decoration: none; border-bottom: 1px solid #c9d0f2; padding-bottom: 1px; }
  .bk-li:hover { border-color: #1a3fcb; }
  .bk-toc { display: none; }
  @media (min-width: 1380px) {
    .bk-toc { display: block; position: sticky; top: 96px; float: left; width: 150px; margin-left: -200px; margin-top: 6px; }
    .bk-toc-title { font-family: var(--font-mono), 'Courier New', monospace; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: #b3b3ae; margin: 0 0 12px; }
    .bk-toc ol { list-style: none; margin: 0; padding: 0; border-left: 1px solid #e4e4df; }
    .bk-toc li { margin: 0; }
    .bk-toc a { display: block; font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 12.5px; line-height: 1.4; color: #8a8a86; text-decoration: none; padding: 5px 0 5px 14px; margin-left: -1px; border-left: 1px solid transparent; transition: color 120ms, border-color 120ms; }
    .bk-toc a:hover { color: #111111; }
    .bk-toc li.is-active a { color: #1a3fcb; border-left-color: #1a3fcb; }
  }
  @media (max-width: 720px) { .bk-timeline li { grid-template-columns: 1fr; gap: 2px; } }
`;

export function BankShell({
  eyebrow,
  title,
  updated,
  children,
  path = "/banks",
  ctaTitle = "Every bank's next AI move, the morning after."
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  updated: string;
  children: ReactNode;
  /** Path of the page, recorded as the signup source */
  path?: string;
  ctaTitle?: string;
}) {
  return (
    <>
      <style>{chromeCss}</style>
      <style>{trackerCss}</style>
      <style>{bankCss}</style>
      <div className="trk-root">
        <SiteHeader links={BANK_NAV} />
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
          <div className="trk-cta" id="subscribe">
            <h3>{ctaTitle}</h3>
            <p>the daily brief · six sourced stories · in your inbox by 7 am ET · free</p>
            <SubscribeForm src={path} />
            <p className="sf-fine">plus every tracker, bank and agent page update, the morning after · leave any morning</p>
          </div>
        </main>
        <SiteFooter
          links={[
            { href: "/", label: "home" },
            { href: "/banks", label: "banks" },
            { href: "/ai-regulation", label: "tracker" },
            { href: "/agentic-banking", label: "ai agents" },
            { href: "/ai-governance", label: "ai governance" },
            { href: "/ai-fraud-detection", label: "ai fraud detection" },
            { href: "/ai-regulation/for-bank-executives", label: "for executives" },
            { href: "/issues", label: "archive" }
          ]}
        />
      </div>
    </>
  );
}

export function Section({ label, id, children }: { label: string; id?: string; children: ReactNode }) {
  return (
    <section className="trk-section" id={id}>
      <div className="trk-section-label">
        <span className="trk-section-label-text">{label}</span>
        <div className="trk-section-rule" />
      </div>
      {children}
    </section>
  );
}
