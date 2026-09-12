import Link from "next/link";
import { getRegulator } from "@/lib/regulators";
import { documentPath, formatDate, getDocument } from "@/lib/tracker";
import { BANKS, BANK_COUNT, bankPath, type Bank } from "@/lib/banks";
import type { UseCase } from "@/lib/regulators";
import type { HubEvent, HubPillar } from "@/lib/hubs";
import { Section } from "./ai-regulation/shell";

// Shared building blocks for the topic hubs (/ai-governance, /ai-fraud-detection).

export function PillarSection({ p }: { p: HubPillar }) {
  return (
    <Section label={p.title}>
      <h2 className="trk-h2-q" id={p.id} style={{ scrollMarginTop: 72 }}>{p.question}</h2>
      <p className="trk-answer" style={{ margin: "0 0 28px" }}>{p.answer}</p>
      <div className="trk-table-wrap">
        <table className="trk-table">
          <thead><tr><th>Rule</th><th>Authority</th><th className="trk-td-min">What it requires</th><th>Applies</th></tr></thead>
          <tbody>
            {p.rows.map((r) => {
              const doc = getDocument(r.docSlug);
              const auth = doc ? getRegulator(doc.authority) : undefined;
              return (
                <tr key={r.rule}>
                  <td className="trk-td-mid">{doc ? <Link href={documentPath(doc)} className="trk-td-strong">{r.rule}</Link> : <span className="trk-td-strong">{r.rule}</span>}</td>
                  <td className="trk-td-nowrap">{auth ? <Link href={`/ai-regulation/${auth.slug}`}>{auth.name}</Link> : ""}</td>
                  <td className="trk-td-min">{r.requirement}</td>
                  <td className="trk-td-nowrap">{r.when}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function HubTimeline({ events }: { events: HubEvent[] }) {
  return (
    <Section label="Timeline">
      <div className="trk-table-wrap">
        <table className="trk-table">
          <thead><tr><th>Date</th><th className="trk-td-min">Event</th><th>Document</th></tr></thead>
          <tbody>
            {[...events].sort((a, b) => (a.date < b.date ? 1 : -1)).map((e) => {
              const doc = getDocument(e.docSlug);
              return (
                <tr key={e.date + e.title}>
                  <td className="trk-td-nowrap">{formatDate(e.date)}</td>
                  <td className="trk-td-min">{e.title}</td>
                  <td className="trk-td-mid">{doc ? <Link href={documentPath(doc)}>{doc.shortName}</Link> : e.docSlug}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/** The banks whose pages record a use case of this kind, largest first. */
export function banksWithUseCase(useCase: UseCase): { bank: Bank; items: Bank["useCases"] }[] {
  return BANKS.map((bank) => ({ bank, items: bank.useCases.filter((u) => u.useCase === useCase) })).filter((x) => x.items.length > 0);
}

export function BankUseCaseTable({ useCase, label, question, intro }: { useCase: UseCase; label: string; question: string; intro: string }) {
  const rows = banksWithUseCase(useCase);
  return (
    <Section label={label}>
      <h2 className="trk-h2-q">{question}</h2>
      <p className="trk-p">{intro.replace("{n}", String(rows.length)).replace("{total}", String(BANK_COUNT))}</p>
      <div className="trk-table-wrap">
        <table className="trk-table">
          <thead><tr><th>Bank</th><th className="trk-td-min">What the record shows</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map(({ bank, items }) => (
              <tr key={bank.slug}>
                <td className="trk-td-nowrap"><Link href={bankPath(bank)} className="trk-td-strong">{bank.shortName}</Link></td>
                <td className="trk-td-min">{items.map((u) => `${u.name}: ${u.detail}`).join(" ")}</td>
                <td className="trk-td-nowrap">{Array.from(new Set(items.map((u) => u.status))).join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
