import Link from "next/link";
import type { ReactNode } from "react";
import { trackerCss } from "./tracker-styles";
import { SiteFooter, SiteHeader, chromeCss } from "../site-chrome";

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
      <style>{chromeCss}</style>
      <style>{trackerCss}</style>
      <div className="trk-root">
        <SiteHeader
          links={[
            { href: "/ai-regulation", label: "tracker" },
            { href: "/ai-regulation/documents", label: "documents" },
            { href: "/ai-regulation/deadlines", label: "deadlines" },
            { href: "/ai-regulation/compliance-checklist", label: "checklist" },
            { href: "/ai-regulation/by-use-case", label: "by use case" },
            { href: "/#subscribe", label: "subscribe" }
          ]}
        />

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
            { href: "/ai-regulation", label: "tracker" },
            { href: "/ai-regulation/documents", label: "documents" },
            { href: "/ai-regulation/deadlines", label: "deadlines" },
            { href: "/ai-regulation/compliance-checklist", label: "checklist" },
            { href: "/ai-regulation/regulator-warnings", label: "warnings" },
            { href: "/ai-regulation/for-compliance-officers", label: "for compliance officers" },
            { href: "/issues", label: "archive" }
          ]}
        />
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
