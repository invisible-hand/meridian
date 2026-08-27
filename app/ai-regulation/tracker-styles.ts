// Shared CSS for the AI-regulation tracker pages (hub + per-body pages).
// Follows the same visual language as /about: parchment ground, dark
// masthead, mono eyebrows, serif italic headlines.
export const trackerCss = `
  .trk-root {
    min-height: 100vh;
    background: #f0ede8;
    display: flex;
    flex-direction: column;
  }

  .trk-nav {
    padding: 0 40px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e4de;
    background: #f0ede8;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .trk-logo {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #111111;
    text-decoration: none;
  }

  .trk-logo span { color: #1a3fcb; }

  .trk-nav-link {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #9a9a9a;
    text-decoration: none;
    transition: color 0.15s;
  }

  .trk-nav-link:hover { color: #111111; }

  .trk-nav-cta {
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

  .trk-nav-cta:hover { opacity: 0.8; }

  .trk-masthead {
    background: #0c0c0c;
    padding: 48px 40px 44px;
    border-bottom: 1px solid #1a1a1a;
  }

  .trk-masthead-inner { max-width: 860px; margin: 0 auto; }

  .trk-eyebrow {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #444;
    margin: 0 0 16px;
  }

  .trk-masthead-rule { height: 1px; background: #1e1e1e; margin: 0 0 22px; }

  .trk-h1 {
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(1.7rem, 4vw, 2.75rem);
    font-weight: 900;
    font-style: italic;
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0;
  }

  .trk-h1 em { font-style: normal; color: #4f7fff; }

  .trk-updated {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #666;
    margin: 18px 0 0;
  }

  .trk-body {
    flex: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 56px 40px 96px;
    width: 100%;
    box-sizing: border-box;
  }

  .trk-answer {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: clamp(0.98rem, 1.6vw, 1.08rem);
    font-weight: 400;
    line-height: 1.75;
    color: #1c1c1c;
    margin: 0 0 40px;
    padding: 26px 28px;
    background: #ffffff;
    border-left: 3px solid #1a3fcb;
  }

  .trk-section { margin-bottom: 52px; }

  .trk-section-label {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .trk-section-label-text {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #b0ab9a;
    white-space: nowrap;
  }

  .trk-section-rule { flex: 1; height: 1px; background: #e8e4de; }

  .trk-h2 {
    font-family: var(--font-serif), Georgia, serif;
    font-size: 1.35rem;
    font-weight: 700;
    font-style: italic;
    color: #111111;
    margin: 0 0 14px;
    line-height: 1.3;
  }

  .trk-p {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 15.5px;
    line-height: 1.75;
    color: #3a3a3a;
    margin: 0 0 20px;
  }

  .trk-p:last-child { margin-bottom: 0; }
  .trk-p strong { color: #111111; font-weight: 600; }

  .trk-table-wrap {
    overflow-x: auto;
    background: #ffffff;
    border: 1px solid #e8e4de;
  }

  .trk-table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 13.5px;
    line-height: 1.55;
  }

  .trk-table th {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b0ab9a;
    text-align: left;
    padding: 12px 16px;
    border-bottom: 1px solid #e8e4de;
    white-space: nowrap;
  }

  .trk-table td {
    padding: 13px 16px;
    border-bottom: 1px solid #f0ede8;
    color: #3a3a3a;
    vertical-align: top;
  }

  .trk-table tr:last-child td { border-bottom: none; }

  .trk-table a { color: #1a3fcb; text-decoration: none; }
  .trk-table a:hover { text-decoration: underline; }

  .trk-td-strong { color: #111111; font-weight: 600; }
  .trk-td-nowrap { white-space: nowrap; }

  .trk-tag {
    display: inline-block;
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 2px 8px;
    white-space: nowrap;
  }

  .trk-tag-law { background: #1a3fcb; color: #ffffff; }
  .trk-tag-guidance { background: #e4e0d8; color: #55503f; }
  .trk-tag-standards { background: #d9d4c9; color: #55503f; }
  .trk-tag-voluntary { background: #efece5; color: #8a8471; border: 1px solid #ddd8cd; }
  .trk-tag-open { background: #0d6640; color: #ffffff; }

  .trk-nav-links { display: flex; gap: 1.25rem; align-items: center; flex-wrap: wrap; }
  @media (max-width: 720px) { .trk-nav-links .trk-nav-link:nth-child(n+3):not(:last-of-type) { display: none; } }

  .trk-kicker {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b0ab9a;
    margin: 0 0 10px;
  }

  .trk-h2-q {
    font-family: var(--font-serif), Georgia, serif;
    font-size: 1.35rem;
    font-weight: 700;
    font-style: italic;
    color: #111111;
    margin: 0 0 10px;
    line-height: 1.3;
  }

  .trk-sub {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: #6a6a6a;
    margin: 0 0 16px;
  }

  .trk-coverage { display: flex; flex-direction: column; }
  .trk-coverage a {
    display: flex; gap: 16px; align-items: baseline;
    padding: 11px 0; border-bottom: 1px solid #ede9e3; text-decoration: none;
  }
  .trk-coverage a:last-child { border-bottom: none; }
  .trk-coverage-date {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #b0ab9a;
    flex-shrink: 0; min-width: 92px;
  }
  .trk-coverage-title {
    font-family: var(--font-serif), Georgia, serif;
    font-size: 14px; font-weight: 700; color: #111; line-height: 1.4;
  }
  .trk-coverage a:hover .trk-coverage-title { color: #1a3fcb; }

  .trk-source {
    display: inline-block;
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
    color: #1a3fcb; text-decoration: underline; text-underline-offset: 3px;
  }

  .trk-past { color: #9a9a9a; }

  .trk-list {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #3a3a3a;
    margin: 0;
    padding-left: 22px;
  }

  .trk-list li { margin-bottom: 10px; }

  .trk-faq-q {
    font-family: var(--font-serif), Georgia, serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #111111;
    margin: 0 0 8px;
  }

  .trk-faq-a {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #3a3a3a;
    margin: 0 0 26px;
  }

  .trk-related {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .trk-related a {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #111111;
    background: #ffffff;
    border: 1px solid #e8e4de;
    text-decoration: none;
    padding: 9px 16px;
    transition: border-color 0.15s;
  }

  .trk-related a:hover { border-color: #1a3fcb; color: #1a3fcb; }

  .trk-cta {
    background: #0c0c0c;
    padding: 40px;
    text-align: center;
    margin-top: 60px;
  }

  .trk-cta h3 {
    font-family: var(--font-serif), Georgia, serif;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    color: #ffffff;
    margin: 0 0 10px;
  }

  .trk-cta p {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #555;
    margin: 0 0 24px;
  }

  .trk-cta-btn {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #0c0c0c;
    background: #f0ede8;
    text-decoration: none;
    padding: 13px 30px;
    display: inline-block;
    transition: opacity 0.15s;
  }

  .trk-cta-btn:hover { opacity: 0.8; }

  .trk-footer {
    padding: 18px 40px;
    border-top: 1px solid #e8e4de;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .trk-footer-link {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #b0ab9a;
    text-decoration: none;
    transition: color 0.15s;
  }

  .trk-footer-link:hover { color: #5a5a5a; }

  @media (max-width: 520px) {
    .trk-nav { padding: 0 20px; }
    .trk-masthead { padding: 36px 20px 32px; }
    .trk-body { padding: 44px 20px 72px; }
    .trk-footer { padding: 18px 20px; }
    .trk-answer { padding: 20px; }
  }
`;
