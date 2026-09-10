import type { Bank } from "@/lib/banks";

export const FIRST_MERCHANTS: Bank = {
  slug: "first-merchants",
  name: "First Merchants Corporation",
  shortName: "First Merchants",
  ticker: "FRME",
  hq: "Muncie, IN",
  fedRank: 90,
  leadBank: "First Merchants Bank",
  assetsUsdMillions: 21049,
  charter: "Indiana state nonmember bank (FDIC)",
  posture: "Central Indiana's largest bank holding company converted its Louisville-area acquisition in May 2026, describes its edge as 'modern capabilities with people who genuinely understand their communities', and has no disclosed AI programme.",
  answerFirst:
    "First Merchants Corporation, the Muncie, Indiana parent of First Merchants Bank with $21.3 billion of assets, $15.5 billion of loans, $16.8 billion of deposits and 126 banking centres across Indiana, Ohio and Michigan, is a relationship bank whose 2026 technology work has been integration. It agreed in September 2025 to pay $241 million in stock for First Savings Financial Group in Jeffersonville, a $2.4 billion-asset bank 'directly across the river' from Louisville with specialty lending in SBA 7(a), single-tenant and first-lien home equity, and completed the systems conversion in mid-May 2026. Second-quarter 2026 net income to common was $43.5 million, or $0.70 per share, adjusted $46.4 million, or $0.74, with net interest margin up to 3.38%, adjusted pre-tax pre-provision earnings of $84.6 million, an adjusted efficiency ratio of 53.22% and loan and deposit growth near 6% annualised, offset by $29.7 million of reserves on two commercial relationships moved to nonaccrual that CEO Mark Hardwick called disappointing but not representative of the portfolio. Hardwick, 28 years with the company, frames strategy as 'organic relationship growth enhanced by technology and strategic acquisitions', and on receiving Forbes' World's Best Banks recognition said customers 'value a bank that combines modern capabilities with people who genuinely understand their communities'. In November 2025 the bank created a director of small-business banking role to deliver a segmented small-business experience. Neither the earnings releases nor the calls mention artificial intelligence, an AI leader, vendor or budget; customer-facing content covers text scams. First Merchants Bank is an Indiana state nonmember bank supervised by the FDIC. Treat this as a thin AI record for a bank whose stated differentiator is people.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed in 2025 or 2026 investor materials.",
    "First Savings Financial Group ($241 million in stock, Louisville-area entry with specialty lending verticals) acquired and converted by mid-May 2026.",
    "Q2 2026 net income to common $43.5 million ($0.70), adjusted $46.4 million ($0.74); NIM 3.38%; adjusted efficiency ratio 53.22%.",
    "Two commercial relationships ($41.8 million) placed on nonaccrual with $29.7 million of reserves.",
    "Strategy: 'organic relationship growth enhanced by technology and strategic acquisitions'; new director of small-business banking role.",
    "Recognised on Forbes' World's Best Banks 2026 and TIME's America's Best Companies 2026."
  ],
  leadership: [
    { name: "Mark K. Hardwick", role: "President and CEO", linkedin: "https://www.linkedin.com/in/mark-hardwick-16505819", sources: ["frme-q2-2026", "frme-forbes-2026"] },
    { name: "Mike Stewart", role: "President, First Merchants Corporation", linkedin: "https://www.linkedin.com/in/mikestewartbanker", sources: ["frme-q2call-2026"] },
    { name: "Michele Kawiecki", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/michele-kawiecki-26a63a28", sources: ["frme-q2call-2026"] },
    { name: "Kevin Knipp", role: "Director of Small Business Banking", linkedin: "https://www.linkedin.com/in/kevin-knipp-b08548b", sources: ["frme-knipp-2025"] }
  ],
  timeline: [
    { date: "2025-09-25", title: "First Savings Financial Group acquisition announced", detail: "$241 million in stock; Louisville-area entry.", sources: ["ab-firstsavings-2025"] },
    { date: "2025-11-17", title: "Director of small-business banking appointed", detail: "Segmented small-business experience.", sources: ["frme-knipp-2025"] },
    { date: "2026-06-04", title: "Forbes World's Best Banks 2026", detail: "CEO on 'modern capabilities' with community understanding.", sources: ["frme-forbes-2026"] },
    { date: "2026-07-22", title: "Second-quarter 2026 results; First Savings conversion complete", detail: "Net income to common $43.5 million; two nonaccrual relationships reserved.", sources: ["frme-q2-2026", "frme-q2call-2026"] },
    { date: "2026-04-22", title: "First-quarter 2026 results", detail: "Net income to common $27.7 million; $0.45 per diluted share.", sources: ["frme-q2-2026"] },
    { date: "2026-07-09", title: "TIME America's Best Companies 2026", detail: "Culture recognition.", sources: ["frme-time-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "First Savings systems conversion", detail: "Completed mid-May 2026; 126 banking centres after integration.", status: "In production", sources: ["frme-q2-2026"] },
    { useCase: "fraud", name: "Customer education on text scams", detail: "Recognising smishing and impersonation.", status: "In production", sources: ["frme-scams-2026"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Investor materials silent on AI.", status: "Announced", sources: ["frme-q2-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income to common / adjusted", value: "$43.5 million ($0.70) / $46.4 million ($0.74)", asOf: "2026-07-22", sources: ["frme-q2-2026"] },
    { label: "Net interest margin / adjusted efficiency ratio, Q2 2026", value: "3.38% / 53.22%", asOf: "2026-07-22", sources: ["frme-q2-2026"] },
    { label: "Total assets / loans / deposits", value: "$21.3 billion / $15.5 billion / $16.8 billion", asOf: "2026-06-30", sources: ["frme-q2call-2026"] },
    { label: "First Savings acquisition", value: "$241 million in stock; $2.4 billion assets", asOf: "2025-09-25", sources: ["ab-firstsavings-2025"] }
  ],
  quotes: [
    { who: "Mark K. Hardwick", role: "President and CEO", date: "2026-06-04", quote: "They value a bank that combines modern capabilities with people who genuinely understand their communities.", sources: ["frme-forbes-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "First Merchants Bank is a state nonmember bank; FDIC model-risk and third-party guidance would govern any AI adopted in lending or service.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Consumer and small-business lending bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of acquisition integration.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "Specialty verticals are where analytics pay", detail: "SBA 7(a) and single-tenant lending from First Savings are data-rich niches that suit models more than the core community book." },
    { title: "Credit surprises argue for surveillance tools", detail: "Two relationships moving to nonaccrual in one quarter is the kind of event early-warning analytics exist to flag." },
    { title: "'Modern capabilities' needs content", detail: "The CEO's phrase invites investors to ask which capabilities; an AI statement would answer." },
    { title: "Segmented small business is a natural pilot", detail: "A newly created small-business banking role is where digital onboarding and AI-assisted underwriting usually begin." }
  ],
  faq: [
    { q: "Does First Merchants Bank use AI?", a: "First Merchants has not disclosed an AI programme, leader, vendor or budget. Its 2026 technology work has centred on converting First Savings Bank onto its systems, completed in May 2026, and its CEO describes the bank's edge as modern capabilities combined with community knowledge." },
    { q: "How did First Merchants perform in the second quarter of 2026?", a: "Net income to common was $43.5 million, or $0.70 per share, adjusted $46.4 million, or $0.74, with net interest margin up to 3.38% and loan and deposit growth near 6% annualised, offset by $29.7 million of reserves on two commercial relationships placed on nonaccrual." }
  ],
  sources: [
    { id: "ab-firstsavings-2025", title: "First Merchants deal secures a Louisville beachhead", publisher: "American Banker", url: "https://americanbanker.com/news/first-merchants-deal-secures-a-louisville-beachhead", date: "2025-09-25" },
    { id: "frme-knipp-2025", title: "Kevin Knipp Joins First Merchants Bank to Revolutionize the Small Business Banking Experience", publisher: "First Merchants Bank", url: "https://firstmerchants.com/why-us/news/news-detail/2025/11/17/kevin-knipp-joins-first-merchants-bank-to-revolutionize-the-small-business-banking-experience", date: "2025-11-17" },
    { id: "frme-forbes-2026", title: "First Merchants Bank Recognized on Forbes' World's Best Banks 2026", publisher: "First Merchants Bank", url: "https://firstmerchants.com/why-us/news/2026/06/04/first-merchants-bank-recognized-on-forbes--world-s-best-banks-2026", date: "2026-06-04" },
    { id: "frme-q2-2026", title: "First Merchants Corporation Announces Second Quarter 2026 Results", publisher: "First Merchants Corporation (GlobeNewswire via Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/first-merchants-corporation-announces-second-200500052.html", date: "2026-07-22" },
    { id: "frme-q2call-2026", title: "First Merchants Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/first-merchants-q2-earnings-call-140658548.html", date: "2026-07-23" },
    { id: "frme-scams-2026", title: "Current Text Scams: Know How To Identify One", publisher: "First Merchants Bank", url: "https://firstmerchants.com/locations/bank-orchard-lake-farmington-hills-mi/2026/07/29/current-text-scams-know-how-to-identify-one", date: "2026-07-29" },
    { id: "frme-time-2026", title: "First Merchants Recognized by TIME Magazine as One of America's Best Companies 2026", publisher: "First Merchants Bank", url: "https://firstmerchants.com/why-us/news/2026/07/09/first-merchants-recognized-by-time-magazine-as-one-of--america-s-best-companies-2026", date: "2026-07-09" }
  ],
  lastUpdated: "2026-09-10"
};
