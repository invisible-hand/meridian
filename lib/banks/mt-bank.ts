import type { Bank } from "@/lib/banks";

export const MT_BANK: Bank = {
  slug: "mt-bank",
  name: "M&T Bank",
  shortName: "M&T",
  ticker: "MTB",
  hq: "Buffalo, NY",
  fedRank: 21,
  leadBank: "Manufacturers and Traders Trust Company",
  assetsUsdMillions: 214201,
  charter: "State member bank (Fed)",
  posture: "'Safety first' and data-lineage first: a Buffalo tech hub, Copilot for 16,000 staff, a second-line AI risk function — and a CEO who says the bank will keep humming 'a familiar refrain'.",
  platform: {
    name: "Microsoft Copilot on a data-lineage foundation",
    detail: "M&T chose Microsoft Copilot as its enterprise generative-AI tool after chief data officer Andrew Foster vetted providers for 'a stable, strong partner'; 16,000 of 22,000 employees use it for first drafts and call summaries, which Foster estimates save about six minutes per call. Underneath sits a data-lineage program tracing where information originates and how it moves, an internal repository of authoritative documents called Edison, and a Data Academy that has trained about 2,000 employees.",
    sources: ["ab-data-quality-2025", "fastcompany-wisler-2026"]
  },
  answerFirst:
    "M&T's AI strategy is the product of an eight-year technology transformation run by Michael Wisler, a Capital One veteran who became CIO in 2018, brought technology in-house, and built tech hubs in Buffalo and Wilmington that plan to hire 1,000 technologists within three to five years. The AI layer on top is deliberately careful: Microsoft Copilot for 16,000 of 22,000 employees, chosen for stability, on a data-lineage foundation that chief data officer Andrew Foster describes as 'safety first'; a dedicated second-line AI Risk Oversight function led by the former head of model risk; a head of AI engineering hired from Fannie Mae in August 2026; and agentic AI being examined for cybersecurity and fraud. CEO René Jones's 2026 letter sets the tone — 'while others chase the new siren song, we will continue to steadfastly hum a familiar refrain' — and the bank's award-winning credit-monitoring work with RDC.AI shows where AI is landing first: commercial portfolio insight.",
  keyPoints: [
    "Eight-year transformation under CIO Michael Wisler (from 2018): technology brought in-house, contractor reliance cut, tech hubs at Seneca One and Lafayette Court in Buffalo and in Wilmington, 1,000 technologists to be hired within 3–5 years.",
    "Copilot for 16,000 of 22,000 employees — first drafts of emails and reports, call-centre summaries saving about six minutes per call; staff remain responsible for reviewing and approving outputs.",
    "Data before models: a data-lineage program, the Edison repository of authoritative documents, a Data Academy with about 2,000 graduates; Foster's 'safety first' framing.",
    "Governance built into the second line: Rhea Rajwani, formerly head of model risk management, leads AI Risk Oversight in independent risk management, aligned to regulatory expectations and peer benchmarks.",
    "August 2026: Kalyana Bedhu, from Fannie Mae's AI and machine-learning operations, named head of AI engineering — platforms, architecture and governance for AI across the bank.",
    "Where AI lands: credit monitoring and portfolio insight with RDC.AI (2026 Banking Tech Awards Editor's Choice); AI-powered cash application for commercial clients; participation in the Cari tokenised-deposit network and FIS's Project Keystone."
  ],
  leadership: [
    { name: "Michael Wisler", role: "Senior EVP, Technology and Operations (CIO since 2018)", sources: ["fastcompany-wisler-2026", "forbes-buffalo-2026"], linkedin: "https://www.linkedin.com/in/michael-wisler-525582/" },
    { name: "Andrew Foster", role: "Chief Data Officer", sources: ["ab-data-quality-2025"], linkedin: "https://www.linkedin.com/in/andrew-foster-cfa/" },
    { name: "Rhea Rajwani", role: "Head of AI Risk Oversight, Independent Risk Management", sources: ["ab-rajwani-2026"], linkedin: "https://www.linkedin.com/in/rhearajwani/" },
    { name: "Kalyana Bedhu", role: "Head of AI Engineering (from August 2026)", sources: ["pymnts-bedhu-2026"] },
    { name: "René Jones", role: "Chairman and CEO", sources: ["mtb-letter-2026"] }
  ],
  timeline: [
    { date: "2018-01-01", title: "Michael Wisler becomes CIO", detail: "Begins bringing technology in-house and reducing contractor reliance.", sources: ["fastcompany-wisler-2026"] },
    { date: "2025-07-16", title: "AI and automation for working capital", detail: "AI/ML cash application for commercial clients: remittance capture, invoice matching, deductions.", sources: ["mtb-working-capital-2025"] },
    { date: "2025-09-18", title: "Copilot for 16,000 employees; data quality first", detail: "Foster vets LLM providers, chooses Microsoft; lineage and Edison underpin gen AI.", sources: ["ab-data-quality-2025"] },
    { date: "2025-11-06", title: "Jones: no interest in national scale", detail: "Focus on dominating current markets — $211 billion in assets, 960 branches, 13 states.", sources: ["bankingdive-national-2025"] },
    { date: "2025-12-24", title: "Buffalo tech hubs revealed", detail: "Seneca One and Lafayette Court; 1,000 technologists to be hired within 3–5 years.", sources: ["mtb-tech-hub-2025"] },
    { date: "2026-02-18", title: "Joins the Cari tokenised-deposit network", detail: "With Huntington, First Horizon, KeyCorp and Old National.", sources: ["bloomberg-tokenised-2026"] },
    { date: "2026-03-16", title: "CEO letter: technology transformation, 'a familiar refrain'", detail: "Jones on hiring and cultivating the best people to navigate change.", sources: ["mtb-letter-2026"] },
    { date: "2026-04-30", title: "Project Keystone: bank-owned tokenised money with FIS", detail: "Citizens, Fifth Third, Huntington, KeyBank and M&T among participants.", sources: ["ft-keystone-2026"] },
    { date: "2026-07-23", title: "AI Risk Oversight function profiled", detail: "Rhea Rajwani builds the second-line AI risk program.", sources: ["ab-rajwani-2026"] },
    { date: "2026-08-11", title: "Head of AI engineering hired from Fannie Mae", detail: "Kalyana Bedhu takes engineering, platforms, architecture and governance for AI.", sources: ["pymnts-bedhu-2026"] },
    { date: "2026-08-18", title: "Tokenised deposits: 'years of thoughtful work'", detail: "Matt McAfee, head of enterprise innovation and digital assets, on managing the risks.", sources: ["ab-tokenised-2026"] },
    { date: "2026-08-19", title: "RDC.AI credit-monitoring work wins Editor's Choice", detail: "2026 Banking Tech Awards USA; earlier issue detection, fewer unnecessary alerts.", sources: ["mtb-rdc-2026"] },
    { date: "2026-09-02", title: "Copilots to 15,000-plus employees; agentic AI examined for cyber and fraud", detail: "Fast Company's Pacesetters profile of Wisler's transformation.", sources: ["fastcompany-wisler-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Microsoft Copilot", detail: "First drafts and call summaries for 16,000 employees.", status: "In production", sources: ["ab-data-quality-2025"] },
    { useCase: "credit-underwriting", name: "Credit monitoring with RDC.AI", detail: "Agentic and predictive intelligence on commercial portfolios; earlier issue detection.", status: "In production", sources: ["mtb-rdc-2026"] },
    { useCase: "generative-agentic-ai", name: "AI cash application", detail: "Remittance digitisation and invoice matching for commercial clients.", status: "In production", sources: ["mtb-working-capital-2025"] },
    { useCase: "model-risk", name: "AI Risk Oversight (second line)", detail: "Independent oversight program for responsible AI adoption.", status: "In production", sources: ["ab-rajwani-2026"] },
    { useCase: "cybersecurity", name: "Agentic AI for cyber and fraud (under review)", detail: "Applications being examined, per Fast Company.", status: "Pilot", sources: ["fastcompany-wisler-2026"] },
    { useCase: "governance-general", name: "Data lineage, Edison and the Data Academy", detail: "The data foundation under the AI program; ~2,000 employees trained.", status: "In production", sources: ["fastcompany-wisler-2026", "ab-data-quality-2025"] }
  ],
  numbers: [
    { label: "Employees on Copilot", value: "16,000 of 22,000", asOf: "2025-09-18", sources: ["ab-data-quality-2025"] },
    { label: "Time saved per call (gen-AI summaries)", value: "≈ 6 minutes", asOf: "2026-09-02", sources: ["fastcompany-wisler-2026"] },
    { label: "Data Academy graduates", value: "≈ 2,000", asOf: "2026-09-02", sources: ["fastcompany-wisler-2026"] },
    { label: "Technologists to hire", value: "1,000 within 3–5 years", asOf: "2025-12-24", sources: ["mtb-tech-hub-2025"] },
    { label: "Total assets", value: "$213.8 billion", asOf: "2026-05-06", sources: ["bankingdive-patient-2026"] }
  ],
  quotes: [
    { who: "René Jones", role: "Chairman and CEO", date: "2026-03-16", quote: "While others chase the new siren song, we will continue to steadfastly hum a familiar refrain.", sources: ["mtb-letter-2026"] },
    { who: "Matt McAfee", role: "Head of Enterprise Innovation and Digital Assets", date: "2026-08-18", quote: "There's a lot of innovation here, but it's going to take years of thoughtful work, both from banks and the regulators that oversee us.", sources: ["ab-tokenised-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "State member bank supervised by the Fed; SR 26-2 and SR 23-4 govern models and the Microsoft dependency.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "ny-dfs", why: "New York-chartered: Part 500 and the DFS AI letters apply directly.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2024-10-16-ai-cyber-risks"] },
    { authority: "basel-committee", why: "The data-lineage program is BCBS 239 discipline applied to AI.", docSlugs: ["bcbs-239"] },
    { authority: "cfpb", why: "Consumer and small-business lending; adverse-action duties apply.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "A second-line AI risk function is what supervisors describe, built before the agents", detail: "Moving the head of model risk into AI Risk Oversight is the organisational move the FSB's practices and the revised US guidance imply. Few regionals have done it this explicitly." },
    { title: "One vendor, chosen for stability, keeps the model risk simple", detail: "Copilot as the single enterprise tool trades capability for control. The third-party question is concentration in Microsoft; the model-risk question is easier than at multi-model peers." },
    { title: "The 'familiar refrain' is a strategy, not a lack of one", detail: "Jones's letter positions people and judgment over technology; the Buffalo hiring plan shows the bank means to own its technology anyway." },
    { title: "Watch the new AI engineering head", detail: "A Fannie Mae ML-operations veteran running platforms and governance suggests the next phase is in-house model building, not only Copilot adoption." }
  ],
  faq: [
    { q: "What AI does M&T Bank use?", a: "M&T uses Microsoft Copilot as its enterprise generative-AI tool — 16,000 of its 22,000 employees use it for first drafts of emails and reports and for summarising call-centre conversations — on top of a data-lineage foundation, an internal document repository called Edison and a Data Academy. It also uses AI in commercial credit monitoring with RDC.AI and in cash application for commercial clients, and is examining agentic AI for cybersecurity and fraud." },
    { q: "How does M&T govern AI risk?", a: "Through a dedicated second-line AI Risk Oversight function inside independent risk management, led by Rhea Rajwani, who previously ran the bank's model risk management. The program is aligned to regulatory expectations, industry guidance and peer benchmarks, and staff remain responsible for reviewing and approving AI outputs." }
  ],
  sources: [
    { id: "ab-data-quality-2025", title: "How M&T Bank ensures data quality as it implements gen AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-m-t-bank-ensures-data-quality-as-it-implements-gen-ai", date: "2025-09-18" },
    { id: "ab-rajwani-2026", title: "Rhea Rajwani — The Most Powerful Women in Banking (profile)", publisher: "American Banker", url: "https://the-most-powerful-women-in-banking.americanbanker.com/profile/rhea-rajwani", date: "2026-07-23" },
    { id: "ab-tokenised-2026", title: "Tokenized deposits are here. Banks need to manage the risks.", publisher: "American Banker", url: "https://www.americanbanker.com/news/tokenized-deposits-are-here-banks-need-to-manage-the-risks", date: "2026-08-18" },
    { id: "fastcompany-wisler-2026", title: "How this Buffalo-based bank is using tech as a competitive edge", publisher: "Fast Company", url: "https://www.fastcompany.com/91596458/michael-wisler-m-t-bank-pacesetters-2026", date: "2026-09-02" },
    { id: "forbes-buffalo-2026", title: "How M&T Bank Built A Technology Powerhouse In Buffalo", publisher: "Forbes", url: "https://www.forbes.com/sites/peterhigh/2026/08/28/how-mt-bank-built-a-technology-powerhouse-in-buffalo/", date: "2026-08-28" },
    { id: "pymnts-bedhu-2026", title: "M&T Bank Appoints Fannie Mae Veteran Kalyana Bedhu as AI Engineering Head", publisher: "PYMNTS", url: "https://www.pymnts.com/personnel/2026/mt-bank-appoints-fannie-mae-veteran-kalyana-bedhu-as-ai-engineering-head/", date: "2026-08-12" },
    { id: "mtb-letter-2026", title: "M&T Bank CEO René Jones Highlights Strong Performance, Technology Transformation in Annual Letter", publisher: "M&T Bank", url: "https://newsroom.mtb.com/2026-03-16-M-T-Bank-CEO-Rene-Jones-Highlights-Strong-Performance,-Technology-Transformation-in-Annual-Letter", date: "2026-03-16" },
    { id: "mtb-rdc-2026", title: "M&T Bank and RDC.AI Recognized with Editor's Choice Award at 2026 Banking Tech Awards USA", publisher: "M&T Bank", url: "https://newsroom.mtb.com/2026-08-19-M-T-Bank-and-RDC-AI-Recognized-with-Editors-Choice-Award-at-2026-Banking-Tech-Awards-USA", date: "2026-08-19" },
    { id: "mtb-tech-hub-2025", title: "M&T Tech Hub Reveal", publisher: "M&T Bank", url: "https://www.mtb.com/landing-pages/m-t-tech-hub-reveal", date: "2025-12-24" },
    { id: "mtb-working-capital-2025", title: "How AI and automation are unlocking working capital", publisher: "M&T Bank", url: "https://www.mtb.com/library/article/how-ai-and-automation-are-unlocking-working-capital", date: "2025-07-16" },
    { id: "bloomberg-tokenised-2026", title: "US Banks Build Tokenized Deposit Network to Guard Their Turf", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-18/us-banks-build-tokenized-deposit-network-to-guard-their-turf", date: "2026-02-18" },
    { id: "ft-keystone-2026", title: "FIS and Leading Financial Institutions to Build Their Own Digital Tokenized Money Network", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202604300800BIZWIRE_USPRX____20260430_BW729662-1", date: "2026-04-30" },
    { id: "bankingdive-national-2025", title: "M&T eschews the temptation of national presence", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/mt-bank-ceo-jones-acquisitions-scale-technology/805015/", date: "2025-11-07" },
    { id: "bankingdive-patient-2026", title: "M&T takes 'patient' approach to M&A, CFO says", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/mt-bank-mergers-acquisitions-cfo-bible/819464/", date: "2026-05-06" }
  ],
  lastUpdated: "2026-09-09"
};
