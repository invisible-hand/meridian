import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/seo";
import {
  allDeadlines,
  documentPath,
  formatDate,
  latestDocumentUpdate,
  openConsultations,
  todayIso,
  type Deadline
} from "@/lib/tracker";
import { Section, TrackerShell } from "../shell";

const TITLE = "AI Regulation Deadlines for Banks — Effective Dates & Comment Periods (2026–2027)";
const DESCRIPTION =
  "Every dated AI-regulation deadline that affects banks in one calendar: EU AI Act application dates, US comment periods, guidance effective dates and consultation closings — upcoming first, with the past year for reference.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-regulation/deadlines" },
  openGraph: { type: "website", url: "/ai-regulation/deadlines", title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary_large_image", title: "AI Regulation Deadlines — Tracker", description: DESCRIPTION }
};

// The split between "upcoming" and "past" depends on today's date.
export const revalidate = 86400;

export default function DeadlinesPage() {
  const today = todayIso();
  const rows = allDeadlines();
  const upcoming = rows.filter((r) => r.date >= today);
  const past = rows.filter((r) => r.date < today).reverse();
  const open = openConsultations(today);
  const updated = latestDocumentUpdate();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: absoluteUrl("/ai-regulation/deadlines"),
      name: TITLE,
      description: DESCRIPTION,
      dateModified: updated,
      isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      breadcrumb: breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "AI Regulation Tracker", path: "/ai-regulation" },
        { name: "Deadlines", path: "/ai-regulation/deadlines" }
      ]),
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: upcoming.length,
        itemListElement: upcoming.map((d, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${formatDate(d.date)} — ${d.authority.name}: ${d.label}`,
          ...(d.docSlug ? { url: absoluteUrl(documentPath(d.docSlug)) } : {})
        }))
      }
    }
  ];

  const next = upcoming[0];

  return (
    <TrackerShell
      eyebrow={<><Link href="/ai-regulation" style={{ color: "inherit", textDecoration: "none" }}>AI Regulation Tracker</Link> · Calendar</>}
      title={<>When do AI rules for banks take effect?<br /><em>Every deadline, one calendar.</em></>}
      updated={`Last updated ${formatDate(updated)} · Recomputed daily`}
      ctaTitle="Never miss a deadline"
    >
      <JsonLd data={schema} />
      <p className="trk-answer">
        {upcoming.length > 0 && next
          ? `The next AI-regulation deadline for banks is ${formatDate(next.date)}: ${next.authority.name} — ${next.label}. `
          : "No future AI-regulation deadlines are currently scheduled. "}
        {open.length > 0
          ? `${open.length} ${open.length === 1 ? "consultation is" : "consultations are"} open for comment right now. `
          : "No consultations are open for comment right now. "}
        This calendar is generated from the tracker&apos;s document data — comment deadlines, effective dates,
        and application milestones across {new Set(rows.map((r) => r.authority.slug)).size} authorities — and
        recomputed every day.
      </p>

      {open.length > 0 && (
        <Section label="Open for comment">
          <h2 className="trk-h2-q">Which AI consultations can banks still respond to?</h2>
          <div className="trk-table-wrap">
            <table className="trk-table">
              <thead><tr><th>Closes</th><th>Authority</th><th>Consultation</th></tr></thead>
              <tbody>
                {open.map((d) => (
                  <tr key={d.slug}>
                    <td className="trk-td-nowrap">{d.commentDeadline ? formatDate(d.commentDeadline) : "—"}</td>
                    <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority}`}>{d.authority.toUpperCase()}</Link></td>
                    <td><Link href={documentPath(d)} className="trk-td-strong">{d.shortName}</Link> — {d.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section label="Upcoming">
        <h2 className="trk-h2-q">What AI regulation deadlines are coming up for banks?</h2>
        <DeadlineTable rows={upcoming} empty="No upcoming dated deadlines." />
      </Section>

      <Section label="Past deadlines">
        <h2 className="trk-h2-q">Which AI rules have already taken effect?</h2>
        <DeadlineTable rows={past} past />
      </Section>

      <Section label="Navigate">
        <div className="trk-related">
          <Link href="/ai-regulation/documents">All documents →</Link>
          <Link href="/ai-regulation/by-use-case">By use case →</Link>
          <Link href="/ai-regulation">All authorities →</Link>
        </div>
      </Section>
    </TrackerShell>
  );
}

function DeadlineTable({ rows, past = false, empty }: { rows: Deadline[]; past?: boolean; empty?: string }) {
  if (rows.length === 0) return <p className="trk-p">{empty ?? "Nothing recorded."}</p>;
  return (
    <div className="trk-table-wrap">
      <table className="trk-table">
        <thead><tr><th>Date</th><th>Authority</th><th>What</th><th>Event</th></tr></thead>
        <tbody>
          {rows.map((d, i) => (
            <tr key={`${d.date}-${d.authority.slug}-${i}`} className={past ? "trk-past" : undefined}>
              <td className="trk-td-nowrap">{formatDate(d.date)}</td>
              <td className="trk-td-nowrap"><Link href={`/ai-regulation/${d.authority.slug}`}>{d.authority.name}</Link></td>
              <td>
                {d.docSlug ? (
                  <Link href={documentPath(d.docSlug)} className="trk-td-strong">{d.label}</Link>
                ) : d.link ? (
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="trk-td-strong">{d.label}</a>
                ) : (
                  <span className="trk-td-strong">{d.label}</span>
                )}
              </td>
              <td className="trk-td-nowrap">{d.kind}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
