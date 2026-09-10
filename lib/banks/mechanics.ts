import type { Bank } from "@/lib/banks";

export const MECHANICS: Bank = {
  slug: "mechanics",
  name: "Mechanics Bancorp",
  shortName: "Mechanics Bank",
  ticker: "MCHB",
  hq: "Walnut Creek, CA",
  fedRank: 88,
  leadBank: "Mechanics Bank",
  assetsUsdMillions: 21404,
  charter: "California state nonmember bank (FDIC); majority owned by Ford Financial Fund",
  posture: "A private-equity-controlled West Coast bank that absorbed HomeStreet through a reverse merger, converted its systems in March 2026 and sold a Fannie Mae business line, with no disclosed AI programme.",
  answerFirst:
    "Mechanics Bancorp, the Walnut Creek, California holding company for Mechanics Bank, became a $21 billion, 166-branch bank across California, the Pacific Northwest and Hawaii through an unusual transaction: on 2 September 2025 Seattle's HomeStreet Bank merged into Mechanics in a reverse merger that left Mechanics as the operating bank and accounting acquirer while the publicly traded HomeStreet shell, renamed Mechanics Bancorp, became the listed parent, with Dallas private-equity firm Ford Financial Fund owning about three-quarters of the combined company. Executive chairman Carl Webb told analysts the deal had been 'highly discussed and highly vetted' with regulators, given a combined commercial real estate concentration near 390% that management intends to bring closer to 300%. Former HomeStreet accounts moved onto Mechanics' systems in a transition that began on 20 March 2026, and in the second quarter the bank sold its Fannie Mae multifamily DUS business line, paid $162 million in cash dividends and reported net income of $57.7 million, or $0.25 per diluted share, up from $44.1 million, with a 14.42% return on average tangible equity, a 58.4% non-GAAP efficiency ratio and full-time staff down to 1,756 from 2,036 a year earlier; president and CEO C.J. Johnson said the bank 'substantially completed our merger with HomeStreet' and CFO Nathan Duda pointed to 'merger-related cost savings'. The company's 10-K and earnings materials list technology change as a risk to its mortgage-servicing and origination businesses but do not describe an AI programme, leader, vendor or budget; customer content covers impostor scams, tax-season fraud and senior fraud prevention. Mechanics Bank is a California state nonmember bank supervised by the FDIC and the California DFPI. Treat this as a thin AI record for a bank whose 2026 has been integration and portfolio pruning.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; technology appears only as a risk factor for mortgage operations.",
    "Reverse merger with HomeStreet closed 2 September 2025; Ford Financial Fund owns about 74% of the combined company; 166 branches.",
    "HomeStreet systems transitioned onto Mechanics Bank platforms from 20 March 2026.",
    "Q2 2026 net income $57.7 million ($0.25 per share); ROATE 14.42%; non-GAAP efficiency ratio 58.4%; Fannie Mae DUS line sold; $162 million of dividends paid.",
    "Headcount down to 1,756 full-time equivalents from 2,036 a year earlier as merger savings are realised.",
    "CRE concentration to be reduced from about 390% toward 300% over the projection period."
  ],
  leadership: [
    { name: "C.J. Johnson", role: "President and CEO", linkedin: "https://www.linkedin.com/in/cj-johnson-42b7a985", sources: ["mchb-q2-2026"] },
    { name: "Carl B. Webb", role: "Executive Chairman", sources: ["ab-homestreet-2025"] },
    { name: "Nathan Duda", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/nathan-duda-95952a5", sources: ["mchb-q2-2026"] }
  ],
  timeline: [
    { date: "2025-03-31", title: "HomeStreet agrees to merge into Mechanics Bank", detail: "Reverse merger; Ford Financial Fund to own about 74%.", sources: ["ab-homestreet-2025"] },
    { date: "2025-09-02", title: "Merger completed", detail: "Mechanics Bank as accounting acquirer; Mechanics Bancorp as listed parent.", sources: ["mchb-hub-2026"] },
    { date: "2026-03-20", title: "HomeStreet systems transition begins", detail: "Accounts and services move to Mechanics Bank platforms; 166 branches.", sources: ["mchb-hub-2026"] },
    { date: "2026-07-29", title: "Second-quarter 2026 results", detail: "Net income $57.7 million; Fannie Mae DUS business sold; merger substantially complete.", sources: ["mchb-q2-2026"] },
    { date: "2026-08-21", title: "Senior Citizens Day fraud-prevention guidance", detail: "Customer education on scams targeting older adults.", sources: ["mchb-seniors-2026"] },
    { date: "2024-01-12", title: "Bank impostor scam guidance", detail: "Customer education on impersonation fraud.", sources: ["mchb-impostor-2024"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "HomeStreet systems conversion", detail: "Accounts and services migrated to Mechanics Bank platforms in March 2026.", status: "In production", sources: ["mchb-hub-2026"] },
    { useCase: "fraud", name: "Customer fraud education", detail: "Impostor scams, tax-season fraud and senior fraud prevention.", status: "In production", sources: ["mchb-seniors-2026", "mchb-impostor-2024"] },
    { useCase: "governance-general", name: "No disclosed AI deployment", detail: "Earnings materials silent on AI.", status: "Announced", sources: ["mchb-q2-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$57.7 million / $0.25", asOf: "2026-07-29", sources: ["mchb-q2-2026"] },
    { label: "Return on average tangible equity / non-GAAP efficiency ratio, Q2 2026", value: "14.42% / 58.4%", asOf: "2026-07-29", sources: ["mchb-q2-2026"] },
    { label: "Full-time equivalent employees", value: "1,756 (from 2,036 a year earlier)", asOf: "2026-06-30", sources: ["mchb-q2-2026"] },
    { label: "Branches after the merger", value: "166", asOf: "2026-03-21", sources: ["mchb-hub-2026"] }
  ],
  quotes: [
    { who: "C.J. Johnson", role: "President and CEO", date: "2026-07-29", quote: "We had a strong second quarter financially and substantially completed our merger with HomeStreet.", sources: ["mchb-q2-2026"] },
    { who: "Carl B. Webb", role: "Executive Chairman", date: "2025-03-31", quote: "Highly discussed and highly vetted.", sources: ["ab-homestreet-2025"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Mechanics Bank is a state nonmember bank; FDIC model-risk and third-party guidance govern the conversion and any future AI.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "california", why: "A California-chartered bank under the DFPI and the state's automated-decision and privacy rules.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "cfpb", why: "Mortgage origination and servicing bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Private-equity ownership changes the AI calculus", detail: "A controlling sponsor optimises for efficiency and exit; AI that lifts return on tangible equity would fit, but nothing is disclosed." },
    { title: "Conversion done, capacity freed", detail: "With HomeStreet on one platform and a business line sold, the technology team has room for a first AI use case." },
    { title: "CRE concentration is the model-risk priority", detail: "Bringing a 390% concentration down argues for portfolio surveillance analytics before customer-facing AI." },
    { title: "Headcount cuts raise the automation question", detail: "A 14% reduction in staff without a stated automation plan will prompt questions about how service levels are held." }
  ],
  faq: [
    { q: "Does Mechanics Bank use AI?", a: "Mechanics Bancorp has not disclosed an AI programme, leader, vendor or budget. Its technology disclosures concern the March 2026 migration of former HomeStreet accounts onto Mechanics Bank systems and risk factors about technology change in mortgage operations." },
    { q: "What happened between Mechanics Bank and HomeStreet?", a: "HomeStreet Bank merged into Mechanics Bank on 2 September 2025 in a reverse merger. Mechanics Bank became the operating bank and accounting acquirer, the former HomeStreet holding company was renamed Mechanics Bancorp and remains listed, and Ford Financial Fund owns about three-quarters of the combined company. Systems were converted from 20 March 2026." }
  ],
  sources: [
    { id: "mchb-impostor-2024", title: "What are Bank Impostor Scams?", publisher: "Mechanics Bank", url: "https://mechanicsbank.com/resources/resources-tools/insights/bank-impostor-scams", date: "2024-01-12" },
    { id: "ab-homestreet-2025", title: "Homestreet moves on, merges into Mechanics Bank", publisher: "American Banker", url: "https://americanbanker.com/news/homestreet-to-merge-with-mechanics-bank", date: "2025-03-31" },
    { id: "mchb-hub-2026", title: "HomeStreet Transition Hub", publisher: "Mechanics Bank", url: "https://mechanicsbank.com/transitionhub", date: "2026-03-21" },
    { id: "mchb-q2-2026", title: "Mechanics Bancorp Reports Second Quarter 2026 Results", publisher: "Mechanics Bancorp (Business Wire via Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/mechanics-bancorp-reports-second-quarter-094500935.html", date: "2026-07-29" },
    { id: "mchb-seniors-2026", title: "Senior Citizens Day Fraud Prevention", publisher: "Mechanics Bank", url: "https://mechanicsbank.com/resources/resources-tools/insights/senior-citizens-day-fraud-prevention", date: "2026-08-21" }
  ],
  lastUpdated: "2026-09-10"
};
