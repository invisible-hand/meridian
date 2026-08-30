import Link from "next/link";
import type { ReactNode } from "react";
import { trackerCss } from "./tracker-styles";

// Shared chrome for every tracker page: nav, dark masthead, footer, CTA.

export function TrackerShell({
  eyebrow,
  title,
  updated,
  children,
  ctaTitle = "Regulators move daily. So do we."
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  updated: string;
  children: ReactNode;
  ctaTitle?: string;
}) {
  return (
    <>
      <style>{trackerCss}</style>
      <div className="trk-root">
        <nav className="trk-nav">
          <Link href="/" className="trk-logo">Banking<span>News</span>AI</Link>
          <div className="trk-nav-links">
            <Link href="/ai-regulation" className="trk-nav-link">Tracker</Link>
            <Link href="/ai-regulation/documents" className="trk-nav-link">Documents</Link>
            <Link href="/ai-regulation/deadlines" className="trk-nav-link">Deadlines</Link>
            <Link href="/ai-regulation/compliance-checklist" className="trk-nav-link">Checklist</Link>
            <Link href="/ai-regulation/by-use-case" className="trk-nav-link">By use case</Link>
            <Link href="/issues" className="trk-nav-link">Archive</Link>
            <Link href="/#subscribe" className="trk-nav-cta">Subscribe</Link>
          </div>
        </nav>

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

        <footer className="trk-footer">
          <Link href="/" className="trk-footer-link">Home</Link>
          <Link href="/ai-regulation" className="trk-footer-link">AI Regulation Tracker</Link>
          <Link href="/ai-regulation/documents" className="trk-footer-link">Documents</Link>
          <Link href="/ai-regulation/deadlines" className="trk-footer-link">Deadlines</Link>
          <Link href="/ai-regulation/by-use-case" className="trk-footer-link">By use case</Link>
          <Link href="/ai-regulation/compliance-checklist" className="trk-footer-link">Checklist</Link>
          <Link href="/ai-regulation/regulator-warnings" className="trk-footer-link">Warnings</Link>
          <Link href="/ai-regulation/for-compliance-officers" className="trk-footer-link">For compliance officers</Link>
          <Link href="/issues" className="trk-footer-link">Archive</Link>
        </footer>
      </div>
    </>
  );
}

export function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="trk-section">
      <div className="trk-section-label">
        <span className="trk-section-label-text">{label}</span>
        <div className="trk-section-rule" />
      </div>
      {children}
    </section>
  );
}
