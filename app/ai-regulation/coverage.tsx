import { cache } from "react";
import Link from "next/link";
import { ensureSchema, listSentDigests } from "@/lib/db";
import { formatIssueDateShort } from "@/lib/seo";
import { issuesMentioning } from "@/lib/tracker";
import { Section } from "./shell";

// "Coverage in the daily brief": sent issues whose stories literally mention
// this document/authority. Read-only over the digests table; if the DB is
// unreachable the section simply doesn't render.

const getDigests = cache(async () => {
  try {
    await ensureSchema();
    return await listSentDigests(400);
  } catch {
    return [];
  }
});

export async function Coverage({
  matches,
  label = "Coverage in the daily brief"
}: {
  matches: (text: string) => boolean;
  label?: string;
}) {
  const digests = await getDigests();
  const refs = issuesMentioning(digests, matches, 6);
  if (refs.length === 0) return null;
  return (
    <Section label={label}>
      <div className="trk-coverage">
        {refs.map((r) => (
          <Link key={r.date} href={`/issues/${r.date}`}>
            <span className="trk-coverage-date">{formatIssueDateShort(r.date)}</span>
            <span className="trk-coverage-title">{r.storyTitle ?? r.headline}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
