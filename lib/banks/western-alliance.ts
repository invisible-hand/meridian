import type { Bank } from "@/lib/banks";

export const WESTERN_ALLIANCE: Bank = {
  slug: "western-alliance",
  name: "Western Alliance Bancorporation",
  shortName: "Western Alliance",
  ticker: "WAL",
  hq: "Phoenix, AZ",
  fedRank: 31,
  leadBank: "Western Alliance Bank",
  assetsUsdMillions: 98766,
  charter: "Arizona state member bank (Federal Reserve)",
  posture: "A specialised commercial bank whose most concrete AI is defensive: machine-learning fraud screening that blocked 723 million bogus class-action claims in 2024 — while it builds a 24/7 on-chain settlement network and hires 'AI Forward' engineers.",
  platform: {
    name: "Triangle of Fraud Protection and the AI Forward Engineer team",
    detail: "Western Alliance's clearest AI deployment sits in Digital Disbursements, its class-action settlement-payments subsidiary. Its Triangle of Fraud Protection combines real-time payment screening, AI-driven fraud scoring and settlement-administrator collaboration, and with partners identified and prevented more than 723 million fraudulent claims in 2024; American Banker named it an Innovation of the Year in 2025. The executive who built it, Carl Eberling, described feeding structured log data into models including LLMs so analysts can query for indicators of compromise, with models trained on obfuscated production data and new indicators run through risk, compliance and legal review. Enterprise-wide, the bank is recruiting 'AI Forward' and AI business engineers to build proofs of concept on Microsoft Copilot Studio and Azure, and in 2026 launched WA VenueX, a 24/7 dollar-settlement network for institutional digital-asset clients.",
    sources: ["ab-fraud-2025", "wal-disbursements-2025", "ab-ioty-2025", "ft-venuex-2026"]
  },
  answerFirst:
    "Western Alliance is a $99 billion national commercial bank built from specialised businesses (technology and innovation banking through Bridge Bank, mortgage warehouse, settlement services, HOA banking) and its public AI record follows that shape: specific, operational and mostly about fraud and payments. The standout is Digital Disbursements, its class-action payments unit, whose Triangle of Fraud Protection uses real-time screening and AI-driven fraud scoring; with ClaimScore and settlement administrators it identified and prevented more than 723 million fraudulent claims in 2024 and won an American Banker Innovation of the Year award in 2025. Carl Eberling, who joined as CIO in 2021 and now runs that division, has described a four-year programme of machine-learning log monitoring across core systems, call centres, web and mobile, with LLMs used to query structured logs for indicators of compromise, obfuscated production data for training, and every new indicator routed through risk, compliance and legal review. Beyond fraud, the bank is hiring AI business engineers to build proofs of concept on Copilot Studio and Azure, treats AI as a lending theme (its innovation-banking arm calls AI the 'backbone' of the venture landscape and characterises its SaaS exposure as software where AI is 'additive, not disruptive'), and in July 2026 formally launched WA VenueX, a 24/7 US-dollar instant-settlement network that had already processed billions in stablecoin minting, redemption and rebalancing, with custody and tokenisation to follow. The year also brought a fight with Jefferies over a $126 million First Brands-linked trade-finance loan, a March 2025 data breach through a third-party file-transfer vendor affecting 22,000 customers, a Fiserv agent-bank partnership for Clover merchant services, and the unification of six brands under one name. No enterprise AI budget, use-case count or headcount effect has been disclosed.",
  keyPoints: [
    "Fraud is the flagship: Triangle of Fraud Protection (real-time screening, AI fraud scoring, administrator collaboration) blocked 723 million-plus fraudulent class-action claims in 2024; Innovation of the Year 2025.",
    "How it works: ML log monitoring since about 2021, LLM queries over structured logs for indicators of compromise, obfuscated production data for training, new indicators through risk, compliance and legal review (Carl Eberling, June 2025).",
    "Enterprise AI is being staffed, not yet disclosed: 'AI Forward Engineer' and 'AI Business Engineer' roles building proofs of concept on Copilot Studio, M365 Copilot and Azure.",
    "AI as a credit theme: innovation banking (Bridge Bank) covers enterprise software and AI; the 2026 investor day described SaaS exposure as 'mission-critical software where AI is additive, not disruptive'.",
    "On-chain infrastructure: WA VenueX, a 24/7 dollar settlement network for institutional digital-asset clients, formally launched July 2026 after processing billions in volume; custody and tokenisation in phases.",
    "Risk backdrop: a third-party file-transfer breach (22,000 customers, March 2025), the $126 million LAM/First Brands charge-off and Jefferies lawsuit (March 2026), and a new CFO from JPMorgan (Vishal Idnani, January 2026)."
  ],
  leadership: [
    { name: "Ken Vecchione", role: "President and CEO", sources: ["wal-investorday-2026"] },
    { name: "Dale Gibbons", role: "Vice Chairman and Chief Banking Officer, Deposit Initiatives & Innovation (CFO until January 2026)", sources: ["ft-venuex-2026", "bankingdive-cfo-2025"], linkedin: "https://www.linkedin.com/in/gibbonsdale/" },
    { name: "Carl Eberling", role: "Managing Director, Juris Banking; CIO from May 2021; leads the settlement-services fraud programme", sources: ["ab-eberling-2025", "ab-fraud-2025"] },
    { name: "Vishal Idnani", role: "Chief Financial Officer (from January 2026, ex-JPMorgan)", sources: ["bankingdive-cfo-2025"] }
  ],
  timeline: [
    { date: "2025-03-21", title: "Third-party breach exposes 22,000 customers", detail: "A vulnerability in a vendor's file-transfer software.", sources: ["bankingdive-breach-2025"] },
    { date: "2025-04-04", title: "723 million fraudulent claims prevented in 2024", detail: "Digital Disbursements' real-time screening and verification, with ClaimScore and administrators' anti-fraud tools.", sources: ["wal-disbursements-2025"] },
    { date: "2025-05-06", title: "Innovation of the Year for the Triangle of Fraud Protection", detail: "American Banker honours the settlement-payments fraud stack.", sources: ["ab-ioty-2025", "ab-sponsor-2025"] },
    { date: "2025-06-04", title: "How the bank uses AI against fraud", detail: "Eberling on LLM queries over log data, obfuscated training sets and review of new indicators.", sources: ["ab-fraud-2025"] },
    { date: "2025-07-16", title: "Six brands become one", detail: "All divisions unified under the Western Alliance name by year-end.", sources: ["wal-brand-2025", "bankingdive-brand-2025"] },
    { date: "2025-07-17", title: "JPMorgan veteran named CFO", detail: "Vishal Idnani from 2 January 2026; Dale Gibbons moves to deposits and innovation.", sources: ["bankingdive-cfo-2025"] },
    { date: "2025-10-21", title: "Profit rises as loan-loss fears ease", detail: "Third-quarter results after a regional-bank selloff over credit worries.", sources: ["reuters-q3-2025"] },
    { date: "2026-01-02", title: "AI as the 'backbone' of venture capital", detail: "The innovation-banking head on Bloomberg TV.", sources: ["bloomberg-curley-2026"] },
    { date: "2026-03-06", title: "$126 million LAM loan charged off; Jefferies sued", detail: "A First Brands-linked trade-finance exposure ends in litigation.", sources: ["wal-lam-2026", "bankingdive-jefferies-2026"] },
    { date: "2026-03-17", title: "Fiserv agent-bank partnership", detail: "Clover and business-management technology for the bank's commercial clients.", sources: ["ft-fiserv-2026"] },
    { date: "2026-05-11", title: "Investor day: AI 'additive, not disruptive' to the SaaS book", detail: "Innovation banking covers enterprise software, AI, consumer tech and hardware.", sources: ["wal-investorday-2026"] },
    { date: "2026-07-24", title: "WA VenueX formally launches", detail: "24/7 dollar settlement for digital-asset institutions; billions processed since the initial rollout.", sources: ["ft-venuex-2026"] }
  ],
  useCases: [
    { useCase: "fraud", name: "Triangle of Fraud Protection (Digital Disbursements)", detail: "Real-time screening and AI fraud scoring for class-action settlement payments.", status: "In production", sources: ["ab-sponsor-2025", "wal-disbursements-2025"] },
    { useCase: "cybersecurity", name: "ML log monitoring with LLM querying", detail: "Indicators of compromise across core, call-centre, web and mobile channels.", status: "In production", sources: ["ab-fraud-2025"] },
    { useCase: "trading-markets", name: "WA VenueX on-chain settlement", detail: "Always-on dollar liquidity for stablecoin issuers and digital-asset firms.", status: "In production", sources: ["ft-venuex-2026"] },
    { useCase: "credit-underwriting", name: "AI as an underwriting theme in innovation banking", detail: "Lending to AI and enterprise-software companies with a stated view on AI disruption.", status: "In production", sources: ["wal-investorday-2026", "bloomberg-curley-2026"] }
  ],
  numbers: [
    { label: "Fraudulent class-action claims prevented in 2024", value: "723 million+", asOf: "2025-04-04", sources: ["wal-disbursements-2025"] },
    { label: "Customers affected by the 2025 vendor breach", value: "≈ 22,000", asOf: "2025-03-21", sources: ["bankingdive-breach-2025"] },
    { label: "LAM trade-finance charge-off", value: "$126.4 million", asOf: "2026-03-06", sources: ["wal-lam-2026"] },
    { label: "Total assets", value: "> $90 billion", asOf: "2026-07-24", sources: ["ft-venuex-2026"] }
  ],
  quotes: [
    { who: "Carl Eberling", role: "Managing Director, Juris Banking", date: "2025-06-04", quote: "The most significant impact and 'biggest bang for the buck' comes from reducing the time to shut something down.", sources: ["ab-fraud-2025"] },
    { who: "Dale Gibbons", role: "Vice Chairman and Chief Banking Officer", date: "2026-07-24", quote: "WA VenueX reflects that approach by delivering scalable, compliant financial infrastructure designed for digital asset businesses that operate around the clock.", sources: ["ft-venuex-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Western Alliance Bank is an Arizona state member bank; the file-transfer vendor, Fiserv and ClaimScore are third-party relationships and the 2026 model-risk letter covers fraud models.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "fincen", why: "AI-driven screening of settlement payments and a stablecoin settlement network sit inside BSA/AML program expectations.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "nist", why: "The bank's obfuscated-data training and indicator review map to the AI RMF and its cyber overlays.", docSlugs: ["nist-ai-100-1", "nist-cosais-control-overlays"] },
    { authority: "california", why: "A large California client base and Bridge Bank's Silicon Valley franchise bring the CPPA's automated-decision and cyber rules into scope.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] }
  ],
  suggestions: [
    { title: "A narrow, measurable AI win is worth more than a broad claim", detail: "723 million blocked claims is the most concrete AI outcome any bank of this size has published. Extending the same logging-and-LLM approach across the enterprise is the obvious next step, and the one the new engineering hires point to." },
    { title: "Third-party exposure is the recurring theme", detail: "A vendor breach, a trade-finance counterparty dispute and a Fiserv partnership all turn on third-party risk; AI vendors will be judged under the same interagency guidance." },
    { title: "VenueX puts AI-era infrastructure on a bank balance sheet", detail: "Always-on settlement for stablecoin issuers is where agentic payments will first need bank rails; the bank has built the rails before the agents arrive." },
    { title: "Enterprise AI disclosure lags the fraud story", detail: "Job postings show a Copilot- and Azure-based programme; investors and examiners have only postings to go on until the bank reports what it built." }
  ],
  faq: [
    { q: "How does Western Alliance use AI?", a: "Most visibly in fraud prevention. Its Digital Disbursements unit runs a Triangle of Fraud Protection combining real-time payment screening and AI-driven fraud scoring, which with partners prevented more than 723 million fraudulent class-action claims in 2024 and won an American Banker Innovation of the Year award in 2025. The bank also uses machine learning and LLMs to monitor logs for indicators of compromise, and is hiring engineers to build generative-AI proofs of concept on Microsoft platforms." },
    { q: "What is WA VenueX?", a: "Western Alliance Bank's 24/7 US-dollar instant-settlement network for approved institutional digital-asset businesses, formally launched on 24 July 2026 after processing billions of dollars in stablecoin minting, redemption and liquidity rebalancing since its initial rollout. Custody, financing, tokenisation and programmable services are planned in phases." }
  ],
  sources: [
    { id: "ab-fraud-2025", title: "How Truist and Western Alliance deploy AI to fight fraud", publisher: "American Banker", url: "https://americanbanker.com/news/how-truist-and-western-alliance-deploy-ai-to-fight-fraud", date: "2025-06-04" },
    { id: "ab-ioty-2025", title: "Innovation of the Year 2025: Meet the honorees", publisher: "American Banker", url: "https://americanbanker.com/news/innovation-of-the-year-2025-meet-the-honorees", date: "2025-05-06" },
    { id: "ab-sponsor-2025", title: "Western Alliance: Triangle of Fraud Protection (Digital Banking honoree page)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/sponsor/western-alliance", date: "2025-05-05" },
    { id: "ab-eberling-2025", title: "Carl Eberling, Managing Director, Juris Banking, Western Alliance Bank (speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/speaker/carl-eberling", date: "2025-05-27" },
    { id: "wal-disbursements-2025", title: "2025 Digital Payments in Class Actions and Mass Torts", publisher: "Western Alliance Bank", url: "https://westernalliancebancorporation.com/sites/default/files/2025-04/2025-digital-payments-research-report.pdf", date: "2025-04-04" },
    { id: "wal-investorday-2026", title: "Western Alliance Bancorporation Investor Day 2026 presentation", publisher: "Western Alliance Bancorporation", url: "https://investors.westernalliancebancorporation.com/files/doc_presentations/2026/05/WAL_InvestorDay_2026_Final.pdf", date: "2026-05-11" },
    { id: "wal-brand-2025", title: "Western Alliance Bank to Unify All Divisions Under One Brand", publisher: "Western Alliance Bancorporation", url: "https://investors.westernalliancebancorporation.com/News-and-Presentations/news/news-details/2025/Western-Alliance-Bank-to-Unify-All-Divisions-Under-One-Brand", date: "2025-07-16" },
    { id: "wal-lam-2026", title: "Western Alliance Bancorporation Takes Decisive Action on LAM Trade Finance Loan", publisher: "Western Alliance Bancorporation", url: "https://investors.westernalliancebancorporation.com/News-and-Presentations/news/news-details/2026/Western-Alliance-Bancorporation-Takes-Decisive-Action-on-LAM-Trade-Finance-Loan", date: "2026-03-06" },
    { id: "bankingdive-breach-2025", title: "Western Alliance breach exposes 22K customers' data", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/western-alliance-data-breach-22000-customers-cleo-third-party-software/743215/", date: "2025-03-21" },
    { id: "bankingdive-brand-2025", title: "Western Alliance to bring most divisions under one brand", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/western-alliance-bring-most-divisions-under-one-brand/753348/", date: "2025-07-17" },
    { id: "bankingdive-cfo-2025", title: "Western Alliance names JPMorgan vet its next CFO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/western-alliance-bank-cfo-gibbons-idnani-jpmorgan/753440/", date: "2025-07-18" },
    { id: "bankingdive-jefferies-2026", title: "Western Alliance sues Jefferies over unpaid debt tied to First Brands", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/western-alliance-sues-jefferies-unpaid-debt-first-brands/814064/", date: "2026-03-06" },
    { id: "reuters-q3-2025", title: "Western Alliance profit rises on higher interest income, loan-loss fears eased", publisher: "Reuters", url: "https://www.reuters.com/business/finance/western-alliance-profit-rises-higher-interest-income-loan-loss-fears-eased-2025-10-21/", date: "2025-10-21" },
    { id: "bloomberg-curley-2026", title: "AI is 'Backbone' of Venture Capital Landscape, Says Western Alliance's Bob Curley", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/videos/2026-01-02/ai-backbone-of-venture-capital-landscape-says-curley-video", date: "2026-01-02" },
    { id: "ft-venuex-2026", title: "Western Alliance Bank Launches WA VenueX — Always-On Institutional Liquidity Hub and Financial Platform for the On-Chain Economy", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607240855BIZWIRE_USPRX____20260724_BW077921-1", date: "2026-07-24" },
    { id: "ft-fiserv-2026", title: "Fiserv and Western Alliance Bank Form Strategic Alliance to Power High-Impact Commerce Experiences for Clients", publisher: "GlobeNewswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=1330-9673453en-7TSRL8E25FS3AEPMJLN3CSO4QI", date: "2026-03-17" }
  ],
  lastUpdated: "2026-09-10"
};
