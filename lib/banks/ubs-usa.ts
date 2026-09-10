import type { Bank } from "@/lib/banks";

export const UBS_USA: Bank = {
  slug: "ubs-usa",
  name: "UBS (US)",
  shortName: "UBS",
  ticker: "UBS",
  hq: "New York, NY (US); Zurich (group)",
  fedRank: 28,
  leadBank: "UBS Bank USA, N.A.",
  assetsUsdMillions: 122262,
  charter: "National bank (OCC); subsidiary of UBS Group AG",
  posture: "A Swiss wealth manager with a chief AI officer, 300-plus live use cases and a single AI platform — whose US bank is a wealth-management balance sheet where AI shows up as advisor tooling.",
  platform: {
    name: "UBS Claves, the Chief AI Office and the 'Big Rocks'",
    detail: "UBS runs AI as a hub-and-spoke: a Chief AI Office inside the group COO organisation owns strategy, governance and regulatory engagement, while divisions own delivery. The group is consolidating its tools onto one platform, UBS Claves, which routes requests across lightweight and frontier models to balance performance and token cost. Daniele Magazzeni, formerly JPMorgan's chief analytics officer for EMEA and the commercial and investment bank, became the first chief AI officer on 1 January 2026. The 2025 'Big Rocks' programmes are large transformational AI initiatives; by October 2025 the group had more than 300 live use cases, with Microsoft 365 Copilot and an in-house assistant, Red, rolling out to all employees. In the US wealth business, the Smart Technologies and Advanced Analytics Team (STAAT) surfaces client opportunities for financial advisors.",
    sources: ["ubs-innovation-page", "ubs-caio-2025", "ubs-advisor-ai"]
  },
  answerFirst:
    "UBS Bank USA is the deposit-and-lending bank behind UBS's American wealth-management franchise, so the AI that matters to it is the group's programme applied to advisors. At group level the record is detailed: more than 280 live AI use cases by July 2025 and over 300 by October, 'Big Rocks' transformational programmes launched in 2025, Microsoft 365 Copilot and an in-house assistant called Red for all employees, and a first chief AI officer, Daniele Magazzeni from JPMorgan, in post since 1 January 2026 with his own Chief AI Office. The firm is consolidating tools onto one platform, UBS Claves, with automated routing across models, requires annual responsible-AI training of every employee, and runs an AI Operating & Risk Committee under a group AI policy. CEO Sergio Ermotti told investors in February 2026 that UBS is 'investing in a portfolio of large-scale transformational AI programs' to redesign front- and back-office processes while finishing the Credit Suisse integration by the end of 2026. For US advisors, UBS markets an 'AI advantage': STAAT analytics that flag when a client has external cash, a house listing or a warm introduction, so the advisor calls first. Other markers: AI avatars of research analysts sent to clients (2025), a strategic investment in Finster AI for investment-banking workflows (August 2026), selection by the UK FCA for supervised AI live tests (April 2026), and a requirement that 2027 junior bankers show AI proficiency. Two departures matter: group COO and technology chief Mike Dargan left to run N26 in December 2025, and the head of the global banking AI lab left for JPMorgan in early 2026. A $125 million FinCEN penalty against UBS Financial Services in August 2026 for unremedied anti-money-laundering failures is the US compliance backdrop.",
  keyPoints: [
    "Scale: 280+ live AI use cases (July 2025), 300+ by October 2025; Copilot and the in-house assistant Red for all employees; 'Big Rocks' transformational programmes since 2025.",
    "Structure: a Chief AI Office (hub) with divisions as spokes; first chief AI officer Daniele Magazzeni (ex-JPMorgan) from 1 January 2026; one strategic platform, UBS Claves, routing across lightweight and frontier models.",
    "Governance: group AI policy, an AI Operating & Risk Committee, mandatory annual responsible-AI training, and published AI principles (autonomy, harm prevention, fairness, transparency).",
    "US wealth: the STAAT team's proactive insights for financial advisors — external cash, life events, network introductions — sold as the 'UBS AI advantage'; a US everyday-banking trial for employees is planned.",
    "Experiments and bets: AI analyst avatars with OpenAI and Synthesia (2025), an investment in Finster AI (August 2026), FCA AI live-testing cohort (April 2026), AI proficiency required of 2027 junior bankers.",
    "Leadership churn and compliance: Mike Dargan left for N26 (December 2025), the global banking AI lab head left for JPMorgan (February 2026); FinCEN fined UBS Financial Services $125 million in August 2026."
  ],
  leadership: [
    { name: "Sergio Ermotti", role: "Group Chief Executive Officer", sources: ["bankingdive-programs-2026"], linkedin: "https://www.linkedin.com/in/sergiopermotti/" },
    { name: "Daniele Magazzeni", role: "Group Chief AI Officer (from 1 January 2026, ex-JPMorgan)", sources: ["ubs-caio-2025", "bankingdive-leadership-2025"], linkedin: "https://www.linkedin.com/in/danielemagazzeni/" },
    { name: "Greg Peirce", role: "Co-Head of Global Banking APAC and AI Business Sponsor, Investment Bank", sources: ["ft-finster-2026"] },
    { name: "Mike Dargan", role: "Former Group Chief Operations and Technology Officer (left for N26, December 2025)", sources: ["ab-dargan-2026", "bankingdive-leadership-2025"], linkedin: "https://www.linkedin.com/in/mike-dargan-79898116/" }
  ],
  timeline: [
    { date: "2025-05-15", title: "AI avatars of analysts sent to clients", detail: "Scripts and digital twins built with OpenAI and Synthesia, driven by client demand for research video.", sources: ["pymnts-avatars-2025"] },
    { date: "2025-07-29", title: "280-plus live AI use cases", detail: "Second-quarter 2025 results: 'transformational AI initiatives', use cases up 10% quarter on quarter.", sources: ["bankingdive-leadership-2025"] },
    { date: "2025-10-16", title: "First chief AI officer appointed", detail: "Daniele Magazzeni to lead the Chief AI Office from 1 January 2026; 300-plus use cases; Copilot and Red for all employees.", sources: ["ubs-caio-2025"] },
    { date: "2025-10-24", title: "Executive board reshaped around technology", detail: "Dargan to become group CTO from January 2026 with AI and digital assets in his remit.", sources: ["bankingdive-leadership-2025"] },
    { date: "2025-12-09", title: "Oxford–UBS Centre for Applied AI", detail: "A research partnership with the University of Oxford.", sources: ["ubs-oxford-2025"] },
    { date: "2025-12-16", title: "Dargan leaves to run N26", detail: "The technology chief to whom the CAIO was to report departs.", sources: ["bankingdive-n26-2025", "ab-dargan-2026"] },
    { date: "2026-02-04", title: "'Large-scale transformational AI programs'", detail: "Ermotti on redesigning front- and back-office processes; the global banking AI lab head leaves for JPMorgan.", sources: ["bankingdive-programs-2026"] },
    { date: "2026-04-21", title: "Picked for the FCA's AI live tests", detail: "With Barclays and Lloyds, in the UK regulator's supervised testing cohort.", sources: ["bloomberg-fca-2026"] },
    { date: "2026-08-03", title: "FinCEN fines UBS Financial Services $125 million", detail: "For failing to implement anti-money-laundering reforms it had agreed to.", sources: ["ab-fincen-2026"] },
    { date: "2026-08-10", title: "Investment in Finster AI", detail: "UBS Investment Bank joins Finster's Series B with FactSet for AI-native research and advisory workflows.", sources: ["ft-finster-2026"] },
    { date: "2026-09-06", title: "AI proficiency required of new junior bankers", detail: "The FT reports UBS demanding AI skills from its 2027 intake.", sources: ["ft-juniors-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Copilot and the in-house assistant Red", detail: "Rolled out to all employees; 300-plus live use cases across the group.", status: "In production", sources: ["ubs-caio-2025"] },
    { useCase: "customer-chatbots", name: "STAAT proactive insights for US advisors", detail: "Machine-learning alerts on external assets, life events and network connections.", status: "In production", sources: ["ubs-advisor-ai"] },
    { useCase: "governance-general", name: "UBS Claves platform and AI risk committee", detail: "One platform with model routing and evaluation; AI Operating & Risk Committee under a group AI policy.", status: "Rolling out", sources: ["ubs-innovation-page"] },
    { useCase: "trading-markets", name: "AI-native investment-banking research (Finster)", detail: "Briefing decks, modelling and sector monitoring through an invested partner.", status: "Announced", sources: ["ft-finster-2026"] },
    { useCase: "customer-chatbots", name: "AI avatars of research analysts", detail: "Digital twins delivering AI-generated research scripts to clients.", status: "In production", sources: ["pymnts-avatars-2025"] }
  ],
  numbers: [
    { label: "Live AI use cases (group)", value: "300+", asOf: "2025-10-16", sources: ["ubs-caio-2025"] },
    { label: "Live AI use cases, quarter-on-quarter growth", value: "280+, up 10%", asOf: "2025-07-29", sources: ["bankingdive-leadership-2025"] },
    { label: "FinCEN penalty (UBS Financial Services)", value: "$125 million", asOf: "2026-08-03", sources: ["ab-fincen-2026"] },
    { label: "Credit Suisse integration target", value: "Substantially complete by end-2026", asOf: "2026-02-04", sources: ["bankingdive-programs-2026"] }
  ],
  quotes: [
    { who: "Sergio Ermotti", role: "Group Chief Executive Officer", date: "2026-02-04", quote: "We are investing in a portfolio of large-scale transformational AI programs designed to increase our operational resilience, enhance the client experience and unlock higher levels of efficiency and effectiveness across the organization.", sources: ["bankingdive-programs-2026"] },
    { who: "Mike Dargan", role: "Group Chief Operations and Technology Officer", date: "2025-10-16", quote: "Artificial intelligence is a top priority for UBS.", sources: ["ubs-caio-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "UBS Bank USA is a national bank; advisor-facing models and group platforms used by US staff sit under OCC model-risk expectations.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "sec", why: "UBS Financial Services is a broker-dealer and adviser; AI-driven client insights and analyst avatars are inside the SEC's examination priorities.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "fincen", why: "The August 2026 penalty against UBS Financial Services makes AML/CFT controls, including any AI in transaction monitoring, the live US compliance issue.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "uk", why: "UBS is in the FCA's supervised AI live-testing cohort, and the PRA's model-risk standard governs the group's UK entities.", docSlugs: ["fca-fs25-5-ai-live-testing", "pra-ss1-23-model-risk-management"] },
    { authority: "fsb", why: "A G-SIB with 300-plus AI use cases is inside the FSB's sound-practices consultation.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "The US bank inherits a group programme it does not steer", detail: "Strategy, platform and governance are set in Zurich and London. US examiners will ask which of the 300 use cases touch the national bank and where the US risk sign-off sits." },
    { title: "Advisor AI is a retention tool as much as a product", detail: "The 'AI advantage' is marketed to recruit advisors. Its regulatory exposure is the usual one for wealth: suitability and the accuracy of what the model surfaces about a client." },
    { title: "Leadership churn in the AI chain of command is the risk to watch", detail: "The CAIO's original boss left within two months of the appointment and an AI lab head followed; the hub-and-spoke model depends on the hub staying staffed." },
    { title: "AML remediation will shape what AI is allowed to do", detail: "A $125 million penalty for unfinished reforms means any AI in US transaction monitoring will be scrutinised as part of remediation, not innovation." }
  ],
  faq: [
    { q: "Who is UBS's chief AI officer?", a: "Daniele Magazzeni, formerly JPMorgan's chief analytics officer for EMEA and the commercial and investment bank and before that an AI professor at King's College London. He became UBS's first chief AI officer on 1 January 2026 and heads the Chief AI Office, which owns AI strategy, governance and platform standards across the group." },
    { q: "What is UBS Claves?", a: "The single strategic AI platform UBS is consolidating its tools onto. It offers a range of models from lightweight to frontier with automated routing to balance performance and token cost, and is paired with evaluation capabilities for governance and value tracking, according to the group's innovation page." }
  ],
  sources: [
    { id: "ubs-innovation-page", title: "Innovation and AI at UBS", publisher: "UBS", url: "https://www.ubs.com/global/en/our-firm/what-we-do/technology/innovation-and-ai.html", date: "2026-02-23" },
    { id: "ubs-caio-2025", title: "UBS appoints Chief AI Officer to drive its AI strategy", publisher: "UBS", url: "https://ubs.com/global/en/media/display-page-ndp/en-20251016-ai-strategy.html", date: "2025-10-16" },
    { id: "ubs-advisor-ai", title: "The UBS AI Advantage (financial advisor experience)", publisher: "UBS", url: "https://ubs.com/us/en/wealth-management/financial-advisor-experience/articles/ai-for-financial-advisors.html", date: "2026-01-09" },
    { id: "ubs-oxford-2025", title: "The University of Oxford and UBS join forces to launch the Oxford-UBS Centre for Applied AI", publisher: "UBS", url: "https://ubs.com/content/news/en/2025/12/09/oxford-ubs/_jcr_content/root/contentarea/mainpar/gridcontrol/col_2/linklistnewlook_copy/actionbutton.1612820692.file/PS9jb250ZW50L2RhbS9hc3NldHMvbmV3cy8yMDI1LzEyLzA5LzIwMjUxMjA5LW1yLW94Zm9yZC11YnMtY2VudHJlLWZvci1hcHBsaWVkLWFpLWVuLnBkZg==/20251209-mr-oxford-ubs-centre-for-applied-ai-en.pdf", date: "2025-12-09" },
    { id: "bankingdive-programs-2026", title: "UBS deploys AI programs to unlock efficiency", publisher: "Banking Dive", url: "https://bankingdive.com/news/ubs-deploys-ai-programs-unlock-efficiency-ermotti-magazzeni-credit-suisse/811572", date: "2026-02-06" },
    { id: "bankingdive-leadership-2025", title: "UBS revamps leadership with tech, AI in mind", publisher: "Banking Dive", url: "https://bankingdive.com/news/ubs-revamps-leadership-tech-ai-daniele-magazzeni-mike-dargan/803848", date: "2025-10-24" },
    { id: "bankingdive-n26-2025", title: "Neobank N26 hires UBS exec as next CEO", publisher: "Banking Dive", url: "https://bankingdive.com/news/n26-hires-ubs-exec-mike-dargan-stalf-tayenthal-dombret-mosen-neobank-germany/808020", date: "2025-12-16" },
    { id: "ab-dargan-2026", title: "Tech executive departs UBS to become CEO of N26", publisher: "American Banker", url: "https://americanbanker.com/news/tech-executive-departs-ubs-to-become-ceo-of-n26", date: "2026-01-02" },
    { id: "ab-fincen-2026", title: "Fincen fines UBS $125M for money laundering recidivism", publisher: "American Banker", url: "https://www.americanbanker.com/news/fincen-fines-ubs-125m-for-money-laundering-recidivism", date: "2026-08-03" },
    { id: "bloomberg-fca-2026", title: "Barclays, Lloyds, UBS Among Banks Picked by UK FCA for AI Tests", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-04-21/barclays-lloyds-ubs-among-banks-picked-by-uk-fca-for-ai-tests", date: "2026-04-21" },
    { id: "ft-finster-2026", title: "Finster AI secures investment from UBS to advance AI innovation in investment banking", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202608100800PR_NEWS_USPRX____LA22149-1", date: "2026-08-10" },
    { id: "ft-juniors-2026", title: "UBS demands new junior bankers show AI proficiency", publisher: "Financial Times", url: "https://www.ft.com/content/76b370ff-b5f6-4e22-aa30-da08b1abb8f8", date: "2026-09-06" },
    { id: "pymnts-avatars-2025", title: "Executives Using AI Avatars Face a Patchwork of Regulations", publisher: "PYMNTS", url: "https://pymnts.com/artificial-intelligence-2/2025/executives-companies-using-ai-avatars-face-a-patchwork-of-regulations", date: "2025-05-28" }
  ],
  lastUpdated: "2026-09-10"
};
