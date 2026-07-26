import type { Metadata } from "next";
import ArchiveView from "./archive-view";

// Re-render at most once an hour as a fallback. The send cron calls
// `revalidatePath("/issues")` immediately after each successful send, so the
// archive list updates within seconds of a new issue going out.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Archive — Every daily AI brief for banking",
  description:
    "Browse every issue of BankingNewsAI — the daily AI brief for banking executives. 6 curated stories per day: 3 banking AI, 3 general AI. Free, paywall-free.",
  alternates: { canonical: "/issues" },
  openGraph: {
    type: "website",
    url: "/issues",
    title: "BankingNewsAI Archive — Daily AI briefs for banking",
    description: "Every daily AI brief for banking executives. 6 stories a day, free."
  },
  twitter: {
    card: "summary_large_image",
    title: "BankingNewsAI Archive",
    description: "Every daily AI brief for banking executives."
  }
};

export default async function IssuesPage() {
  return <ArchiveView page={1} />;
}
