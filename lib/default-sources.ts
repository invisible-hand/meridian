export type SourceSeed = {
  name: string;
  url: string;
  type: "rss";
};

// Audience is US banking executives, so US-focused trade press and US federal
// regulators are prioritised over global/regional outlets.
//
// Two rules govern what belongs here:
//   1. Nothing whose article URLs live on a domain in lib/paywall.ts — those
//      items are ingested and then discarded 100% of the time before the LLM
//      ever sees them (this previously wasted ~24% of every ingest run).
//   2. Nothing that fails to put items inside the 72h window used by digest
//      generation. A pristine feed publishing once a month is dead weight.
export const DEFAULT_SOURCES: SourceSeed[] = [
  // ── First-class source (handled separately in ingest.ts) ──────────────
  { name: "Smol AI Issues", url: "https://news.smol.ai/issues.rss", type: "rss" },

  // ── US banking & fintech trade press ──────────────────────────────────
  { name: "Banking Dive", url: "https://www.bankingdive.com/feeds/news/", type: "rss" },
  { name: "ABA Banking Journal", url: "https://bankingjournal.aba.com/feed/", type: "rss" },
  { name: "PaymentsJournal", url: "https://www.paymentsjournal.com/feed/", type: "rss" },
  { name: "Payments Dive", url: "https://www.paymentsdive.com/feeds/news/", type: "rss" },
  { name: "CFO Dive", url: "https://www.cfodive.com/feeds/news/", type: "rss" },
  { name: "Cybersecurity Dive", url: "https://www.cybersecuritydive.com/feeds/news/", type: "rss" },
  { name: "HousingWire", url: "https://www.housingwire.com/feed/", type: "rss" },
  { name: "Crowdfund Insider", url: "https://www.crowdfundinsider.com/feed/", type: "rss" },
  { name: "Finovate", url: "https://www.finovate.com/feed/", type: "rss" },
  { name: "Finextra AI", url: "https://www.finextra.com/rss/channel.aspx?channel=ai", type: "rss" },
  { name: "Finextra Payments", url: "https://www.finextra.com/rss/channel.aspx?channel=payments", type: "rss" },
  { name: "Finextra Retail Banking", url: "https://www.finextra.com/rss/channel.aspx?channel=retail", type: "rss" },
  { name: "PYMNTS AI", url: "https://www.pymnts.com/artificial-intelligence-2/feed/", type: "rss" },
  { name: "PYMNTS Payments", url: "https://www.pymnts.com/payments/feed/", type: "rss" },
  { name: "RegTech Analyst", url: "https://regtechanalyst.com/feed/", type: "rss" },
  { name: "Coverager", url: "https://coverager.com/feed/", type: "rss" },
  { name: "FinTech Global", url: "https://fintech.global/feed/", type: "rss" },

  // ── US federal regulators (primary sources, never paywalled) ──────────
  // Low cadence by nature: several publish only a few times a week, so they
  // miss the 72h window often. High value when they do land — an actual
  // supervisory issuance is the single best story type for this brief.
  // OCC requires the Accept header set on the parser in lib/ingest.ts (406 without it).
  { name: "US Treasury", url: "https://public.govdelivery.com/topics/USTREAS_49/feed.rss", type: "rss" },
  { name: "CFTC", url: "https://www.cftc.gov/RSS/RSSGP/rssgp.xml", type: "rss" },
  { name: "SEC Press Releases", url: "https://www.sec.gov/news/pressreleases.rss", type: "rss" },
  { name: "Federal Reserve", url: "https://www.federalreserve.gov/feeds/press_all.xml", type: "rss" },
  { name: "FDIC Financial Institution Letters", url: "https://public.govdelivery.com/topics/USFDIC_19/feed.rss", type: "rss" },
  { name: "OCC Bulletins", url: "https://www.occ.gov/rss/occ_bulletins.xml", type: "rss" },

  // ── AI labs & cloud providers (primary sources) ───────────────────────
  { name: "OpenAI Blog", url: "https://openai.com/news/rss.xml", type: "rss" },
  { name: "Google DeepMind Blog", url: "https://deepmind.google/blog/rss.xml", type: "rss" },
  { name: "Google AI Blog", url: "https://blog.google/technology/ai/rss/", type: "rss" },
  { name: "AWS ML Blog", url: "https://aws.amazon.com/blogs/machine-learning/feed/", type: "rss" },
  { name: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml", type: "rss" },
  { name: "NVIDIA Blog", url: "https://blogs.nvidia.com/feed/", type: "rss" },

  // ── General AI press (executive altitude, not developer news) ─────────
  { name: "CIO Dive", url: "https://www.ciodive.com/feeds/news/", type: "rss" },
  { name: "AI News", url: "https://www.artificialintelligence-news.com/feed/", type: "rss" },
  { name: "AI Business", url: "https://aibusiness.com/rss.xml", type: "rss" },
  { name: "The Register AI/ML", url: "https://www.theregister.com/software/ai_ml/headlines.atom", type: "rss" },
  { name: "MIT Sloan Management Review", url: "https://sloanreview.mit.edu/feed/", type: "rss" },
  { name: "MIT Technology Review AI", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed/", type: "rss" },
  { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/", type: "rss" },
  { name: "VentureBeat AI", url: "https://venturebeat.com/category/ai/feed/", type: "rss" },
  { name: "The Verge AI", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", type: "rss" },
  { name: "Semafor Tech", url: "https://www.semafor.com/rss.xml", type: "rss" }
];
