// JSON-LD generators for Schema.org structured data + a minimal React
// component for emitting them. Schema.org markup is the primary signal Google
// uses to surface NewsArticle in Top Stories and AI Overviews, and it's what
// answer engines (Perplexity, ChatGPT, Gemini) ingest when citing sources.

import {
  BASE_URL,
  ORG_LOGO_SIZE,
  ORG_LOGO_URL,
  ORG_SAMEAS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  absoluteUrl,
  isoToArticleDate
} from "@/lib/seo";
import type { DailyDigest } from "@/lib/types";

type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org payload — safe to inject because we control all fields.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}

const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: ORG_LOGO_URL,
      width: ORG_LOGO_SIZE,
      height: ORG_LOGO_SIZE
    },
    ...(ORG_SAMEAS.length > 0 ? { sameAs: ORG_SAMEAS } : {})
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US"
  };
}

export function homeSchema(): JsonLdValue {
  return [organizationSchema(), websiteSchema()];
}

export function aboutPageSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl("/about"),
    name: `About ${SITE_NAME}`,
    description:
      "Why BankingNewsAI exists, who it's for, and how the daily brief gets curated.",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
    breadcrumb: breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" }
    ])
  };
}

export function archiveCollectionSchema(params: {
  digests: { digest_date: string; sent_at?: Date | null; created_at?: Date }[];
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: absoluteUrl("/issues"),
    name: `${SITE_NAME} Archive`,
    description:
      "Every daily AI brief for banking executives, ordered by date.",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
    breadcrumb: breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Archive", path: "/issues" }
    ]),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: params.digests.length,
      itemListElement: params.digests.slice(0, 30).map((d, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: absoluteUrl(`/issues/${d.digest_date}`)
      }))
    }
  };
}

export function newsArticleSchema(params: {
  date: string;
  digest: DailyDigest;
  description: string;
  headline: string;
  publishedAt: string | null;
  modifiedAt: string | null;
  ogImageUrl?: string;
}): Record<string, unknown> {
  const url = absoluteUrl(`/issues/${params.date}`);
  const datePublished = params.publishedAt ?? isoToArticleDate(params.date);
  const dateModified = params.modifiedAt ?? datePublished;
  const stories = [
    ...(params.digest.bankingStories ?? params.digest.stories ?? []),
    ...(params.digest.aiStories ?? [])
  ];

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: params.headline.slice(0, 110),
    description: params.description,
    datePublished,
    dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    articleSection: ["Banking", "Artificial Intelligence", "Fintech"],
    keywords: [
      "banking AI",
      "fintech AI",
      "AI news",
      "banking executive brief",
      "daily AI digest"
    ],
    author: { "@id": ORGANIZATION_ID, "@type": "NewsMediaOrganization", name: SITE_NAME },
    publisher: { "@id": ORGANIZATION_ID },
    image: params.ogImageUrl
      ? [
          {
            "@type": "ImageObject",
            url: params.ogImageUrl,
            width: 1200,
            height: 630
          }
        ]
      : [
          {
            "@type": "ImageObject",
            url: ORG_LOGO_URL,
            width: ORG_LOGO_SIZE,
            height: ORG_LOGO_SIZE
          }
        ],
    breadcrumb: breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Archive", path: "/issues" },
      { name: params.headline, path: `/issues/${params.date}` }
    ]),
    mentions: stories.slice(0, 10).map((story) => ({
      "@type": "NewsArticle",
      headline: story.title,
      url: story.sourceUrl
    }))
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
