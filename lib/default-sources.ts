export type SourceSeed = {
  name: string;
  url: string;
  type: "rss";
};

export const DEFAULT_SOURCES: SourceSeed[] = [
  // ── First-class source (handled separately in ingest.ts) ──────────────
  { name: "Smol AI Issues", url: "https://news.smol.ai/issues.rss", type: "rss" },

  // ── Banking & Fintech (primary — AI + banking relevance) ──────────────
  { name: "Banking Dive", url: "https://www.bankingdive.com/feeds/news/", type: "rss" },
  { name: "Tearsheet", url: "https://tearsheet.co/feed/", type: "rss" },
  { name: "Crowdfund Insider", url: "https://www.crowdfundinsider.com/feed/", type: "rss" },
  { name: "Finovate", url: "https://www.finovate.com/feed/", type: "rss" },
  { name: "Finextra AI", url: "https://www.finextra.com/rss/channel.aspx?channel=ai", type: "rss" },
  { name: "Finextra Payments", url: "https://www.finextra.com/rss/channel.aspx?channel=payments", type: "rss" },
  { name: "Finextra Retail Banking", url: "https://www.finextra.com/rss/channel.aspx?channel=retail", type: "rss" },
  { name: "PYMNTS AI", url: "https://www.pymnts.com/artificial-intelligence-2/feed/", type: "rss" },
  { name: "PYMNTS Payments", url: "https://www.pymnts.com/payments/feed/", type: "rss" },
  { name: "Fintech Futures", url: "https://www.fintechfutures.com/feed/", type: "rss" },
  { name: "Fintech Nexus", url: "https://www.fintechnexus.com/feed/", type: "rss" },

  // ── General AI (kept only for cross-over banking stories) ─────────────
  { name: "VentureBeat AI", url: "https://venturebeat.com/category/ai/feed/", type: "rss" },
  { name: "MIT Technology Review AI", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed/", type: "rss" },
  { name: "Axios AI+", url: "https://api.axios.com/feed/artificial-intelligence", type: "rss" },
  { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/", type: "rss" },

  // ── Financial press ────────────────────────────────────────────────────
  { name: "Financial Times Technology", url: "https://www.ft.com/technology?format=rss", type: "rss" },
  { name: "Bloomberg Technology", url: "https://feeds.bloomberg.com/technology/news.rss", type: "rss" },
  { name: "WSJ Technology", url: "https://feeds.a.dj.com/rss/RSSWSJD.xml", type: "rss" }
];
