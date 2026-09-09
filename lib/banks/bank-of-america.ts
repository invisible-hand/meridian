import type { Bank } from "@/lib/banks";

export const BANK_OF_AMERICA: Bank = {
  slug: "bank-of-america",
  name: "Bank of America",
  shortName: "BofA",
  ticker: "BAC",
  hq: "Charlotte, NC",
  fedRank: 2,
  leadBank: "Bank of America, N.A.",
  assetsUsdMillions: 2672192,
  charter: "National bank (OCC)",
  posture: "Own the assistant, insist on perfect data, scale one proven model across 30 billion interactions.",
  platform: {
    name: "Erica (and EricaAssist)",
    detail: "The AI virtual assistant launched in 2018 — nearly 50 million users and more than 3 billion interactions by August 2025 — now also runs as EricaAssist, an employee-facing agent that summarises why a client is calling and recommends next steps; the CEO calls it, in effect, a small language model.",
    sources: ["bofa-erica-3b-2025", "bofa-ericaassist-2026", "ab-erica-11000-2026"]
  },
  answerFirst:
    "Bank of America's AI strategy is the opposite of a big-bang rollout: a decade of one assistant, Erica, extended step by step into employees' tools, treasury products and advisor workflows, funded by a $13 billion technology budget of which $4 billion goes to new capabilities. Management measures it in interactions and hours rather than headlines — 2 million Erica conversations a day doing the work of 11,000 people, 400,000 employee prompts a day, more than 300 approved use cases 'all of which have good economics'. CEO Brian Moynihan's stated constraint is accuracy: 'the data has to be perfect', and the bank keeps hiring 4,000 interns and campus recruits a year despite the automation.",
  keyPoints: [
    "Technology budget of $13 billion in 2025, with $4 billion set aside for new technology including AI.",
    "Erica: launched 2018; nearly 50 million users, 3 billion-plus interactions, 58 million a month by August 2025; 20 million regular users and 2 million interactions a day by the January 2026 investor day.",
    "AI runs in four declared domains — intelligent agents, search and summarisation, content generation, operations and coding — and the bank holds nearly 1,100 AI and machine-learning patents and applications.",
    "Employees generate more than 400,000 prompts a day; more than 300 AI use cases are approved (Q2 2026 earnings call).",
    "Advisor tools: an AI meeting journey for 15,000 Merrill and Private Bank employees in the first phase (March 2026); CashPro Forecasting saved corporate clients 250,000 hours in 2025.",
    "Governance posture is conservative by design: 'zero tolerance for things like hallucinations, bias', per the CTO; the CEO frames AI as a management responsibility, not a technology one."
  ],
  leadership: [
    { name: "Hari Gopalkrishnan", role: "Chief Technology and Information Officer", sources: ["wsj-gopalkrishnan-2025", "ab-cto-2026"] },
    { name: "Nikki Katz", role: "Head of Digital", sources: ["ab-katz-2026"] },
    { name: "Kevin Milsom", role: "Head of Platforms AI Transformation", sources: ["bloomberg-promotions-2026"] }
  ],
  timeline: [
    { date: "2018-06-01", title: "Erica launches", detail: "The AI-driven virtual financial assistant that the bank calls a central gateway to serving clients.", sources: ["bofa-erica-3b-2025"] },
    { date: "2024-10-01", title: "AI and ML patents up 94% since 2022", detail: "Nearly 1,100 AI and machine-learning patents and pending applications.", sources: ["bofa-patents-2024"] },
    { date: "2025-04-01", title: "Workforce AI adoption: 1 million training simulations", detail: "The Academy uses AI conversation simulators for coaching; employees completed more than a million simulations in a year.", sources: ["bofa-workforce-2025"] },
    { date: "2025-08-20", title: "$13 billion tech agenda, $4 billion for new capabilities", detail: "New CTIO Gopalkrishnan tells the Wall Street Journal to expect a steady stream of AI releases, doubling down on high-value use cases.", sources: ["wsj-gopalkrishnan-2025"] },
    { date: "2025-08-01", title: "Erica passes 3 billion interactions", detail: "Nearly 50 million users since launch; more than 58 million interactions a month.", sources: ["bofa-erica-3b-2025"] },
    { date: "2025-09-01", title: "CashPro gets a generative-AI assistant", detail: "The bank restates its four AI domains: intelligent agents, search and summarisation, content generation, operations and coding.", sources: ["bofa-cashpro-genai-2025"] },
    { date: "2025-11-17", title: "AI is boosting bankers' productivity and revenue", detail: "The CTIO says the bank will spend billions on AI to raise banker productivity and bring in revenue.", sources: ["reuters-productivity-2025"] },
    { date: "2026-01-22", title: "Erica 'does the work of 11,000 people'", detail: "Investor-day disclosure: 20 million regular users, 2 million interactions a day.", sources: ["ab-erica-11000-2026"] },
    { date: "2026-03-26", title: "AI meeting tools for Merrill and the Private Bank", detail: "Meeting prep, summaries and next steps integrated with Salesforce and Zoom; about 15,000 employees in the first phase.", sources: ["bofa-merrill-2026", "ab-merrill-2026"] },
    { date: "2026-06-03", title: "4,000 interns and campus hires despite AI", detail: "2,000 full-time recruits and 2,000 internships, a signal on entry-level roles.", sources: ["reuters-interns-2026"] },
    { date: "2026-06-08", title: "Moynihan: 'the data has to be perfect'", detail: "The CEO emphasises model accuracy over efficiency and cost savings.", sources: ["ab-moynihan-data-2026"] },
    { date: "2026-07-15", title: "Q2 call: 400,000 prompts a day, 300+ use cases", detail: "Executives attribute revenue and efficiency improvements to AI; every approved use case has 'good economics'.", sources: ["ab-moynihan-economics-2026"] },
    { date: "2026-07-17", title: "New heads of digital assets and AI transformation", detail: "Kevin Milsom named head of platforms AI transformation.", sources: ["bloomberg-promotions-2026"] },
    { date: "2026-07-21", title: "EricaAssist gets generative AI", detail: "Employee-facing agent summarises the call reason and recommends next steps; average call time falls by nearly a minute.", sources: ["bofa-ericaassist-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Erica", detail: "Consumer virtual assistant; 2 million interactions a day.", status: "In production", sources: ["ab-erica-11000-2026"] },
    { useCase: "generative-agentic-ai", name: "EricaAssist and employee tools", detail: "Human-assisted AI agent for customer-service staff; Merrill advisor meeting journey; 400,000 prompts a day across the workforce.", status: "In production", sources: ["bofa-ericaassist-2026", "ab-moynihan-economics-2026"] },
    { useCase: "generative-agentic-ai", name: "CashPro Forecasting and Data Intelligence", detail: "AI cash forecasting for corporate clients; 3,000 companies, 250,000 hours saved in 2025.", status: "In production", sources: ["bofa-cashpro-forecasting-2025"] },
    { useCase: "governance-general", name: "The Academy simulators", detail: "AI conversation simulators for employee coaching.", status: "In production", sources: ["bofa-workforce-2025"] },
    { useCase: "cybersecurity", name: "Frontier-model testing", detail: "Part of Anthropic's Glasswing programme from the start; testing Mythos internally, per Reuters sources.", status: "Pilot", sources: ["reuters-mythos-2026"] }
  ],
  numbers: [
    { label: "Technology budget", value: "$13 billion, of which $4 billion for new technology", asOf: "2025-08-20", sources: ["wsj-gopalkrishnan-2025", "reuters-productivity-2025"] },
    { label: "Erica interactions", value: "3 billion+ cumulative; 2 million a day", asOf: "2026-01-22", sources: ["bofa-erica-3b-2025", "ab-erica-11000-2026"] },
    { label: "Employee prompts", value: "400,000+ a day", asOf: "2026-07-15", sources: ["ab-moynihan-economics-2026"] },
    { label: "Approved AI use cases", value: "300+", asOf: "2026-07-15", sources: ["ab-moynihan-economics-2026"] },
    { label: "AI/ML patents and applications", value: "≈ 1,100", asOf: "2024-10-01", sources: ["bofa-patents-2024"] },
    { label: "Digital share of client interactions", value: "94%", asOf: "2026-06-01", sources: ["ab-katz-2026"] }
  ],
  quotes: [
    { who: "Brian Moynihan", role: "Chairman and CEO", date: "2026-07-15", quote: "More than 300 AI use cases, all of which have good economics.", sources: ["ab-moynihan-economics-2026"] },
    { who: "Hari Gopalkrishnan", role: "CTIO", date: "2026-06-01", quote: "We have zero tolerance for things like hallucinations, bias.", sources: ["ab-cto-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; revised model risk guidance in force, with generative AI governed outside it.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "cfpb", why: "Erica is the largest consumer bank chatbot in the US — the CFPB's chatbot spotlight names the bank by user count.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; third-party guidance governs the models behind EricaAssist and advisor tools.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "fsb", why: "G-SIB; the FSB's sound practices on human oversight and data governance map onto the bank's stated posture.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "A decade of one assistant is the moat", detail: "Erica's seven years of interaction data is what makes EricaAssist and the advisor tools credible quickly. Competitors launching gen-AI chatbots in 2026 start without that corpus." },
    { title: "Accuracy-first is a regulatory posture as much as an engineering one", detail: "'Zero tolerance for hallucinations' and 'the data has to be perfect' are the language of UDAAP and adverse-action risk. Expect the bank to keep customer-facing generative AI narrower than peers." },
    { title: "The metrics to watch are hours and interactions, not headcount", detail: "The bank reports 250,000 client hours saved and calls handled, and keeps hiring at the entry level. If that changes, the strategy has changed." },
    { title: "Corporate treasury is the quiet AI product line", detail: "CashPro Forecasting and Data Intelligence are AI products sold to 3,000-plus corporate clients — a revenue line, not a cost line." }
  ],
  faq: [
    { q: "What is Erica at Bank of America?", a: "Erica is Bank of America's AI virtual financial assistant, launched in 2018. By August 2025 it had assisted nearly 50 million users and passed 3 billion interactions; by the January 2026 investor day it handled 2 million interactions a day, which the bank says is the work of 11,000 people. EricaAssist is the employee-facing version that supports customer-service staff during calls." },
    { q: "How much does Bank of America spend on technology and AI?", a: "About $13 billion a year on technology in 2025, of which $4 billion was set aside for new capabilities including AI, according to the bank's CTIO in the Wall Street Journal and Reuters." }
  ],
  sources: [
    { id: "bofa-erica-3b-2025", title: "A Decade of AI Innovation: BofA's Virtual Assistant Erica Surpasses 3 Billion Client Interactions", publisher: "Bank of America Newsroom", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/08/a-decade-of-ai-innovation--bofa-s-virtual-assistant-erica-surpas.html", date: "2025-08-01" },
    { id: "bofa-ericaassist-2026", title: "Bank of America Enhances EricaAssist with Generative AI", publisher: "Bank of America Newsroom", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/07/bank-of-america-enhances-ericaassist-with-generative-ai-to-help-.html", date: "2026-07-21" },
    { id: "bofa-merrill-2026", title: "Merrill and Bank of America Private Bank Launch AI-Powered Meeting Journey", publisher: "Bank of America Newsroom", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/03/merrill-and-bank-of-america-private-bank-launch-ai-powered-meeti.html", date: "2026-03-26" },
    { id: "bofa-cashpro-genai-2025", title: "BofA's New GenAI Assistant Transforms Global Payments Solutions", publisher: "Bank of America Newsroom", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/09/bofa-s-new-genai-assistant-transforms-global-payments-solutions.html", date: "2025-09-01" },
    { id: "bofa-workforce-2025", title: "AI Adoption by BofA's Global Workforce Improves Productivity, Client Service", publisher: "Bank of America Newsroom", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2025/04/ai-adoption-by-bofa-s-global-workforce-improves-productivity--cl.html", date: "2025-04-01" },
    { id: "bofa-patents-2024", title: "AI Patents at BofA Increase 94% Since 2022", publisher: "Bank of America Newsroom", url: "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2024/10/ai-patents-at-bofa-increase-94--since-2022.html", date: "2024-10-01" },
    { id: "bofa-cashpro-forecasting-2025", title: "BofA's AI Solution CashPro Forecasting Helps Clients Navigate Year of Volatility", publisher: "Bank of America via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202512110915PR_NEWS_USPRX____NY43834-1", date: "2025-12-11" },
    { id: "wsj-gopalkrishnan-2025", title: "The Man Behind Bank of America's $13 Billion Tech Agenda", publisher: "The Wall Street Journal", url: "https://www.wsj.com/articles/the-man-behind-bank-of-americas-13-billion-tech-agenda-3d770a2d", date: "2025-08-20" },
    { id: "reuters-productivity-2025", title: "BofA says AI is boosting bankers' productivity, revenue", publisher: "Reuters", url: "https://www.reuters.com/business/finance/bofa-says-ai-is-boosting-bankers-productivity-revenue-2025-11-17/", date: "2025-11-17" },
    { id: "reuters-interns-2026", title: "Bank of America to hire interns, campus recruits despite AI threat", publisher: "Reuters", url: "https://www.reuters.com/business/finance/bank-america-hire-interns-campus-recruits-despite-ai-threat-2026-06-03/", date: "2026-06-03" },
    { id: "reuters-mythos-2026", title: "Banking industry scrambles for Anthropic's Mythos as global regulators review risks", publisher: "Reuters", url: "https://www.reuters.com/business/finance/banks-close-contact-with-european-regulator-anthropics-mythos-banker-says-2026-04-20/", date: "2026-04-20" },
    { id: "ab-erica-11000-2026", title: "How Bank of America's Erica does the work of 11,000 people", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-bank-of-americas-erica-does-the-work-of-11-000-people", date: "2026-01-22" },
    { id: "ab-merrill-2026", title: "Bank of America gives Merrill Lynch an AI makeover", publisher: "American Banker", url: "https://www.americanbanker.com/news/bank-of-america-gives-merrill-lynch-an-ai-makeover", date: "2026-03-26" },
    { id: "ab-moynihan-economics-2026", title: "Bank of America's Moynihan touts 'good economics' of AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/bank-of-americas-moynihan-touts-good-economics-of-ai", date: "2026-07-15" },
    { id: "ab-moynihan-data-2026", title: "'The data has to be perfect': BofA CEO Moynihan on AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/the-data-has-to-be-perfect-bofa-ceo-moynihan-on-ai", date: "2026-06-08" },
    { id: "ab-cto-2026", title: "Bank of America's CTO champions a disciplined approach to AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/bofas-cto-is-12-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-katz-2026", title: "Nikki Katz's 'Big Year of Scale' at Bank of America", publisher: "American Banker", url: "https://www.americanbanker.com/news/bank-of-americas-head-of-digital-is-10-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "bloomberg-promotions-2026", title: "BofA Promotes Leaders to Drive Adoption of Crypto, AI Technology", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-07-17/bofa-promotes-leaders-to-drive-adoption-of-crypto-ai-technology", date: "2026-07-17" }
  ],
  lastUpdated: "2026-09-09"
};
