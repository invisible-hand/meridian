import type { Bank } from "@/lib/banks";

export const CATHAY: Bank = {
  slug: "cathay",
  name: "Cathay General Bancorp",
  shortName: "Cathay Bank",
  ticker: "CATY",
  hq: "Los Angeles, CA",
  fedRank: 81,
  leadBank: "Cathay Bank",
  assetsUsdMillions: 24035,
  charter: "California state nonmember bank (FDIC)",
  posture: "The largest Chinese-American bank in the US runs one of the sector's lowest efficiency ratios and an eight-quarter margin expansion streak, with a corporate responsibility report that covers information security in depth and no public AI programme.",
  answerFirst:
    "Cathay General Bancorp, the Los Angeles holding company for Cathay Bank, founded in 1962 and now about $24 billion of assets, 64 branches in nine states and Hong Kong and 1,268 team members, is a study in efficiency without an AI narrative. Full-year 2025 net income was $315.1 million, up 10.2%, or $4.54 per diluted share, with a 1.33% return on assets; the second quarter of 2026 brought net income of $92.2 million, or $1.37 per share, a 1.52% return on assets and a net interest margin of 3.48%, the eighth consecutive quarter of expansion, on an efficiency ratio that ran near 40% in the first quarter. President and CEO Chang M. Liu attributes the results to 'continued net interest margin expansion and disciplined execution across the franchise' and 'the strength of our relationships and the resilience of our business model'. On technology the bank's disclosures are about protection rather than automation: its 2025 corporate responsibility report devotes a section to information security and cybersecurity, covering guidelines and framework, training and awareness, independent reviews and staff skill development, and its 2025 annual report discusses capital rules and climate-risk principles at length without mentioning artificial intelligence, machine learning, an AI leader, vendor or budget. Cathay's board includes a director who ran global compliance strategy, technology and operations at JPMorgan and international risk oversight at Wells Fargo. Cathay Bank is a California state nonmember bank supervised by the FDIC and the California DFPI, so any future AI in credit or AML would fall under FDIC model-risk guidance and California's automated-decision rules. Treat this as a thin record for a bank whose competitive edge is cost discipline, not disclosed technology.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; the 2025 annual report and corporate responsibility report do not mention AI.",
    "Cybersecurity is the disclosed technology priority: framework, training, independent reviews and skill development in the 2025 corporate responsibility report.",
    "2025 net income $315.1 million (+10.2%), EPS $4.54, ROA 1.33%; Q2 2026 net income $92.2 million, EPS $1.37, ROA 1.52%.",
    "Net interest margin 3.48% in Q2 2026, the eighth consecutive quarterly expansion; efficiency ratio near 40% in Q1 2026.",
    "Footprint: about $24 billion of assets, 64 branches in nine states and Hong Kong, 1,268 team members.",
    "Board technology and compliance depth from former JPMorgan and Wells Fargo executives."
  ],
  leadership: [
    { name: "Chang M. Liu", role: "President and CEO", linkedin: "https://www.linkedin.com/in/chang-m-liu-39137469", sources: ["caty-q2-2026", "caty-ar-2026"] },
    { name: "Dunson K. Cheng", role: "Executive Chairman", linkedin: "https://www.linkedin.com/in/dunson-cheng-71634714", sources: ["caty-ar-2026"] }
  ],
  timeline: [
    { date: "2026-03-31", title: "2025 annual report", detail: "Net income $315.1 million; EPS $4.54; no AI discussion.", sources: ["caty-ar-2026"] },
    { date: "2026-05-07", title: "US-China annual economic report", detail: "Cross-border trade analysis for clients.", sources: ["caty-uschina-2026"] },
    { date: "2026-07-01", title: "2025 corporate responsibility report", detail: "Information security and cybersecurity section; $24 billion in assets; 64 branches.", sources: ["caty-esg-2026"] },
    { date: "2026-07-22", title: "Second-quarter 2026 results", detail: "Net income $92.2 million; EPS $1.37; eighth straight quarter of margin expansion.", sources: ["caty-q2-2026"] },
    { date: "2025-05-23", title: "Wolfsberg AML questionnaire published", detail: "Correspondent-banking due-diligence responses.", sources: ["caty-wolfsberg-2025"] },
    { date: "2026-04-22", title: "First-quarter 2026 results", detail: "Net income $86.9 million; $1.29 per diluted share.", sources: ["caty-q2-2026"] }
  ],
  useCases: [
    { useCase: "cybersecurity", name: "Information security programme", detail: "Framework, training, independent reviews and staff skill development.", status: "In production", sources: ["caty-esg-2026"] },
    { useCase: "aml-kyc", name: "AML and sanctions compliance (Wolfsberg questionnaire)", detail: "Published correspondent-banking due-diligence responses.", status: "In production", sources: ["caty-wolfsberg-2025"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Annual and responsibility reports silent on AI.", status: "Announced", sources: ["caty-ar-2026"] }
  ],
  numbers: [
    { label: "2025 net income / diluted EPS", value: "$315.1 million / $4.54", asOf: "2026-03-31", sources: ["caty-ar-2026"] },
    { label: "Q2 2026 net income / diluted EPS", value: "$92.2 million / $1.37", asOf: "2026-07-22", sources: ["caty-q2-2026"] },
    { label: "Return on average assets, Q2 2026", value: "1.52%", asOf: "2026-07-22", sources: ["caty-q2-2026"] },
    { label: "Branches / team members", value: "64 / 1,268", asOf: "2025-12-31", sources: ["caty-esg-2026"] }
  ],
  quotes: [
    { who: "Chang M. Liu", role: "President and CEO", date: "2026-07-22", quote: "We delivered strong second quarter results, with higher earnings driven by continued net interest margin expansion and disciplined execution across the franchise.", sources: ["caty-q2-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Cathay Bank is a state nonmember bank; FDIC model-risk and third-party guidance would govern any AI in credit or AML.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "california", why: "A California-chartered bank under the DFPI and the state's automated-decision and privacy rules.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "fincen", why: "Cross-border and correspondent banking make AML model governance central to any AI adoption.", docSlugs: ["fincen-joint-statement-innovation-2018"] }
  ],
  suggestions: [
    { title: "A 40% efficiency ratio leaves AI little to cut", detail: "The business case here is growth and risk, not cost; AML and cross-border payments screening are the obvious first uses." },
    { title: "Cyber disclosure is a foundation, not a substitute", detail: "A detailed information-security section shows governance capacity that an AI risk framework could extend." },
    { title: "Cross-border compliance is the model-risk hotspot", detail: "US-China trade banking under sanctions pressure is where AI screening would be scrutinised hardest by FinCEN and the FDIC." },
    { title: "Silence will be compared to peers", detail: "As similar-sized California banks publish AI positions, investors will ask Cathay for one." }
  ],
  faq: [
    { q: "Does Cathay Bank use AI?", a: "Cathay General Bancorp has not disclosed an AI programme, leader, vendor or budget. Its 2025 annual report and corporate responsibility report discuss cybersecurity and information-security governance but do not mention artificial intelligence." },
    { q: "How is Cathay General performing?", a: "Second-quarter 2026 net income was $92.2 million, or $1.37 per diluted share, with a 1.52% return on assets and a 3.48% net interest margin, the eighth consecutive quarter of margin expansion. Full-year 2025 net income was $315.1 million, up 10.2%." }
  ],
  sources: [
    { id: "caty-wolfsberg-2025", title: "Wolfsberg Group Correspondent Banking Due Diligence Questionnaire", publisher: "Cathay Bank", url: "https://cathaybank.com/anti-money-laundering/questionnaire", date: "2025-05-23" },
    { id: "caty-ar-2026", title: "Cathay General Bancorp 2025 Annual Report", publisher: "Cathay General Bancorp", url: "https://cathaybank.com/CGB/annual-report-2025", date: "2026-03-31" },
    { id: "caty-uschina-2026", title: "U.S.-China 2026 Annual Economic Report", publisher: "Cathay Bank", url: "https://cathaybank.com/US-China-Annual-Report-2026-EN", date: "2026-05-07" },
    { id: "caty-esg-2026", title: "2025 Corporate Responsibility Report", publisher: "Cathay General Bancorp", url: "https://cathaybank.com/CGB/ESG-report-2025", date: "2026-07-01" },
    { id: "caty-q2-2026", title: "Cathay General Bancorp Announces Second Quarter 2026 Results", publisher: "Cathay General Bancorp", url: "https://cathaygeneralbancorp.com/CGB/pr-20260722", date: "2026-07-22" }
  ],
  lastUpdated: "2026-09-10"
};
