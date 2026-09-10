import type { Bank } from "@/lib/banks";

export const UNITED_COMMUNITY: Bank = {
  slug: "united-community",
  name: "United Community Banks",
  shortName: "United Community",
  ticker: "UCB",
  hq: "Greenville, SC",
  fedRank: 70,
  leadBank: "United Community Bank",
  assetsUsdMillions: 28114,
  charter: "South Carolina state member bank (Federal Reserve)",
  posture: "The Southeast's most-awarded bank for customer satisfaction has a CEO who says AI 'will have a positive impact on our business', credits it with saving customers millions in fraud losses, and is embedding it in contact-centre and branch-support systems while selling its equipment-finance arm for $1.9 billion.",
  answerFirst:
    "United Community Banks, the Greenville, South Carolina parent of United Community Bank with about $28 billion of assets, is one of the clearest AI voices in the rank-51-to-100 group because its chairman and CEO, Lynn Harton, put it in his 2025 shareholder letter: 'I believe artificial intelligence (AI) will have a positive impact on our business.' He wrote that the bank is 'already seeing benefits of AI in fraud prevention, with tools that have helped our customers avoid potentially millions of dollars in losses', that 'customer service tools powered by AI are making our contact center agents more efficient', and that the bank is 'working on embedding AI in our internal customer service systems as well, our branch support desk for example'. His main hope is capacity: every year 'dozens of great product or process improvement projects' are postponed for lack of resources, and AI-enabled productivity would let teams take more of them on. The strategy around it is simplification. In June 2026 United agreed to sell its equipment-finance business, Navitas Credit Corp., to funds managed by Wafra for about $1.9 billion in cash, a 7% premium to the loan portfolio's par value, with a one-time pre-tax benefit of $109 million and closing expected in the third quarter; Harton said the bank had been restraining Navitas' growth to stay within self-imposed limits. Second-quarter 2026 GAAP earnings per share were $0.95, or $0.71 operating, up 8%, with 6.8% annualised loan growth and a sixth straight quarter of margin expansion. The service record is the brand: in March 2026 J.D. Power ranked United number one for retail banking customer satisfaction in the Southeast for the 12th time in 17 years. United Community Bank is a South Carolina state member bank supervised by the Federal Reserve; no AI vendor, model inventory or budget has been named.",
  keyPoints: [
    "CEO Lynn Harton's 2025 shareholder letter: AI 'will have a positive impact on our business'; fraud tools have saved customers 'potentially millions of dollars'.",
    "AI in production: fraud prevention and AI-powered contact-centre agent tools; AI being embedded in internal support systems such as the branch support desk.",
    "Stated goal is capacity: AI productivity to clear the backlog of postponed product and process projects.",
    "Navitas equipment-finance sale to Wafra for about $1.9 billion cash (7% premium to par), $109 million pre-tax benefit, closing expected Q3 2026.",
    "Q2 2026: GAAP EPS $0.95, operating EPS $0.71 (+8%); 6.8% annualised loan growth; sixth consecutive quarter of margin expansion.",
    "J.D. Power number one for retail banking satisfaction in the Southeast for the 12th time in 17 years (March 2026)."
  ],
  leadership: [
    { name: "Lynn Harton", role: "Chairman, CEO and President", linkedin: "https://www.linkedin.com/in/h-lynn-harton", sources: ["ucb-ar-2026", "ucb-navitas-2026", "ucb-q2-2026"] }
  ],
  timeline: [
    { date: "2025-03-27", title: "11th J.D. Power award", detail: "Number one in the Southeast for satisfaction, trust and people.", sources: ["ucb-jdpower-2025"] },
    { date: "2025-11-13", title: "Climbs 32 spots on Best Banks to Work For", detail: "Ninth consecutive year of recognition; No. 50.", sources: ["ucb-bbtwf-2025"] },
    { date: "2026-03-26", title: "12th J.D. Power award in 17 years", detail: "Most-awarded bank for customer satisfaction in the Southeast.", sources: ["ucb-jdpower-2026"] },
    { date: "2026-03-31", title: "2025 annual report: CEO on AI's positive impact", detail: "Fraud savings, contact-centre tools, branch support desk, capacity.", sources: ["ucb-ar-2026"] },
    { date: "2026-04-21", title: "First-quarter 2026 earnings", detail: "Net income $84.3 million; revenue growth and solid loan growth.", sources: ["ucb-q1-2026"] },
    { date: "2026-06-12", title: "Navitas equipment-finance sale agreed", detail: "About $1.9 billion cash to Wafra funds; closing expected Q3 2026.", sources: ["ucb-navitas-2026"] },
    { date: "2026-07-21", title: "Second-quarter 2026 earnings", detail: "GAAP EPS $0.95; operating EPS $0.71; margin up for sixth straight quarter.", sources: ["ucb-q2-2026"] }
  ],
  useCases: [
    { useCase: "fraud", name: "AI fraud-prevention tools", detail: "Credited with helping customers avoid potentially millions of dollars in losses.", status: "In production", sources: ["ucb-ar-2026"] },
    { useCase: "customer-chatbots", name: "AI-powered contact-centre agent tools", detail: "Efficiency tools for agents while maintaining service quality.", status: "In production", sources: ["ucb-ar-2026"] },
    { useCase: "generative-agentic-ai", name: "AI in internal support systems", detail: "Branch support desk and other internal customer-service systems.", status: "Rolling out", sources: ["ucb-ar-2026"] },
    { useCase: "governance-general", name: "Capacity-building through AI productivity", detail: "Clearing postponed product and process improvement projects.", status: "Announced", sources: ["ucb-ar-2026"] }
  ],
  numbers: [
    { label: "Navitas sale price", value: "≈ $1.9 billion cash (7% premium to par)", asOf: "2026-06-12", sources: ["ucb-navitas-2026"] },
    { label: "Q2 2026 EPS, GAAP / operating", value: "$0.95 / $0.71", asOf: "2026-07-21", sources: ["ucb-q2-2026"] },
    { label: "2025 net income, GAAP / operating", value: "$328.1 million / $336.1 million", asOf: "2026-03-31", sources: ["ucb-ar-2026"] },
    { label: "J.D. Power Southeast satisfaction awards", value: "12 in 17 years", asOf: "2026-03-26", sources: ["ucb-jdpower-2026"] }
  ],
  quotes: [
    { who: "Lynn Harton", role: "Chairman, CEO and President", date: "2026-03-31", quote: "I believe artificial intelligence (AI) will have a positive impact on our business. We are already seeing benefits of AI in fraud prevention, with tools that have helped our customers avoid potentially millions of dollars in losses.", sources: ["ucb-ar-2026"] },
    { who: "Lynn Harton", role: "Chairman, CEO and President", date: "2026-03-31", quote: "I am most hopeful about AI's potential to make our teams more efficient and effective.", sources: ["ucb-ar-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "United Community Bank is a state member bank; Fed model-risk and third-party guidance govern the fraud and contact-centre AI tools.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "AI in customer service and fraud decisions carries UDAAP and chatbot-guidance exposure.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor AI.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "The CEO letter is the disclosure template", detail: "A paragraph naming fraud, contact centre and internal support with a capacity rationale is more than most $30 billion banks give; the next step is a named leader and metrics." },
    { title: "Selling Navitas frees balance sheet and attention", detail: "Exiting a growth-constrained specialty business concentrates the franchise on relationship banking, where the AI use cases named already sit." },
    { title: "Satisfaction leadership is the thing to protect", detail: "Twelve J.D. Power awards mean any AI in service must be measured against the metric that defines the brand." },
    { title: "Fraud savings claims invite quantification", detail: "'Potentially millions' is a headline; examiners and investors will want the model, the vendor and the false-positive rate." }
  ],
  faq: [
    { q: "Does United Community Bank use AI?", a: "Yes. CEO Lynn Harton's 2025 shareholder letter says AI fraud-prevention tools have helped customers avoid potentially millions of dollars in losses, AI-powered tools make contact-centre agents more efficient, and the bank is embedding AI in internal support systems such as its branch support desk. No vendor or budget has been named." },
    { q: "What is United Community doing with Navitas?", a: "In June 2026 it agreed to sell its equipment-finance business, Navitas Credit Corp. and NLFC Reinsurance, to funds managed by Wafra for about $1.9 billion in cash, a 7% premium to par, with closing expected in the third quarter of 2026. Management said the sale refocuses United on Southeastern relationship banking." }
  ],
  sources: [
    { id: "ucb-jdpower-2025", title: "United Community earns 11th J.D. Power Award in the last 16 years", publisher: "United Community", url: "https://ucbi.com/news-and-press-releases/press-release-archive/united-community-earns-11th-jd-power-award", date: "2025-03-27" },
    { id: "ucb-bbtwf-2025", title: "United Community Climbs 32 Spots on American Banker's 2025 Best Banks to Work For List", publisher: "United Community", url: "https://ucbi.com/news-and-press-releases/press-release-archive/best-banks-to-work-for-2025", date: "2025-11-13" },
    { id: "ucb-jdpower-2026", title: "United Community Earns 12th JD Power Award in 17 Years", publisher: "United Community", url: "https://ucbi.com/news-and-press-releases/press-release-archive/(clone)-12th-jd-power-award-in-17-years", date: "2026-03-26" },
    { id: "ucb-ar-2026", title: "United Community Banks, Inc. 2025 Annual Report", publisher: "United Community Banks", url: "https://ir.ucbi.com/static-files/5e8f9b22-d28d-4070-bc4f-b896c20ae760", date: "2026-03-31" },
    { id: "ucb-q1-2026", title: "United Community Banks, Inc. Reports First Quarter Earnings", publisher: "United Community Banks", url: "https://ir.ucbi.com/node/23271/pdf", date: "2026-04-21" },
    { id: "ucb-navitas-2026", title: "United Community Banks, Inc. Announces Agreement to Sell Equipment Finance Business to Funds Managed by Wafra Inc.", publisher: "United Community Banks", url: "https://ir.ucbi.com/news-releases/news-release-details/united-community-banks-inc-announces-agreement-sell-equipment", date: "2026-06-12" },
    { id: "ucb-q2-2026", title: "United Community Banks, Inc. Reports Second Quarter Earnings", publisher: "United Community Banks (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/21/3330328/0/en/united-community-banks-inc-reports-second-quarter-earnings.html", date: "2026-07-21" }
  ],
  lastUpdated: "2026-09-10"
};
