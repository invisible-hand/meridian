import type { Metadata } from "next";
import Link from "next/link";
import { siteInventory } from "@/lib/welcome-email";
import { FOOTER_NAV, SiteFooter, SiteHeader, chromeCss } from "../site-chrome";
import { SubscribeTrack } from "./track";

// Thank-you page every form lands on. Reads the source page and outcome from
// the query string, fires the conversion event, and shows the same inventory
// of the site the welcome email carries.

export const metadata: Metadata = {
  title: "You're in",
  robots: { index: false, follow: true }
};

export const dynamic = "force-dynamic";

const LINES: Record<string, string> = {
  new: "Your first brief lands tomorrow at 7 am ET. A welcome note with the links below is on its way; check spam if it hasn't arrived in a minute.",
  reactivated: "Welcome back. Your first brief lands tomorrow at 7 am ET.",
  "already-active": "You were already on the list, so nothing changed. The next brief lands tomorrow at 7 am ET."
};

export default async function SubscribedPage({ searchParams }: { searchParams: Promise<{ src?: string; s?: string }> }) {
  const { src, s } = await searchParams;
  const source = src && /^\/[A-Za-z0-9\-_/.]*$/.test(src) ? src : "/";
  const status = s && s in LINES ? s : "new";

  return (
    <>
      <style>{chromeCss}</style>
      <style>{`
        .sb { min-height: 100vh; background: #fbfbf9; color: #111111; display: flex; flex-direction: column; }
        .sb-main { flex: 1; padding: 48px 56px 72px; max-width: 1040px; width: 100%; margin: 0 auto; box-sizing: border-box; }
        .sb-h1 { margin: 0 0 18px; font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-size: clamp(2.4rem, 6vw, 5rem); font-weight: 300; line-height: 1.04; letter-spacing: -0.045em; }
        .sb-h1 em { font-style: normal; color: #1a3fcb; }
        .sb-lead { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 17px; line-height: 1.65; color: #3a3a38; max-width: 640px; margin: 0 0 44px; }
        .sb-k { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: #b3b3ae; margin: 0 0 6px; }
        .sb-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #111111; }
        .sb-list li { border-bottom: 1px solid #e4e4df; padding: 14px 0; display: grid; grid-template-columns: 240px 1fr; gap: 6px 28px; }
        .sb-list a { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 15px; font-weight: 600; color: #111111; text-decoration: none; }
        .sb-list a:hover { color: #1a3fcb; }
        .sb-list span { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 14px; line-height: 1.55; color: #5a5a56; }
        .sb-back { display: inline-block; margin-top: 36px; font-family: var(--font-mono), 'Courier New', monospace; font-size: 11px; letter-spacing: 0.12em; color: #6a6a6a; text-decoration: none; }
        .sb-back:hover { color: #111111; }
        @media (max-width: 720px) { .sb-main { padding: 32px 24px 56px; } .sb-list li { grid-template-columns: 1fr; } }
      `}</style>
      <SubscribeTrack source={source} status={status} />
      <div className="sb">
        <SiteHeader links={[{ href: "/ai-regulation", label: "regulation" }, { href: "/banks", label: "banks" }, { href: "/agentic-banking", label: "agents" }, { href: "/issues", label: "archive" }]} />
        <main className="sb-main">
          <h1 className="sb-h1">You&rsquo;re <em>in</em>.</h1>
          <p className="sb-lead">{LINES[status]}</p>
          <p className="sb-k">While you wait, everything else on the site is free</p>
          <ul className="sb-list">
            {siteInventory().map((it) => (
              <li key={it.path}>
                <Link href={it.path}>{it.label} →</Link>
                <span>{it.line}</span>
              </li>
            ))}
          </ul>
          <Link href={source === "/" ? "/issues" : source} className="sb-back">← back to {source === "/" ? "the latest issues" : "where you were"}</Link>
        </main>
        <SiteFooter links={FOOTER_NAV} />
      </div>
    </>
  );
}
