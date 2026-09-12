import Link from "next/link";
import type { Brief, Decomposition } from "@/lib/build";
import { LAYER_IDS, PATTERNS, SHAPES, TIERS } from "@/lib/build";
import { EvalMix, LAYER_NAMES, Lanes, Stack } from "./figures";

// The generated design brief. Pure component: it takes the decided brief and
// pre-resolved lookups (documents, banks, labels) so it renders identically
// on the server (static briefs) and in the client wizard.

export type DocLite = { slug: string; name: string; title: string; authority: string; href: string; status: string };
export type BankLite = { slug: string; shortName: string; href: string; authorities: string[]; useCases: { useCase: string; name: string; status: string }[] };
export type Lookups = { docs: Record<string, DocLite>; banks: BankLite[]; useCaseLabels: Record<string, string> };

export function peersFor(brief: Brief, banks: BankLite[]): BankLite[] {
  return banks.filter((b) => b.useCases.some((u) => u.useCase === brief.answers.useCase));
}

export function BriefView({ brief, lookups, decomposition, intro, pitfalls, heading }: {
  brief: Brief;
  lookups: Lookups;
  decomposition?: Decomposition[];
  intro?: string;
  pitfalls?: string[];
  heading?: React.ReactNode;
}) {
  const a = brief.answers;
  const label = lookups.useCaseLabels[a.useCase] ?? a.useCase;
  const peers = peersFor(brief, lookups.banks);
  const mine = a.bank ? lookups.banks.find((b) => b.slug === a.bank) : undefined;
  const docs = brief.docs.map((d) => ({ ...d, doc: lookups.docs[d.slug] })).filter((d) => d.doc);
  let delay = 0;
  const sec = (label: string, children: React.ReactNode, id?: string) => {
    const style = { animationDelay: `${delay}ms` } as React.CSSProperties;
    delay += 60;
    return (
      <section className="trk-section" id={id} style={style} key={label}>
        <div className="trk-section-label"><span className="trk-section-label-text">{label}</span><div className="trk-section-rule" /></div>
        {children}
      </section>
    );
  };

  return (
    <div className="bd-brief">
      {heading}
      {sec("The call", (
        <>
          <div>
            <span className="bd-badge">{PATTERNS[brief.pattern].name}</span>
            {brief.shapes.map((s) => <span key={s} className="bd-badge">{SHAPES[s].name}</span>)}
            <span className="bd-badge">{TIERS[brief.tier].name}</span>
            <span className="bd-badge">autonomy level {brief.autonomy}</span>
          </div>
          <p className="trk-answer" style={{ margin: "14px 0 18px" }}>
            {label}: {brief.involvement} {PATTERNS[brief.pattern].line} {TIERS[brief.tier].line}
          </p>
          {intro && <p className="trk-p">{intro}</p>}
          <div className="bd-kv">
            <b>Pattern</b><span>{PATTERNS[brief.pattern].name}. {PATTERNS[brief.pattern].when}</span>
            {brief.shapes.map((s) => (<span key={s} style={{ display: "contents" }}><b>{SHAPES[s].name}</b><span>{SHAPES[s].line}</span></span>))}
            <b>Knowledge</b><span>{brief.knowledge.join(" ")}</span>
            <b>Delivery route</b><span>{a.route === "direct" ? "Provider API: one third party to diligence; residency and retention terms are yours to negotiate." : a.route === "cloud" ? "Through a cloud platform: two third parties in the chain and a concentration question; often the faster route through security review." : "Undecided: run the same evals on both routes so the choice can be judged, and plan the exit from either."}</span>
          </div>
        </>
      ))}

      {decomposition && decomposition.length > 0 && sec("Decomposition", (
        <>
          <h2 className="trk-h2-q">Which steps belong to a person, the model and a system?</h2>
          <div className="bd-fig bd-lanes"><Lanes rows={decomposition} /></div>
          <div className="trk-table-wrap">
            <table className="trk-table">
              <thead><tr><th>#</th><th>Step</th><th>Owner</th><th className="trk-td-min">Note</th></tr></thead>
              <tbody>
                {decomposition.map((r, i) => (
                  <tr key={r.step}><td className="trk-td-nowrap">{i + 1}</td><td className="trk-td-strong">{r.step}</td><td className="trk-td-nowrap">{r.owner === "human" ? "A person" : r.owner === "model" ? "The model" : "A system"}</td><td className="trk-td-min">{r.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ))}

      {sec("Architecture", (
        <>
          <h2 className="trk-h2-q">Which control layers carry the weight?</h2>
          <div className="bd-fig"><Stack layers={brief.layers} /></div>
          <p className="bd-cap">Each layer is described, with its controls and documents, on the <Link href="/agentic-banking/control-plane">control plane</Link> page.</p>
          <ul className="trk-list" style={{ marginTop: 14 }}>
            {LAYER_IDS.filter((id) => brief.layers[id] >= 0.9).map((id) => (
              <li key={id}><Link href={`/agentic-banking/control-plane#${id}`}>{LAYER_NAMES[id]}</Link>: core for this design.</li>
            ))}
          </ul>
        </>
      ))}

      {sec("Documents", (
        <>
          <h2 className="trk-h2-q">Which rules and guidance does this design answer to?</h2>
          <div className="trk-table-wrap">
            <table className="trk-table">
              <thead><tr><th>Document</th><th>Authority</th><th className="trk-td-min">Why it applies here</th><th>Status</th></tr></thead>
              <tbody>
                {docs.map(({ doc, why }) => (
                  <tr key={doc.slug}>
                    <td className="trk-td-mid"><Link href={doc.href} className="trk-td-strong">{doc.name}</Link></td>
                    <td className="trk-td-nowrap">{doc.authority}</td>
                    <td className="trk-td-min">{why}</td>
                    <td className="trk-td-nowrap">{doc.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ))}

      {sec("Evals", (
        <>
          <h2 className="trk-h2-q">How will you know it works, before and after launch?</h2>
          <div className="bd-fig"><EvalMix verify={a.verify} tier={brief.tier} /></div>
          <ul className="trk-list" style={{ marginTop: 14 }}>
            {brief.evals.map((e) => <li key={e.slice(0, 40)}>{e}</li>)}
          </ul>
        </>
      ))}

      {sec("Human gates", (
        <>
          <h2 className="trk-h2-q">Where must a person be in the loop?</h2>
          <ul className="trk-list">{brief.gates.map((g) => <li key={g.slice(0, 40)}>{g}</li>)}</ul>
        </>
      ))}

      {pitfalls && pitfalls.length > 0 && sec("Pitfalls", (
        <ul className="trk-list">{pitfalls.map((p) => <li key={p.slice(0, 40)}>{p}</li>)}</ul>
      ))}

      {sec("Examiner questions", (
        <>
          <h2 className="trk-h2-q">What will a validator or an examiner ask?</h2>
          <ol className="trk-list">{brief.examiner.map((q) => <li key={q.slice(0, 40)}>{q}</li>)}</ol>
        </>
      ))}

      {sec("For the board", (
        <div className="bd-board">{brief.board.map((l) => <p key={l.slice(0, 40)}>{l}</p>)}</div>
      ))}

      {(peers.length > 0 || mine) && sec("Peer evidence", (
        <>
          {mine && (
            <p className="trk-p">
              <Link href={mine.href} className="trk-td-strong">{mine.shortName}</Link> answers to {mine.authorities.join(", ")} on AI; its page records {mine.useCases.length} AI use cases{mine.useCases.some((u) => u.useCase === a.useCase) ? `, including ${mine.useCases.filter((u) => u.useCase === a.useCase).map((u) => `${u.name} (${u.status.toLowerCase()})`).join("; ")}` : `, none yet in ${label.toLowerCase()}`}.
            </p>
          )}
          <h2 className="trk-h2-q">Which of the 100 largest US banks have put this use case on the record?</h2>
          <div className="trk-related">
            {peers.map((b) => <Link key={b.slug} href={b.href}>{b.shortName} →</Link>)}
          </div>
        </>
      ))}
    </div>
  );
}

/** Plain-text version for pasting into an intake or design-review template. */
export function briefToText(brief: Brief, lookups: Lookups, decomposition?: Decomposition[], pitfalls?: string[]): string {
  const a = brief.answers;
  const label = lookups.useCaseLabels[a.useCase] ?? a.useCase;
  const L: string[] = [];
  L.push(`DESIGN BRIEF: ${label}`, `Generated from bankingnewsai.com/agentic-banking/build on ${new Date().toISOString().slice(0, 10)}`, "");
  L.push(`Pattern: ${PATTERNS[brief.pattern].name}${brief.shapes.length ? ` (${brief.shapes.map((s) => SHAPES[s].name).join(", ")})` : ""}`);
  L.push(`Tier: ${TIERS[brief.tier].name}. ${TIERS[brief.tier].line}`);
  L.push(`Involvement: ${brief.involvement}`);
  L.push(`Knowledge: ${brief.knowledge.join(" ")}`, "");
  if (decomposition?.length) { L.push("DECOMPOSITION"); decomposition.forEach((r, i) => L.push(`${i + 1}. ${r.step} — ${r.owner === "human" ? "a person" : r.owner === "model" ? "the model" : "a system"}. ${r.note}`)); L.push(""); }
  L.push("CONTROL LAYERS (core)"); LAYER_IDS.filter((id) => brief.layers[id] >= 0.9).forEach((id) => L.push(`- ${LAYER_NAMES[id]}`)); L.push("");
  L.push("DOCUMENTS"); brief.docs.forEach((d) => { const doc = lookups.docs[d.slug]; if (doc) L.push(`- ${doc.name} (${doc.authority}, ${doc.status}): ${d.why} https://www.bankingnewsai.com${doc.href}`); }); L.push("");
  L.push("EVALS"); brief.evals.forEach((e) => L.push(`- ${e}`)); L.push("");
  L.push("HUMAN GATES"); brief.gates.forEach((g) => L.push(`- ${g}`)); L.push("");
  if (pitfalls?.length) { L.push("PITFALLS"); pitfalls.forEach((p) => L.push(`- ${p}`)); L.push(""); }
  L.push("EXAMINER QUESTIONS"); brief.examiner.forEach((q, i) => L.push(`${i + 1}. ${q}`)); L.push("");
  L.push("FOR THE BOARD"); brief.board.forEach((b) => L.push(`- ${b}`));
  return L.join("\n");
}
