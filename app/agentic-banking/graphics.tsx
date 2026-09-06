import type { ReactNode } from "react";
import type { AutonomyLevel, FunctionGroup, Layer, MaturityStage, Stage, TimelineEvent } from "@/lib/agent-os";

// Inline SVG infographics for the agentic-banking section. Server-rendered,
// no client JS, sized by viewBox so they scale with the column. Palette and
// type follow the site's "2050" system: near-white ground, ink, one accent,
// hairlines, mono data labels, light display type.

const INK = "#111111";
const ACCENT = "#1a3fcb";
const LIGHT = "#dce5ff";
const MUTED = "#9a9a96";
const SOFT = "#5a5a56";
const HAIR = "#e4e4df";
const GROUND = "#fbfbf9";
const MONO = "var(--font-mono), 'Courier New', monospace";
const SERIF = "var(--font-serif), 'Helvetica Neue', sans-serif";
const SANS = "var(--font-sans), 'Helvetica Neue', sans-serif";

export function Fig({ title, caption, viewBox, children }: { title: string; caption: ReactNode; viewBox: string; children: ReactNode }) {
  return (
    <figure className="ag-figure">
      <div style={{ overflowX: "auto" }}>
        <svg viewBox={viewBox} role="img" aria-label={title} style={{ minWidth: 640 }} xmlns="http://www.w3.org/2000/svg">
          <title>{title}</title>
          {children}
        </svg>
      </div>
      <figcaption className="ag-figcaption">{caption}</figcaption>
    </figure>
  );
}

function Arrow({ x1, y1, x2, y2, color = INK, dashed = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; dashed?: boolean }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const hx = x2 - 7 * Math.cos(ang);
  const hy = y2 - 7 * Math.sin(ang);
  const p1 = `${hx + 4 * Math.sin(ang)},${hy - 4 * Math.cos(ang)}`;
  const p2 = `${hx - 4 * Math.sin(ang)},${hy + 4 * Math.cos(ang)}`;
  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth={1} strokeDasharray={dashed ? "3 3" : undefined} />
      <polygon points={`${x2},${y2} ${p1} ${p2}`} fill={color} />
    </g>
  );
}

// ---------------------------------------------------------------------------
// 1. The control plane as a stack
// ---------------------------------------------------------------------------

export function StackFigure({ layers, docLabels }: { layers: Layer[]; docLabels: string[][] }) {
  const rowH = 60;
  const top = 36;
  const h = top + layers.length * rowH + 24;
  return (
    <Fig
      title="The eight control layers an AI agent in a bank runs on"
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure 1 · The control plane. Governance sets the policy; layers 1–6 enforce it in code; human oversight closes the loop. Right column: the primary documents each layer answers to.</>}
    >
      <text x={40} y={22} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={MUTED}>LAYER</text>
      <text x={96} y={22} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={MUTED}>WHAT IT DECIDES</text>
      <text x={920} y={22} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={MUTED} textAnchor="end">ANSWERS TO</text>
      {layers.map((l, i) => {
        const y = top + i * rowH;
        const bracket = i === 0 || i === layers.length - 1;
        return (
          <g key={l.id}>
            <rect x={40} y={y} width={880} height={rowH - 8} fill={bracket ? LIGHT : GROUND} stroke={bracket ? ACCENT : HAIR} strokeWidth={1} />
            <text x={58} y={y + 33} fontFamily={MONO} fontSize={13} fill={ACCENT}>{l.n}</text>
            <text x={96} y={y + 24} fontFamily={SERIF} fontSize={16} fill={INK} letterSpacing={-0.3}>{l.name}</text>
            <text x={96} y={y + 42} fontFamily={SANS} fontSize={11.5} fill={SOFT}>{l.decides}</text>
            {docLabels[i]?.slice(0, 3).map((d, k) => (
              <text key={d} x={920} y={y + 19 + k * 13} fontFamily={MONO} fontSize={9.5} fill={SOFT} textAnchor="end">{d}</text>
            ))}
          </g>
        );
      })}
      {/* side bracket: policy / enforcement / assurance */}
      <g fontFamily={MONO} fontSize={9} letterSpacing={1.5} fill={MUTED}>
        <line x1={28} y1={top + 4} x2={28} y2={top + rowH - 12} stroke={ACCENT} strokeWidth={1} />
        <line x1={28} y1={top + rowH + 4} x2={28} y2={top + 6 * rowH - 12} stroke={HAIR} strokeWidth={1} />
        <line x1={28} y1={top + 6 * rowH + 4} x2={28} y2={top + 8 * rowH - 12} stroke={ACCENT} strokeWidth={1} />
        <text transform={`translate(18 ${top + rowH / 2 - 4}) rotate(-90)`} textAnchor="middle" fill={ACCENT}>POLICY</text>
        <text transform={`translate(18 ${top + 3.5 * rowH}) rotate(-90)`} textAnchor="middle">ENFORCED IN CODE</text>
        <text transform={`translate(18 ${top + 7 * rowH - 4}) rotate(-90)`} textAnchor="middle" fill={ACCENT}>PEOPLE</text>
      </g>
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// 2. The lifecycle loop
// ---------------------------------------------------------------------------

export function LifecycleFigure({ stages }: { stages: Stage[] }) {
  const w = 96;
  const gap = 20;
  const x0 = 26;
  const y0 = 64;
  const bh = 78;
  return (
    <Fig
      title="The eight-stage lifecycle of an AI agent, with a gate before every stage"
      viewBox="0 0 960 250"
      caption={<>Figure 2 · The lifecycle. Each diamond is a gate question the stage must answer before the next begins; the return arrow is the re-assessment loop that vendor updates, new uses, new rules and incidents all trigger.</>}
    >
      {stages.map((s, i) => {
        const x = x0 + i * (w + gap);
        const words = s.name.split(" ");
        const lines: string[] = [];
        let cur = "";
        for (const wd of words) {
          if ((cur + " " + wd).trim().length > 13 && cur) {
            lines.push(cur);
            cur = wd;
          } else cur = (cur + " " + wd).trim();
        }
        if (cur) lines.push(cur);
        return (
          <g key={s.id}>
            <text x={x + w / 2} y={y0 - 16} fontFamily={MONO} fontSize={11} fill={ACCENT} textAnchor="middle">{String(s.n).padStart(2, "0")}</text>
            <rect x={x} y={y0} width={w} height={bh} fill={i === 5 ? LIGHT : GROUND} stroke={i === 5 ? ACCENT : INK} strokeWidth={i === 5 ? 1 : 0.8} />
            {lines.slice(0, 3).map((ln, k) => (
              <text key={ln} x={x + w / 2} y={y0 + 30 + k * 16 + (3 - Math.min(lines.length, 3)) * 8} fontFamily={SERIF} fontSize={13} fill={INK} textAnchor="middle" letterSpacing={-0.2}>{ln}</text>
            ))}
            {i < stages.length - 1 && (
              <g>
                <Arrow x1={x + w} y1={y0 + bh / 2} x2={x + w + gap} y2={y0 + bh / 2} />
                <polygon points={`${x + w + gap / 2},${y0 + bh / 2 - 6} ${x + w + gap / 2 + 6},${y0 + bh / 2} ${x + w + gap / 2},${y0 + bh / 2 + 6} ${x + w + gap / 2 - 6},${y0 + bh / 2}`} fill={GROUND} stroke={ACCENT} strokeWidth={1} />
              </g>
            )}
          </g>
        );
      })}
      {/* return loop */}
      {(() => {
        const xs = x0 + 7 * (w + gap) + w / 2;
        const xe = x0 + w / 2;
        const yb = y0 + bh;
        const yl = 196;
        return (
          <g>
            <path d={`M ${xs} ${yb} L ${xs} ${yl} L ${xe} ${yl}`} fill="none" stroke={ACCENT} strokeWidth={1} strokeDasharray="4 3" />
            <Arrow x1={xe} y1={yl} x2={xe} y2={yb + 8} color={ACCENT} dashed />
            <text x={480} y={yl + 18} fontFamily={MONO} fontSize={10} letterSpacing={1.5} fill={ACCENT} textAnchor="middle">RE-ASSESS · VENDOR UPDATE · NEW USE · NEW RULE · INCIDENT</text>
          </g>
        );
      })()}
      <text x={26} y={236} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={MUTED}>◇ GATE QUESTION</text>
      <text x={160} y={236} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={MUTED}>■ SIGN-OFF: ACCOUNTABLE OWNER + SECOND LINE</text>
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// 3. Where agents are landing
// ---------------------------------------------------------------------------

export type FunctionCell = { group: FunctionGroup; name: string; short: string; autonomy: number };

export function FunctionMapFigure({ cells }: { cells: FunctionCell[] }) {
  const groups: FunctionGroup[] = ["Front office", "Middle office", "Back office"];
  const colW = 292;
  const x0 = 30;
  const y0 = 56;
  const cellH = 72;
  const rows = Math.max(...groups.map((g) => cells.filter((c) => c.group === g).length));
  const h = y0 + rows * cellH + 30;
  return (
    <Fig
      title="Where AI agents are being deployed across a bank, by function and autonomy level"
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure 3 · Where agents are landing. Dots show the autonomy level that is observed or defensible today (0 inform · 1 draft · 2 act with approval · 3 act within bounds · 4 autonomous). Fraud and security operations lead because supervisors actively encourage AI there; lending stays at level 1 because the decision is governed by consumer law.</>}
    >
      {groups.map((g, ci) => {
        const x = x0 + ci * (colW + 16);
        const list = cells.filter((c) => c.group === g);
        return (
          <g key={g}>
            <text x={x} y={30} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={MUTED}>{g.toUpperCase()}</text>
            <line x1={x} y1={38} x2={x + colW} y2={38} stroke={INK} strokeWidth={0.8} />
            {list.map((c, ri) => {
              const y = y0 + ri * cellH;
              return (
                <g key={c.name}>
                  <line x1={x} y1={y + cellH - 10} x2={x + colW} y2={y + cellH - 10} stroke={HAIR} strokeWidth={1} />
                  <text x={x} y={y + 18} fontFamily={SERIF} fontSize={14.5} fill={INK} letterSpacing={-0.2}>{c.name}</text>
                  <text x={x} y={y + 36} fontFamily={SANS} fontSize={11} fill={SOFT}>{c.short}</text>
                  {[0, 1, 2, 3, 4].map((k) => (
                    <circle key={k} cx={x + 6 + k * 15} cy={y + 52} r={4.2} fill={k <= c.autonomy ? ACCENT : GROUND} stroke={k <= c.autonomy ? ACCENT : "#c8c8c3"} strokeWidth={1} />
                  ))}
                  <text x={x + 86} y={y + 55.5} fontFamily={MONO} fontSize={9.5} fill={ACCENT} letterSpacing={1}>L{c.autonomy}</text>
                </g>
              );
            })}
          </g>
        );
      })}
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// 4. The autonomy ladder
// ---------------------------------------------------------------------------

export function AutonomyFigure({ levels, oversightShort }: { levels: AutonomyLevel[]; oversightShort: string[][] }) {
  const w = 168;
  const gap = 10;
  const x0 = 40;
  const base = 196;
  const rise = 26;
  return (
    <Fig
      title="Five levels of AI agent autonomy and the oversight each one requires"
      viewBox="0 0 960 300"
      caption={<>Figure 4 · The autonomy ladder. Oversight scales up with autonomy, not down: that is the FSB&apos;s Sound Practice 10, the EU AI Act&apos;s Article 14 and Colorado&apos;s human-review right in one picture. Shaded: where supervisors say banks are in 2026.</>}
    >
      {levels.map((l, i) => {
        const x = x0 + i * (w + gap);
        const top = base - i * rise - 40;
        const today = l.level === 1 || l.level === 2;
        return (
          <g key={l.level}>
            <rect x={x} y={top} width={w} height={base - top} fill={today ? LIGHT : GROUND} stroke={today ? ACCENT : INK} strokeWidth={0.8} strokeDasharray={l.level === 4 ? "4 3" : undefined} />
            <text x={x + 12} y={top + 20} fontFamily={MONO} fontSize={11} fill={ACCENT} letterSpacing={1}>L{l.level}</text>
            <text x={x + 12} y={top + 40} fontFamily={SERIF} fontSize={15} fill={INK} letterSpacing={-0.3}>{l.name}</text>
            {oversightShort[i]?.slice(0, 3).map((ln, k) => (
              <text key={ln} x={x + 12} y={base + 20 + k * 14} fontFamily={SANS} fontSize={10.5} fill={SOFT}>{ln}</text>
            ))}
          </g>
        );
      })}
      {/* marker: where banks are */}
      {(() => {
        const xa = x0 + 1 * (w + gap);
        const xb = x0 + 2 * (w + gap) + w;
        const y = base - 2 * rise - 40 - 22;
        return (
          <g>
            <line x1={xa} y1={y} x2={xb} y2={y} stroke={ACCENT} strokeWidth={1} />
            <line x1={xa} y1={y} x2={xa} y2={y + 6} stroke={ACCENT} strokeWidth={1} />
            <line x1={xb} y1={y} x2={xb} y2={y + 6} stroke={ACCENT} strokeWidth={1} />
            <text x={(xa + xb) / 2} y={y - 8} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={ACCENT} textAnchor="middle">WHERE BANKS ARE · OCC, MAY 2026</text>
          </g>
        );
      })()}
      {(() => {
        const x = x0 + 4 * (w + gap) + w / 2;
        const y = base - 4 * rise - 40 - 22;
        return (
          <text x={x} y={y - 8} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={MUTED} textAnchor="middle">2% OF USE CASES · UK 2024</text>
        );
      })()}
      <text x={40} y={286} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={MUTED}>OVERSIGHT REQUIRED ↓</text>
      <Arrow x1={200} y1={282} x2={900} y2={282} color={MUTED} />
      <text x={905} y={286} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={MUTED}>MORE</text>
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// 5. The timeline — how things are moving
// ---------------------------------------------------------------------------

function monthLabel(iso: string): string {
  const [y, m] = iso.split("-");
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${names[Number(m) - 1]} ${y}`;
}

export function TimelineFigure({ events }: { events: TimelineEvent[] }) {
  const sorted = [...events].sort((a, b) => (a.date < b.date ? -1 : 1));
  const rowH = 30;
  const top = 58;
  const spine = 480;
  let extra = 0;
  const rows: { e: TimelineEvent; y: number; year?: string }[] = [];
  let lastYear = "";
  for (const e of sorted) {
    const yr = e.date.slice(0, 4);
    if (yr !== lastYear) {
      extra += 22;
      rows.push({ e, y: top + rows.length * rowH + extra, year: yr });
      lastYear = yr;
    } else rows.push({ e, y: top + rows.length * rowH + extra });
  }
  const h = top + rows.length * rowH + extra + 30;
  return (
    <Fig
      title="Timeline of regulatory and market events shaping AI agents in banking, 2023 to 2027"
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure 5 · How things are moving. Left: enablement — adoption data and pro-innovation policy. Right: controls — guidance, warnings and statutes. Hollow markers are scheduled or expected. Every event links to its primary source in the tracker.</>}
    >
      <text x={spine - 24} y={24} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={ACCENT} textAnchor="end">ENABLEMENT</text>
      <text x={spine + 24} y={24} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={INK}>CONTROLS AND WARNINGS</text>
      <line x1={spine} y1={34} x2={spine} y2={h - 20} stroke={HAIR} strokeWidth={1} />
      {rows.map(({ e, y, year }) => {
        const left = e.lane === "enablement";
        const color = left ? ACCENT : INK;
        const tx = left ? spine - 24 : spine + 24;
        return (
          <g key={`${e.date}-${e.label}`}>
            {year && (
              <g>
                <line x1={40} y1={y - 26} x2={920} y2={y - 26} stroke={HAIR} strokeWidth={1} />
                <rect x={spine - 22} y={y - 34} width={44} height={16} fill={GROUND} />
                <text x={spine} y={y - 22} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={MUTED} textAnchor="middle">{year}</text>
              </g>
            )}
            <circle cx={spine} cy={y} r={4.5} fill={e.expected ? GROUND : color} stroke={color} strokeWidth={1} strokeDasharray={e.expected ? "2 2" : undefined} />
            <line x1={left ? spine - 16 : spine + 5} y1={y} x2={left ? spine - 5 : spine + 16} y2={y} stroke={color} strokeWidth={1} />
            <text x={tx} y={y - 3} fontFamily={SERIF} fontSize={13} fill={INK} textAnchor={left ? "end" : "start"} letterSpacing={-0.2}>{e.label}</text>
            <text x={tx} y={y + 10} fontFamily={MONO} fontSize={9} fill={MUTED} textAnchor={left ? "end" : "start"} letterSpacing={0.5}>{monthLabel(e.date).toUpperCase()}{e.expected ? " · EXPECTED" : ""}</text>
          </g>
        );
      })}
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// 6. Maturity — where banks are and where this goes
// ---------------------------------------------------------------------------

export function MaturityFigure({ stages }: { stages: MaturityStage[] }) {
  const w = 168;
  const gap = 10;
  const x0 = 40;
  const base = 214;
  const rise = 28;
  return (
    <Fig
      title="Five maturity stages from AI experiments to multi-agent operations"
      viewBox="0 0 960 250"
      caption={<>Figure 6 · Maturity. Stage 3 is what supervisors describe at large banks in 2026; stages 4 and 5 are where the platform work is heading, and where the standards (NIST&apos;s agent overlays, the FSB&apos;s final practices) are still being written.</>}
    >
      {stages.map((s, i) => {
        const x = x0 + i * (w + gap);
        const top = base - i * rise - 86;
        const now = s.n === 3;
        const future = s.n >= 4;
        return (
          <g key={s.n}>
            <rect x={x} y={top} width={w} height={base - top} fill={now ? LIGHT : GROUND} stroke={now ? ACCENT : INK} strokeWidth={0.8} strokeDasharray={future ? "4 3" : undefined} />
            <text x={x + 12} y={top + 20} fontFamily={MONO} fontSize={11} fill={ACCENT} letterSpacing={1}>0{s.n}</text>
            {(() => {
              const words = s.name.split(" ");
              const lines: string[] = [];
              let cur = "";
              for (const wd of words) {
                if ((cur + " " + wd).trim().length > 16 && cur) {
                  lines.push(cur);
                  cur = wd;
                } else cur = (cur + " " + wd).trim();
              }
              if (cur) lines.push(cur);
              return lines.slice(0, 2).map((ln, k) => (
                <text key={ln} x={x + 12} y={top + 40 + k * 16} fontFamily={SERIF} fontSize={14.5} fill={INK} letterSpacing={-0.3}>{ln}</text>
              ));
            })()}
            {now && <text x={x + 12} y={top + 74} fontFamily={MONO} fontSize={9} fill={ACCENT} letterSpacing={1.5}>LARGE BANKS · 2026</text>}
            {future && <text x={x + 12} y={top + 74} fontFamily={MONO} fontSize={9} fill={MUTED} letterSpacing={1.5}>WHERE THIS IS GOING</text>}
          </g>
        );
      })}
      <Arrow x1={40} y1={236} x2={920} y2={236} color={MUTED} />
      <text x={40} y={228} fontFamily={MONO} fontSize={9.5} letterSpacing={1.5} fill={MUTED}>CONTROLS MOVE FROM POLICY → PER-AGENT → PLATFORM</text>
    </Fig>
  );
}
