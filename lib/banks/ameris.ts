import type { Bank } from "@/lib/banks";

export const AMERIS: Bank = {
  slug: "ameris",
  name: "Ameris Bancorp",
  shortName: "Ameris",
  ticker: "ABCB",
  hq: "Atlanta, GA",
  fedRank: 72,
  leadBank: "Ameris Bank",
  assetsUsdMillions: 28022,
  charter: "Georgia state nonmember bank (FDIC)",
  posture: "A Southeastern bank whose CEO calls AI 'more of an evolution than a revolution', aimed at building capacity in high-volume processes rather than cutting costs, with robotic automation already selling in its insurance-premium-finance unit and a Q2 2026 litigation accrual that halved reported earnings.",
  answerFirst:
    "Ameris Bancorp, the Atlanta parent of Ameris Bank with about $28 billion of assets across Georgia, Florida, Alabama, South Carolina and North Carolina, gave the clearest statement of its AI philosophy on its April 2026 earnings call. Asked about AI strategy and expense levels, CEO Palmer Proctor said 'AI here is more of an evolution than a revolution', that the bank uses it 'to build capacity, not so much to cut out expense', and that it had spent 'a considerable amount of time looking through process here throughout the company, especially in some of our higher-volume areas' to create automation, so that as the bank grows 'we won't have to layer in additional expense'. He added that AI is useful for reading software contracts to find opportunities, at a time when vendors are 'trying to lock you in for longer-term contracts'. The one AI product Ameris markets is in its US Premium Finance insurance unit, which advertises 'AI-powered automation' through robotic process automation that accelerates agreement processing and reduces manual errors, alongside e-pay and integrated accounting; its Balboa Capital equipment-finance arm publishes digital-solutions content on IoT and automation for business clients. Consumer content covers AI-generated fraud and deepfake voices. Financially, first-quarter 2026 net income was $110.5 million, or $1.63 per diluted share, with a 1.62% return on assets and an efficiency ratio just under 50%; second-quarter net income fell to $51.4 million, or $0.77, because of a litigation accrual, with adjusted net income of $107.3 million, or $1.60, revenue growth of 14.9% annualised and a stable 3.88% margin. Proctor has said M&A is low on the priority list against organic growth. Ameris Bank is a Georgia state nonmember bank supervised by the FDIC; no AI leader, vendor for decisioning or budget has been named.",
  keyPoints: [
    "CEO Palmer Proctor: AI is 'more of an evolution than a revolution', used 'to build capacity, not so much to cut out expense', targeting high-volume processes for automation.",
    "AI used to review software vendor contracts as vendors push longer lock-ins.",
    "US Premium Finance markets 'AI-powered automation' via robotic process automation for agreement processing; Balboa Capital publishes automation content for business clients.",
    "Q1 2026: net income $110.5 million ($1.63 per share), ROA 1.62%, efficiency ratio just under 50%; Q2 2026 net income $51.4 million ($0.77) after a litigation accrual, adjusted $107.3 million ($1.60).",
    "Organic growth preferred to M&A; revenue growth 14.9% annualised in Q2 2026 with a stable 3.88% margin.",
    "Consumer AI content is fraud education (AI-generated fraud, deepfake voices); no AI leader, vendor or budget disclosed."
  ],
  leadership: [
    { name: "Palmer Proctor", role: "Chief Executive Officer", linkedin: "https://www.linkedin.com/in/palmer-proctor-66072513", sources: ["abcb-q1-2026", "abcb-q1call-2026"] },
    { name: "Nicole Stokes", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/nicole-stokes-47119081", sources: ["abcb-q1call-2026"] },
    { name: "Douglas Strange", role: "Chief Credit Officer", linkedin: "https://www.linkedin.com/in/doug-strange-a2635311", sources: ["abcb-q1call-2026"] }
  ],
  timeline: [
    { date: "2025-01-15", title: "Cybersecurity and fraud trends for 2025", detail: "AI-generated fraud, deepfake voices and quantum threats explained to customers.", sources: ["abcb-fraud-2025"] },
    { date: "2026-03-12", title: "Balboa Capital: five digital solutions for businesses", detail: "IoT sensors, predictive maintenance and automation content for equipment-finance clients.", sources: ["abcb-balboa-2026"] },
    { date: "2026-04-23", title: "First-quarter 2026 results", detail: "Net income $110.5 million; ROA 1.62%; efficiency ratio 49.97%.", sources: ["abcb-q1-2026"] },
    { date: "2026-04-24", title: "CEO on AI: evolution, not revolution", detail: "Capacity over cost-cutting; automation of high-volume processes; AI for contract review.", sources: ["abcb-q1call-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 results", detail: "Net income $51.4 million after a litigation accrual; adjusted $107.3 million; revenue up 14.9% annualised.", sources: ["abcb-q2-2026"] },
    { date: "2026-06-30", title: "Litigation accrual taken in the second quarter", detail: "Reported net income $51.4 million versus adjusted $107.3 million.", sources: ["abcb-q2-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Process automation in high-volume operations", detail: "Company-wide process review to automate high-volume areas and build capacity.", status: "Rolling out", sources: ["abcb-q1call-2026"] },
    { useCase: "third-party-vendors", name: "AI-assisted software contract review", detail: "Identifying opportunities in vendor agreements amid longer lock-in terms.", status: "In production", sources: ["abcb-q1call-2026"] },
    { useCase: "credit-underwriting", name: "Robotic process automation in insurance premium finance", detail: "US Premium Finance agreement processing with fewer manual errors; e-pay and accounting integration.", status: "In production", sources: ["abcb-uspf"] },
    { useCase: "fraud", name: "Customer education on AI-generated fraud", detail: "Deepfake voices and AI-enabled phishing.", status: "In production", sources: ["abcb-fraud-2025"] }
  ],
  numbers: [
    { label: "Q1 2026 net income / diluted EPS", value: "$110.5 million / $1.63", asOf: "2026-04-23", sources: ["abcb-q1-2026"] },
    { label: "Q2 2026 net income / adjusted net income", value: "$51.4 million ($0.77) / $107.3 million ($1.60)", asOf: "2026-07-23", sources: ["abcb-q2-2026"] },
    { label: "Return on assets, Q1 2026", value: "1.62%", asOf: "2026-04-23", sources: ["abcb-q1-2026"] },
    { label: "Net interest margin, Q2 2026", value: "3.88%", asOf: "2026-07-23", sources: ["abcb-q2-2026"] }
  ],
  quotes: [
    { who: "Palmer Proctor", role: "Chief Executive Officer", date: "2026-04-24", quote: "AI here is more of an evolution than a revolution. And the way we look at it is utilizing it to build capacity, not so much to cut out expense.", sources: ["abcb-q1call-2026"] },
    { who: "Palmer Proctor", role: "Chief Executive Officer", date: "2026-04-24", quote: "So as the bank grows, we won't have to layer in additional expense.", sources: ["abcb-q1call-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Ameris Bank is a state nonmember bank; FDIC model-risk and third-party guidance govern automation in operations and premium finance.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Consumer and mortgage lending bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company oversight of consolidated risk and technology spend.", docSlugs: ["fed-sr-11-7"] }
  ],
  suggestions: [
    { title: "Capacity, not cost, is a defensible framing", detail: "Automation that absorbs growth without headcount avoids the layoff narrative and matches how examiners prefer to see AI justified; the metric to publish is volume per employee." },
    { title: "Premium finance is the live proving ground", detail: "RPA marketed to insurance agents is the bank's only customer-facing automation claim; it is where model-risk documentation should already exist." },
    { title: "Contract review is a quiet win", detail: "Using AI to read vendor agreements is low risk and immediately valuable as core and software vendors tighten terms." },
    { title: "Name the leader and the vendors", detail: "A capacity strategy without a named owner or vendor is hard for investors to track from quarter to quarter." }
  ],
  faq: [
    { q: "Does Ameris Bank use AI?", a: "Yes, incrementally. CEO Palmer Proctor said in April 2026 that AI at Ameris is 'more of an evolution than a revolution', used to build capacity by automating high-volume processes rather than to cut expense, and to review software contracts. Its US Premium Finance unit markets AI-powered robotic process automation for agreement processing. No AI leader, vendor or budget has been disclosed." },
    { q: "Why did Ameris's second-quarter 2026 earnings fall?", a: "Reported net income fell to $51.4 million, or $0.77 per share, because of a litigation accrual. Excluding that accrual and a securities gain, adjusted net income was $107.3 million, or $1.60 per share, with revenue growth of 14.9% annualised and a stable 3.88% net interest margin." }
  ],
  sources: [
    { id: "abcb-fraud-2025", title: "Cybersecurity and Fraud Trends for 2025", publisher: "Ameris Bank", url: "https://www.amerisbank.com/personal/financial-education/ameris-advice/managing-your-money/cybersecurity-and-fraud-trends-for-2025", date: "2025-01-15" },
    { id: "abcb-uspf", title: "Insurance Premium Financing", publisher: "Ameris Bank", url: "https://www.amerisbank.com/small-business/loans/insurance-premium-financing", date: "2026-09-01" },
    { id: "abcb-balboa-2026", title: "5 Digital Solutions for Businesses", publisher: "Balboa Capital (Ameris Bank)", url: "https://equipmentfinance.amerisbank.com/blog/digital-solutions-business", date: "2026-03-12" },
    { id: "abcb-q1-2026", title: "Ameris Bancorp Announces First Quarter 2026 Financial Results", publisher: "Ameris Bancorp", url: "https://ir.amerisbank.com/news/news-details/2026/Ameris-Bancorp-Announces-First-Quarter-2026-Financial-Results", date: "2026-04-23" },
    { id: "abcb-q1call-2026", title: "Ameris Bancorp First Quarter 2026 Earnings Conference Call and Webcast", publisher: "Ameris Bancorp", url: "https://ir.amerisbank.com/events-and-presentations", date: "2026-04-24" },
    { id: "abcb-q2-2026", title: "Ameris Bancorp Announces Second Quarter 2026 Financial Results", publisher: "Ameris Bancorp", url: "https://ir.amerisbank.com/news/news-details/2026/Ameris-Bancorp-Announces-Second-Quarter-2026-Financial-Results", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};
