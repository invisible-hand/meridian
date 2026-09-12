import type { Brief, LayerId } from "@/lib/build";
import { LAYER_IDS, PATTERNS } from "@/lib/build";
import type { Decomposition } from "@/lib/build";

// Figures for the build map. Pure components (no hooks), so they render on the
// server for the static briefs and inside the client wizard, where CSS
// transitions on transforms animate the changes. Palette matches lib/og.tsx.

const INK = "#111111";
const ACCENT = "#1a3fcb";
const SOFT = "#5a5a56";
const MUTED = "#9a9a96";
const HAIR = "#e4e4df";
const MONO = "var(--font-mono), 'Courier New', monospace";
const SANS = "var(--font-sans), 'Helvetica Neue', sans-serif";
const DISPLAY = "var(--font-serif), 'Helvetica Neue', sans-serif";

const EASE = "transform 640ms cubic-bezier(.2,.7,.2,1), opacity 640ms ease";

export const LAYER_NAMES: Record<LayerId, string> = {
  governance: "Governance and accountability",
  identity: "Identity and entitlements",
  actions: "Action gateway",
  data: "Data and knowledge",
  models: "Models and vendors",
  runtime: "Runtime and orchestration",
  observability: "Observability, evaluation and audit",
  oversight: "Human oversight and escalation"
};

/** Predictability (up) against model autonomy (right), with the chosen pattern as a moving point. */
export function PatternMap({ pattern, tier }: { pattern: Brief["pattern"]; tier: Brief["tier"] }) {
  const W = 520, H = 330, L = 56, R = 20, T = 22, B = 56;
  const x = (v: number) => L + v * (W - L - R);
  const y = (v: number) => T + (1 - v) * (H - T - B);
  const p = PATTERNS[pattern];
  const regions: { id: Brief["pattern"]; x: number; y: number; w: number; h: number; label: string }[] = [
    { id: "augmented", x: x(0), y: y(1), w: x(0.36) - x(0), h: y(0.55) - y(1), label: "augmented call" },
    { id: "workflow", x: x(0.2), y: y(0.9), w: x(0.72) - x(0.2), h: y(0.28) - y(0.9), label: "workflow" },
    { id: "agent", x: x(0.55), y: y(0.62), w: x(1) - x(0.55), h: y(0) - y(0.62), label: "bounded agent" }
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Pattern map: ${p.name}`}>
      <line x1={L} y1={y(0)} x2={x(1)} y2={y(0)} stroke={HAIR} />
      <line x1={L} y1={y(0)} x2={L} y2={y(1)} stroke={HAIR} />
      <text x={x(1)} y={H - 30} textAnchor="end" fontFamily={MONO} fontSize="10" letterSpacing="1.4" fill={MUTED}>MODEL AUTONOMY →</text>
      <text x={L - 10} y={T + 8} textAnchor="end" fontFamily={MONO} fontSize="10" letterSpacing="1.4" fill={MUTED} transform={`rotate(-90 ${L - 10} ${T + 8})`}>PREDICTABILITY →</text>
      {regions.map((r) => {
        const on = r.id === pattern;
        return (
          <g key={r.id} className="bd-anim" style={{ transition: EASE, opacity: on ? 1 : 0.55 }}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} rx="6" fill={on ? "#f3f5fd" : "#ffffff"} stroke={on ? "#c9d3f5" : HAIR} strokeDasharray={on ? undefined : "3 4"} />
            <text x={r.x + 12} y={r.y + 18} fontFamily={MONO} fontSize="10" letterSpacing="1.4" fill={on ? ACCENT : MUTED}>{r.label.toUpperCase()}</text>
          </g>
        );
      })}
      <g className="bd-anim" style={{ transform: `translate(${x(p.autonomy)}px, ${y(p.predictability)}px)`, transition: EASE }}>
        <circle r="16" fill={ACCENT} opacity="0.12" />
        <circle r="6" fill={ACCENT} />
        <text x="14" y="4" fontFamily={DISPLAY} fontSize="15" fill={INK}>{p.name}</text>
        <text x="14" y="21" fontFamily={MONO} fontSize="9.5" letterSpacing="1.2" fill={SOFT}>{`TIER ${tier}`}</text>
      </g>
    </svg>
  );
}

/** The eight control-plane layers, weighted for this brief. */
export function Stack({ layers }: { layers: Record<LayerId, number> }) {
  const W = 520, rowH = 30, top = 8, labelW = 236;
  const H = top + LAYER_IDS.length * rowH + 6;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Control layers weighted for this design">
      {LAYER_IDS.map((id, i) => {
        const w = layers[id];
        const yy = top + i * rowH;
        return (
          <g key={id}>
            <text x={0} y={yy + 19} fontFamily={SANS} fontSize="12.5" fill={w >= 0.9 ? INK : SOFT}>{LAYER_NAMES[id]}</text>
            <line x1={labelW} y1={yy + 15} x2={W} y2={yy + 15} stroke={HAIR} />
            <rect x={labelW} y={yy + 9} width={W - labelW} height="12" rx="2" fill={ACCENT} className="bd-anim" style={{ transformOrigin: `${labelW}px ${yy + 15}px`, transform: `scaleX(${Math.max(w, 0.04)})`, opacity: 0.25 + 0.75 * w, transition: EASE }} />
            <text x={W} y={yy + 19} textAnchor="end" fontFamily={MONO} fontSize="9.5" letterSpacing="1" fill={w >= 0.9 ? ACCENT : MUTED} className="bd-anim" style={{ transition: "fill 640ms" }}>{w >= 0.9 ? "CORE" : w >= 0.6 ? "STANDARD" : "LIGHT"}</text>
          </g>
        );
      })}
    </svg>
  );
}

/** Who does each step: three swimlanes, one node per step. */
export function Lanes({ rows }: { rows: Decomposition[] }) {
  const lanes: Decomposition["owner"][] = ["human", "model", "system"];
  const laneLabel = { human: "A PERSON", model: "THE MODEL", system: "A SYSTEM" } as const;
  const W = 760, laneH = 74, left = 96, right = 24, top = 10;
  const H = top + lanes.length * laneH + 6;
  const n = rows.length;
  const xAt = (i: number) => left + ((i + 0.5) / n) * (W - left - right);
  const yAt = (o: Decomposition["owner"]) => top + lanes.indexOf(o) * laneH + laneH / 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Decomposition: which steps a person, the model and a system own">
      {lanes.map((l, i) => (
        <g key={l}>
          <rect x={left} y={top + i * laneH} width={W - left - right} height={laneH} fill={i % 2 ? "#ffffff" : "#fbfbf9"} stroke={HAIR} />
          <text x={left - 12} y={top + i * laneH + laneH / 2 + 4} textAnchor="end" fontFamily={MONO} fontSize="9.5" letterSpacing="1.4" fill={l === "human" ? ACCENT : MUTED}>{laneLabel[l]}</text>
        </g>
      ))}
      {rows.map((r, i) => i < n - 1 ? (
        <line key={`l${i}`} x1={xAt(i)} y1={yAt(r.owner)} x2={xAt(i + 1)} y2={yAt(rows[i + 1].owner)} stroke="#b3b3ae" strokeWidth="1.2" />
      ) : null)}
      {rows.map((r, i) => {
        const cx = xAt(i), cy = yAt(r.owner);
        const human = r.owner === "human";
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="13" fill={human ? ACCENT : "#ffffff"} stroke={human ? ACCENT : INK} strokeWidth="1.2" />
            <text x={cx} y={cy + 4} textAnchor="middle" fontFamily={MONO} fontSize="10" fill={human ? "#ffffff" : INK}>{i + 1}</text>
            <foreignObject x={cx - 60} y={cy + 17} width="120" height="46">
              <div style={{ fontFamily: SANS, fontSize: 10.5, lineHeight: 1.25, color: SOFT, textAlign: "center" }}>{r.step}</div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

/** Where the evidence comes from: code, a judge model, people; widths follow verifiability and tier. */
export function EvalMix({ verify, tier }: { verify: Brief["answers"]["verify"]; tier: Brief["tier"] }) {
  const base = { code: 0.5, judge: 0.3, human: 0.2 };
  if (verify === "judgment") { base.code = 0.3; base.judge = 0.5; base.human = 0.2; }
  if (verify === "hard") { base.code = 0.25; base.judge = 0.25; base.human = 0.5; }
  if (tier === 1) { base.human += 0.15; base.judge -= 0.05; base.code -= 0.1; }
  const W = 520, H = 92;
  const parts = [
    { k: "code", label: "CODE CHECKS", w: base.code, fill: INK },
    { k: "judge", label: "JUDGE MODEL", w: base.judge, fill: ACCENT },
    { k: "human", label: "HUMAN REVIEW", w: base.human, fill: "#c9d3f5" }
  ];
  let x = 0;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Eval mix">
      {parts.map((p) => {
        const px = x; x += p.w * W;
        return (
          <g key={p.k}>
            <rect x={px} y={24} width={p.w * W} height={22} fill={p.fill} className="bd-anim" style={{ transition: "x 640ms, width 640ms" }} />
            <text x={px + 8} y={72} fontFamily={MONO} fontSize="9.5" letterSpacing="1.2" fill={SOFT}>{p.label}</text>
            <text x={px + 8} y={16} fontFamily={MONO} fontSize="9.5" letterSpacing="1" fill={MUTED}>{Math.round(p.w * 100)}%</text>
          </g>
        );
      })}
    </svg>
  );
}

/** The decision path itself, as a static figure for the hub. */
export function DecisionPath() {
  const steps = [
    ["Should a model do it?", "reversibility · stakes · who answers"],
    ["Decompose", "model · existing system · person"],
    ["Pick the pattern", "augmented · workflow · agent"],
    ["Architecture", "eight layers, weighted"],
    ["Evals and the gate", "golden set · checks · review"]
  ];
  const W = 1180, H = 124, n = steps.length, gap = 26, cw = (W - gap * (n - 1)) / n;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The decision path">
      {steps.map(([t, s], i) => {
        const x = i * (cw + gap);
        return (
          <g key={t}>
            <line x1={x} y1={16} x2={x + cw} y2={16} stroke={i === 0 ? ACCENT : HAIR} strokeWidth={i === 0 ? 2 : 1} />
            <text x={x} y={44} fontFamily={MONO} fontSize="10" letterSpacing="1.4" fill={ACCENT}>{`0${i + 1}`}</text>
            <text x={x} y={70} fontFamily={DISPLAY} fontSize="18" fill={INK}>{t}</text>
            <text x={x} y={94} fontFamily={MONO} fontSize="10.5" letterSpacing="0.6" fill={MUTED}>{s}</text>
            {i < n - 1 && <text x={x + cw + 6} y={72} fontFamily={MONO} fontSize="14" fill="#b3b3ae">→</text>}
          </g>
        );
      })}
    </svg>
  );
}
