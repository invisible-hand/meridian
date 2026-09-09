import type { Bank } from "@/lib/banks";

export const MORGAN_STANLEY: Bank = {
  slug: "morgan-stanley",
  name: "Morgan Stanley",
  shortName: "Morgan Stanley",
  ticker: "MS",
  hq: "New York, NY",
  fedRank: 11,
  leadBank: "Morgan Stanley Bank, N.A.",
  assetsUsdMillions: 391305,
  charter: "National bank (OCC)",
  posture: "OpenAI-first copilots for advisors, evaluated relentlessly — and the first big bank to open its platforms to clients' own agents.",
  platform: {
    name: "AI @ Morgan Stanley (Assistant, Debrief) and AskResearchGPT",
    detail: "OpenAI-powered assistants for financial advisors: the Assistant, fully rolled out in September 2023 and adopted by 98% of advisor teams, answers questions across the firm's intellectual capital; Debrief (2024) takes notes in client meetings and drafts follow-ups; AskResearchGPT serves banking, sales and trading staff over 70,000-plus research reports.",
    sources: ["ms-debrief-2024", "ms-askresearchgpt-2024", "ms-awards-2024"]
  },
  answerFirst:
    "Morgan Stanley was the first Wall Street firm to put OpenAI's models in front of financial advisors — a strategic partnership announced in March 2023, an Assistant fully rolled out that September and adopted by 98% of advisor teams, then Debrief for meeting notes and AskResearchGPT for the institutional side. By 2026 roughly 98% of its 80,000 employees have access to at least one generative-AI tool across hundreds of use cases, and CEO Ted Pick describes AI as moving from an efficiency tool to a 'productivity phenomenon'. The firm's most distinctive step came in June 2026: opening its ShareWorks and Equity Edge stock-plan platforms to corporate clients' own AI agents through the Model Context Protocol — betting that proprietary data and business logic, not the login screen, are the moat.",
  keyPoints: [
    "March 2023: OpenAI named the wealth unit's only strategic AI partner (the relationship began in 2022); September 2023: AI @ Morgan Stanley Assistant fully rolled out; 98% of advisor teams adopted it.",
    "June 2024: Debrief — OpenAI-powered meeting notes, summaries and draft emails, with client consent; later AskResearchGPT for investment banking, sales and trading and research staff.",
    "By mid-2026 about 98% of 80,000 employees have access to at least one generative-AI tool, across hundreds of use cases.",
    "June 2026: ShareWorks and Equity Edge to be opened to clients' external AI agents via MCP; early access for a handful of clients, all 3,400 administration clients by 2027.",
    "CEO Ted Pick: AI is a 'productivity phenomenon'; the firm is using a beta of Anthropic's Mythos; Morgan Stanley Research estimates European banks could cut 10–20% of jobs on AI.",
    "Capacity creation is the internal doctrine — automation and generative AI to 'decouple scaling from forever adding more people'; strategic investor in agent-authorisation startup Arcade.dev."
  ],
  leadership: [
    { name: "Michael Pizzi", role: "Head of Technology", sources: ["ab-pizzi-2026"] },
    { name: "Mark Mitchell", role: "Chief Product Officer, Morgan Stanley at Work", sources: ["cnbc-agents-2026"] },
    { name: "Vince Lumia", role: "Head of Field Management, Wealth Management", sources: ["ab-lumia-2026"] }
  ],
  timeline: [
    { date: "2023-03-01", title: "OpenAI named strategic partner for wealth management", detail: "The firm's only wealth-management AI strategic partner; the relationship began in 2022.", sources: ["ms-debrief-2024", "cnbc-agents-2026"] },
    { date: "2023-09-01", title: "AI @ Morgan Stanley Assistant fully rolled out", detail: "A GenAI chatbot giving advisors quick access to the firm's intellectual capital; 98% of advisor teams adopt it.", sources: ["ms-debrief-2024", "ms-awards-2024"] },
    { date: "2024-06-26", title: "Debrief launches", detail: "OpenAI-powered meeting notes, action items, summaries and draft emails for advisors.", sources: ["ms-debrief-2024"] },
    { date: "2024-10-01", title: "AskResearchGPT for the institutional side", detail: "Generative assistant over more than 70,000 proprietary research reports for banking, sales and trading staff.", sources: ["ms-askresearchgpt-2024"] },
    { date: "2025-05-20", title: "Bots do the 'boring compliance work'", detail: "Task automation in non-financial risk; 'capacity creation' as the operating doctrine.", sources: ["ab-compliance-2025"] },
    { date: "2026-04-15", title: "Pick: AI is a 'productivity phenomenon'; Mythos in beta", detail: "On the Q1 call the CEO says the firm is using a beta of Anthropic's Mythos model.", sources: ["ab-ceos-mythos-2026"] },
    { date: "2026-05-28", title: "Research: European banks could cut 20% of jobs on AI", detail: "Analysts estimate 30% productivity gains and 10–20% job cuts over five years.", sources: ["bloomberg-euro-banks-2026"] },
    { date: "2026-06-03", title: "Opening stock-plan platforms to external AI agents", detail: "Clients' agents will pull data from ShareWorks and Equity Edge via MCP; 3,400 administration clients by 2027.", sources: ["cnbc-agents-2026"] },
    { date: "2026-06-15", title: "Strategic investment in Arcade.dev", detail: "A startup managing which actions AI agents are authorised to take.", sources: ["wsj-arcade-2026"] },
    { date: "2026-06-24", title: "AI may let advisors triple client loads", detail: "Vince Lumia on advisors using AI to prepare and anticipate client questions.", sources: ["ab-lumia-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "AI @ Morgan Stanley Assistant and Debrief", detail: "Advisor copilots on OpenAI models; 98% adoption among advisor teams.", status: "In production", sources: ["ms-debrief-2024"] },
    { useCase: "trading-markets", name: "AskResearchGPT", detail: "Research assistant for investment banking, sales and trading.", status: "In production", sources: ["ms-askresearchgpt-2024"] },
    { useCase: "generative-agentic-ai", name: "External agent access to ShareWorks and Equity Edge", detail: "Clients' autonomous agents connect via MCP.", status: "Rolling out", sources: ["cnbc-agents-2026"] },
    { useCase: "governance-general", name: "Compliance task automation", detail: "Bots handling routine non-financial-risk work.", status: "In production", sources: ["ab-compliance-2025"] },
    { useCase: "cybersecurity", name: "Mythos beta", detail: "Testing Anthropic's vulnerability-finding model.", status: "Pilot", sources: ["ab-ceos-mythos-2026"] }
  ],
  numbers: [
    { label: "Employees with gen-AI access", value: "≈ 98% of 80,000", asOf: "2026-06-01", sources: ["ab-pizzi-2026"] },
    { label: "Advisor teams using the Assistant", value: "98%", asOf: "2024-06-26", sources: ["ms-debrief-2024"] },
    { label: "Research reports behind AskResearchGPT", value: "70,000+", asOf: "2024-10-01", sources: ["ms-askresearchgpt-2024"] },
    { label: "Wealth client assets", value: "$7.35 trillion; $9.3 trillion total client assets", asOf: "2026-06-03", sources: ["cnbc-agents-2026", "ms-ars-2025"] },
    { label: "Stock-plan clients to get agent access", value: "3,400 by 2027", asOf: "2026-06-03", sources: ["cnbc-agents-2026"] }
  ],
  quotes: [
    { who: "Mark Mitchell", role: "CPO, Morgan Stanley at Work", date: "2026-06-03", quote: "The companies that are going to survive in the future are the ones who have proprietary data and business logic.", sources: ["cnbc-agents-2026"] },
    { who: "Ted Pick", role: "CEO", date: "2026-04-15", quote: "AI is evolving from a pure efficiency tool to a 'productivity phenomenon'.", sources: ["ab-ceos-mythos-2026"] }
  ],
  regulatory: [
    { authority: "sec", why: "The largest wealth manager: AI advisor copilots and automated tools sit squarely in the SEC's exam priorities on AI representations and supervision.", docSlugs: ["sec-exam-priorities-fy2026", "sec-pda-proposal-withdrawal-33-11377"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; OpenAI is a critical third party under SR 23-4.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "occ", why: "Morgan Stanley Bank N.A. and the Private Bank are national banks.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "nist", why: "External agents acting on client platforms is the agent-identity problem NIST's agent-security work addresses.", docSlugs: ["nist-caisi-rfi-ai-agent-security-2026"] },
    { authority: "fsb", why: "G-SIB; FSB practices on human oversight and third-party AI risk.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "Single-vendor dependence, chosen deliberately", detail: "Three years on OpenAI as the sole wealth partner gave Morgan Stanley a head start and a concentration. The third-party guidance and Basel's principles make the exit plan for that relationship a supervisory question, not a hypothetical." },
    { title: "External agents move the perimeter", detail: "Letting clients' agents act on ShareWorks and Equity Edge makes agent identity and authorisation a client-facing control. The Arcade.dev investment suggests the firm knows that is the hard part." },
    { title: "Advisor productivity is the P&L thesis", detail: "'Triple client loads' and 'capacity creation' point to growth in assets per advisor rather than fewer advisors — the opposite of the operations-headcount story at consumer banks." },
    { title: "Its own research sets expectations for its peers", detail: "Morgan Stanley Research's 10–20% job-cut estimate for European banks will be read against the firm's own headcount disclosures." }
  ],
  faq: [
    { q: "What is AI @ Morgan Stanley?", a: "AI @ Morgan Stanley is the wealth-management unit's suite of OpenAI-powered tools for financial advisors: the Assistant, fully rolled out in September 2023, which answers questions across the firm's research and intellectual capital, and Debrief, launched in June 2024, which takes notes in client meetings with consent, summarises them and drafts follow-up emails. The firm named OpenAI its only wealth-management strategic AI partner in March 2023." },
    { q: "Is Morgan Stanley letting AI agents into its systems?", a: "Yes. In June 2026 the firm said it would let corporate clients' own AI agents connect directly to its ShareWorks and Equity Edge stock-plan platforms through the Model Context Protocol, starting with a handful of clients and extending to its 3,400 administration clients by 2027." }
  ],
  sources: [
    { id: "ms-debrief-2024", title: "Launch of AI @ Morgan Stanley Debrief", publisher: "Morgan Stanley", url: "https://www.morganstanley.com/press-releases/ai-at-morgan-stanley-debrief-launch", date: "2024-06-26" },
    { id: "ms-askresearchgpt-2024", title: "Morgan Stanley Research Announces AskResearchGPT", publisher: "Morgan Stanley", url: "https://www.morganstanley.com/press-releases/morgan-stanley-research-announces-askresearchgpt", date: "2024-10-01" },
    { id: "ms-awards-2024", title: "Morgan Stanley Wins Three 2024 Technology Awards", publisher: "Morgan Stanley", url: "https://www.morganstanley.com/press-releases/morgan-stanley-wins-three-2024-technology-awards", date: "2024-12-01" },
    { id: "ms-ars-2025", title: "2025 Annual Report (Form 10-K)", publisher: "Morgan Stanley via SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/895421/000114036126012991/ny20058185x3_ars.pdf", date: "2026-04-01" },
    { id: "cnbc-agents-2026", title: "Morgan Stanley will soon open its trillion-dollar wealth management funnel to AI agents", publisher: "CNBC", url: "https://www.cnbc.com/2026/06/03/ai-agents-morgan-stanley-wealth-management-funnel.html", date: "2026-06-03" },
    { id: "ab-pizzi-2026", title: "Morgan Stanley's Tech Chief Used AI to Crack a Major Coding Problem", publisher: "American Banker", url: "https://www.americanbanker.com/news/morgan-stanleys-michael-pizzi-is-27-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-lumia-2026", title: "Morgan Stanley's Vince Lumia: AI may let advisors triple their client loads", publisher: "American Banker", url: "https://www.americanbanker.com/news/morgan-stanleys-vince-lumia-ai-may-let-advisors-triple-their-client-loads", date: "2026-06-24" },
    { id: "ab-compliance-2025", title: "Why Morgan Stanley lets bots do the boring compliance work", publisher: "American Banker", url: "https://www.americanbanker.com/news/why-morgan-stanley-lets-bots-do-the-boring-compliance-work", date: "2025-05-20" },
    { id: "ab-ceos-mythos-2026", title: "'AI is our friend': Bank CEOs weigh the tech's risks, rewards", publisher: "American Banker", url: "https://www.americanbanker.com/news/ai-is-our-friend-bank-ceos-play-down-risks-from-mythos", date: "2026-04-15" },
    { id: "bloomberg-euro-banks-2026", title: "European Banks Could Cut 20% of Jobs on AI, Morgan Stanley Says", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-28/european-banks-could-cut-20-of-jobs-on-ai-morgan-stanley-says", date: "2026-05-28" },
    { id: "wsj-arcade-2026", title: "Arcade.dev Raises $60 Million to Secure AI Agents", publisher: "The Wall Street Journal", url: "https://www.wsj.com/cio-journal/arcade-dev-raises-60-million-to-secure-ai-agents-5d07eff4", date: "2026-06-15" }
  ],
  lastUpdated: "2026-09-09"
};
