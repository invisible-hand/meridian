import Link from "next/link";
import type { DeepDive } from "@/lib/regulators";
import { getRegulator } from "@/lib/regulators";
import { documentPath, getDocument } from "@/lib/tracker";
import { Section } from "./shell";

// One long-form, question-phrased section per DeepDive — shared by authority
// and document pages so the two can never drift apart. `selfDocSlug` is the
// document page being rendered, so rows citing it don't link to themselves.

export function DeepDives({ items, selfDocSlug }: { items?: DeepDive[]; selfDocSlug?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      {items.map((dd) => (
        <Section key={dd.id} label={dd.label}>
          <h2 className="trk-h2-q" id={dd.id} style={{ scrollMarginTop: 72 }}>{dd.question}</h2>
          <p className="trk-answer" style={{ margin: "0 0 28px" }}>{dd.answer}</p>

          {dd.requirements && dd.requirements.length > 0 && (
            <div className="trk-table-wrap">
              <table className="trk-table">
                <thead><tr><th>Rule</th><th>Authority</th><th className="trk-td-min">What it requires</th><th>Applies</th></tr></thead>
                <tbody>
                  {dd.requirements.map((r) => {
                    const auth = getRegulator(r.authority);
                    const doc = r.docSlug ? getDocument(r.docSlug) : undefined;
                    const isSelf = Boolean(doc && doc.slug === selfDocSlug);
                    return (
                      <tr key={r.rule}>
                        <td className="trk-td-mid">
                          {doc && !isSelf ? (
                            <Link href={documentPath(doc)} className="trk-td-strong">{r.rule}</Link>
                          ) : r.link ? (
                            <a href={r.link} target="_blank" rel="noopener noreferrer" className="trk-td-strong">{r.rule} ↗</a>
                          ) : (
                            <span className="trk-td-strong">{r.rule}</span>
                          )}
                        </td>
                        <td className="trk-td-nowrap">
                          {auth ? <Link href={`/ai-regulation/${auth.slug}`}>{auth.name}</Link> : r.authority}
                        </td>
                        <td className="trk-td-min">{r.requirement}</td>
                        <td className="trk-td-nowrap">{r.when ?? "In force"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {(dd.detail ?? []).map((para) => (
            <p className="trk-p" key={para.slice(0, 40)} style={{ marginTop: 24 }}>{para}</p>
          ))}

          {dd.practice && dd.practice.length > 0 && (
            <>
              <p className="trk-kicker" style={{ marginTop: 28 }}>WHAT THIS MEANS IN PRACTICE</p>
              <ul className="trk-list">
                {dd.practice.map((x) => (<li key={x.slice(0, 40)}>{x}</li>))}
              </ul>
            </>
          )}
        </Section>
      ))}
    </>
  );
}

/** FAQPage entries for the deep dives (question + quotable answer + requirement rows). */
export function deepDiveFaqEntries(items?: DeepDive[]): Record<string, unknown>[] {
  return (items ?? []).map((d) => ({
    "@type": "Question",
    name: d.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [d.answer, ...(d.requirements ?? []).map((r) => `${r.rule} (${r.when ?? "in force"}): ${r.requirement}`)].join(" ")
    }
  }));
}
