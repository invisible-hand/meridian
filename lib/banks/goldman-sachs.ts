import type { Bank } from "@/lib/banks";

export const GOLDMAN_SACHS: Bank = {
  slug: "goldman-sachs",
  name: "Goldman Sachs",
  shortName: "Goldman",
  ticker: "GS",
  hq: "New York, NY",
  fedRank: 5,
  leadBank: "Goldman Sachs Bank USA",
  assetsUsdMillions: 751776,
  charter: "State member bank (Fed)",
  posture: "Developer-first, then vendor-built agents embedded in the back office — an 'assembly line' automated one function at a time.",
  platform: {
    name: "GS AI Platform and GS AI Assistant",
    detail: "A firm-hosted platform for generative-AI assistants, extended to all 46,000 employees in July 2025 and answering more than a million prompts a month; developers got GitHub Copilot in 2024 and Cognition's autonomous engineer Devin as a team member in 2025.",
    sources: ["ab-prompts-2025", "ab-argenti-2026"]
  },
  answerFirst:
    "Goldman Sachs approached AI through its 12,000 developers first — GitHub Copilot in 2024, Cognition's Devin agent in 2025 — then gave its whole 46,000-person workforce the GS AI Assistant, which fields more than a million prompts a month. The distinctive 2026 move was to let a model vendor inside: for six months Anthropic engineers sat with Goldman teams co-developing autonomous agents for trade accounting and client onboarding, the first such arrangement disclosed by a major bank. President John Waldron calls the firm a 'human assembly line' now facing the automation manufacturing went through, while CEO David Solomon says he does not expect a white-collar wipeout. The firm is also an active investor in the AI supply chain — Anthropic's and OpenAI's enterprise-services ventures, the fintech Taktile — and a Mythos user 'supplementing' its cyber resilience after regulators called the largest banks in.",
  keyPoints: [
    "Developer-first: GitHub Copilot for 12,000 developers in 2024; Devin, an autonomous software engineer, piloted as a team member in 2025.",
    "GS AI Assistant available to all 46,000 employees since July 2025; more than a million prompts a month.",
    "February 2026: embedded Anthropic engineers co-developing Claude-based agents for accounting of trades and transactions and for client vetting and onboarding.",
    "April 2026: using Anthropic's Mythos and 'supplementing' cyber and infrastructure resilience after Treasury and the Fed summoned bank leaders.",
    "Investor in the AI services layer: Ode with Anthropic (with Blackstone and Hellman & Friedman), OpenAI's DeployCo, and a $110 million Series C in decisioning-software firm Taktile; 70 AI venture deals since 2019.",
    "Leadership is explicit about labour: Waldron's 'human assembly line', economists' 6% displacement estimate for US workers, and a partner's warning about 'cognitive atrophy' if bankers outsource reasoning to models."
  ],
  leadership: [
    { name: "Marco Argenti", role: "Chief Information Officer", sources: ["cnbc-anthropic-2026", "ab-argenti-2026"], linkedin: "https://www.linkedin.com/in/marcoargenti/" },
    { name: "John Waldron", role: "President and Chief Operating Officer", sources: ["ab-assembly-line-2026"], linkedin: "https://www.linkedin.com/in/johnewaldron/" },
    { name: "Daniel Marcu", role: "Global Head of AI Engineering and Science", sources: ["wsj-journalhouse-2025"], linkedin: "https://www.linkedin.com/in/daniel-marcu-9505864/" }
  ],
  timeline: [
    { date: "2024-01-01", title: "GitHub Copilot for 12,000 developers", detail: "The first firm-wide generative-AI deployment, to engineering.", sources: ["ab-prompts-2025"] },
    { date: "2025-07-25", title: "GS AI Assistant reaches the whole workforce", detail: "46,000 employees; a million prompts a month; Devin agents joining developer teams.", sources: ["ab-prompts-2025"] },
    { date: "2026-01-22", title: "Argenti: 2025 'the biggest changes' of a 40-year career", detail: "The CIO predicts 2026 will be bigger, with personal agents and mega alliances.", sources: ["gs-argenti-2026"] },
    { date: "2026-02-06", title: "Anthropic engineers embedded to build agents", detail: "Six months of co-development in trade accounting and client onboarding; Goldman confirms the report.", sources: ["cnbc-anthropic-2026", "reuters-anthropic-2026"] },
    { date: "2026-03-20", title: "Solomon's letter flags AI-exposed private credit", detail: "'Exposure to software companies that may be adversely affected by AI' named as a reminder that the credit cycle has not been repealed.", sources: ["wsj-solomon-letter-2026"] },
    { date: "2026-04-13", title: "Using Mythos; regulators call in bank chiefs", detail: "Solomon says the firm is supplementing cyber resilience after Bessent and Powell convened Wall Street leaders.", sources: ["bloomberg-mythos-2026"] },
    { date: "2026-05-12", title: "Waldron: a 'human assembly line' facing automation", detail: "AI lets the bank scale without much more hiring.", sources: ["ab-assembly-line-2026", "cnbc-waldron-2026"] },
    { date: "2026-05-14", title: "Invests in OpenAI's DeployCo", detail: "Alongside BBVA, backing OpenAI's enterprise-deployment venture.", sources: ["ab-deployco-2026"] },
    { date: "2026-06-04", title: "Solomon: no white-collar wipeout", detail: "On Bloomberg's Odd Lots the CEO discusses headcount, AI and the bank's role in the SpaceX IPO.", sources: ["bloomberg-solomon-2026"] },
    { date: "2026-06-24", title: "Leads $110 million round in Taktile", detail: "A bet that AI is ready for banks' regulated, high-stakes decisions.", sources: ["ab-taktile-2026"] },
    { date: "2026-07-15", title: "Backs Ode with Anthropic", detail: "An enterprise AI services firm formed by Anthropic, Blackstone and Hellman & Friedman with a consortium including Goldman.", sources: ["ft-ode-2026"] },
    { date: "2026-08-24", title: "Partner warns of 'cognitive atrophy'", detail: "Chris Churchman, leading a flagship AI project, on the danger of outsourcing reasoning to models.", sources: ["cnbc-churchman-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "GS AI Assistant", detail: "Firm-wide conversational assistant on the GS AI Platform.", status: "In production", sources: ["ab-prompts-2025", "ab-argenti-2026"] },
    { useCase: "generative-agentic-ai", name: "Devin and coding agents", detail: "Autonomous software engineer piloted in developer teams.", status: "Pilot", sources: ["ab-argenti-2026"] },
    { useCase: "aml-kyc", name: "Client vetting and onboarding agents", detail: "Claude-based agents co-developed with Anthropic.", status: "Pilot", sources: ["cnbc-anthropic-2026", "ab-agents-2026"] },
    { useCase: "governance-general", name: "Trade and transaction accounting agents", detail: "Automating accounting for trades and transactions.", status: "Pilot", sources: ["cnbc-anthropic-2026"] },
    { useCase: "cybersecurity", name: "Mythos vulnerability discovery", detail: "Using the restricted model and working with Anthropic on cyber risks.", status: "In production", sources: ["bloomberg-mythos-2026"] }
  ],
  numbers: [
    { label: "Employees with GS AI Assistant", value: "46,000 (all)", asOf: "2025-07-25", sources: ["ab-prompts-2025"] },
    { label: "Prompts", value: "1 million+ a month", asOf: "2026-06-01", sources: ["ab-argenti-2026"] },
    { label: "Developers with coding assistants", value: "12,000", asOf: "2025-07-25", sources: ["ab-prompts-2025"] },
    { label: "AI venture deals since 2019", value: "70 (third among US banks)", asOf: "2026-04-20", sources: ["ab-venture-2026"] },
    { label: "Q2 2026 revenue", value: "$20.3 billion, +39%, on an AI-driven markets boom", asOf: "2026-07-14", sources: ["cnbc-winners-2026"] }
  ],
  quotes: [
    { who: "John Waldron", role: "President and COO", date: "2026-05-12", quote: "I often describe Goldman Sachs as a human assembly line.", sources: ["ab-assembly-line-2026"] },
    { who: "Chris Churchman", role: "Partner", date: "2026-08-24", quote: "There's a huge danger here that in the era of AI, we outsource our reasoning to these models, and we have cognitive atrophy.", sources: ["cnbc-churchman-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Goldman Sachs Bank USA is a state member bank supervised by the Fed; SR 26-2 governs its models and SR 23-4 its vendor agents.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "ny-dfs", why: "New York-chartered bank: Part 500 cybersecurity certification and the DFS frontier-AI letter apply directly.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2026-05-21-frontier-ai-models"] },
    { authority: "sec", why: "Broker-dealer and adviser businesses; SEC exam priorities cover AI in trading, back office and AML.", docSlugs: ["sec-exam-priorities-fy2026"] },
    { authority: "fincen", why: "Onboarding agents operate inside the BSA/AML program; the 2026 proposed rule rewards 'effective use of AI' explicitly.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "fsb", why: "G-SIB; the FSB's third-party practice and frontier-AI warning both bear on the Anthropic dependency.", docSlugs: ["fsb-ai-sound-practices-consultation-2026", "fsb-chair-letter-g20-august-2026"] }
  ],
  suggestions: [
    { title: "Embedding a vendor's engineers is a third-party-risk event, not only a productivity one", detail: "Agents co-built with Anthropic for onboarding and accounting are 'critical activities' under the interagency guidance; the contract, exit plan and model-change controls will matter more than the agents' accuracy." },
    { title: "The back office is where the automation lands first", detail: "Trade accounting and client onboarding are the two functions named; both are high-frequency, rules-heavy and examinable, which is why they were chosen." },
    { title: "Goldman is on both sides of the AI trade", detail: "It automates with Anthropic's models, invests in Anthropic's and OpenAI's services ventures, and leads their IPOs. Conflicts and information barriers are a governance topic the firm has already had to address publicly." },
    { title: "The reasoning-skills warning is a talent-pipeline signal", detail: "A partner saying juniors risk 'cognitive atrophy' is the same concern regulators voice about human oversight — expect apprenticeship models and hiring plans to be discussed alongside AI." }
  ],
  faq: [
    { q: "What is Goldman Sachs doing with Anthropic?", a: "In February 2026 Goldman's CIO Marco Argenti told CNBC the bank had spent six months working with embedded Anthropic engineers to co-develop autonomous AI agents in at least two areas: accounting for trades and transactions, and client vetting and onboarding. Goldman confirmed the report. The firm also uses Anthropic's restricted Mythos model for cyber resilience and joined the investor consortium behind Ode with Anthropic in July 2026." },
    { q: "How many Goldman Sachs employees use AI?", a: "All roughly 46,000 employees have had access to the GS AI Assistant since July 2025, and the tool handles more than a million prompts a month. Its 12,000 developers have used GitHub Copilot since 2024." }
  ],
  sources: [
    { id: "cnbc-anthropic-2026", title: "Goldman Sachs taps Anthropic's Claude to automate accounting, compliance roles", publisher: "CNBC", url: "https://www.cnbc.com/2026/02/06/anthropic-goldman-sachs-ai-model-accounting.html", date: "2026-02-06" },
    { id: "reuters-anthropic-2026", title: "Goldman Sachs teams up with Anthropic to automate banking tasks with AI agents, CNBC reports", publisher: "Reuters", url: "https://www.reuters.com/business/finance/goldman-sachs-teams-up-with-anthropic-automate-banking-tasks-with-ai-agents-cnbc-2026-02-06/", date: "2026-02-06" },
    { id: "cnbc-churchman-2026", title: "Goldman Sachs partner warns of 'huge danger' in letting AI replace bankers' reasoning skills", publisher: "CNBC", url: "https://www.cnbc.com/2026/08/24/goldman-sachs-ai-partner-danger-skills.html", date: "2026-08-24" },
    { id: "cnbc-waldron-2026", title: "Goldman Sachs President John Waldron: Our workforce processes will change because of AI", publisher: "CNBC", url: "https://www.cnbc.com/video/2026/05/12/goldman-sachs-john-waldron-our-workforce-processes-will-change-because-of-ai.html", date: "2026-05-12" },
    { id: "cnbc-winners-2026", title: "Goldman Sachs and JPMorgan Chase are emerging as AI winners", publisher: "CNBC", url: "https://www.cnbc.com/2026/07/14/goldman-sachs-and-jpmorgan-chase-are-emerging-as-ai-winners.html", date: "2026-07-14" },
    { id: "ab-prompts-2025", title: "Goldman Sachs staff now write a million gen AI prompts a month", publisher: "American Banker", url: "https://www.americanbanker.com/news/goldman-sachs-staff-now-write-a-million-gen-ai-prompts-a-month", date: "2025-07-25" },
    { id: "ab-argenti-2026", title: "Marco Argenti gives Goldman Sachs coders an AI helper", publisher: "American Banker", url: "https://www.americanbanker.com/news/goldman-sachs-marco-argenti-is-3-on-the-most-innovative-people-in-finance", date: "2026-06-01" },
    { id: "ab-assembly-line-2026", title: "Goldman president says bank is 'human assembly line' facing automation", publisher: "American Banker", url: "https://www.americanbanker.com/articles/goldman-president-says-bank-is-human-assembly-line-facing-automation", date: "2026-05-13" },
    { id: "ab-agents-2026", title: "Goldman equips AI agents to do trade accounting, onboarding", publisher: "American Banker", url: "https://www.americanbanker.com/news/goldman-equips-ai-agents-do-trade-accounting-onboarding", date: "2026-02-13" },
    { id: "ab-taktile-2026", title: "Goldman leads $110M bet on Taktile's AI software", publisher: "American Banker", url: "https://www.americanbanker.com/news/goldman-leads-110m-bet-on-taktiles-ai-software", date: "2026-06-29" },
    { id: "ab-deployco-2026", title: "BBVA and Goldman Sachs invest in OpenAI's new venture", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/bbva-and-goldman-sachs-invest-in-openais-new-venture", date: "2026-05-14" },
    { id: "ab-venture-2026", title: "Wells Fargo, Citi and Goldman lead in AI venture investment", publisher: "American Banker", url: "https://www.americanbanker.com/news/wells-fargo-citi-and-goldman-lead-in-ai-venture-investment", date: "2026-04-20" },
    { id: "bloomberg-mythos-2026", title: "Goldman Is Using Mythos, Working With Anthropic on Cyber Risks", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-04-13/goldman-is-using-mythos-working-with-anthropic-on-cyber-risks", date: "2026-04-13" },
    { id: "bloomberg-solomon-2026", title: "Goldman Sachs CEO David Solomon on Running a Bank in the Age of AI", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-04/goldman-sachs-ceo-david-solomon-on-running-a-bank-in-the-age-of-ai", date: "2026-06-04" },
    { id: "ft-ode-2026", title: "Anthropic, Blackstone, and Hellman & Friedman Introduce Ode with Anthropic", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607151000BIZWIRE_USPRX____20260715_BW205134-1", date: "2026-07-15" },
    { id: "wsj-solomon-letter-2026", title: "Financial Services Roundup: Market Talk (Solomon shareholder letter)", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/financial-services-roundup-market-talk-eade6365", date: "2026-03-20" },
    { id: "wsj-journalhouse-2025", title: "The Next Five Years of AI (Journal House session with Daniel Marcu)", publisher: "The Wall Street Journal", url: "https://journalhouse.wsj.com/unga/session-the-next-five-years-of-ai-rethinking-the-future-of-energy-finance-and-tech", date: "2025-08-25" },
    { id: "gs-argenti-2026", title: "What to Expect From AI in 2026: Personal Agents, Mega Alliances, and the Gigawatt Ceiling", publisher: "Goldman Sachs", url: "https://www.goldmansachs.com/insights/articles/what-to-expect-from-ai-in-2026-personal-agents-mega-alliances", date: "2026-01-22" }
  ],
  lastUpdated: "2026-09-09"
};
