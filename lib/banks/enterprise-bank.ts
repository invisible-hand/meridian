import type { Bank } from "@/lib/banks";

export const ENTERPRISE_BANK: Bank = {
  slug: "enterprise-bank",
  name: "Enterprise Financial Services Corp",
  shortName: "Enterprise Bank & Trust",
  ticker: "EFSC",
  hq: "Clayton, MO",
  fedRank: 100,
  leadBank: "Enterprise Bank & Trust",
  assetsUsdMillions: 17196,
  charter: "Missouri state nonmember bank (FDIC)",
  posture: "A St. Louis business bank on an 'automation journey' that converts manual procedures into automated workflows, teaches its clients why AI is 'a CEO's business imperative', and absorbed twelve First Interstate branches in Arizona and Kansas in late 2025.",
  platform: {
    name: "Automation journey on the existing technology framework",
    detail: "President and CEO Jim Lally told investors in July 2026 that 'along the way, we will continue our automation journey using the existing technology framework that we have invested in, focusing on integrating manual procedures into automated workflow processes', and that the bank is 'already seeing strong adoption of various automation tools throughout our company'. Enterprise University, the bank's client-education arm, runs courses including 'Why AI Is a CEO's Business Imperative', which calls AI 'the single greatest factor that will impact your business in the next 10 years', and 'Microsoft Copilot: Transforming Everyday Work'. The bank publishes a resilience guide on 'automation, efficiency and resilience' for privately held businesses and annual fraud-protection guidance. No AI vendor, model inventory or budget has been disclosed.",
    sources: ["efsc-q2call-2026", "efsc-aiceo-2026", "efsc-copilot-2026", "efsc-automation-2025"]
  },
  answerFirst:
    "Enterprise Financial Services Corp, the Clayton, Missouri parent of Enterprise Bank & Trust with about $17 billion of assets and a footprint spanning St. Louis, Kansas City, Phoenix, Southern California and New Mexico plus national deposit verticals, describes its technology agenda as an 'automation journey'. On the July 2026 earnings call president and CEO Jim Lally said the bank would keep 'integrating manual procedures into automated workflow processes' on the technology framework it has already built and was 'already seeing strong adoption of various automation tools throughout our company'. The bank teaches the same lesson outward: its Enterprise University client programme offers 'Why AI Is a CEO's Business Imperative', framing AI as 'the single greatest factor that will impact your business in the next 10 years', and a Microsoft Copilot course, and its insights pages cover automation, efficiency and resilience for private companies alongside annual fraud guidance. Financially the second quarter of 2026 was a setback: net income of $40.9 million, or $1.09 per diluted share, down from $1.30, after about $14 million of charge-offs on two commercial relationships, a Texas commercial-and-industrial borrower that failed an expansion and a sponsor-finance company that ceased operations abruptly in June, lifting the provision to $14.2 million; net interest income rose to $169 million with margin expansion after a securities repositioning, loans grew $200 million, and the company issued $175 million of subordinated debt. In October 2025 it completed the purchase of twelve First Interstate branches in Arizona and Kansas, and American Banker ranked it among the best banks to work for. Enterprise Bank & Trust is a Missouri state nonmember bank supervised by the FDIC; no AI leader, vendor or budget has been named.",
  keyPoints: [
    "'Automation journey': manual procedures being converted into automated workflows on the existing technology framework, with 'strong adoption' of automation tools (CEO, July 2026).",
    "Client education positions AI as 'a CEO's business imperative' and teaches Microsoft Copilot through Enterprise University.",
    "Q2 2026 net income $40.9 million ($1.09), down from $1.30, after about $14 million of charge-offs on two commercial credits; provision $14.2 million.",
    "Net interest income $169 million with margin expansion after a securities repositioning; loans up $200 million; $175 million of subordinated debt issued.",
    "Twelve First Interstate branches in Arizona and Kansas acquired, completed October 2025.",
    "No AI leader, vendor, model inventory or budget disclosed; ranked among American Banker's best banks to work for."
  ],
  leadership: [
    { name: "James B. Lally", role: "President and CEO", linkedin: "https://www.linkedin.com/in/jim-lally-041875b", sources: ["efsc-q2-2026", "efsc-q2call-2026"] }
  ],
  timeline: [
    { date: "2025-10-15", title: "First Interstate branch acquisition completed", detail: "Twelve branches in Arizona and Kansas join Enterprise Bank & Trust.", sources: ["efsc-branches-2025"] },
    { date: "2025-12-17", title: "Guide on automation, efficiency and resilience for private businesses", detail: "Client insight on 2026 planning.", sources: ["efsc-automation-2025"] },
    { date: "2026-03-03", title: "'Why AI Is a CEO's Business Imperative' course", detail: "Enterprise University on-demand course for business leaders.", sources: ["efsc-aiceo-2026"] },
    { date: "2026-07-22", title: "Second-quarter 2026 results", detail: "Net income $40.9 million; two commercial charge-offs; securities repositioning.", sources: ["efsc-q2-2026"] },
    { date: "2026-07-23", title: "Q2 call: the automation journey continues", detail: "Manual procedures to automated workflows; strong tool adoption.", sources: ["efsc-q2call-2026"] },
    { date: "2026-08-03", title: "Microsoft Copilot course for clients", detail: "Practical prompting and productivity in Microsoft applications.", sources: ["efsc-copilot-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Workflow automation programme", detail: "Manual procedures integrated into automated processes across the company.", status: "Rolling out", sources: ["efsc-q2call-2026"] },
    { useCase: "governance-general", name: "Client AI education (Enterprise University)", detail: "AI strategy and Copilot courses for business owners.", status: "In production", sources: ["efsc-aiceo-2026", "efsc-copilot-2026"] },
    { useCase: "third-party-vendors", name: "Branch acquisition integration", detail: "Twelve First Interstate branches converted in Arizona and Kansas.", status: "In production", sources: ["efsc-branches-2025"] },
    { useCase: "fraud", name: "Annual fraud-protection guidance", detail: "Payments and fraud controls for business clients.", status: "In production", sources: ["efsc-fraud-2024"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$40.9 million / $1.09 (from $1.30)", asOf: "2026-07-22", sources: ["efsc-q2-2026"] },
    { label: "Net charge-offs on two commercial relationships", value: "≈ $14 million; provision $14.2 million", asOf: "2026-07-23", sources: ["efsc-q2call-2026"] },
    { label: "Net interest income, Q2 2026", value: "$169 million", asOf: "2026-07-23", sources: ["efsc-q2call-2026"] },
    { label: "Subordinated debt issued", value: "$175 million", asOf: "2026-07-22", sources: ["efsc-q2-2026"] }
  ],
  quotes: [
    { who: "James B. Lally", role: "President and CEO", date: "2026-07-23", quote: "We will continue our automation journey using the existing technology framework that we have invested in, focusing on integrating manual procedures into automated workflow processes.", sources: ["efsc-q2call-2026"] },
    { who: "Enterprise University", role: "Client course description", date: "2026-03-03", quote: "AI is the single greatest factor that will impact your business in the next 10 years; not only from a technology standpoint but for leadership and culture, too.", sources: ["efsc-aiceo-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Enterprise Bank & Trust is a state nonmember bank; FDIC model-risk and third-party guidance govern automation tools and any AI.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company oversight of credit concentrations and technology risk.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and small-business products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Automation is the honest word for most bank AI", detail: "Enterprise's 'automation journey' language describes what many peers call AI; the useful next disclosure is which workflows and what the time savings are." },
    { title: "Teaching clients raises expectations of the teacher", detail: "A bank telling CEOs that AI is their greatest business factor will be asked how it applies the lesson to itself." },
    { title: "Credit surprises argue for surveillance analytics", detail: "Two abrupt commercial failures in one quarter are the case for early-warning models on C&I and sponsor-finance books." },
    { title: "National deposit verticals are data-rich", detail: "Specialty deposit businesses generate structured flows suited to analytics that has not been described." }
  ],
  faq: [
    { q: "Does Enterprise Bank & Trust use AI?", a: "Enterprise describes an 'automation journey' that converts manual procedures into automated workflows and reports strong adoption of automation tools, but has not disclosed an AI leader, vendor, model or budget. Its client-education programme teaches AI strategy and Microsoft Copilot." },
    { q: "Why did Enterprise Financial's earnings fall in the second quarter of 2026?", a: "Net income fell to $40.9 million, or $1.09 per share, from $1.30 in the first quarter, after about $14 million of charge-offs on two commercial relationships, a Texas C&I borrower and a sponsor-finance company that ceased operations in June, raising the provision to $14.2 million. Net interest income and margin rose after a securities repositioning." }
  ],
  sources: [
    { id: "efsc-fraud-2024", title: "Decoding the Deception: Protect Your Business Against Fraud in 2025", publisher: "Enterprise Bank & Trust", url: "https://enterprisebank.com/insights/decoding-the-deception-protect-your-business-against-fraud-in-2025", date: "2024-11-07" },
    { id: "efsc-branches-2025", title: "Enterprise Bank & Trust Announces Completion of Branch Acquisition with First Interstate Bank", publisher: "Enterprise Bank & Trust", url: "https://enterprisebank.com/insights/enterprise-bank-and-trust-announces-completion-of-branch-acquisition-with-first-interstate-bank", date: "2025-10-15" },
    { id: "efsc-automation-2025", title: "Automation, Efficiency & Resilience: How Privately Held Businesses Can Seize Opportunity in 2026", publisher: "Enterprise Bank & Trust", url: "https://enterprisebank.com/insights/automation-efficiency-resilience", date: "2025-12-17" },
    { id: "efsc-aiceo-2026", title: "Why AI Is a CEO's Business Imperative", publisher: "Enterprise Bank & Trust (Enterprise University)", url: "https://enterprisebank.com/insights/eu-ai-ceo-business-imperative", date: "2026-03-03" },
    { id: "efsc-q2-2026", title: "Enterprise Financial Services Corp Reports Second Quarter 2026 Results", publisher: "Enterprise Financial Services Corp (Business Wire via Yahoo Finance)", url: "https://finance.yahoo.com/news/enterprise-financial-services-corp-reports-200500224.html", date: "2026-07-22" },
    { id: "efsc-q2call-2026", title: "Enterprise Financial Services Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/enterprise-financial-services-q2-earnings-160738590.html", date: "2026-07-23" },
    { id: "efsc-copilot-2026", title: "Microsoft Copilot: Transforming Everyday Work", publisher: "Enterprise Bank & Trust (Enterprise University)", url: "https://enterprisebank.com/insights/eu-microsoft-copilot-transforming-everyday-work", date: "2026-08-03" }
  ],
  lastUpdated: "2026-09-10"
};
