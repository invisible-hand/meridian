import { getRegulator } from "@/lib/regulators";
import { documentPath, getDocument } from "@/lib/tracker";

/** Resolve a tracked document slug to a link, its short name and its authority. */
export function resolveDoc(slug: string): { href: string; name: string; authority: string; date: string; title: string } | null {
  const d = getDocument(slug);
  if (!d) return null;
  const a = getRegulator(d.authority);
  return { href: documentPath(d), name: d.shortName, authority: a?.name ?? d.authority, date: d.date, title: d.title };
}

/** Text matcher for "coverage in the daily brief" on agent pages. */
export function agentMatcher(text: string): boolean {
  return /\bagentic\b|\bAI agents?\b|\bautonomous agents?\b|\bmulti-agent\b/i.test(text);
}
