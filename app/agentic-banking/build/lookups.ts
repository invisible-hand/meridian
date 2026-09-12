import { getRegulator, USE_CASES } from "@/lib/regulators";
import { effectiveStatus, USE_CASE_LABELS } from "@/lib/tracker";
import { BANKS, bankPath } from "@/lib/banks";
import { BUILD_DOC_SLUGS } from "@/lib/build";
import { resolveDoc } from "../docs";
import type { BankLite, DocLite, Lookups } from "./brief";
import { getDocument } from "@/lib/tracker";

// Server-side: the compact lookups the brief needs, so the client wizard never
// imports the 600KB document set or the bank modules.
export function buildLookups(): Lookups {
  const docs: Record<string, DocLite> = {};
  for (const slug of BUILD_DOC_SLUGS) {
    const r = resolveDoc(slug);
    const d = getDocument(slug);
    if (r && d) docs[slug] = { slug, name: r.name, title: r.title, authority: r.authority, href: r.href, status: effectiveStatus(d) };
  }
  const banks: BankLite[] = BANKS.map((b) => ({
    slug: b.slug,
    shortName: b.shortName,
    href: bankPath(b),
    authorities: b.regulatory.map((r) => getRegulator(r.authority)?.name ?? r.authority),
    useCases: b.useCases.map((u) => ({ useCase: u.useCase, name: u.name, status: u.status }))
  }));
  const useCaseLabels: Record<string, string> = {};
  for (const u of USE_CASES) useCaseLabels[u] = USE_CASE_LABELS[u].label;
  return { docs, banks, useCaseLabels };
}
