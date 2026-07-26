import type { MetadataRoute } from "next";
import { listSentDigests, ensureSchema } from "@/lib/db";
import { BASE_URL } from "@/lib/seo";
import { ARCHIVE_PAGE_SIZE } from "@/app/issues/archive-view";

// Revalidate at most every hour as a fallback. The send cron route invalidates
// /sitemap.xml immediately after each successful send, so in practice the
// sitemap updates within seconds of a new digest going out.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await ensureSchema();
  const digests = await listSentDigests(365).catch(() => []);

  // Use the most recently sent digest as the homepage's lastModified, instead
  // of `new Date()`, which Google de-trusts as a freshness signal.
  const newest = digests[0];
  const homeLastModified = newest?.sent_at
    ? new Date(newest.sent_at)
    : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: homeLastModified,
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${BASE_URL}/issues`,
      lastModified: homeLastModified,
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: `${BASE_URL}/about`,
      // About is essentially static — let the build/deploy cycle update it.
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];

  // Paginated archive pages. Every issue is already listed individually below,
  // so these exist for crawl paths rather than discovery — hence the low
  // priority. Page 1 is the /issues entry above.
  const archivePageCount = Math.ceil(digests.length / ARCHIVE_PAGE_SIZE);
  const archiveRoutes: MetadataRoute.Sitemap = [];
  for (let p = 2; p <= archivePageCount; p++) {
    archiveRoutes.push({
      url: `${BASE_URL}/issues/page/${p}`,
      lastModified: homeLastModified,
      changeFrequency: "weekly",
      priority: 0.3
    });
  }

  // The newest issue gets a slight priority bump (0.8 vs 0.7) to signal
  // freshness to crawlers when they're deciding which URLs to refetch first.
  const issueRoutes: MetadataRoute.Sitemap = digests.map((d, idx) => ({
    url: `${BASE_URL}/issues/${d.digest_date}`,
    lastModified: d.sent_at ? new Date(d.sent_at) : new Date(d.created_at),
    changeFrequency: "never" as const,
    priority: idx === 0 ? 0.8 : 0.6
  }));

  return [...staticRoutes, ...archiveRoutes, ...issueRoutes];
}
