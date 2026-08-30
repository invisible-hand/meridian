// Shared CSS for the AI-regulation tracker pages (hub + authority + document +
// derived pages). Follows the site-wide "2050" language: near-white ground,
// light Epilogue display type, IBM Plex Mono data labels, #1a3fcb as the only
// accent, hairlines instead of boxes, no dark bands.
export const trackerCss = `
  .trk-root {
    min-height: 100vh;
    background: #fbfbf9;
    color: #111111;
    display: flex;
    flex-direction: column;
  }

  .trk-nav {
    padding: 22px 56px 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    background: #fbfbf9;
  }

  .trk-logo {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #111111;
    text-decoration: none;
  }

  .trk-logo span { color: #1a3fcb; }

  .trk-nav-links { display: flex; gap: 20px; align-items: baseline; flex-wrap: wrap; }
  @media (max-width: 720px) { .trk-nav-links .trk-nav-link:nth-child(n+3):not(:last-of-type) { display: none; } }

  .trk-nav-link {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #b3b3ae;
    text-decoration: none;
    transition: color 0.15s;
  }

  .trk-nav-link:hover { color: #111111; }

  .trk-nav-cta {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #111111;
    text-decoration: none;
    border-bottom: 1px solid #111111;
    padding-bottom: 2px;
  }

  .trk-nav-cta:hover { color: #1a3fcb; border-color: #1a3fcb; }

  .trk-masthead {
    background: #fbfbf9;
    padding: clamp(44px, 7vw, 84px) 56px 0;
  }

  .trk-masthead-inner { max-width: 1100px; margin: 0 auto; }

  .trk-eyebrow {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    color: #b3b3ae;
    margin: 0 0 18px;
  }

  .trk-eyebrow a:hover { color: #111111 !important; }

  .trk-masthead-rule { display: none; }

  .trk-h1 {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: clamp(2.2rem, 5.4vw, 4.6rem);
    font-weight: 300;
    font-style: normal;
    line-height: 1.04;
    letter-spacing: -0.04em;
    color: #111111;
    margin: 0;
  }

  .trk-h1 em { font-style: normal; font-weight: 600; color: #1a3fcb; }

  .trk-updated {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #b3b3ae;
    margin: 22px 0 0;
  }

  .trk-body {
    flex: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: clamp(36px, 5vw, 60px) 56px 96px;
    width: 100%;
    box-sizing: border-box;
  }

  .trk-answer {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: clamp(1rem, 1.6vw, 1.12rem);
    font-weight: 400;
    line-height: 1.75;
    color: #111111;
    margin: 0 0 52px;
    padding: 0 0 0 24px;
    border-left: 2px solid #1a3fcb;
    max-width: 860px;
  }

  .trk-section { margin-bottom: 56px; }

  .trk-section-label {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .trk-section-label-text {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #b3b3ae;
    white-space: nowrap;
  }

  .trk-section-rule { flex: 1; height: 1px; background: #e4e4df; }

  .trk-h2,
  .trk-h2-q {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: clamp(1.3rem, 2.2vw, 1.7rem);
    font-weight: 400;
    font-style: normal;
    letter-spacing: -0.025em;
    color: #111111;
    margin: 0 0 14px;
    line-height: 1.25;
  }

  .trk-p {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 15.5px;
    line-height: 1.75;
    color: #3a3a3a;
    margin: 0 0 20px;
    max-width: 860px;
  }

  .trk-p:last-child { margin-bottom: 0; }
  .trk-p strong { color: #111111; font-weight: 600; }

  .trk-kicker {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b3b3ae;
    margin: 0 0 10px;
  }

  .trk-sub {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: #6a6a6a;
    margin: 0 0 16px;
    max-width: 860px;
  }

  .trk-table-wrap {
    overflow-x: auto;
    background: #ffffff;
    border: 1px solid #e4e4df;
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
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b3b3ae;
    text-align: left;
    padding: 12px 16px;
    border-bottom: 1px solid #e4e4df;
    white-space: nowrap;
  }

  .trk-table td {
    padding: 13px 16px;
    border-bottom: 1px solid #f0f0ec;
    color: #3a3a3a;
    vertical-align: top;
  }

  .trk-table tr:last-child td { border-bottom: none; }

  .trk-table a { color: #1a3fcb; text-decoration: none; }
  .trk-table a:hover { text-decoration: underline; }

  .trk-td-strong { color: #111111; font-weight: 600; }
  .trk-td-nowrap { white-space: nowrap; }
  .trk-td-min { min-width: 300px; }
  .trk-td-mid { min-width: 200px; }

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
  .trk-tag-guidance { background: #ecece7; color: #5a5a56; }
  .trk-tag-standards { background: #f2f2ee; color: #5a5a56; border: 1px solid #e4e4df; }
  .trk-tag-voluntary { background: #fbfbf9; color: #9a9a96; border: 1px solid #e4e4df; }
  .trk-tag-open { background: #0d6640; color: #ffffff; }

  .trk-list {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #3a3a3a;
    margin: 0;
    padding-left: 22px;
    max-width: 860px;
  }

  .trk-list li { margin-bottom: 10px; }

  .trk-faq-q {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: -0.015em;
    color: #111111;
    margin: 0 0 8px;
  }

  .trk-faq-a {
    font-family: var(--font-sans), 'Helvetica Neue', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #3a3a3a;
    margin: 0 0 26px;
    max-width: 860px;
  }

  .trk-related {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .trk-related a {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #111111;
    background: #ffffff;
    border: 1px solid #e4e4df;
    text-decoration: none;
    padding: 9px 16px;
    transition: border-color 0.15s, color 0.15s;
  }

  .trk-related a:hover { border-color: #1a3fcb; color: #1a3fcb; }

  .trk-coverage { display: flex; flex-direction: column; }
  .trk-coverage a {
    display: flex; gap: 16px; align-items: baseline;
    padding: 11px 0; border-bottom: 1px solid #e9e9e5; text-decoration: none;
  }
  .trk-coverage a:last-child { border-bottom: none; }
  .trk-coverage-date {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: #b3b3ae;
    flex-shrink: 0; min-width: 92px;
  }
  .trk-coverage-title {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: 14.5px; font-weight: 500; color: #111; line-height: 1.4;
  }
  .trk-coverage a:hover .trk-coverage-title { color: #1a3fcb; }

  .trk-source {
    display: inline-block;
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
    color: #1a3fcb; text-decoration: underline; text-underline-offset: 3px;
  }

  .trk-past td { color: #9a9a96; }
  .trk-past .trk-td-strong, .trk-past a { color: #9a9a96; }

  .trk-cta {
    border-top: 2px solid #111111;
    padding: 36px 0 0;
    margin-top: 64px;
  }

  .trk-cta h3 {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: clamp(1.4rem, 2.4vw, 1.9rem);
    font-weight: 300;
    font-style: normal;
    letter-spacing: -0.03em;
    color: #111111;
    margin: 0 0 8px;
  }

  .trk-cta p {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #b3b3ae;
    margin: 0 0 22px;
  }

  .trk-cta-btn {
    font-family: var(--font-serif), 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #111111;
    text-decoration: none;
    border-bottom: 2px solid #111111;
    padding-bottom: 3px;
    display: inline-block;
    transition: color 0.15s, border-color 0.15s;
  }

  .trk-cta-btn:hover { color: #1a3fcb; border-color: #1a3fcb; }

  .trk-footer {
    padding: 16px 56px 22px;
    border-top: 1px solid #e4e4df;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 18px;
  }

  .trk-footer-link {
    font-family: var(--font-mono), 'Courier New', monospace;
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #b3b3ae;
    text-decoration: none;
    transition: color 0.15s;
  }

  .trk-footer-link:hover { color: #111111; }

  @media (max-width: 720px) {
    .trk-nav { padding: 18px 24px 0; }
    .trk-masthead { padding-left: 24px; padding-right: 24px; }
    .trk-body { padding-left: 24px; padding-right: 24px; padding-bottom: 72px; }
    .trk-footer { padding: 14px 24px 18px; }
    .trk-answer { padding-left: 16px; }
  }
`;
