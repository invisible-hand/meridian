import type { Metadata } from "next";
import ArchiveView, { formatIssueDateShort, getArchiveSummary } from "./archive-view";

// Re-render at most once an hour as a fallback. The send cron calls
// `revalidatePath("/issues")` immediately after each successful send, so the
// archive list updates within seconds of a new issue going out.
export const revalidate = 3600;

/**
 * This page carries roughly a third of the site's search impressions, and the
 * queries behind them are freshness queries — "banking ai news today",
 * "banking operations ai news last 24 hours". It sat at position 8 with a 0%
 * click-through rate under the old "Archive — …" title, which answered none of
 * them. Title and description now lead with the recency claim, and the date of
 * the newest issue goes into the snippet so the promise is visibly current.
 */
export async function generateMetadata(): Promise<Metadata> {
  const { total, latest } = await getArchiveSummary();
  const updated = latest ? formatIssueDateShort(latest) : null;

  const title = "Banking AI News Today — Daily Brief";
  const description = updated
    ? `Banking AI news from the last 24 hours, updated ${updated}. What the Fed, OCC, FDIC and the major US banks did today, in six curated stories. Free, no paywall.`
    : "Banking AI news from the last 24 hours: what the Fed, OCC, FDIC and the major US banks did today, in six curated stories every morning. Free, no paywall.";

  return {
    title,
    description,
    alternates: { canonical: "/issues" },
    openGraph: {
      type: "website",
      url: "/issues",
      title: updated ? `Banking AI News — updated ${updated}` : "Banking AI News — daily brief",
      description: `Six curated stories a day for banking executives.${total ? ` ${total} issues archived.` : ""} Free.`
    },
    twitter: {
      card: "summary_large_image",
      title: "Banking AI News Today",
      description: "The last 24 hours in banking AI, in six curated stories."
    }
  };
}

export default async function IssuesPage() {
  return <ArchiveView page={1} />;
}
