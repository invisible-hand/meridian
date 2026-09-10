import type { Bank } from "@/lib/banks";

export const TD_BANK_US: Bank = {
  slug: "td-bank-us",
  name: "TD Bank (U.S.)",
  shortName: "TD",
  ticker: "TD",
  hq: "Cherry Hill, NJ (TD Bank Group: Toronto)",
  fedRank: 13,
  leadBank: "TD Bank, N.A. (TD Group US Holdings)",
  assetsUsdMillions: 345611,
  charter: "National bank (OCC)",
  posture: "An in-house lab (Layer 6), a proprietary foundation model, and a dollar target for AI value — under a US asset cap that makes efficiency the growth plan.",
  platform: {
    name: "Layer 6 and TD AI Prism",
    detail: "Layer 6, the AI research centre TD acquired in 2018, builds the group's models in-house: TD AI Prism, a predictive foundation model launched in June 2025 after three years of R&D; generative knowledge-management assistants for branches, wealth and TD Securities; and the bank's first agentic model, for real-estate secured lending, in May 2026. Chief AI scientist Maksims Volkovs' 130-plus team has overseen nearly 100 use cases and filed more than 150 patents.",
    sources: ["td-prism-2025", "td-agentic-resl-2026", "td-big-awards-2026", "ab-volkovs-2026"]
  },
  answerFirst:
    "TD's AI strategy is set at group level in Toronto and executed on both sides of the border: a 'pragmatic buy, build and blend' approach in which Layer 6, the bank's own AI lab, builds where TD has a data advantage — the TD AI Prism foundation model, generative assistants for branch, wealth and markets staff, and its first agentic model, which cuts hours from mortgage pre-adjudication — and buys where speed matters. The program has a dollar target: C$200 million of AI value in fiscal 2026 on the way to C$1 billion a year, and the bank said in August 2026 it had essentially hit the year's target three quarters in. For the US bank, operating under the asset cap imposed after the 2024 anti-money-laundering settlement, AI is the growth lever that does not need a bigger balance sheet, and the AML rebuild is where much of it is aimed.",
  keyPoints: [
    "Layer 6, acquired in 2018, is the in-house AI R&D centre; a New York office opened in 2025 to support US demand; chief AI scientist Maksims Volkovs has overseen nearly 100 use cases and 150-plus patents.",
    "TD AI Prism (June 2025): a predictive foundation model built in-house over three years to anticipate customer needs; an American Banker Innovation of the Year 2026 honoree.",
    "Generative knowledge-management assistants: TD Securities (July 2025, pilot), TD Wealth (October 2025), branches (national expansion, Q1 fiscal 2026), TD Insurance (May 2026).",
    "May 2026: first agentic AI model, generating application summary memos for real-estate secured lending underwriters in minutes; American Banker reports 15 hours shaved off mortgage decisions.",
    "Value target: C$200 million of AI value in fiscal 2026, essentially met by the third quarter; C$1 billion a year of enterprise value from AI set out at the September 2025 investor day; $150 million of insurance claims cost reduction targeted.",
    "Governance: enterprise Responsible AI Principles (July 2026) with seven commitments, an AI Risk Management framework and a Trustworthy AI team; a June 2026 Reuters report on workforce-monitoring software in financial-crimes teams shows the friction."
  ],
  leadership: [
    { name: "Maksims Volkovs", role: "SVP and Chief AI Scientist, Layer 6", sources: ["ab-volkovs-2026", "td-big-awards-2026"], linkedin: "https://www.linkedin.com/in/maksimsvolkovs/" },
    { name: "Ted Paris", role: "SVP, Head of Analytics, Intelligence and AI, TD Bank U.S.", sources: ["bankingdive-paris-agents-2026", "bankingdive-paris-trust-2025"], linkedin: "https://www.linkedin.com/in/tedtparis/" },
    { name: "Raymond Chun", role: "Group President and CEO, TD Bank Group", sources: ["pymnts-value-2026", "reuters-layoffs-2025"], linkedin: "https://www.linkedin.com/in/raymondchuntd/" },
    { name: "Leo Salom", role: "President and CEO, TD Bank (U.S.)", sources: ["td-layer6-ny-2025"], linkedin: "https://www.linkedin.com/in/leosalomjr/" }
  ],
  timeline: [
    { date: "2018-01-01", title: "TD acquires Layer 6", detail: "The Toronto AI research firm becomes the group's AI R&D centre.", sources: ["td-layer6-ny-2025"] },
    { date: "2025-04-22", title: "Layer 6 opens a New York office", detail: "To bring gen-AI expertise and delivery in-house for the US bank, per Leo Salom.", sources: ["td-layer6-ny-2025"] },
    { date: "2025-05-22", title: "2% of workforce cut to fund digital and AI", detail: "About 2,000 roles in a restructuring after the US AML settlement, under new CEO Ray Chun.", sources: ["reuters-layoffs-2025"] },
    { date: "2025-06-11", title: "TD AI Prism launched", detail: "A predictive foundation model to anticipate customer needs, built entirely in-house.", sources: ["td-prism-2025"] },
    { date: "2025-07-08", title: "TD Securities AI Virtual Assistant pilot", detail: "A proprietary generative chatbot for front-office sales, trading and research.", sources: ["td-tds-assistant-2025"] },
    { date: "2025-09-29", title: "Investor day: C$1 billion a year of AI value targeted", detail: "Alongside C$2–2.5 billion of annualised savings and reinstated financial targets.", sources: ["bankingdive-investor-day-2025", "wsj-targets-2025"] },
    { date: "2025-10-20", title: "TD Wealth Virtual Assistant", detail: "A generative knowledge-management system built by Layer 6 for wealth colleagues.", sources: ["td-wealth-assistant-2025"] },
    { date: "2026-02-18", title: "US head of AI on agents and failure rates", detail: "Ted Paris: agents can 'truly transform operations' but must be fitted to the bank's environment.", sources: ["bankingdive-paris-agents-2026"] },
    { date: "2026-02-25", title: "Branch Virtual Assistant expands nationally; agentic lending capability scales", detail: "Q1 fiscal 2026 report; CFO targets $150 million of claims-cost cuts with AI.", sources: ["td-q1-2026", "bankingdive-claims-2026", "ciodive-claims-2026"] },
    { date: "2026-03-31", title: "Consumer survey: 55% use AI for money decisions, up from 10%", detail: "TD's second AI Insights survey of 2,500 US consumers.", sources: ["ab-survey-2026"] },
    { date: "2026-05-21", title: "First agentic AI model, in real-estate secured lending", detail: "Generates application summary memos for underwriters in minutes; human in the loop.", sources: ["td-agentic-resl-2026", "ab-mortgage-agent-2026"] },
    { date: "2026-06-19", title: "Work-monitoring software in financial-crimes teams", detail: "Reuters: tracking time in browsers and chat apps prompts consent and privacy questions.", sources: ["reuters-monitoring-2026"] },
    { date: "2026-07-30", title: "Responsible AI Principles published", detail: "Seven commitments embedded in the AI Risk framework, overseen by AI Risk Management and a Trustworthy AI team.", sources: ["td-responsible-ai-2026"] },
    { date: "2026-08-27", title: "Fiscal 2026 AI value target essentially hit", detail: "About C$141 million against a C$200 million target three quarters in, per the CEO.", sources: ["pymnts-value-2026", "td-q3-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "Agentic lending pre-adjudication", detail: "Application summary memos for real-estate secured lending underwriters.", status: "Rolling out", sources: ["td-agentic-resl-2026", "ab-mortgage-agent-2026"] },
    { useCase: "customer-chatbots", name: "TD AI Prism personalisation", detail: "Predictive foundation model for customer needs and marketing.", status: "In production", sources: ["td-prism-2025", "ab-prism-2026"] },
    { useCase: "generative-agentic-ai", name: "Knowledge-management assistants", detail: "Branch, wealth, securities and insurance virtual assistants built by Layer 6.", status: "In production", sources: ["td-wealth-assistant-2025", "td-tds-assistant-2025", "td-q1-2026"] },
    { useCase: "fraud", name: "Fraud defence and claims", detail: "AI in fraud defence and insurance-claims fraud detection; $150 million claims-cost target.", status: "In production", sources: ["bankingdive-paris-trust-2025", "bankingdive-claims-2026"] },
    { useCase: "aml-kyc", name: "AML rebuild", detail: "The US AML program rebuild after the 2024 settlement, with technology and monitoring investment.", status: "Rolling out", sources: ["wsj-dividend-2025", "reuters-monitoring-2026"] },
    { useCase: "trading-markets", name: "Automated bond trading", detail: "A computer-driven trading team wins more US investment-grade business with fewer people.", status: "In production", sources: ["bloomberg-bonds-2025"] }
  ],
  numbers: [
    { label: "AI value target", value: "C$200 million (FY2026), C$1 billion a year medium term", asOf: "2026-08-27", sources: ["pymnts-value-2026", "bankingdive-investor-day-2025"] },
    { label: "AI value delivered", value: "≈ C$141 million by Q3 FY2026", asOf: "2026-08-27", sources: ["pymnts-value-2026"] },
    { label: "Layer 6 use cases / patents", value: "≈ 100 / 150+", asOf: "2026-01-16", sources: ["td-big-awards-2026"] },
    { label: "Layer 6 team", value: "130+", asOf: "2026-06-01", sources: ["ab-volkovs-2026"] },
    { label: "Claims-cost reduction targeted", value: "$150 million (medium term)", asOf: "2026-02-26", sources: ["bankingdive-claims-2026"] },
    { label: "Workforce cut to fund AI/digital", value: "≈ 2% (≈ 2,000 roles)", asOf: "2025-05-22", sources: ["reuters-layoffs-2025"] }
  ],
  quotes: [
    { who: "Raymond Chun", role: "Group President and CEO", date: "2026-08-27", quote: "Three-quarters into the year, we have essentially hit our fiscal 2026 target of 200 million [Canadian dollars] in value from AI.", sources: ["pymnts-value-2026"] },
    { who: "Ted Paris", role: "Head of Analytics, Intelligence and AI, TD Bank U.S.", date: "2026-02-18", quote: "AI agents can truly transform operations.", sources: ["bankingdive-paris-agents-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "TD Bank N.A. is a national bank operating under the asset cap and AML consent order that followed the 2024 settlement; AI in monitoring is examined against that order.", docSlugs: ["occ-bulletin-2026-13", "occ-bulletin-2023-17"] },
    { authority: "fincen", why: "The $3 billion-plus AML penalty makes FinCEN's program rule and its 'effective use of AI' language directly relevant.", docSlugs: ["fincen-aml-cft-program-nprm-2026", "fincen-bsa-aml-model-risk-statement-2021"] },
    { authority: "cfpb", why: "Agentic lending memos feed credit decisions on natural persons; adverse-action duties apply.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "The US holding company is Fed-supervised; SR 26-2 governs Prism-style models.", docSlugs: ["fed-sr-26-2"] },
    { authority: "fsb", why: "Group-level Responsible AI Principles map to the FSB's governance practices.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "AI is the growth plan a capped bank can execute", detail: "With US retail assets capped, TD's value has to come from efficiency and fee businesses. A dollar-denominated AI target reported quarterly is how it shows that to investors — few peers publish one." },
    { title: "The AML rebuild is the use case that matters most to the regulator", detail: "TD's most consequential AI deployment is not customer-facing; it is in transaction monitoring and investigations under a consent order. The monitoring-software episode shows how closely that workforce is being managed." },
    { title: "Build where the data advantage is", detail: "Prism and the lending agent are trained on TD's own data; the branch and wealth assistants are knowledge tools. The 'buy, build and blend' rule is a template for banks with an in-house lab." },
    { title: "Published principles arrive after the agents, not before", detail: "Responsible AI Principles in July 2026 follow the first agentic model in May 2026. Expect supervisors to ask which principles were applied to that model at launch." }
  ],
  faq: [
    { q: "What is Layer 6 at TD?", a: "Layer 6 is TD Bank Group's AI research and development centre, acquired in 2018 and based in Toronto's MaRS district with a New York office opened in 2025. Led by chief AI scientist Maksims Volkovs, its 130-plus team built the TD AI Prism foundation model, the bank's generative knowledge-management assistants and its first agentic AI model, and has filed more than 150 patents." },
    { q: "How much value does TD say it gets from AI?", a: "TD set a target of C$200 million of value from AI in fiscal 2026, on the way to C$1 billion a year set out at its September 2025 investor day. On the August 27, 2026 earnings call CEO Raymond Chun said the bank had essentially hit the fiscal-year target three quarters in, across predictive, generative and agentic use cases." }
  ],
  sources: [
    { id: "td-prism-2025", title: "TD Announces Launch of Groundbreaking Predictive Foundation Model", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2025-06-11-td-announces-launch-of-groundbreaking-predictive-foundation", date: "2025-06-11" },
    { id: "td-agentic-resl-2026", title: "TD Launches Agentic AI to Transform Real Estate Secured Lending from End to End", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2026-05-21-td-launches-agentic-ai-to-transform-real-estate-secured-lend", date: "2026-05-21" },
    { id: "td-responsible-ai-2026", title: "TD strengthens Its Responsible AI Principles to support trust in AI innovation", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2026-07-30-td-strengthens-its-responsible-ai-principles-to-support-trus", date: "2026-07-30" },
    { id: "td-wealth-assistant-2025", title: "New TD Wealth Virtual Assistant Set to Enhance the Colleague and Client Experience", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2025-10-20-new-td-wealth-virtual-assistant-set-to-enhance-the-colleague", date: "2025-10-20" },
    { id: "td-tds-assistant-2025", title: "Virtual AI Assistant To Help Power TD Securities", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2025-07-08-virtual-ai-assistant-to-help-power-td-securities", date: "2025-07-08" },
    { id: "td-layer6-ny-2025", title: "TD Announces Opening of New Layer 6 Office in New York City", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2025-04-22-td-announces-opening-of-new-layer-6-office-in-new-york-city", date: "2025-04-22" },
    { id: "td-big-awards-2026", title: "TD wins BIG Innovation Awards for fifth consecutive year", publisher: "TD Bank Group", url: "https://stories.td.com/ca/en/news/2026-01-16-td-wins-big-innovation-awards-for-fifth-consecutive-year-e2-80-af", date: "2026-01-16" },
    { id: "td-q1-2026", title: "TD Bank Group Reports First Quarter 2026 Results (report to shareholders)", publisher: "TD Bank Group", url: "https://www.td.com/content/dam/tdcom/canada/about-td/pdf/quarterly-results/2026/q1/2026-q1-report-shareholders-en.pdf", date: "2026-02-25" },
    { id: "td-q3-2026", title: "TD Bank Group Reports Third Quarter 2026 Results", publisher: "TD Bank Group via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608270630CANADANWCANADAPR_C9991-1", date: "2026-08-27" },
    { id: "ab-volkovs-2026", title: "Maksims Volkovs drives TD Bank's AI transformation", publisher: "American Banker", url: "https://www.americanbanker.com/news/td-banks-maksims-volkovs-is-4-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-prism-2026", title: "TD Bank Builds AI Model to Predict What Customers Need and Not What They Don't Want", publisher: "American Banker", url: "https://www.americanbanker.com/news/td-banks-ai-prism-is-one-of-the-innovation-of-the-year-honorees", date: "2026-06-01" },
    { id: "ab-mortgage-agent-2026", title: "TD's new AI agent shaves 15 hours off mortgage decisions", publisher: "American Banker", url: "https://www.americanbanker.com/news/tds-new-ai-agent-shaves-15-hours-off-mortgage-decisions", date: "2026-05-28" },
    { id: "ab-survey-2026", title: "More Americans asking AI for financial advice: TD survey", publisher: "American Banker", url: "https://www.americanbanker.com/news/more-americans-asking-ai-for-financial-advice-td-survey", date: "2026-03-31" },
    { id: "bankingdive-paris-agents-2026", title: "TD's US head of AI weighs in on agents", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/td-bank-ai-head-ted-paris-agents/812415/", date: "2026-02-18" },
    { id: "bankingdive-paris-trust-2025", title: "TD exec keeps sight of customer trust amid AI rush", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/td-ai-banking-customer-trust-jobs-virtual-assistant/756261/", date: "2025-07-30" },
    { id: "bankingdive-claims-2026", title: "TD eyes $150M in cost reductions – with help from AI", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/td-bank-150m-insurance-cost-reductions-ai-chun-salom/813637/", date: "2026-03-03" },
    { id: "bankingdive-investor-day-2025", title: "TD wants to get 'back to winning'", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/td-investor-day-ceo-chun-salom-cost-cuts-branches/761458/", date: "2025-09-30" },
    { id: "reuters-layoffs-2025", title: "Canada's TD Bank to lay off 2% of workforce in restructuring", publisher: "Reuters", url: "https://www.reuters.com/business/finance/canadas-td-bank-profit-falls-hit-higher-bad-loan-provisions-2025-05-22/", date: "2025-05-22" },
    { id: "reuters-monitoring-2026", title: "Canadian lender TD tells some employees it will use software to monitor their work", publisher: "Reuters", url: "https://www.reuters.com/world/canadian-lender-td-tells-some-employees-it-will-use-software-monitor-their-work-2026-06-19/", date: "2026-06-19" },
    { id: "bloomberg-bonds-2025", title: "TD Bank Uses Automation to Trade More Bonds With Fewer People", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2025-06-16/td-bank-uses-automation-to-trade-more-bonds-with-fewer-people", date: "2025-06-16" },
    { id: "wsj-targets-2025", title: "TD Bank Brings Back Financial Targets, Looks to Return Billions to Shareholders", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/td-bank-brings-back-financial-targets-looks-to-return-billions-to-shareholders-2edad3ff", date: "2025-09-29" },
    { id: "wsj-dividend-2025", title: "TD Bank Pushes Up Dividend After Underlying Earnings, Revenue Beat Expectations", publisher: "The Wall Street Journal", url: "https://www.wsj.com/business/earnings/td-bank-pushes-up-dividend-after-underlying-earnings-revenue-beat-expectations-5bceb2c7", date: "2025-12-04" },
    { id: "pymnts-value-2026", title: "TD Bank Unlocks $141 Million in AI Value Months Ahead of Schedule", publisher: "PYMNTS", url: "https://www.pymnts.com/earnings/2026/td-bank-unlocks-141-million-dollars-ai-value-months-ahead-schedule/", date: "2026-08-27" },
    { id: "ciodive-claims-2026", title: "TD Bank eyes $150M in claims cost reductions — with help from AI", publisher: "CIO Dive", url: "https://www.ciodive.com/news/td-bank-eyes-150m-claims-cost-reductions-ai/813554/", date: "2026-03-02" }
  ],
  lastUpdated: "2026-09-09"
};
