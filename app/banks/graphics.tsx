import type { ReactNode } from "react";
import type { Bank, BankUseCase } from "@/lib/banks";
import { formatAssets } from "@/lib/banks";

// Inline SVG figures for the banks section. Server-rendered, no client JS,
// data-driven from lib/banks so they can never drift from the text. Same
// "2050" palette and type as the agents section.

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

export function Fig({ title, caption, viewBox, children, minWidth = 640 }: { title: string; caption: ReactNode; viewBox: string; children: ReactNode; minWidth?: number }) {
  return (
    <figure className="bk-figure">
      <div style={{ overflowX: "auto" }}>
        <svg viewBox={viewBox} role="img" aria-label={title} style={{ minWidth }} xmlns="http://www.w3.org/2000/svg">
          <title>{title}</title>
          {children}
        </svg>
      </div>
      <figcaption className="bk-figcaption">{caption}</figcaption>
    </figure>
  );
}

function trunc(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
}

// ---------------------------------------------------------------------------
// Hub 1. Lead-bank assets, as bars
// ---------------------------------------------------------------------------

export function AssetsFigure({ banks, asOf }: { banks: Bank[]; asOf: string }) {
  const rowH = banks.length > 30 ? 26 : 34;
  const top = 34;
  const left = 190;
  const barMax = 640;
  const max = Math.max(...banks.map((b) => b.assetsUsdMillions));
  const h = top + banks.length * rowH + 16;
  return (
    <Fig
      title={`Lead-bank consolidated assets of the ${banks.length} banks, Federal Reserve data`}
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure 1 · Scale. Consolidated assets of each group&apos;s lead bank in the Federal Reserve&apos;s Large Commercial Banks release as of {asOf}. The top four hold more than the rest combined; the broker-dealer groups (Goldman Sachs, Morgan Stanley) are larger at holding-company level than their banks suggest.</>}
    >
      <text x={left} y={20} fontFamily={MONO} fontSize={10} letterSpacing={2} fill={MUTED}>LEAD-BANK ASSETS</text>
      {banks.map((b, i) => {
        const y = top + i * rowH;
        const w = Math.max(4, (b.assetsUsdMillions / max) * barMax);
        const top4 = i < 4;
        return (
          <g key={b.slug}>
            <text x={left - 14} y={y + 19} fontFamily={SERIF} fontSize={14} fill={INK} textAnchor="end" letterSpacing={-0.2}>{b.shortName}</text>
            <rect x={left} y={y + 6} width={w} height={rowH - 16} fill={top4 ? ACCENT : LIGHT} stroke={top4 ? ACCENT : HAIR} strokeWidth={1} />
            <text x={left + w + 8} y={y + 19} fontFamily={MONO} fontSize={10.5} fill={SOFT}>{formatAssets(b.assetsUsdMillions)}</text>
          </g>
        );
      })}
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// Hub 2. Dated AI moves per bank per year
// ---------------------------------------------------------------------------

export function MovesFigure({ banks, years }: { banks: Bank[]; years: number[] }) {
  const rowH = 30;
  const top = 40;
  const left = 190;
  const colW = (940 - left) / years.length;
  const h = top + banks.length * rowH + 16;
  return (
    <Fig
      title="Dated AI moves per bank, by year, as recorded on these pages"
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure 2 · Momentum. One dot per dated move in each bank&apos;s timeline, by year. Density in 2026 reflects how much of the record is now on earnings calls and in press coverage, not only how much a bank did — but the near-empty left columns say how new this is at most of them.</>}
    >
      {years.map((yr, k) => (
        <text key={yr} x={left + k * colW + colW / 2} y={22} fontFamily={MONO} fontSize={11} letterSpacing={1.5} fill={MUTED} textAnchor="middle">{yr}</text>
      ))}
      {banks.map((b, i) => {
        const y = top + i * rowH;
        return (
          <g key={b.slug}>
            <line x1={left} y1={y + rowH - 4} x2={940} y2={y + rowH - 4} stroke={HAIR} strokeWidth={1} />
            <text x={left - 14} y={y + 17} fontFamily={SERIF} fontSize={14} fill={INK} textAnchor="end" letterSpacing={-0.2}>{b.shortName}</text>
            {years.map((yr, k) => {
              const n = b.timeline.filter((e) => Number(e.date.slice(0, 4)) === yr).length;
              const cx0 = left + k * colW + 14;
              return Array.from({ length: Math.min(n, 14) }, (_, d) => (
                <circle key={`${yr}-${d}`} cx={cx0 + d * 12} cy={y + 13} r={4} fill={yr === years[years.length - 1] ? ACCENT : LIGHT} stroke={ACCENT} strokeWidth={1} />
              ));
            })}
          </g>
        );
      })}
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// Bank 1. The bank's timeline in year columns
// ---------------------------------------------------------------------------

export function BankTimelineFigure({ bank, n = 1 }: { bank: Bank; n?: number }) {
  const events = [...bank.timeline].sort((a, b) => (a.date < b.date ? -1 : 1));
  const yrs = Array.from(new Set(events.map((e) => Number(e.date.slice(0, 4))))).sort();
  const first = yrs[0];
  const last = yrs[yrs.length - 1];
  const years = Array.from({ length: last - first + 1 }, (_, i) => first + i);
  const compress = years.length > 4;
  const cols = compress ? [...years.slice(0, 1), ...years.slice(-3)] : years;
  const early = compress ? events.filter((e) => Number(e.date.slice(0, 4)) < cols[1]) : [];
  const colW = 940 / cols.length;
  const boxH = 44;
  const top = 44;
  const perCol = cols.map((yr, k) => (compress && k === 0 ? early : events.filter((e) => Number(e.date.slice(0, 4)) === yr)));
  const rows = Math.max(...perCol.map((c) => c.length), 1);
  const h = top + rows * (boxH + 8) + 12;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <Fig
      title={`${bank.name}'s dated AI moves by year`}
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure {n} · {bank.shortName}&apos;s AI moves by year, from the timeline below. {compress ? `Before ${cols[1]} is collapsed into one column. ` : ""}Filled boxes are the current year. Every entry cites its source in the list at the end of the page.</>}
    >
      {cols.map((yr, k) => {
        const x = 10 + k * colW;
        const label = compress && k === 0 ? `${first}–${cols[1] - 1}` : String(yr);
        return (
          <g key={yr}>
            <text x={x + 6} y={22} fontFamily={MONO} fontSize={12} letterSpacing={2} fill={yr === last ? ACCENT : MUTED}>{label}</text>
            <line x1={x} y1={30} x2={x + colW - 14} y2={30} stroke={yr === last ? ACCENT : HAIR} strokeWidth={1} />
            {perCol[k].map((e, r) => {
              const y = top + r * (boxH + 8);
              const cur = Number(e.date.slice(0, 4)) === last;
              const m = months[Number(e.date.slice(5, 7)) - 1];
              return (
                <g key={e.date + e.title}>
                  <rect x={x} y={y} width={colW - 14} height={boxH} fill={cur ? LIGHT : GROUND} stroke={cur ? ACCENT : HAIR} strokeWidth={1} />
                  <text x={x + 8} y={y + 16} fontFamily={MONO} fontSize={9.5} fill={cur ? ACCENT : MUTED}>{m} {e.date.slice(8, 10)}{compress && k === 0 ? ` ${e.date.slice(0, 4)}` : ""}</text>
                  <text x={x + 8} y={y + 32} fontFamily={SANS} fontSize={11.5} fill={INK}>{trunc(e.title, Math.floor((colW - 30) / 6.4))}</text>
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
// Bank 2. Where AI runs: use case × status ladder
// ---------------------------------------------------------------------------

const STATUSES: BankUseCase["status"][] = ["Announced", "Pilot", "Rolling out", "In production"];

export function StatusLadderFigure({ bank, n = 2 }: { bank: Bank; n?: number }) {
  const rowH = 32;
  const top = 44;
  const left = 330;
  const colW = (940 - left) / STATUSES.length;
  const h = top + bank.useCases.length * rowH + 16;
  const prod = bank.useCases.filter((u) => u.status === "In production").length;
  return (
    <Fig
      title={`${bank.name}'s AI systems on the status ladder from announced to in production`}
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure {n} · Where AI runs at {bank.shortName}, and how far along. {prod} of {bank.useCases.length} named systems are in production; the rest are rolling out, piloted or announced. Status is as described in the cited source at its date.</>}
    >
      {STATUSES.map((s, k) => (
        <text key={s} x={left + k * colW + colW / 2} y={22} fontFamily={MONO} fontSize={10} letterSpacing={1.5} fill={k === STATUSES.length - 1 ? ACCENT : MUTED} textAnchor="middle">{s.toUpperCase()}</text>
      ))}
      {bank.useCases.map((u, i) => {
        const y = top + i * rowH;
        const k = STATUSES.indexOf(u.status);
        return (
          <g key={u.name}>
            <line x1={20} y1={y + rowH - 6} x2={940} y2={y + rowH - 6} stroke={HAIR} strokeWidth={1} />
            <text x={20} y={y + 16} fontFamily={SANS} fontSize={12.5} fill={INK}>{trunc(u.name, 44)}</text>
            <line x1={left} y1={y + 12} x2={left + k * colW + colW / 2} y2={y + 12} stroke={k === 3 ? ACCENT : HAIR} strokeWidth={k === 3 ? 1.5 : 1} />
            <circle cx={left + k * colW + colW / 2} cy={y + 12} r={6} fill={k === 3 ? ACCENT : GROUND} stroke={ACCENT} strokeWidth={1.2} />
          </g>
        );
      })}
    </Fig>
  );
}

// ---------------------------------------------------------------------------
// Bank 3. The regulatory perimeter
// ---------------------------------------------------------------------------

export function PerimeterFigure({ bank, names, n = 3 }: { bank: Bank; names: Record<string, string>; n?: number }) {
  const regs = bank.regulatory;
  const cx = 480;
  const cy = 150;
  const rx = 330;
  const ry = 96;
  const h = 300;
  return (
    <Fig
      title={`The regulators around ${bank.name}'s AI`}
      viewBox={`0 0 960 ${h}`}
      caption={<>Figure {n} · The regulatory perimeter. Each authority links to its tracker page; the number is how many of its documents this page cites. Solid lines are the bank&apos;s direct supervisors; dashed lines are consumer, market and global standard-setters that reach it through its activities.</>}
    >
      <rect x={cx - 110} y={cy - 24} width={220} height={48} fill={LIGHT} stroke={ACCENT} strokeWidth={1} />
      <text x={cx} y={cy + 5} fontFamily={SERIF} fontSize={16} fill={INK} textAnchor="middle" letterSpacing={-0.3}>{trunc(bank.name, 24)}</text>
      {regs.map((r, i) => {
        const a = -Math.PI / 2 + (i / regs.length) * Math.PI * 2;
        const x = cx + rx * Math.cos(a);
        const y = cy + ry * Math.sin(a);
        const direct = ["occ", "federal-reserve", "fdic", "ny-dfs"].includes(r.authority);
        const bw = 150;
        const bh = 40;
        const ex = cx + (110 + 6) * Math.sign(Math.cos(a)) * (Math.abs(Math.cos(a)) > 0.3 ? 1 : 0);
        const ey = cy + (Math.abs(Math.cos(a)) > 0.3 ? 0 : 24 * Math.sign(Math.sin(a)) + 6 * Math.sign(Math.sin(a)));
        return (
          <g key={r.authority}>
            <line x1={ex} y1={ey} x2={x} y2={y} stroke={direct ? ACCENT : MUTED} strokeWidth={1} strokeDasharray={direct ? undefined : "3 3"} />
            <rect x={x - bw / 2} y={y - bh / 2} width={bw} height={bh} fill={GROUND} stroke={direct ? ACCENT : HAIR} strokeWidth={1} />
            <text x={x - bw / 2 + 10} y={y - 3} fontFamily={SERIF} fontSize={13} fill={INK} letterSpacing={-0.2}>{trunc(names[r.authority] ?? r.authority, 20)}</text>
            <text x={x - bw / 2 + 10} y={y + 12} fontFamily={MONO} fontSize={9.5} fill={SOFT}>{r.docSlugs.length} {r.docSlugs.length === 1 ? "document" : "documents"}</text>
          </g>
        );
      })}
    </Fig>
  );
}
