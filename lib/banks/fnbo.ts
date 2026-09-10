import type { Bank } from "@/lib/banks";

export const FNBO: Bank = {
  slug: "fnbo",
  name: "First National Bank of Omaha (FNBO)",
  shortName: "FNBO",
  ticker: "private (Lauritzen Corp.)",
  hq: "Omaha, NE",
  fedRank: 58,
  leadBank: "First National Bank of Omaha",
  assetsUsdMillions: 34725,
  charter: "National bank (OCC); privately held by the Lauritzen family through First National of Nebraska",
  posture: "A 168-year-old family-owned bank that put AI agents into financial-crime investigations before most public banks its size, cutting time per case in half, while buying three banks in sixteen months.",
  platform: {
    name: "Nasdaq Verafin AI agents for financial-crime investigation",
    detail: "FNBO was already running Nasdaq Verafin's anti-money-laundering and fraud analytics when the vendor introduced two AI agents built on AWS Bedrock: an enhanced-due-diligence agent that does the level-one triage on AML, fraud and sanctions alerts to decide whether a suspicious activity report is warranted or the alert is a false positive, and a sanctions-screening agent that pulls a customer's transaction history and context when a name matches the OFAC list. Bank executives told American Banker in June 2026 that the agents had cut the time investigators spend per case by 50% and were helping them respond consistently to fraud, money-laundering and sanctions alerts, with the final judgment left to human investigators. Chief risk officer Nick Baxter framed it as the search for 'a better way' against constant financial-crime pressure. Jeff Weeks, senior vice-president and chief information security officer for 26 years, writes the bank's guidance on AI-powered scams and deepfakes, and commercial payments head Tammy Trilli has said FNBO avoids 'innovations solely for their novelty' in favour of partnerships that solve customer problems.",
    sources: ["ab-agentic-2026", "fnbo-scams-2025", "fnbo-partnerships-2025"]
  },
  answerFirst:
    "First National Bank of Omaha, the $35 billion national bank owned by the Lauritzen family and one of the largest privately held banks in the US, is an early adopter of agentic AI in the part of banking where the workload is most repetitive: financial-crime investigation. In June 2026 its executives told American Banker that AI agents from its existing vendor, Nasdaq Verafin, had taken on parts of the work of human investigators, reducing the time spent per case by 50% and making responses to fraud, anti-money-laundering and sanctions alerts more consistent. The agents, built on AWS Bedrock, handle level-one alert triage: an enhanced-due-diligence agent gathers transaction history, entity data and context to judge whether an alert merits a suspicious activity report, and a sanctions agent assembles the evidence around OFAC name matches, while investigators keep the final decision. Chief risk officer Nick Baxter described it as the answer to 'consistent challenges' that keep the bank 'looking for a better way'. Around that deployment FNBO's public AI voice is defensive and grounded: CISO Jeff Weeks writes on AI-powered scams, deepfakes and the psychology of social engineering; the bank's 2025 financial-wellbeing study found 46% of Americans had used AI such as ChatGPT for personal finances and 50% would trust AI for financial advice; a mortgage piece warns homebuyers not to rely on AI alone; and its commercial-payments leader says the bank partners for outcomes rather than chasing 'the allure of emerging technologies like APIs and AI'. The bank is also consolidating: it bought Country Club Bank in Kansas City ($2.2 billion of assets, announced May 2025), agreed in June 2026 to buy Blue Ridge Bancshares in Independence, Missouri, and in September 2026 agreed to pay about $200 million in cash for Denver-based InBankshares, which chairman and president Clark Lauritzen expects to close in the second half of 2027. As a national bank FNBO answers to the OCC for the model-risk and third-party controls around vendor AI agents.",
  keyPoints: [
    "AI agents in production for financial crime: Nasdaq Verafin's enhanced-due-diligence and sanctions-screening agents cut investigator time per case by 50% (June 2026).",
    "Humans keep the decision: agents do level-one triage and evidence gathering; investigators decide whether to file a suspicious activity report.",
    "Vendor-led adoption on AWS Bedrock, extending a system the bank already used, rather than an in-house build.",
    "Security voice: CISO Jeff Weeks publishes guidance on AI scams, deepfakes and social engineering; the bank's survey found 46% of Americans use AI for personal finance.",
    "Partnership philosophy: commercial payments head Tammy Trilli warns against innovation 'solely for novelty' and stresses shared KPIs with partners.",
    "Three deals in 16 months: Country Club Bank (Kansas City), Blue Ridge Bancshares (Independence, MO) and InBankshares (Denver, about $200 million cash)."
  ],
  leadership: [
    { name: "Clark Lauritzen", role: "Chairman and President", sources: ["ab-inbank-2026", "ab-countryclub-2025"] },
    { name: "Nick Baxter", role: "Chief Risk Officer", linkedin: "https://www.linkedin.com/in/nick-baxter-b29a744", sources: ["ab-agentic-2026"] },
    { name: "Jeff Weeks", role: "SVP and Chief Information Security Officer", linkedin: "https://www.linkedin.com/in/jeff-weeks-82ab4312", sources: ["fnbo-scams-2025", "fnbo-deepfakes-2026"] },
    { name: "Tammy Trilli", role: "SVP, Commercial Payments Organization", sources: ["fnbo-partnerships-2025"] }
  ],
  timeline: [
    { date: "2025-04-03", title: "Commercial payments head on partnerships over novelty", detail: "Trilli on AI, APIs and shared KPIs with partners.", sources: ["fnbo-partnerships-2025"] },
    { date: "2025-05-02", title: "Country Club Bank acquisition announced", detail: "$2.2 billion-asset Kansas City bank; two family-owned banks combine.", sources: ["ab-countryclub-2025"] },
    { date: "2025-09-15", title: "Survey: 46% of Americans use AI for personal finances", detail: "50% would trust AI for financial advice; 60% confident in their long-term plan.", sources: ["fnbo-survey-2025"] },
    { date: "2025-11-01", title: "CISO guidance on AI-powered scams", detail: "AI makes cybercriminals' lives easier too; verification habits recommended.", sources: ["fnbo-scams-2025"] },
    { date: "2026-03-01", title: "Guide to AI scams and deepfakes", detail: "Weeks on protecting individuals and businesses from synthetic media.", sources: ["fnbo-deepfakes-2026"] },
    { date: "2026-06-02", title: "Blue Ridge Bancshares deal adds to Kansas City build-out", detail: "$882 million-asset bank in Independence, Missouri.", sources: ["ab-blueridge-2026"] },
    { date: "2026-06-24", title: "AI agents cut financial-crime investigation time by 50%", detail: "Nasdaq Verafin agents for EDD and sanctions triage, on AWS Bedrock.", sources: ["ab-agentic-2026"] },
    { date: "2026-09-02", title: "InBankshares acquisition for about $200 million", detail: "Denver, Colorado Springs and Pueblo; closing expected in second half of 2027.", sources: ["ab-inbank-2026"] }
  ],
  useCases: [
    { useCase: "aml-kyc", name: "Agentic alert triage and enhanced due diligence", detail: "AI agents gather evidence on AML, fraud and sanctions alerts; investigators decide on SARs.", status: "In production", sources: ["ab-agentic-2026"] },
    { useCase: "aml-kyc", name: "Sanctions-screening agent", detail: "Context and transaction history assembled for OFAC list matches.", status: "In production", sources: ["ab-agentic-2026"] },
    { useCase: "fraud", name: "AI-scam and deepfake awareness", detail: "CISO-authored guidance for consumers and businesses.", status: "In production", sources: ["fnbo-scams-2025", "fnbo-deepfakes-2026"] },
    { useCase: "third-party-vendors", name: "Partnership-led innovation in commercial payments", detail: "Third-party solutions selected against customer needs and shared KPIs.", status: "In production", sources: ["fnbo-partnerships-2025"] }
  ],
  numbers: [
    { label: "Investigator time per financial-crime case", value: "−50% with AI agents", asOf: "2026-06-24", sources: ["ab-agentic-2026"] },
    { label: "Americans who have used AI for personal finances", value: "46% (50% would trust AI advice)", asOf: "2025-09-15", sources: ["fnbo-survey-2025"] },
    { label: "InBankshares acquisition", value: "≈ $200 million cash", asOf: "2026-09-02", sources: ["ab-inbank-2026"] },
    { label: "Country Club Bank assets", value: "$2.2 billion", asOf: "2025-05-02", sources: ["ab-countryclub-2025"] },
    { label: "Blue Ridge Bancshares assets", value: "$882 million", asOf: "2026-06-02", sources: ["ab-blueridge-2026"] }
  ],
  quotes: [
    { who: "Nick Baxter", role: "Chief Risk Officer", date: "2026-06-24", quote: "The consistent challenges of financial crimes means you're always looking for a better way to solve the problems.", sources: ["ab-agentic-2026"] },
    { who: "Clark Lauritzen", role: "Chairman and President", date: "2026-09-02", quote: "From the very start, it was clear we shared a cultural alignment and a meeting of the minds about what is good banking.", sources: ["ab-inbank-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "FNBO is a national bank; vendor AI agents in AML and sanctions triage fall under OCC model-risk and third-party expectations and its gen-AI risk perspective.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "fincen", why: "Agent-assisted SAR decisions and sanctions screening sit inside BSA/AML obligations and FinCEN's AML innovation guidance.", docSlugs: ["fincen-joint-statement-innovation-2018"] },
    { authority: "federal-reserve", why: "Holding-company oversight of third-party model risk for the Nasdaq Verafin agents.", docSlugs: ["fed-sr-23-4", "fed-sr-11-7"] },
    { authority: "cfpb", why: "Consumer card and deposit products bring UDAAP duties to any AI in servicing or fraud decisions.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Vendor agents are the fastest route for a bank this size", detail: "Adopting agents inside an existing AML platform avoided a build and a new vendor review; the trade is dependence on the vendor's model choices, which AWS Bedrock's model-agnostic design partly mitigates." },
    { title: "Fifty percent is a headcount question examiners will ask", detail: "The bank frames the gain as consistency and capacity; documenting that SAR quality held or improved is what turns a time saving into a defensible control." },
    { title: "Three integrations will test the AML stack", detail: "Country Club, Blue Ridge and InBankshares each bring alert volumes and data onto Verafin; the agents' value rises with volume, but so does the model-risk exposure." },
    { title: "The security voice is a differentiator for a private bank", detail: "A CISO writing plainly about AI scams gives customers a reason to trust the bank's own AI, which most private banks never discuss." }
  ],
  faq: [
    { q: "How does FNBO use AI?", a: "FNBO uses AI agents from Nasdaq Verafin, built on AWS Bedrock, to do the first-level work on anti-money-laundering, fraud and sanctions alerts: gathering transaction history and context so investigators can decide whether to file a suspicious activity report. Executives said in June 2026 the agents cut investigator time per case by 50% while humans keep the final judgment." },
    { q: "Who owns First National Bank of Omaha?", a: "FNBO is privately held through First National of Nebraska and the Lauritzen family; Clark Lauritzen is chairman and president. It is a national bank supervised by the OCC and one of the largest privately owned banks in the United States." }
  ],
  sources: [
    { id: "ab-agentic-2026", title: "How FNBO uses agentic AI to investigate financial crime", publisher: "American Banker", url: "https://americanbanker.com/news/how-fnbo-uses-agentic-ai-to-investigate-financial-crime", date: "2026-06-24" },
    { id: "ab-countryclub-2025", title: "Deal would give Nebraska's FNBO a leg up in Kansas City", publisher: "American Banker", url: "https://www.americanbanker.com/news/deal-would-give-nebraskas-fnbo-a-leg-up-in-kansas-city", date: "2025-05-02" },
    { id: "ab-blueridge-2026", title: "FNBO's latest deal adds to its Kansas City buildout", publisher: "American Banker", url: "https://americanbanker.com/news/fnbos-latest-deal-adds-to-its-kansas-city-buildout", date: "2026-06-02" },
    { id: "ab-inbank-2026", title: "No pause button: Omaha bank inks second M&A deal since June", publisher: "American Banker", url: "https://americanbanker.com/news/no-pause-button-omaha-bank-inks-second-m-a-deal-since-june", date: "2026-09-02" },
    { id: "fnbo-partnerships-2025", title: "How FNBO Is Driving Innovation Through Strategic Partnerships", publisher: "FNBO", url: "https://www.fnbo.com/insights/commercial-business/2025/how-fnbo-is-driving-innovation-through-strategic-partnerships", date: "2025-04-03" },
    { id: "fnbo-survey-2025", title: "Nearly Half of Americans Are Using AI To Help With Their Finances (2025 Financial Wellbeing Study)", publisher: "FNBO", url: "https://www.fnbo.com/insights/newsroom/2025/fnbo-releases-2025-financial-wellbeing-study", date: "2025-09-15" },
    { id: "fnbo-scams-2025", title: "AI-Powered Scams Target Consumers", publisher: "FNBO", url: "https://www.fnbo.com/insights/fraud-and-security-tips/2025/ai-powered-scams-target-consumers", date: "2025-11-01" },
    { id: "fnbo-deepfakes-2026", title: "How to Protect Yourself and Your Business from AI Scams and Deepfakes", publisher: "FNBO", url: "https://www.fnbo.com/insights/fraud-and-security-tips/2026/how-to-protect-against-ai-scams-and-deepfakes", date: "2026-03-01" }
  ],
  lastUpdated: "2026-09-10"
};
