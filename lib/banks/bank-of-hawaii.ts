import type { Bank } from "@/lib/banks";

export const BANK_OF_HAWAII: Bank = {
  slug: "bank-of-hawaii",
  name: "Bank of Hawaii Corporation",
  shortName: "Bank of Hawaii",
  ticker: "BOH",
  hq: "Honolulu, HI",
  fedRank: 82,
  leadBank: "Bank of Hawaii",
  assetsUsdMillions: 23876,
  charter: "Hawaii state member bank (Federal Reserve)",
  posture: "Hawaii's second-largest bank introduced generative AI tools in 2025 under a retiring CEO who called AI 'a dramatic, technological, operational shift' he could not fully predict, and handed the next phase to a new chief executive in April 2026.",
  answerFirst:
    "Bank of Hawaii Corporation, the Honolulu parent of Bank of Hawaii with about $24 billion of assets, 350,000-plus digital enrolments and 6.4 million average monthly logins, has taken a cautious, explicit stance on AI. In a September 2025 interview, then chairman and CEO Peter Ho said 'AI is a dramatic, technological, operational shift that's happening in front of our very eyes' and that, much as he believed in 'the accretive power of that capability', there were 'elements that I just don't know how they ultimately play out for our organization', naming AI and shifting consumer behaviour as the changes shaping his two-to-three-year vision. The bank's 2025 annual report and 10-K list technology, AI and cybersecurity among enterprise risks, and at the April 2026 annual meeting the new president and CEO, James Polk, who succeeded Ho on 1 April 2026 after Ho's retirement, reported that the bank had 'introduced generative AI tools' during 2025 alongside five new or renovated 'Branches of Tomorrow', a new Lahaina branch and a West Pacific headquarters in Guam. Financially 2025 net income was $206 million, or $4.63 per diluted share, on $24.2 billion of assets and $21.2 billion of deposits; second-quarter 2026 net income was $63.8 million, or $1.47 per share, up 11.1% on the quarter, with a 15.47% return on common equity and what management calls 'pristine' credit quality, a 0.10% charge-off rate and 0.08% non-performing assets. No AI vendor, named leader, use case in production or budget has been disclosed; customer-facing content covers scams targeting seniors. Bank of Hawaii is a Hawaii state member bank supervised by the Federal Reserve.",
  keyPoints: [
    "Generative AI tools introduced in 2025, reported at the April 2026 annual meeting; no vendor, leader or use case named.",
    "Former CEO Peter Ho on AI: 'a dramatic, technological, operational shift' with outcomes he could not fully predict; retired 31 March 2026, succeeded by James Polk.",
    "Technology, AI and cybersecurity listed among enterprise risks in the 2025 10-K.",
    "Digital scale: 350,000-plus digital enrolments and 6.4 million average monthly logins; five Branches of Tomorrow opened or renovated in 2025.",
    "2025 net income $206 million ($4.63 per share); Q2 2026 net income $63.8 million ($1.47), ROE 15.47%, charge-offs 0.10%.",
    "West Pacific headquarters opened in Guam; new Lahaina branch after the Maui wildfires."
  ],
  leadership: [
    { name: "James C. Polk", role: "President and CEO (from 1 April 2026)", sources: ["boh-agm-2026"] },
    { name: "Bradley Satenberg", role: "Chief Financial Officer", sources: ["boh-agm-2026"] },
    { name: "Peter S. Ho", role: "Former Chairman and CEO (retired 31 March 2026)", linkedin: "https://www.linkedin.com/in/peter-ho-927b086", sources: ["hb-ho-2025", "boh-agm-2026"] }
  ],
  timeline: [
    { date: "2025-09-22", title: "CEO Peter Ho on AI as an operational shift", detail: "Belief in AI's 'accretive power' paired with uncertainty about outcomes for the bank and community.", sources: ["hb-ho-2025"] },
    { date: "2026-02-26", title: "2025 annual report and 10-K", detail: "Net income $205.9 million; technology, AI and cyber among disclosed risks; leadership succession.", sources: ["boh-ar-2026", "boh-10k-2026"] },
    { date: "2026-04-01", title: "James Polk becomes president and CEO", detail: "Peter Ho retires after 16 years as CEO.", sources: ["boh-agm-2026"] },
    { date: "2026-04-24", title: "Annual meeting: generative AI tools introduced in 2025", detail: "Branches of Tomorrow, Guam headquarters, digital adoption metrics.", sources: ["boh-agm-2026"] },
    { date: "2026-07-27", title: "Second-quarter 2026 results", detail: "Net income $63.8 million; EPS $1.47; ROE 15.47%.", sources: ["boh-q2-2026"] },
    { date: "2025-06-01", title: "Scam guidance for seniors", detail: "Top ten scams and how to avoid them.", sources: ["boh-scams"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Generative AI tools for employees", detail: "Introduced in 2025; scope and vendor undisclosed.", status: "In production", sources: ["boh-agm-2026"] },
    { useCase: "governance-general", name: "AI listed as an enterprise risk", detail: "Technology, AI and cybersecurity risk factors in the 10-K.", status: "In production", sources: ["boh-10k-2026"] },
    { useCase: "customer-chatbots", name: "Digital banking scale", detail: "350,000-plus enrolments; 6.4 million monthly logins; Branches of Tomorrow.", status: "In production", sources: ["boh-10k-2026"] },
    { useCase: "fraud", name: "Scam education for seniors", detail: "Top-ten scams guidance.", status: "In production", sources: ["boh-scams"] }
  ],
  numbers: [
    { label: "2025 net income / diluted EPS", value: "$206 million / $4.63", asOf: "2026-04-24", sources: ["boh-agm-2026", "boh-ar-2026"] },
    { label: "Q2 2026 net income / diluted EPS", value: "$63.8 million / $1.47", asOf: "2026-07-27", sources: ["boh-q2-2026"] },
    { label: "Digital enrolments / average monthly logins", value: "350,000+ / 6.4 million", asOf: "2026-02-26", sources: ["boh-10k-2026"] },
    { label: "Return on average common equity, Q2 2026", value: "15.47%", asOf: "2026-07-27", sources: ["boh-q2-2026"] }
  ],
  quotes: [
    { who: "Peter Ho", role: "Chairman and CEO (retired March 2026)", date: "2025-09-22", quote: "AI is a dramatic, technological, operational shift that's happening in front of our very eyes.", sources: ["hb-ho-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Bank of Hawaii is a state member bank; Fed model-risk and third-party guidance govern generative AI tools and vendors.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer products bring UDAAP and chatbot-guidance exposure to any customer-facing AI.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "sec", why: "AI risk-factor disclosure in the 10-K sits within SEC scrutiny of AI-related statements.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "A new CEO can set the AI agenda", detail: "Polk inherits generative tools already deployed and a predecessor's candour about uncertainty; the first strategic statement on AI is his to make." },
    { title: "Digital scale is the asset", detail: "Six million monthly logins on an island franchise is a rich data set for service and fraud models that has not been described." },
    { title: "Risk-factor disclosure should evolve into use-case disclosure", detail: "Listing AI as a risk without naming its uses tells investors less than peers now provide." },
    { title: "Pristine credit gives room to experiment", detail: "Charge-offs of 0.10% mean AI need not start in credit; operations and service are lower-risk starting points." }
  ],
  faq: [
    { q: "Does Bank of Hawaii use AI?", a: "Bank of Hawaii introduced generative AI tools in 2025, as reported at its April 2026 annual meeting, and lists AI among its enterprise risks. It has not named vendors, use cases or a budget. Former CEO Peter Ho described AI as a dramatic operational shift whose outcomes for the bank remained uncertain." },
    { q: "Who leads Bank of Hawaii now?", a: "James C. Polk became president and CEO on 1 April 2026 after Peter Ho retired as chairman and CEO. Bradley Satenberg was promoted to chief financial officer." }
  ],
  sources: [
    { id: "boh-scams", title: "Top 10 Common Scams Targeting Seniors, and How to Avoid Them", publisher: "Bank of Hawaii", url: "https://www.boh.com/blog/top-10-common-scams-targeting-seniors-and-how-to-avoid-them", date: "2025-06-01" },
    { id: "hb-ho-2025", title: "Peter Ho, CEO of Bank of Hawai'i", publisher: "Hawaii Business Magazine", url: "https://hawaiibusiness.com/peter-ho-ceo-of-bank-of-hawaii", date: "2025-09-22" },
    { id: "boh-ar-2026", title: "Financial Summary, 2025 Annual Report", publisher: "Bank of Hawaii Corporation", url: "https://boh.com/siteassets/annual-reports/annual-report-2025/financial-summary-2025-annual-report.pdf", date: "2026-02-26" },
    { id: "boh-10k-2026", title: "Bank of Hawaii Corporation 2025 Form 10-K", publisher: "Bank of Hawaii Corporation", url: "https://ir.boh.com/static-files/7bad9d82-0011-4658-8b69-fb03d51190bd", date: "2026-02-26" },
    { id: "boh-agm-2026", title: "Bank of Hawaii Shareholders Re-Elect Directors, Approve Pay and EY as Auditor at Virtual AGM", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/bank-hawaii-shareholders-elect-directors-100836326.html", date: "2026-04-28" },
    { id: "boh-q2-2026", title: "Bank of Hawai'i Corporation Second Quarter 2026 Financial Results", publisher: "Bank of Hawaii Corporation (Business Wire via FT)", url: "https://markets.ft.com/data/announce/full?dockey=600-202607270645BIZWIRE_USPRX____20260727_BW404067-1", date: "2026-07-27" }
  ],
  lastUpdated: "2026-09-10"
};
