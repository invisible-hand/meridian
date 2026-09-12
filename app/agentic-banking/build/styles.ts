// Styles for the build map (wizard + briefs). Same system as the rest of the
// agents section: Epilogue display, IBM Plex, #1a3fcb as the only accent,
// hairlines, no dark bands. Motion is short and respects reduced-motion.
export const buildCss = `
  .bd-wrap { display: grid; grid-template-columns: minmax(0, 1fr) 380px; gap: 40px 56px; align-items: start; margin: 8px 0 24px; }
  .bd-sticky { position: sticky; top: 24px; }
  .bd-q { border-top: 1px solid #e4e4df; padding: 16px 0 14px; }
  .bd-q-k { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #9a9a96; margin: 0 0 4px; }
  .bd-q-t { font-family: var(--font-serif), 'Helvetica Neue', sans-serif; font-size: 1.05rem; font-weight: 400; letter-spacing: -0.02em; color: #111111; margin: 0 0 10px; }
  .bd-opts { display: flex; flex-wrap: wrap; gap: 8px; }
  .bd-opt { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 13px; line-height: 1.3; color: #3a3a38; background: #ffffff; border: 1px solid #e4e4df; border-radius: 999px; padding: 7px 14px; cursor: pointer; transition: border-color 140ms, color 140ms, background 140ms, transform 140ms; }
  .bd-opt:hover { border-color: #b3b3ae; color: #111111; }
  .bd-opt[aria-pressed="true"] { border-color: #1a3fcb; color: #1a3fcb; background: #f3f5fd; }
  .bd-opt:active { transform: scale(0.98); }
  .bd-hint { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 12.5px; line-height: 1.5; color: #8a8a86; margin: 8px 0 0; min-height: 1.2em; }
  .bd-use { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
  .bd-use .bd-opt { border-radius: 4px; text-align: left; padding: 9px 12px; }
  .bd-select { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 13px; color: #111111; background: #ffffff; border: 1px solid #e4e4df; border-radius: 4px; padding: 8px 10px; width: 100%; max-width: 360px; }
  .bd-fig { border: 1px solid #e4e4df; background: #ffffff; padding: 18px 18px 12px; }
  .bd-fig svg { width: 100%; height: auto; display: block; }
  .bd-fig + .bd-fig { margin-top: 14px; }
  .bd-cap { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10.5px; letter-spacing: 0.08em; color: #9a9a96; margin: 10px 0 0; line-height: 1.6; }
  .bd-badge { display: inline-block; font-family: var(--font-mono), 'Courier New', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #1a3fcb; border: 1px solid #c9d3f5; border-radius: 999px; padding: 3px 10px; margin: 0 8px 8px 0; }
  .bd-actions { display: flex; flex-wrap: wrap; gap: 10px; margin: 6px 0 22px; }
  .bd-btn { font-family: var(--font-mono), 'Courier New', monospace; font-size: 10.5px; letter-spacing: 0.1em; color: #111111; background: #ffffff; border: 1px solid #e4e4df; padding: 9px 16px; cursor: pointer; text-decoration: none; transition: border-color 140ms, color 140ms; }
  .bd-btn:hover { border-color: #1a3fcb; color: #1a3fcb; }
  .bd-brief > section { animation: bd-in 480ms cubic-bezier(.2,.7,.2,1) both; }
  @keyframes bd-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  .bd-lanes { margin: 6px 0 8px; }
  .bd-kv { display: grid; grid-template-columns: 180px 1fr; gap: 8px 24px; font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 14px; line-height: 1.6; color: #3a3a38; margin: 0 0 8px; }
  .bd-kv b { font-weight: 600; color: #111111; }
  .bd-board { border-left: 2px solid #1a3fcb; padding: 4px 0 4px 16px; margin: 4px 0 8px; }
  .bd-board p { font-family: var(--font-sans), 'Helvetica Neue', sans-serif; font-size: 14.5px; line-height: 1.65; color: #111111; margin: 0 0 8px; }
  .bd-mono { font-family: var(--font-mono), 'Courier New', monospace; font-size: 11px; letter-spacing: 0.08em; color: #6a6a66; }
  .bd-pre { white-space: pre-wrap; font-family: var(--font-mono), 'Courier New', monospace; font-size: 12px; line-height: 1.6; color: #3a3a38; background: #ffffff; border: 1px solid #e4e4df; padding: 16px; max-height: 320px; overflow: auto; }
  @media (max-width: 960px) { .bd-wrap { grid-template-columns: 1fr; } .bd-sticky { position: static; } }
  @media (max-width: 720px) { .bd-kv { grid-template-columns: 1fr; gap: 2px 0; } }
  @media (prefers-reduced-motion: reduce) { .bd-brief > section { animation: none; } .bd-anim { transition: none !important; } }
`;
