import type { Bank } from "@/lib/banks";

export const STATE_STREET: Bank = {
  slug: "state-street",
  name: "State Street",
  shortName: "State Street",
  ticker: "STT",
  hq: "Boston, MA",
  fedRank: 12,
  leadBank: "State Street Bank and Trust Company",
  assetsUsdMillions: 386546,
  charter: "State member bank (Fed)",
  posture: "AI as the engine of a $1 billion productivity program on a custody-and-data platform — disclosed in targets more than in tools.",
  platform: {
    name: "State Street Alpha and the AI hiring build-out",
    detail: "State Street's front-to-back Alpha platform — Charles River's front office with the bank's middle- and back-office services — is where its AI work lands: agentic workflows, co-pilots and machine-learning data-quality tooling for the investment data that runs through it. The bank's public job postings in 2025–26 describe 'Agentic AI Builder' roles, production RAG and multi-agent systems, and a global head of insight generation and AI adoption for the investment-management arm.",
    sources: ["stt-careers-agentic-builder", "stt-careers-ai-engineer", "stt-careers-ssim", "ab-fogarty-2025"]
  },
  answerFirst:
    "State Street, the second-largest custodian with $53.8 trillion under custody or administration, talks about AI mostly through its cost and productivity targets: in July 2026, after a record quarter, it set out a plan for $1 billion of run-rate transformation benefits and new medium-term targets, and management has described AI-enabled transformation as the route to them. The public record on specific tools is thinner than at peers — the bank's own site shows an Agentic AI Builder role, production multi-agent systems and an AI-adoption head being hired, its investment-management arm publishes AI research that warns of AI 'failing to scale', and its CTO moved into the CIO seat in 2025 with a cloud estate on Azure and AWS. The strategy is legible in the numbers and the hiring; the platform story is still being written.",
  keyPoints: [
    "Scale: $53.8 trillion in assets under custody and/or administration and $5.7 trillion under management at end-2025; about 52,000 employees; the Alpha front-to-back platform drove nearly half of 2024's $2.3 trillion of new servicing assets.",
    "July 2026: record quarterly revenue, a $1 billion cost-cut and transformation plan, and selection by the Treasury for the Trump Accounts program.",
    "Hiring signals on the bank's own careers site: 'Agentic AI Builder, Officer' for investment management, senior AI engineers building production RAG and multi-agent systems, and a global head of insight generation and AI adoption.",
    "Technology leadership: CTO Andrew Zitney moved into the CIO role in July 2025; the cloud estate was built on Microsoft Azure (2020 wealth data platform) and expanded through a 2023 AWS alliance.",
    "Executives are learning the tools themselves: the COO of investment services, Ann Fogarty, took an MIT course on agentic AI 'to really understand the opportunities'.",
    "The investment arm's 2026 'grey swan' list puts AI 'failing to scale' at the top of under-priced risks — an unusually sceptical house view from an AI adopter."
  ],
  leadership: [
    { name: "Ronald O'Hanley", role: "Chairman and CEO", sources: ["ab-treasury-cost-2026", "reuters-q1-2026"], linkedin: "https://www.linkedin.com/in/ronald-o-hanley/" },
    { name: "Andrew Zitney", role: "Chief Information Officer (from CTO, July 2025)", sources: ["bankingdive-cio-2025"], linkedin: "https://www.linkedin.com/in/andrew-zitney-8137898/" },
    { name: "Ann Fogarty", role: "Head of Global Delivery and COO, Investment Services", sources: ["ab-fogarty-2025"], linkedin: "https://www.linkedin.com/in/ann-fogarty-b7a743a7/" },
    { name: "Donna Milrod", role: "Chief Product Officer", sources: ["ab-milrod-2026"], linkedin: "https://www.linkedin.com/in/donna-m-milrod/" }
  ],
  timeline: [
    { date: "2020-01-01", title: "Cloud wealth-management data platform on Azure", detail: "The start of the cloud estate the AI work now runs on.", sources: ["bankingdive-cio-2025"] },
    { date: "2023-01-01", title: "AWS alliance expands the cloud estate", detail: "Data-centre footprint streamlined as part of the alliance.", sources: ["bankingdive-cio-2025"] },
    { date: "2025-07-18", title: "CTO Andrew Zitney becomes CIO", detail: "Digital transformation 'front and center' on the Q2 2025 call.", sources: ["bankingdive-cio-2025"] },
    { date: "2025-09-08", title: "Governance gaps flagged across the industry", detail: "A FICO/Corinium survey of bank CIOs and AI officers — predictability and model monitoring — cited alongside State Street's program.", sources: ["bankingdive-governance-2025"] },
    { date: "2025-10-01", title: "COO of investment services studies agentic AI at MIT", detail: "Ann Fogarty: 'I want to really understand the opportunities there.'", sources: ["ab-fogarty-2025"] },
    { date: "2025-11-13", title: "Agentic AI Builder and senior AI engineer roles posted", detail: "Builder-oriented roles to translate business processes into agentic workflows under governance and control standards.", sources: ["stt-careers-agentic-builder", "stt-careers-ai-engineer"] },
    { date: "2026-01-01", title: "Digital Asset Platform launched", detail: "Infrastructure for tokenised funds, deposits and stablecoins, led by the chief product officer.", sources: ["ab-milrod-2026"] },
    { date: "2026-02-13", title: "'AI fails to scale' tops the 2026 grey-swan list", detail: "State Street Investment Management's under-priced risks.", sources: ["cnbc-grey-swan-2026"] },
    { date: "2026-04-08", title: "2025 annual report: 'next-gen transformation' as operating discipline", detail: "Insight, innovation and execution to turn change into opportunity.", sources: ["stt-annual-report-2025"] },
    { date: "2026-04-28", title: "Tokenised fund servicing from Luxembourg by end-2026", detail: "Extends fund administration, custody and transfer agency to digitally native funds.", sources: ["ft-tokenised-2026"] },
    { date: "2026-07-16", title: "Record quarter, $1 billion cost-cut plan, Treasury selection", detail: "New medium-term targets; management points to AI-enabled transformation for productivity.", sources: ["ab-treasury-cost-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Agentic workflows on Alpha", detail: "Agentic AI builders and co-pilots for investment-management workflows.", status: "Rolling out", sources: ["stt-careers-agentic-builder", "stt-careers-ssim"] },
    { useCase: "governance-general", name: "ML data-quality for investment data", detail: "Production RAG, multi-agent and document-intelligence systems for financial-services workflows.", status: "In production", sources: ["stt-careers-ai-engineer"] },
    { useCase: "trading-markets", name: "AI research and market views", detail: "Investment-management research on AI's market and macro effects.", status: "In production", sources: ["cnbc-grey-swan-2026"] },
    { useCase: "third-party-vendors", name: "Multi-cloud estate", detail: "Azure and AWS as the platforms under the AI program.", status: "In production", sources: ["bankingdive-cio-2025"] }
  ],
  numbers: [
    { label: "Assets under custody / administration", value: "$53.8 trillion", asOf: "2025-12-31", sources: ["ft-dimensional-2026"] },
    { label: "Assets under management", value: "$5.7 trillion", asOf: "2025-12-31", sources: ["ft-dimensional-2026"] },
    { label: "Employees", value: "≈ 52,000", asOf: "2026-03-23", sources: ["ft-dimensional-2026"] },
    { label: "Transformation / cost-cut plan", value: "$1 billion", asOf: "2026-07-16", sources: ["ab-treasury-cost-2026"] },
    { label: "Alpha share of new servicing assets", value: "≈ half of 2024's $2.3 trillion", asOf: "2025-10-01", sources: ["ab-fogarty-2025"] }
  ],
  quotes: [
    { who: "Ann Fogarty", role: "COO, Investment Services", date: "2025-10-01", quote: "I want to really understand the opportunities there.", sources: ["ab-fogarty-2025"] },
    { who: "State Street", role: "2025 Annual Report", date: "2026-04-08", quote: "Shaping next-gen transformation is an operating discipline — combining insight, innovation, and execution to turn change into opportunity.", sources: ["stt-annual-report-2025"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "State member bank and G-SIB; SR 26-2 governs its models and SR 23-4 its Azure and AWS dependencies.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "basel-committee", why: "A custodian's AI runs on risk data: BCBS 239 and the third-party principles are the frame.", docSlugs: ["bcbs-239", "bcbs-third-party-risk-principles-2025"] },
    { authority: "sec", why: "Investment-management and servicing businesses under SEC exam priorities for AI.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "fsb", why: "G-SIB; concentration in cloud and model providers is the FSB's named vulnerability.", docSlugs: ["fsb-ai-sound-practices-consultation-2026", "fsb-monitoring-ai-adoption-vulnerabilities-2025"] },
    { authority: "eu-ai-act", why: "Luxembourg and EU fund servicing bring EU AI Act deployer duties and DORA into scope.", docSlugs: ["eu-ai-act-regulation-2024-1689"] }
  ],
  suggestions: [
    { title: "Disclosure is the gap, not activity", detail: "Hiring posts, a $1 billion plan and executive training show a program under way, but State Street publishes far less about named tools and adoption than BNY, its direct peer. Analysts have already pressed for an 'AI-native' timeline; the next investor day is where that gap closes or widens." },
    { title: "The house view is a hedge on the strategy", detail: "Putting 'AI fails to scale' atop its own grey-swan list while investing in AI is a coherent position for a custodian whose clients are exposed both ways — but it invites the question of what the bank's own scaling plan assumes." },
    { title: "Agents will show up in Alpha first", detail: "The builder roles sit in investment management and the Alpha platform; client-facing agentic servicing is the natural next disclosure." },
    { title: "Watch the peer comparison", detail: "BNY reports daily-user shares, solution counts and digital employees. State Street reports targets. The market will read the difference." }
  ],
  faq: [
    { q: "What is State Street's AI strategy?", a: "State Street frames AI as the engine of a productivity and transformation program — a $1 billion cost-cut plan announced in July 2026 alongside new medium-term targets — rather than as a set of named products. Its public record shows agentic-AI builder and AI-engineering roles being hired for the Alpha platform and investment management, a cloud estate on Azure and AWS, and executives training themselves on agentic AI." },
    { q: "Who runs technology at State Street?", a: "Andrew Zitney, who moved from chief technology officer to chief information officer in July 2025. Donna Milrod is chief product officer and led the Digital Asset Platform launch in January 2026; Ann Fogarty runs global delivery and operations for investment services, the firm's largest business." }
  ],
  sources: [
    { id: "stt-careers-agentic-builder", title: "Agentic AI Builder, Officer — State Street Investment Management (job posting)", publisher: "State Street", url: "https://careers.statestreet.com/global/en/job/STSTGLOBALR794563EXTERNALENGLOBAL/Agentic-AI-Builder-Officer-State-Street-Investment-Management", date: "2025-11-13" },
    { id: "stt-careers-ai-engineer", title: "AI Engineer, Assistant Vice President (job posting)", publisher: "State Street", url: "https://careers.statestreet.com/global/en/job/STSTGLOBALR788419EXTERNALENGLOBAL", date: "2025-11-13" },
    { id: "stt-careers-ssim", title: "State Street Investment Management roles, including Global Head of Insight Generation and AI Adoption", publisher: "State Street", url: "https://careers.statestreet.com/global/en/ssga", date: "2025-04-30" },
    { id: "stt-annual-report-2025", title: "2025 Annual Report", publisher: "State Street", url: "https://www.statestreet.com/content/dam/stt/web/about/our-story/annual-report/documents/2025-annual-report.pdf", date: "2026-04-08" },
    { id: "ab-treasury-cost-2026", title: "State Street touts selection by Treasury, $1B cost-cut plan", publisher: "American Banker", url: "https://www.americanbanker.com/news/state-street-touts-selection-by-treasury-1b-cost-cut-plan", date: "2026-07-16" },
    { id: "ab-fogarty-2025", title: "The Most Powerful Women in Finance, No. 19, Ann Fogarty, State Street", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-in-finance-no-19-ann-fogarty-state-street", date: "2025-10-01" },
    { id: "ab-milrod-2026", title: "State Street's Donna Milrod is Ahead of the Digital Asset Curve", publisher: "American Banker", url: "https://www.americanbanker.com/news/state-streets-chief-product-officer-is-7-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "bankingdive-cio-2025", title: "State Street CTO moves to CIO role", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/state-street-cto-cio-andrew-zitney-ai-brian-franz-estee-lauder/753422/", date: "2025-07-18" },
    { id: "bankingdive-governance-2025", title: "Banks seek to reconcile AI governance gaps", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/bank-cio-cto-ai-adoption-governance-roi-fico-state-street/759602/", date: "2025-09-08" },
    { id: "cnbc-grey-swan-2026", title: "State Street's 2026 'grey swan' warning: AI 'fails to scale'", publisher: "CNBC", url: "https://www.cnbc.com/video/2026/02/13/ai-failure-to-scale-is-a-agrey-swan-state-street-im.html", date: "2026-02-13" },
    { id: "reuters-q1-2026", title: "State Street's profit rises on robust fee income", publisher: "Reuters", url: "https://www.reuters.com/business/finance/state-streets-profit-rises-robust-fee-income-2026-04-17/", date: "2026-04-17" },
    { id: "ft-tokenised-2026", title: "State Street to Launch Tokenized Fund Servicing from Luxembourg", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202604280800BIZWIRE_USPRX____20260428_BW355626-1", date: "2026-04-28" },
    { id: "ft-dimensional-2026", title: "State Street to Support Dimensional Fund Advisors' First-Ever ETF Share Class Rollout (company boilerplate: AUC/A, AUM, headcount)", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603230830BIZWIRE_USPRX____20260323_BW043243-1", date: "2026-03-23" }
  ],
  lastUpdated: "2026-09-09"
};
