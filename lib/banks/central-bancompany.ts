import type { Bank } from "@/lib/banks";

export const CENTRAL_BANCOMPANY: Bank = {
  slug: "central-bancompany",
  name: "Central Bancompany",
  shortName: "Central Bank",
  ticker: "CBC",
  hq: "Jefferson City, MO",
  fedRank: 92,
  leadBank: "The Central Trust Bank",
  assetsUsdMillions: 20473,
  charter: "Missouri state member bank (Federal Reserve)",
  posture: "A 124-year-old Missouri bank that went public in November 2025 to fund an acquisition, employs about 65 in-house programmers and designers, is replacing its core with real-time API-based systems, and publishes customer guides on AI's economy and AI scams without disclosing AI of its own.",
  platform: {
    name: "In-house technology division and core modernisation programme",
    detail: "Central Bancompany describes 'an in-house technology division and innovation teams, together employing approximately 65 programmers and designers' that support its consumer, commercial and wealth lines, a 'highly rated mobile app', treasury-management tools for governments and associations 'much of which we have built with our own technology', and a banking core modernisation project 'intended to provide us with real-time, API-based capabilities'. The bank ranks as the 18th-largest HSA provider. Customer-facing content explains how AI is changing the economy and how AI-enhanced scams and voice cloning work. No AI leader, model, vendor or budget has been disclosed.",
    sources: ["cbc-business-2026", "cbc-aiecon", "cbc-aiscams"]
  },
  answerFirst:
    "Central Bancompany, the Jefferson City, Missouri parent of The Central Trust Bank, founded in 1902 and family-controlled for generations, became a public company in November 2025 when it raised about $400 million on Nasdaq to fund an acquisition of a $2 billion-plus bank in Texas or another target market, having narrowed a list of about 30 candidates. It has $20.75 billion of consolidated assets, $17.3 billion of wealth assets under advice, roughly 1,400 full-time employees and more than 150 facilities across Missouri and eight other states, and it earns like few peers: second-quarter 2026 net income was $113.8 million, or $0.47 per share, a 2.24% return on assets, a 4.40% net interest margin and a 46.5% efficiency ratio, which president and CEO John 'JR' Ross called 'another set of solid financial results'; the board declared a $0.12 dividend and authorised a $100 million buyback. Forbes ranked it the ninth-best bank in America in 2026, one of two banks in the top 50 every year since 2009. Technology is a stated differentiator built in house: about 65 programmers and designers, a highly rated mobile app, self-built treasury tools for governments and associations, and a core modernisation project for 'real-time, API-based capabilities' whose technology costs the bank flags as rising 'consistent with continued investment in our branch network and infrastructure'. On AI the bank educates rather than discloses: learning-centre articles on how AI is changing the economy and on AI-enhanced scams and voice cloning. No AI leader, model, vendor or budget appears in its business description or earnings releases. The Central Trust Bank is a Missouri state member bank supervised by the Federal Reserve.",
  keyPoints: [
    "In-house technology: about 65 programmers and designers; self-built treasury tools; core modernisation for real-time, API-based capabilities.",
    "IPO in November 2025 (Nasdaq: CBC) raising about $400 million to fund an acquisition of a $2 billion-plus bank in a target market such as Texas.",
    "Q2 2026 net income $113.8 million ($0.47); ROA 2.24%; NIM 4.40%; efficiency ratio 46.5%; $100 million buyback authorised.",
    "Forbes number nine Best Bank in America 2026; top 50 every year since 2009.",
    "Customer education on AI: how AI is changing the economy; AI-enhanced scams and voice cloning.",
    "No AI leader, model, vendor or budget disclosed; 18th-largest HSA provider."
  ],
  leadership: [
    { name: "John 'JR' Ross", role: "President and CEO", linkedin: "https://www.linkedin.com/in/john-ross-51510540", sources: ["cbc-q2-2026"] }
  ],
  timeline: [
    { date: "2025-11-12", title: "IPO launched to fund an acquisition", detail: "About $400 million sought; roughly 30 target banks screened.", sources: ["ab-ipo-2025"] },
    { date: "2026-03-25", title: "First 10-K as a public company", detail: "65-person technology team; core modernisation; Forbes number nine.", sources: ["cbc-business-2026"] },
    { date: "2026-04-28", title: "First-quarter 2026 results", detail: "Net income $111.1 million; $0.46 per share.", sources: ["cbc-q1-2026"] },
    { date: "2026-08-04", title: "Second-quarter 2026 results; $100 million buyback", detail: "Net income $113.8 million; ROA 2.24%; efficiency 46.5%.", sources: ["cbc-q2-2026"] },
    { date: "2025-06-01", title: "AI economy and AI scam guides for customers", detail: "How AI is changing the economy; AI-enhanced scams and voice cloning.", sources: ["cbc-aiecon", "cbc-aiscams"] },
    { date: "2025-12-31", title: "Year-end 2025 position", detail: "$20.75 billion of assets; $16.0 billion of wealth assets under advice; 18th-largest HSA provider.", sources: ["cbc-business-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Core modernisation to real-time, API-based systems", detail: "In-progress replacement of the banking core.", status: "Rolling out", sources: ["cbc-business-2026"] },
    { useCase: "generative-agentic-ai", name: "In-house digital and treasury platforms", detail: "Mobile app and government and association treasury tools built by the bank's own developers.", status: "In production", sources: ["cbc-business-2026"] },
    { useCase: "fraud", name: "Customer education on AI-enhanced scams", detail: "Voice cloning and impersonation guidance.", status: "In production", sources: ["cbc-aiscams", "cbc-aiimitate"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$113.8 million / $0.47", asOf: "2026-08-04", sources: ["cbc-q2-2026"] },
    { label: "Return on average assets / efficiency ratio, Q2 2026", value: "2.24% / 46.5%", asOf: "2026-08-04", sources: ["cbc-q2-2026"] },
    { label: "In-house programmers and designers", value: "≈ 65", asOf: "2025-12-31", sources: ["cbc-business-2026"] },
    { label: "Wealth assets under advice", value: "$17.3 billion", asOf: "2026-06-30", sources: ["cbc-q2-2026"] },
    { label: "IPO proceeds sought", value: "≈ $400 million", asOf: "2025-11-12", sources: ["ab-ipo-2025"] }
  ],
  quotes: [
    { who: "Central Bancompany", role: "2025 Form 10-K", date: "2026-03-25", quote: "We continuously reinvest in our business and are currently undertaking a banking core modernization project that is intended to provide us with real-time, API-based capabilities.", sources: ["cbc-business-2026"] },
    { who: "John 'JR' Ross", role: "President and CEO", date: "2026-08-04", quote: "We are pleased to announce another set of solid financial results for Central in the second quarter of 2026.", sources: ["cbc-q2-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "The Central Trust Bank is a state member bank; Fed model-risk and third-party guidance govern the core modernisation and any AI on top of it.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer, HSA and credit-card products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "As a newly public company its technology and AI statements fall under SEC disclosure scrutiny.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "Sixty-five in-house developers is unusual at this size", detail: "Most $20 billion banks rent their technology; a native engineering team plus an API core is the foundation on which AI can be built rather than bought." },
    { title: "The acquisition will test the platform", detail: "Buying a $2 billion-plus bank onto a core mid-modernisation is the operational risk of 2026 and 2027." },
    { title: "Public-company disclosure will pull an AI statement", detail: "Analysts covering a new Nasdaq bank with a 46% efficiency ratio will ask what the technology team is building next." },
    { title: "Scam education should become detection", detail: "Explaining voice cloning to customers is the prelude to deploying voice and identity analytics in the contact centre." }
  ],
  faq: [
    { q: "Does Central Bank use AI?", a: "Central Bancompany has not disclosed an AI leader, model, vendor or budget. It has an in-house technology division of about 65 programmers and designers, is modernising its core to real-time, API-based systems, and publishes customer guides on AI's effect on the economy and on AI-enhanced scams." },
    { q: "Why did Central Bancompany go public?", a: "It launched an IPO in November 2025 to raise about $400 million to fund the acquisition of a bank with more than $2 billion of assets in a target market such as Texas, having screened about 30 candidates. It trades on Nasdaq as CBC and authorised a $100 million buyback in August 2026." }
  ],
  sources: [
    { id: "cbc-aiecon", title: "How AI is Changing the Economy", publisher: "Central Bank", url: "https://www.centralbank.net/learning-center/how-ai-is-changing-the-economy/", date: "2025-06-01" },
    { id: "cbc-aiscams", title: "The Rise of AI-Enhanced Scams", publisher: "Central Bank", url: "https://www.centralbank.net/learning-center/security/emerging-trends/the-rise-of-ai-enhanced-scams/", date: "2025-06-01" },
    { id: "cbc-aiimitate", title: "How AI Scammers Imitate Loved Ones", publisher: "Central Bank", url: "https://www.centralbank.net/learning-center/security/emerging-trends/how-ai-scammers-imitate-loved-ones/", date: "2025-06-01" },
    { id: "ab-ipo-2025", title: "Missouri bank launches IPO in search of acquisition", publisher: "American Banker", url: "https://americanbanker.com/news/missouri-bank-launches-ipo-in-search-of-acquisition", date: "2025-11-12" },
    { id: "cbc-business-2026", title: "Central Bancompany, Inc. 2025 Form 10-K and SEC filings", publisher: "Central Bancompany", url: "https://investor.centralbank.net/financial-information/sec-filings", date: "2026-03-25" },
    { id: "cbc-q1-2026", title: "Central Bancompany, Inc. Reports First Quarter 2026 Results", publisher: "Central Bancompany (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/04/28/3282596/0/en/central-bancompany-inc-reports-first-quarter-2026-results.html", date: "2026-04-28" },
    { id: "cbc-q2-2026", title: "Central Bancompany, Inc. Reports Second Quarter 2026 Results, Declares Regular $0.12 Dividend and Authorizes $100 Million Share Repurchase", publisher: "Central Bancompany (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/08/04/3338232/0/en/central-bancompany-inc-reports-second-quarter-2026-results-declares-regular-0-12-dividend-and-authorizes-100-million-share-repurchase.html", date: "2026-08-04" }
  ],
  lastUpdated: "2026-09-10"
};
