import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://bankingnewsai.com");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/issues"],
        disallow: ["/admin", "/api/"]
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
