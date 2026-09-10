import type { Bank } from "@/lib/banks";

export const COMMERCE: Bank = {
  slug: "commerce",
  name: "Commerce Bancshares",
  shortName: "Commerce",
  ticker: "CBSH",
  hq: "Kansas City, MO",
  fedRank: 55,
  leadBank: "Commerce Bank",
  assetsUsdMillions: 35540,
  charter: "Missouri state member bank (Federal Reserve)",
  posture: "A family-led Missouri bank that has put AI inside an enterprise data strategy with a written roadmap, sells AI-driven payables and receivables automation to commercial clients, and is 'actively exploring' AI in a $94 billion trust business.",
  platform: {
    name: "Enterprise data strategy with an AI pillar; CommercePayments automation",
    detail: "Commerce's 2025 annual report says the bank 'established an AI pillar within our enterprise data strategy and developed a comprehensive AI roadmap' while modernising its data platform 'to improve speed to insight, lower costs, and enable scalable growth', and that the wealth business is 'actively exploring AI-enabled tools' for trust, estate and investment needs. Client-facing, the bank resells AI-driven accounts-payable and receivable automation on the Esker platform through CommercePayments: AlloSource moved its AI automation to Esker with a collections module that sends letters automatically by balance age and a cash-application cloud, and Interstates, an Iowa contractor, chose Commerce because it 'offered AI solutions for optimizing its back-office processes' and now reviews only exceptions rather than every payment. Corporate investigations manager Christopher Garcia fronts the bank's AI-fraud guidance.",
    sources: ["cbsh-ar-2025", "cbsh-allosource-2025", "cbsh-interstates-2025", "cbsh-aifraud-2024"]
  },
  answerFirst:
    "Commerce Bancshares, the Kansas City, Missouri parent of Commerce Bank, run by the Kemper family for four generations and holding $35.3 billion of assets and $94.5 billion of trust assets under administration at 30 June 2026, describes AI in governance terms rather than product terms. Its 2025 annual report, signed by executive chairman David Kemper and CEO John Kemper in February 2026, says the company 'established an AI pillar within our enterprise data strategy and developed a comprehensive AI roadmap', is modernising its data platform for 'speed to insight', and is 'actively exploring AI-enabled tools' for the trust, estate and investment needs of a wealth business that grew to about $90 billion of assets under administration with the $585 million FineMark Holdings acquisition on 1 January 2026, the bank's first bank deal in twelve years. The visible deployments are in commercial payments, where Commerce packages AI-driven automation from Esker for clients' payables and receivables: the tissue-bank AlloSource runs automated collections and cash application on it, and the Iowa contractor Interstates chose Commerce because it wanted a bank 'that offered AI solutions for optimizing its back-office processes' and now reviews only exceptions. The bank's own fraud team publishes guidance on AI-powered scams, from ChatGPT-written phishing to voice and video impersonation. Commerce's annual report also frames AI as a market risk, noting valuation concentration in AI-related companies, and as an industry force: 'the pace of innovation, driven by advances in data, automation and AI, will continue to reshape customer expectations'. In June 2026 it agreed to buy the St. Louis middle-market investment bank Nolan & Associates. Commerce Bank is a Missouri state member bank supervised by the Federal Reserve; it has not disclosed AI spending, headcount or named internal use cases beyond the roadmap.",
  keyPoints: [
    "Governance first: an AI pillar inside the enterprise data strategy, a written AI roadmap and a data-platform modernisation, disclosed in the 2025 annual report.",
    "Wealth is the stated frontier: 'actively exploring AI-enabled tools' for trust, estate and investment work across $94.5 billion of trust assets.",
    "AI sold to clients: Esker-based AI automation for payables, collections and cash application through CommercePayments, with named client results (AlloSource, Interstates).",
    "Fraud stance: the bank's corporate investigations manager fronts guidance on AI-powered scams and impersonation.",
    "Two acquisitions in six months: FineMark Holdings ($585 million, closed 1 January 2026) for wealth, and Nolan & Associates (June 2026) for middle-market advisory.",
    "Scale: $35.3 billion of assets, $27.9 billion of deposits, 36th-largest US bank; AI spend and use-case counts undisclosed."
  ],
  leadership: [
    { name: "John Kemper", role: "President and CEO", linkedin: "https://www.linkedin.com/in/john-kemper-a21a7531", sources: ["cbsh-ar-2025", "ab-finemark-2026"] },
    { name: "David Kemper", role: "Executive Chairman", sources: ["cbsh-ar-2025"] },
    { name: "Christopher Garcia", role: "Corporate Investigations Manager (AI-fraud guidance)", sources: ["cbsh-aifraud-2024"] }
  ],
  timeline: [
    { date: "2024-07-19", title: "Guidance on AI-powered fraud", detail: "ChatGPT-written scams and voice and video impersonation explained by the investigations team.", sources: ["cbsh-aifraud-2024"] },
    { date: "2025-01-17", title: "Interstates chooses Commerce for AI back-office automation", detail: "Cash Application Cloud; staff review exceptions instead of every payment.", sources: ["cbsh-interstates-2025"] },
    { date: "2025-08-19", title: "AlloSource moves AI automation to Esker", detail: "Automated collections letters and cash application via CommercePayments.", sources: ["cbsh-allosource-2025"] },
    { date: "2026-01-01", title: "FineMark Holdings acquisition closes", detail: "$585 million all-stock deal; ~$90 billion of assets under administration.", sources: ["ab-finemark-2026"] },
    { date: "2026-02-24", title: "Annual report discloses AI pillar and roadmap", detail: "Data-platform modernisation; wealth 'actively exploring' AI tools.", sources: ["cbsh-ar-2025"] },
    { date: "2026-06-29", title: "Nolan & Associates acquisition announced", detail: "St. Louis middle-market investment bank; price undisclosed.", sources: ["ab-nolan-2026", "bankingdive-nolan-2026"] },
    { date: "2026-07-27", title: "At a glance: $35.3 billion of assets", detail: "$94.5 billion trust assets; $9.9 billion commercial card volume in 2025.", sources: ["cbsh-glance-2026"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "AI pillar in the enterprise data strategy", detail: "AI roadmap plus data-platform modernisation for speed to insight.", status: "Rolling out", sources: ["cbsh-ar-2025"] },
    { useCase: "generative-agentic-ai", name: "AI-driven payables and receivables automation for clients", detail: "Esker platform via CommercePayments: collections, cash application, exception-only review.", status: "In production", sources: ["cbsh-allosource-2025", "cbsh-interstates-2025"] },
    { useCase: "trading-markets", name: "AI-enabled wealth and trust tools", detail: "'Actively exploring' for sophisticated trust, estate and investment needs.", status: "Pilot", sources: ["cbsh-ar-2025"] },
    { useCase: "fraud", name: "AI-scam awareness and investigations", detail: "Corporate investigations guidance on AI-enabled impersonation.", status: "In production", sources: ["cbsh-aifraud-2024"] }
  ],
  numbers: [
    { label: "Total assets / deposits", value: "$35.3 billion / $27.9 billion", asOf: "2026-06-30", sources: ["cbsh-glance-2026"] },
    { label: "Trust assets under administration", value: "$94.5 billion", asOf: "2026-06-30", sources: ["cbsh-glance-2026"] },
    { label: "FineMark acquisition", value: "$585 million (all stock)", asOf: "2026-01-01", sources: ["ab-finemark-2026"] },
    { label: "Commercial card volume, 2025", value: "$9.9 billion", asOf: "2025-12-31", sources: ["cbsh-glance-2026"] },
    { label: "Rank by asset size", value: "36th-largest US bank", asOf: "2026-03-31", sources: ["cbsh-glance-2026"] }
  ],
  quotes: [
    { who: "Commerce Bancshares", role: "2025 Annual Report", date: "2026-02-24", quote: "To responsibly harness the potential of AI, we established an AI pillar within our enterprise data strategy and developed a comprehensive AI roadmap.", sources: ["cbsh-ar-2025"] },
    { who: "Christopher Garcia", role: "Corporate Investigations Manager", date: "2024-07-19", quote: "An AI-powered scam is when a bad actor leverages AI technology to lend authenticity to the scam they're trying to perpetrate.", sources: ["cbsh-aifraud-2024"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Commerce Bank is a Missouri state member bank; the Fed's model-risk and third-party guidance cover the AI roadmap and the Esker-based tools sold to clients.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and card products bring UDAAP and adverse-action duties to any AI in decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "AI tools in a $94 billion trust and advisory business fall under SEC expectations for advisers and AI-washing scrutiny.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "Reselling AI is a third-party risk with a client-facing face", detail: "Esker automation carries Commerce's name to its commercial clients; vendor-model changes become the bank's service issue under interagency third-party guidance." },
    { title: "The roadmap is disclosed; the use cases are not", detail: "Naming even two internal deployments would move Commerce from governance language to evidence, which peers with far thinner records have already done." },
    { title: "Wealth is the right place to be careful", detail: "AI tools for trust and estate work touch fiduciary duty; the 'actively exploring' framing suggests the bank knows the bar is higher there." },
    { title: "Two acquisitions add integration load", detail: "FineMark and Nolan bring new data and client systems just as the data platform is being modernised; sequencing matters for the AI roadmap." }
  ],
  faq: [
    { q: "How does Commerce Bank use AI?", a: "Commerce discloses an AI pillar within its enterprise data strategy and a written AI roadmap, alongside a modernised data platform, and says its wealth business is actively exploring AI-enabled tools. For commercial clients it packages AI-driven accounts-payable and receivable automation from Esker through CommercePayments, with clients such as AlloSource and Interstates using automated collections and cash application." },
    { q: "What did Commerce Bancshares acquire recently?", a: "FineMark Holdings, a Florida wealth-focused bank, for $585 million in stock, completed on 1 January 2026 and lifting assets under administration to about $90 billion; and Nolan & Associates, a St. Louis middle-market investment bank, announced in June 2026 for an undisclosed price." }
  ],
  sources: [
    { id: "ab-finemark-2026", title: "Commerce eyes wealth-management gains after sealing M&A deal", publisher: "American Banker", url: "https://americanbanker.com/news/commerce-eyes-wealth-management-gains-after-sealing-m-a-deal", date: "2026-01-07" },
    { id: "ab-nolan-2026", title: "Commerce to acquire boutique middle-market investment bank", publisher: "American Banker", url: "https://americanbanker.com/news/commerce-to-acquire-boutique-middle-market-investment-bank", date: "2026-06-29" },
    { id: "bankingdive-nolan-2026", title: "Commerce Bank in St. Louis to buy boutique firm", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/commerce-bank-st-louis-to-buy-boutique-firm/824113/", date: "2026-06-30" },
    { id: "cbsh-ar-2025", title: "2025 Annual Report", publisher: "Commerce Bancshares", url: "https://commercebank.com/-/media/cb/pdf/about-us/annual-reports/2025annualreport.pdf", date: "2026-02-24" },
    { id: "cbsh-glance-2026", title: "Commerce Bancshares, Inc. At a Glance (data as of June 30, 2026)", publisher: "Commerce Bancshares", url: "https://commercebank.com/-/media/cb/pdf/about-us/commerce-bancshares-inc-at-a-glance.pdf", date: "2026-07-27" },
    { id: "cbsh-allosource-2025", title: "Banking on a mission (AlloSource client story)", publisher: "Commerce Bank", url: "https://commercebank.com/business/trends-and-insights/2025/banking-on-a-mission", date: "2025-08-19" },
    { id: "cbsh-interstates-2025", title: "Iowa-based electrical contractor reduces payment processing time", publisher: "Commerce Bank", url: "https://commercebank.com/business/trends-and-insights/2025/iowa-based-electrical-contractor-reduces-payment-processing-time", date: "2025-01-17" },
    { id: "cbsh-aifraud-2024", title: "How to stay safe from AI-powered fraud", publisher: "Commerce Bank", url: "https://commercebank.com/personal/ideas-and-tips/2024/how-to-stay-safe-from-ai-powered-fraud", date: "2024-07-19" }
  ],
  lastUpdated: "2026-09-10"
};
