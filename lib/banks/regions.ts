import type { Bank } from "@/lib/banks";

export const REGIONS: Bank = {
  slug: "regions",
  name: "Regions Financial",
  shortName: "Regions",
  ticker: "RF",
  hq: "Birmingham, AL",
  fedRank: 26,
  leadBank: "Regions Bank",
  assetsUsdMillions: 159430,
  charter: "Alabama state member bank (Federal Reserve)",
  posture: "A core-replacement bank that reports AI as productivity arithmetic: 35% of new business opportunities and a 20% banker productivity lift, with the new deposit platform due in 2027.",
  platform: {
    name: "AI-driven banker platforms on a modernised stack",
    detail: "Regions frames AI as a layer on a technology modernisation that CEO John Turner says now 'touches every layer of our technology stack and every business channel and support function'. The fourth-quarter 2025 investor materials show AI-driven platforms supporting banker enablement, treasury-management implementation and client onboarding, generating 35% of new business opportunities and contributing to an expected 20% productivity boost. Technology spending is guided to 10–12% of revenue while the bank moves to software-as-a-service platforms and replaces its core deposit system by 2027, after which executives expect AI to absorb workforce attrition.",
    sources: ["pymnts-productivity-2026", "ab-core-2025"]
  },
  answerFirst:
    "Regions is a $160 billion Southeastern bank whose AI story is inseparable from a decade-long core replacement. On the fourth-quarter 2025 call in January 2026, CEO John Turner said technology modernisation now touches every layer of the stack and every channel, with parallel investment in data governance, authentication and real-time data so that both traditional and generative AI can be used more widely; the earnings deck showed AI-driven platforms for banker enablement, treasury implementation and client onboarding producing 35% of new business opportunities and an expected 20% productivity gain. The finance chief guided technology spending to 10–12% of revenue, above historical norms, and said the investment should eventually offset headcount growth. The core deposit platform, in the works since 2019, is due in 2027; the bank has said it will then apply AI to contain technology costs and let attrition go unreplaced where technology can do the job. On the customer side, a native mobile app built in-house launched in July 2025, personalised insights (AI-driven notifications on spending, subscriptions and cash flow) went live in July 2026, and digital channels took 80% of transactions and 29% of checking-account openings. Regions is also unusual in talking publicly about the other side of the AI boom: in July 2026 executives said the bank was capping growth in its exposure to borrowers tied to the AI ecosystem and stress-testing for a slowdown. The head of enterprise data science, Chun Schiros, runs the analytics function; the CFO seat passed from David Turner to Anil Chadha in 2026.",
  keyPoints: [
    "AI as reported arithmetic: AI-driven platforms for banker enablement, treasury onboarding and client onboarding generate 35% of new business opportunities and an expected 20% productivity boost (Q4 2025 investor materials).",
    "Spend: technology at 10–12% of revenue as the bank moves to SaaS platforms; the CFO expects the investment to offset headcount growth over time.",
    "Core first, AI second: a single cloud-based deposit platform by 2027, after which 'we will have attrition in our workforce that we won't have to replace because we have technology that can do a particular job'.",
    "Customer AI: an in-house native mobile app (July 2025), personalised insights on spending, subscriptions and cash flow (July 2026), digital at 80% of transactions and 2.7 million active mobile users.",
    "Credit discipline on the AI boom: no direct data-centre lending, growth in AI-linked exposure capped and stress-tested (July 2026) — 'soundness, profitability, and growth, in that order'.",
    "Deal posture: no bank acquisitions; bolt-ons (EnerBank, Frazer Lanier) and an accelerated plan for 150 new branches in Florida, Georgia and Tennessee."
  ],
  leadership: [
    { name: "John Turner", role: "Chairman, President and CEO", sources: ["pymnts-productivity-2026", "ab-core-2025"], linkedin: "https://www.linkedin.com/in/johnturnerregions/" },
    { name: "Anil Chadha", role: "Chief Financial Officer (succeeded David Turner in 2026)", sources: ["ab-ai-exposure-2026", "ab-cfo-2026"], linkedin: "https://www.linkedin.com/in/anil-chadha-a311111/" },
    { name: "Chun Schiros", role: "Former SVP, Head of Enterprise Data Science (left Regions in 2024)", sources: ["ab-schiros-2025"], linkedin: "https://www.linkedin.com/in/chun-schiros-phd-90a16344/" },
    { name: "Kristen Rankin", role: "Former Head of Digital (joined SouthState in 2026)", sources: ["bankingdive-app-2025"], linkedin: "https://www.linkedin.com/in/kristen-rankin/" },
    { name: "Kate Danella", role: "Chief Administrative Officer (from September 2026); formerly head of consumer banking", sources: ["bankingdive-cao-2026"], linkedin: "https://www.linkedin.com/in/katedanella/" },
    { name: "Bryan Ford", role: "Head of Treasury Management; American Banker Most Innovative People in Finance 2026", sources: ["pymnts-ford-2026"], linkedin: "https://www.linkedin.com/in/bryan-ford-18655825/" }
  ],
  timeline: [
    { date: "2025-01-28", title: "USAA sues over mobile-deposit patents", detail: "Settled in February 2026.", sources: ["reuters-usaa-2025", "reuters-settle-2026"] },
    { date: "2025-07-18", title: "New core deposit platform by 2027", detail: "A single cloud-based platform across the footprint; AI to follow to contain technology costs.", sources: ["ab-core-2025"] },
    { date: "2025-07-18", title: "Technology investments drive 10% revenue growth", detail: "Second-quarter 2025 results attribute growth to technology and talent.", sources: ["pymnts-revenue-2025"] },
    { date: "2025-12-19", title: "In-house native app; insights coming", detail: "The head of digital on the July 2025 app launch and data-driven insights planned for early 2026.", sources: ["bankingdive-app-2025"] },
    { date: "2026-01-13", title: "Long-time CFO David Turner to retire", detail: "After 15 years in the role.", sources: ["ab-cfo-2026"] },
    { date: "2026-01-16", title: "AI lifts productivity 20%; 35% of new opportunities", detail: "Q4 2025 results: modernisation across every layer of the stack; tech spend guided to 10–12% of revenue.", sources: ["pymnts-productivity-2026"] },
    { date: "2026-03-13", title: "150 new branches, faster", detail: "Florida, Georgia and Tennessee, as competition in the Southeast intensifies.", sources: ["bankingdive-branches-2026"] },
    { date: "2026-04-23", title: "Regions ReimbursePro with Dash Solutions", detail: "A treasury-management product to move clients off paper refunds and checks.", sources: ["ft-dash-2026"] },
    { date: "2026-07-07", title: "Personalised insights launch in the app", detail: "Daily notifications on spending and savings, subscription tracking and cash-flow trends, rolling out automatically.", sources: ["ft-insights-2026"] },
    { date: "2026-07-17", title: "Digital reaches 80% of transactions", detail: "Second-quarter 2026 results; the CEO calls online and mobile 'central to our long-term strategy'.", sources: ["pymnts-mobile-2026"] },
    { date: "2026-07-17", title: "Capping exposure to the AI boom", detail: "No direct data-centre lending; growth in AI-linked borrowers capped and stress-tested.", sources: ["ab-ai-exposure-2026"] },
    { date: "2026-08-11", title: "Kate Danella named chief administrative officer", detail: "Succeeding Dave Keenan from 1 September 2026.", sources: ["bankingdive-cao-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "AI-driven banker enablement and onboarding platforms", detail: "Banker enablement, treasury-management implementation and client onboarding; 35% of new opportunities.", status: "In production", sources: ["pymnts-productivity-2026"] },
    { useCase: "customer-chatbots", name: "Personalised insights in mobile banking", detail: "Transaction analysis for daily spending and savings notifications and subscription tracking.", status: "In production", sources: ["ft-insights-2026", "bankingdive-app-2025"] },
    { useCase: "generative-agentic-ai", name: "Traditional and generative AI across the company", detail: "Expanded on data governance, authentication and real-time data foundations.", status: "Rolling out", sources: ["pymnts-productivity-2026"] },
    { useCase: "fraud", name: "Deepfake and AI-scam education", detail: "Client guidance on AI-generated impersonation.", status: "In production", sources: ["regions-deepfake-2026"] },
    { useCase: "credit-underwriting", name: "Stress analysis of AI-ecosystem credit exposure", detail: "Concentration-risk management applied to borrowers tied to AI capital spending.", status: "In production", sources: ["ab-ai-exposure-2026"] }
  ],
  numbers: [
    { label: "New business opportunities generated by AI-driven platforms", value: "35%", asOf: "2026-01-16", sources: ["pymnts-productivity-2026"] },
    { label: "Expected productivity boost", value: "20%", asOf: "2026-01-16", sources: ["pymnts-productivity-2026"] },
    { label: "Technology spend as share of revenue", value: "10–12%", asOf: "2026-01-16", sources: ["pymnts-productivity-2026"] },
    { label: "Digital share of transactions / active mobile users", value: "80% / 2.7 million", asOf: "2026-07-17", sources: ["pymnts-mobile-2026", "bankingdive-app-2025"] },
    { label: "Total assets", value: "$161 billion", asOf: "2026-04-23", sources: ["pymnts-dash-2026"] }
  ],
  quotes: [
    { who: "John Turner", role: "Chairman, President and CEO", date: "2026-01-16", quote: "These investments strengthen security, enhance the customer experience, support growth, and expand the use of both traditional and generative AI across the company.", sources: ["pymnts-productivity-2026"] },
    { who: "David Turner", role: "Chief Financial Officer", date: "2025-07-18", quote: "Over time, we will have attrition in our workforce that we won't have to replace because we have technology that can do a particular job.", sources: ["ab-core-2025"] },
    { who: "Anil Chadha", role: "Chief Financial Officer", date: "2026-07-17", quote: "Soundness, profitability, and growth, in that order, matters — especially when you're thinking about industries like this where there could be change.", sources: ["ab-ai-exposure-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Regions Bank is an Alabama state member bank; the core-platform vendor and Dash Solutions are third-party relationships, and the 2026 model-risk letter frames the banker-enablement models.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "Personalised insights and notifications in a consumer app, and any AI in mortgage or consumer credit, sit under UDAAP and ECOA.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-platform replacement and AI cost containment intersect with the FDIC's 2026 innovation guidance for insured banks.", docSlugs: ["fdic-fil-15-2026"] },
    { authority: "colorado-ai-act", why: "A consumer footprint that reaches Texas and the Southeast brings state automated-decision laws into scope as AI moves into lending.", docSlugs: ["co-sb26-189"] }
  ],
  suggestions: [
    { title: "The 35% and 20% figures are the disclosure to protect", detail: "Few regionals attribute new business and productivity to named AI platforms. Keeping the definitions stable quarter to quarter is what makes those numbers useful to investors and defensible to examiners." },
    { title: "Core replacement sequencing is the strategy", detail: "Regions has chosen to finish the deposit platform before pushing AI into the workforce. That reduces risk but means the headcount effects the CFO described arrive after 2027, when competitors will already report theirs." },
    { title: "Being explicit about AI credit exposure is rare and useful", detail: "Capping and stress-testing AI-linked borrowers is a risk practice other banks are being asked about; publishing the approach ahead of examiner questions is a strength." },
    { title: "Personalised insights invite UDAAP scrutiny", detail: "Daily AI notifications about spending are the kind of consumer-facing model the CFPB's chatbot guidance was written for; documenting how insights are tested for accuracy and fairness will matter." }
  ],
  faq: [
    { q: "How is Regions Bank using AI?", a: "Regions reports AI-driven platforms for banker enablement, treasury-management implementation and client onboarding that generate 35% of new business opportunities and an expected 20% productivity boost, alongside personalised insights in its mobile app launched in July 2026. The bank is replacing its core deposit platform by 2027 and says AI will then help contain technology costs and absorb workforce attrition." },
    { q: "How much does Regions spend on technology?", a: "The CFO guided technology spending to 10–12% of revenue on the fourth-quarter 2025 call, above historical norms, as the bank migrates to software-as-a-service platforms and completes its core deposit replacement." }
  ],
  sources: [
    { id: "pymnts-productivity-2026", title: "Regions Bank Says AI Lifts Productivity 20% as Loan Growth Cools", publisher: "PYMNTS", url: "https://pymnts.com/earnings/2026/regions-says-ai-lifts-productivity-20percent-loan-growth-cools", date: "2026-01-16" },
    { id: "pymnts-mobile-2026", title: "Regions Bank's Mobile Upgrade Drives Digital Transactions to 80%", publisher: "PYMNTS", url: "https://www.pymnts.com/earnings/2026/regions-banks-mobile-upgrade-drives-digital-transactions-to-80/", date: "2026-07-17" },
    { id: "pymnts-revenue-2025", title: "Regions Financial: Tech Investments Drove 10% YoY Revenue Growth", publisher: "PYMNTS", url: "https://pymnts.com/earnings/2025/regions-financial-technology-investments-drove-10percent-annual-revenue-growth", date: "2025-07-18" },
    { id: "pymnts-dash-2026", title: "Regions Bank and Dash Solutions Collaborate on New Solution to Modernize Client Payment Operations (boilerplate: $161 billion assets)", publisher: "PYMNTS", url: "https://www.pymnts.com/newswire-announcements/regions-bank-and-dash-solutions-collaborate-on-new-solution-to-modernize-client-payment-operations/", date: "2026-04-23" },
    { id: "pymnts-ford-2026", title: "American Banker Names Regions Bank's Bryan Ford Among Most Innovative People in Finance", publisher: "PYMNTS", url: "https://pymnts.com/newswire-announcements/american-banker-names-regions-banks-bryan-ford-among-most-innovative-people-in-finance", date: "2026-06-02" },
    { id: "ab-core-2025", title: "Regions plans to unveil upgraded deposit platform in 2027", publisher: "American Banker", url: "https://www.americanbanker.com/news/regions-says-it-will-upgrade-core-deposit-platform-in-2027", date: "2025-07-18" },
    { id: "ab-ai-exposure-2026", title: "How one bank is managing the risk that AI spending dries up", publisher: "American Banker", url: "https://americanbanker.com/news/how-one-bank-is-managing-the-risk-that-ai-spending-dries-up", date: "2026-07-17" },
    { id: "ab-cfo-2026", title: "Regions Financial's longtime CFO announces his retirement", publisher: "American Banker", url: "https://americanbanker.com/news/regions-financials-longtime-cfo-announces-his-retirement", date: "2026-01-13" },
    { id: "ab-schiros-2025", title: "Chun Schiros, Head of Enterprise Data Science, Regions Bank (The Most Powerful Women in Banking)", publisher: "American Banker", url: "https://the-most-powerful-women-in-banking.americanbanker.com/profile/chun-schiros", date: "2025-08-24" },
    { id: "bankingdive-app-2025", title: "Regions aims to push 'dark mode,' other app tweaks next year", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/regions-mobile-app-dark-mode-data-insights-digital-reggie/808360/", date: "2025-12-19" },
    { id: "bankingdive-branches-2026", title: "Regions accelerates plan to build 150 new branches", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/regions-bank-branches-florida-georgia-tennessee/814665/", date: "2026-03-13" },
    { id: "bankingdive-cao-2026", title: "Regions Bank names next chief administrative officer", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/regions-kate-danella-chief-admin-officer-dave-keenan-retires-john-jordan-angela-santone/827685/", date: "2026-08-12" },
    { id: "ft-insights-2026", title: "Regions Bank Launches Personalized Insights for Mobile Banking Customers", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607070900BIZWIRE_USPRX____20260707_BW935076-1", date: "2026-07-07" },
    { id: "ft-dash-2026", title: "Regions Bank + Dash Solutions Collaborate on New Treasury Management Solution to Modernize Client Payment Operations", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202604230900BIZWIRE_USPRX____20260423_BW750515-1", date: "2026-04-23" },
    { id: "reuters-usaa-2025", title: "USAA sues Regions Bank over mobile banking patents", publisher: "Reuters", url: "https://www.reuters.com/legal/litigation/usaa-sues-regions-bank-over-mobile-banking-patents-2025-01-28/", date: "2025-01-28" },
    { id: "reuters-settle-2026", title: "Regions Bank settles USAA lawsuit over mobile-banking patents", publisher: "Reuters", url: "https://www.reuters.com/legal/transactional/regions-bank-settles-usaa-lawsuit-over-mobile-banking-patents-2026-02-03/", date: "2026-02-03" },
    { id: "regions-deepfake-2026", title: "The new face of fraud", publisher: "Regions Bank", url: "https://regions.com/insights/wealth/article/deepfake-scams", date: "2026-02-19" }
  ],
  lastUpdated: "2026-09-10"
};
