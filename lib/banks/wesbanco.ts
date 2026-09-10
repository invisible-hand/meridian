import type { Bank } from "@/lib/banks";

export const WESBANCO: Bank = {
  slug: "wesbanco",
  name: "WesBanco",
  shortName: "WesBanco",
  ticker: "WSBC",
  hq: "Wheeling, WV",
  fedRank: 74,
  leadBank: "WesBanco Bank",
  assetsUsdMillions: 27420,
  charter: "West Virginia state nonmember bank (FDIC)",
  posture: "A $28 billion nine-state bank that just completed the largest acquisition and conversion in its history, is closing branches while investing in digital products, and has no disclosed AI programme beyond client fraud education.",
  answerFirst:
    "WesBanco, the Wheeling, West Virginia holding company for WesBanco Bank, became a $28 billion regional bank in 2025 by completing 'the largest acquisition and conversion in its history', the purchase of Premier Financial Corp., and its shareholder letter says the financial results have 'meaningfully outperformed those modeled at the time of the acquisition announcement'. Full-year 2025 net income to common shareholders excluding merger and restructuring charges was $309.5 million, or $3.40 per diluted share, against $146.4 million, or $2.34, the year before; second-quarter 2026 net income to common was $88.4 million, or $0.91 per share, with a record $2.3 billion commercial pipeline, a 51% efficiency ratio and 17.3% return on tangible common equity. Technology appears in the record as investment rather than AI: the bank says it continuously invests 'in digital capabilities and products like WesBanco One account and treasury management services', expects equipment and software expense to rise as it invests 'in products, services and technology to improve the customer experience', and closed 27 locations in 2025 while opening centres in growth markets. Its 2024 SASB disclosure describes WesBanco One features such as advanced paycheck access, credit monitoring, card controls and budgeting. Neither the annual report nor the earnings calls mention artificial intelligence, an AI leader, vendor or budget; the bank's only AI content is a September 2024 guide for businesses on AI-generated fraud, covering deepfakes and AI-accelerated account takeover, plus a 2025 fraud-avoidance piece. President and CEO Jeff Jackson's stated theme is 'momentum across the franchise' and 'responsible growth' recognised by Business Insider and TIME in 2026. WesBanco Bank is a West Virginia state nonmember bank supervised by the FDIC. Treat this as a thin record for a bank that has just absorbed its biggest deal.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; annual report and 2026 earnings calls do not mention AI.",
    "Premier Financial Corp. acquired and converted in the first half of 2025, the largest in WesBanco's history, with results ahead of deal models.",
    "2025 net income to common excluding merger charges $309.5 million ($3.40 per share), up from $146.4 million ($2.34); Q2 2026 $88.4 million ($0.91).",
    "Digital investment continues: WesBanco One account, treasury management, rising equipment and software spend; 27 branches closed in 2025.",
    "Record $2.3 billion commercial pipeline, 51% efficiency ratio and 17.3% ROTCE in Q2 2026.",
    "AI content is client education on AI-generated fraud (deepfakes, AI-assisted account takeover)."
  ],
  leadership: [
    { name: "Jeff Jackson", role: "President and CEO", linkedin: "https://www.linkedin.com/in/jeff-jackson-30272612", sources: ["wsbc-ar-2026", "wsbc-q2-2026"] },
    { name: "Dan Weiss", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/dan-weiss-36596151", sources: ["wsbc-q2call-2026"] }
  ],
  timeline: [
    { date: "2024-09-25", title: "Guide to shielding businesses from AI-generated fraud", detail: "Deepfakes and AI-accelerated account takeover explained.", sources: ["wsbc-aifraud-2024"] },
    { date: "2025-02-28", title: "Premier Bank becomes WesBanco", detail: "Largest acquisition and conversion in the bank's history.", sources: ["wsbc-premier-2025"] },
    { date: "2025-10-15", title: "2024 SASB commercial-bank disclosure", detail: "WesBanco One account features: paycheck access, credit monitoring, card controls, budgeting.", sources: ["wsbc-sasb-2025"] },
    { date: "2026-03-02", title: "2025 annual report", detail: "Adjusted net income $309.5 million; 27 branches closed; digital investment continues; no AI reference.", sources: ["wsbc-ar-2026"] },
    { date: "2026-07-13", title: "Named among America's High Growth Companies", detail: "Business Insider 2026 list; CEO cites 'responsible growth'.", sources: ["wsbc-bi-2026"] },
    { date: "2026-07-20", title: "TIME America's Best Companies 2026", detail: "Culture recognition.", sources: ["wsbc-time-2026"] },
    { date: "2026-07-21", title: "Second-quarter 2026 results", detail: "Net income to common $88.4 million; EPS $0.91; record commercial pipeline.", sources: ["wsbc-q2-2026", "wsbc-q2call-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Premier Financial conversion", detail: "Largest systems conversion in the bank's history completed in H1 2025.", status: "In production", sources: ["wsbc-ar-2026"] },
    { useCase: "generative-agentic-ai", name: "Digital banking investment (WesBanco One, treasury management)", detail: "Ongoing product and software spend to improve customer experience.", status: "In production", sources: ["wsbc-ar-2026", "wsbc-sasb-2025"] },
    { useCase: "fraud", name: "Client education on AI-generated fraud", detail: "Deepfake and account-takeover guidance for businesses.", status: "In production", sources: ["wsbc-aifraud-2024"] }
  ],
  numbers: [
    { label: "2025 net income to common, excluding merger charges / diluted EPS", value: "$309.5 million / $3.40", asOf: "2026-03-02", sources: ["wsbc-ar-2026"] },
    { label: "Q2 2026 net income to common / diluted EPS", value: "$88.4 million / $0.91", asOf: "2026-07-21", sources: ["wsbc-q2-2026"] },
    { label: "Commercial pipeline, June 30, 2026", value: "$2.3 billion (record)", asOf: "2026-07-21", sources: ["wsbc-q2call-2026"] },
    { label: "Total assets, year-end 2025", value: "$27.7 billion", asOf: "2025-12-31", sources: ["wsbc-ar-2026"] }
  ],
  quotes: [
    { who: "Jeff Jackson", role: "President and CEO", date: "2026-03-02", quote: "In the first half of 2025, WesBanco successfully completed the largest acquisition and conversion in its history.", sources: ["wsbc-ar-2026"] },
    { who: "Jeff Jackson", role: "President and CEO", date: "2026-07-13", quote: "We continue to execute with consistency and purpose, prioritizing responsible growth while delivering relationship-driven banking to the people, businesses, and communities we serve.", sources: ["wsbc-bi-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "WesBanco Bank is a state nonmember bank; FDIC model-risk and third-party guidance would govern any AI adopted in lending, fraud or servicing.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Consumer deposit and lending products bring UDAAP and adverse-action duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of the Premier integration and capital.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "The conversion muscle is the asset", detail: "Completing the largest conversion in its history ahead of model is an integration capability an AI programme could reuse; none is announced." },
    { title: "Software spend without an AI line invites the question", detail: "Rising equipment and software expense flagged to investors will be asked about; a stated AI position would pre-empt it." },
    { title: "Fraud education is the natural first use case", detail: "A bank teaching clients about deepfakes has the mandate to deploy detection in its own treasury and payments channels." },
    { title: "Efficiency at 51% leaves room", detail: "AI's justification here would be growth capacity in the record commercial pipeline rather than cost." }
  ],
  faq: [
    { q: "Does WesBanco use AI?", a: "WesBanco has not disclosed any AI programme, leader, vendor or budget, and its 2025 annual report and 2026 earnings calls do not mention AI. Its AI-related content is client education on AI-generated fraud. It invests in digital products such as the WesBanco One account and treasury management." },
    { q: "How did the Premier Financial acquisition go?", a: "WesBanco completed the acquisition and systems conversion of Premier Financial Corp. in the first half of 2025, the largest in its history, making it a $28 billion bank across nine states. Management says financial results have meaningfully outperformed the deal models, with adjusted 2025 earnings of $3.40 per share against $2.34 in 2024." }
  ],
  sources: [
    { id: "wsbc-aifraud-2024", title: "How to Shield Your Business From AI-Generated Fraud", publisher: "WesBanco", url: "https://wesbanco.com/education-insights/how-to-shield-your-business-from-ai-generated-fraud", date: "2024-09-25" },
    { id: "wsbc-premier-2025", title: "Premier Bank is now WesBanco", publisher: "WesBanco", url: "https://wesbanco.com/premier", date: "2025-02-28" },
    { id: "wsbc-sasb-2025", title: "SASB Commercial Banks Standards Disclosure 2024", publisher: "WesBanco", url: "https://wesbanco.com/wp-content/uploads/2025/10/WSBC-SASB-Commercial-Bank-Standards-2024-v2-posted-15oct2025.pdf", date: "2025-10-15" },
    { id: "wsbc-ar-2026", title: "WesBanco, Inc. 2025 Annual Report", publisher: "WesBanco", url: "https://wesbanco.com/wp-content/uploads/2026/03/2025-Annual-Report-ADA-Compliant.pdf", date: "2026-03-02" },
    { id: "wsbc-bi-2026", title: "WesBanco, Inc. Named One of America's High Growth Companies by Business Insider", publisher: "WesBanco", url: "https://wesbanco.com/news/wesbanco-inc-named-one-of-americas-high-growth-companies-by-business-insider", date: "2026-07-13" },
    { id: "wsbc-time-2026", title: "WesBanco, Inc. Included in TIME America's Best Companies 2026 List", publisher: "WesBanco", url: "https://wesbanco.com/news/wesbanco-inc-included-in-time-americas-best-companies-2026-list", date: "2026-07-20" },
    { id: "wsbc-q2-2026", title: "WesBanco Announces Second Quarter 2026 Financial Results", publisher: "WesBanco (PR Newswire)", url: "https://www.prnewswire.com/news-releases/wesbanco-announces-second-quarter-2026-financial-results-302831242.html", date: "2026-07-21" },
    { id: "wsbc-q2call-2026", title: "WesBanco Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/wesbanco-q2-earnings-call-highlights-150647400.html", date: "2026-07-22" }
  ],
  lastUpdated: "2026-09-10"
};
