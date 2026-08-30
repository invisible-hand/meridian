import Link from "next/link";

// The one header and footer used by every page. Lowercase mono, underlined
// links, near-white ground — the "2050" chrome. Pages pass their own link
// sets; the visual style lives only here so pages can't drift apart.

export type ChromeLink = { href: string; label: string };

export const chromeCss = `
  .sc-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding: 22px 56px 0;
    background: #fbfbf9;
  }

  .sc-logo {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #111111;
    text-decoration: none;
  }

  .sc-logo span { color: #1a3fcb; }

  .sc-top-data {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #9a9a96;
  }

  .sc-top-links { display: flex; gap: 22px; align-items: baseline; flex-wrap: wrap; justify-content: flex-end; }

  .sc-top-link {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 13px;
    letter-spacing: 0.08em;
    color: #111111;
    text-decoration: none;
    border-bottom: 1px solid #111111;
    padding-bottom: 3px;
    white-space: nowrap;
  }

  .sc-top-link:hover { color: #1a3fcb; border-color: #1a3fcb; }

  .sc-footer {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
    padding: 16px 56px 22px;
    border-top: 1px solid #e4e4df;
    background: #fbfbf9;
  }

  .sc-footer-links { display: flex; gap: 18px; align-items: baseline; flex-wrap: wrap; }

  .sc-footer-link {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #6a6a6a;
    text-decoration: none;
  }

  .sc-footer-link:hover { color: #111111; }

  .sc-footer-note {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #b3b3ae;
  }

  @media (max-width: 720px) {
    .sc-top { padding: 18px 24px 0; flex-wrap: wrap; }
    .sc-top-data { display: none; }
    .sc-top-links { gap: 16px; }
    .sc-footer { padding: 14px 24px 18px; }
  }
`;

export function SiteHeader({ center, links }: { center?: string; links: ChromeLink[] }) {
  return (
    <div className="sc-top">
      <Link href="/" className="sc-logo">banking<span>news</span>ai</Link>
      {center ? <span className="sc-top-data">{center}</span> : null}
      <div className="sc-top-links">
        {links.map((l) => (
          <Link key={l.href + l.label} href={l.href} className="sc-top-link">{l.label}</Link>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter({ links, note = "curated by ai · delivered daily" }: { links: ChromeLink[]; note?: string }) {
  return (
    <footer className="sc-footer">
      <div className="sc-footer-links">
        {links.map((l) => (
          <Link key={l.href + l.label} href={l.href} className="sc-footer-link">{l.label}</Link>
        ))}
      </div>
      <span className="sc-footer-note">{note}</span>
    </footer>
  );
}

export const PRIMARY_NAV: ChromeLink[] = [
  { href: "/ai-regulation", label: "regulation" },
  { href: "/about", label: "about" },
  { href: "/issues", label: "archive" },
  { href: "/#subscribe", label: "subscribe" }
];

export const FOOTER_NAV: ChromeLink[] = [
  { href: "/issues", label: "archive" },
  { href: "/ai-regulation", label: "ai regulation tracker" },
  { href: "/about", label: "about" }
];
