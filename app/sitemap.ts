import type { MetadataRoute } from "next";
import { listSentDigests, ensureSchema } from "@/lib/db";

// Revalidate at most every hour as a fallback.
// The send cron route calls revalidatePath("/sitemap.xml") immediately after each send,
// so in practice the sitemap updates within seconds of a new digest going out.
export const revalidate = 3600;

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://bankingnewsai.com");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await ensureSchema();
  const digests = await listSentDigests(365).catch(() => []);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${BASE_URL}/issues`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    }
  ];

  const issueRoutes: MetadataRoute.Sitemap = digests.map((d) => ({
    url: `${BASE_URL}/issues/${d.digest_date}`,
    lastModified: d.sent_at ? new Date(d.sent_at) : new Date(d.created_at),
    changeFrequency: "never" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...issueRoutes];
}
