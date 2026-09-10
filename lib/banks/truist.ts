import type { Bank } from "@/lib/banks";

export const TRUIST: Bank = {
  slug: "truist",
  name: "Truist Financial",
  shortName: "Truist",
  ticker: "TFC",
  hq: "Charlotte, NC",
  fedRank: 9,
  leadBank: "Truist Bank",
  assetsUsdMillions: 541180,
  charter: "State nonmember bank (FDIC)",
  posture: "Post-merger catch-up turned into a sprint: 50-plus use cases in a year, a chief AI officer from Microsoft, and 'digital teammates' hired in 2026.",
  platform: {
    name: "Truist Insights and the 'digital teammates'",
    detail: "Truist Insights, the personalisation engine, has delivered more than 2 billion proactive financial insights since 2023; the next layer is TDTs — 'Truist digital teammates', AI agents the CIO says will be formally hired into his organisation in 2026, put on corrective-action plans when they stray and retired when no longer needed.",
    sources: ["truist-insights-2026", "ab-hagerman-2026"]
  },
  answerFirst:
    "Truist spent its first years after the 2019 BB&T–SunTrust merger integrating systems and stabilising risk; its AI program is the second act. In 2025 the bank deployed more than 50 AI use cases across fraud, digital engagement, call centres, wholesale banking and operations, hired Pascal Belaud from Microsoft as chief AI and data officer, and saw nearly half of a 63% jump in patent filings come from AI inventions. CIO Steve Hagerman's framing is unusually concrete: AI agents as 'digital teammates' that are hired, trained, given more autonomy as their success rate rises, placed on corrective action when they exceed boundaries, and eventually retired — with the first formally joining his organisation in 2026. With Mike Lyons taking over as CEO in September 2026 after years of lacklustre post-merger results, AI is one of the few levers management has been willing to quantify.",
  keyPoints: [
    "More than 50 AI use cases deployed in 2025 across fraud prevention, digital engagement, call centres, wholesale banking and internal operations.",
    "November 2025: Pascal Belaud, a long-tenured Microsoft executive, named chief AI and data officer, reporting to CIO Steve Hagerman.",
    "Truist Insights: more than 2 billion AI-powered proactive insights delivered to consumer, small-business and wealth clients since 2023.",
    "Patent filings up 63% in a year, nearly half of them AI-powered inventions (June 2026).",
    "'Digital teammates' (TDTs): AI agents in final proof-of-concept, to be hired into the technology organisation in 2026 with human oversight, boundaries and corrective-action plans.",
    "Executive AI training done by hands-on scenarios rather than slides — weekly prompts discussed in the CEO huddle, with a board program on AI ethics and governance in design."
  ],
  leadership: [
    { name: "Steve Hagerman", role: "Chief Information Officer", sources: ["ab-hagerman-2026"], linkedin: "https://www.linkedin.com/in/hagermansteve/" },
    { name: "Pascal Belaud", role: "Chief AI & Data Officer", sources: ["truist-belaud-2025"], linkedin: "https://www.linkedin.com/in/pascalbelaud/" },
    { name: "Chris Ward", role: "Head of Enterprise Payments", sources: ["ab-ward-2026"], linkedin: "https://www.linkedin.com/in/j-christopher-ward/" },
    { name: "Mike Lyons", role: "CEO (from September 2026)", sources: ["bloomberg-lyons-2026"], linkedin: "https://www.linkedin.com/in/mike-lyons-02a72488/" }
  ],
  timeline: [
    { date: "2023-10-01", title: "Chief data, AI and analytics officer hired", detail: "Tom Mazzaferro joins from JPMorgan, HSBC and Western Union to lead data and AI.", sources: ["ab-mazzaferro-2025"] },
    { date: "2024-10-01", title: "Steve Hagerman becomes CIO", detail: "Early priority: embedding AI and automation in the core operating model, after stabilising risk systems.", sources: ["ab-hagerman-2026"] },
    { date: "2025-06-04", title: "Two-track fraud AI", detail: "Machine learning for defined patterns; generative models for undefined threats.", sources: ["ab-fraud-2025"] },
    { date: "2025-08-20", title: "Multi-year investment includes Client Pulse", detail: "A patent-pending AI tool aggregating client feedback across millions of conversations.", sources: ["truist-investment-2025"] },
    { date: "2025-11-19", title: "Pascal Belaud named chief AI & data officer", detail: "From Microsoft; responsible for AI, data and advanced-automation strategy across the enterprise.", sources: ["truist-belaud-2025"] },
    { date: "2025-12-31", title: "50-plus AI use cases deployed in 2025", detail: "Across fraud, digital, call centres, wholesale and operations.", sources: ["ab-hagerman-2026"] },
    { date: "2026-02-03", title: "AI-enabled receivables platform", detail: "Machine learning matches payments to invoices and remittances for commercial clients.", sources: ["truist-receivables-2026"] },
    { date: "2026-06-01", title: "'Digital teammates' to be hired in 2026", detail: "Hagerman describes agents that are trained, promoted, corrected and retired like staff.", sources: ["ab-hagerman-2026"] },
    { date: "2026-06-11", title: "Patent filings up 63%, half AI", detail: "The bank credits more employee ideas and a deliberate effort to embed machine learning.", sources: ["truist-patents-2026"] },
    { date: "2026-09-03", title: "2 billion proactive insights", detail: "Truist Insights milestone since 2023.", sources: ["truist-insights-2026"] },
    { date: "2026-09-03", title: "Mike Lyons takes over as CEO", detail: "Bloomberg notes the low bar set by years of lacklustre post-merger results.", sources: ["bloomberg-lyons-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Truist Insights", detail: "Personalisation engine delivering proactive insights and advice in digital channels.", status: "In production", sources: ["truist-insights-2026"] },
    { useCase: "fraud", name: "Fraud detection", detail: "ML for defined patterns plus generative AI for undefined threats.", status: "In production", sources: ["ab-fraud-2025", "ab-hagerman-2026"] },
    { useCase: "generative-agentic-ai", name: "Truist digital teammates (TDTs)", detail: "AI agents in final proof-of-concept, to be hired into technology in 2026.", status: "Pilot", sources: ["ab-hagerman-2026"] },
    { useCase: "generative-agentic-ai", name: "Integrated receivables", detail: "AI cash application for commercial and corporate clients.", status: "In production", sources: ["truist-receivables-2026"] },
    { useCase: "governance-general", name: "Client Pulse", detail: "Patent-pending AI aggregating client feedback across millions of conversations.", status: "Pilot", sources: ["truist-investment-2025"] }
  ],
  numbers: [
    { label: "AI use cases deployed in 2025", value: "50+", asOf: "2026-06-01", sources: ["ab-hagerman-2026"] },
    { label: "Proactive insights delivered since 2023", value: "2 billion+", asOf: "2026-09-03", sources: ["truist-insights-2026"] },
    { label: "Patent filings", value: "+63% in a year; nearly half AI", asOf: "2026-06-11", sources: ["truist-patents-2026"] },
    { label: "Leaders in hands-on AI training", value: "top 1,200 plus the board", asOf: "2026-06-01", sources: ["ab-hagerman-2026"] }
  ],
  quotes: [
    { who: "Steve Hagerman", role: "CIO", date: "2026-06-01", quote: "You can't describe AI to someone. They have to get their hands on it.", sources: ["ab-hagerman-2026"] },
    { who: "Steve Hagerman", role: "CIO", date: "2026-06-01", quote: "They will be hired into my organization formally within the calendar year of 2026.", sources: ["ab-hagerman-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Truist Bank is a state nonmember bank; the FDIC's adoption of the revised model risk guidance (FIL-15-2026) is the operative version.", docSlugs: ["fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; the agentic 'digital teammates' sit outside SR 26-2 and inside broader governance.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and small-business lending; Truist Insights delivers advice to consumers, where UDAAP and adverse-action rules apply.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fsb", why: "The FSB's human-oversight practice — extra measures for highly autonomous agents — is the external yardstick for the TDT model.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "The 'digital teammate' model is a governance design, stated in HR language", detail: "Hiring, corrective action, promotion by success rate and retirement map one-to-one onto the autonomy ladder and lifecycle supervisors describe. It is the most concrete agent-governance metaphor any bank has offered." },
    { title: "Board and executive literacy is being built deliberately", detail: "Weekly hands-on scenarios for 1,200 leaders and a board program on AI ethics are what the EU AI Act's literacy duty and the FSB's adaptability practice ask for, done before they are required in the US." },
    { title: "A new CEO inherits a quantified AI program", detail: "Use-case counts, patent shares and insight volumes give Lyons a baseline to hold the organisation to; watch whether AI moves from the CIO's org to the front line under him." },
    { title: "Fraud is the proving ground", detail: "The two-track fraud approach is where the bank has been most specific about which model type fits which problem — the pattern it will likely extend to agents." }
  ],
  faq: [
    { q: "Who leads AI at Truist?", a: "Pascal Belaud has been Truist's chief AI and data officer since November 24, 2025, joining after a long tenure at Microsoft and reporting to CIO Steve Hagerman, who has led the technology organisation since October 2024 and set the bank's agentic 'digital teammates' direction." },
    { q: "What are Truist's 'digital teammates'?", a: "Truist digital teammates, or TDTs, are AI agents that CIO Steve Hagerman says will be formally hired into his organisation during 2026 after a final proof-of-concept phase. They operate under human oversight and clear boundaries, are placed on corrective-action plans if they exceed them, can gain autonomy based on their success rate, and can be retired when no longer needed." }
  ],
  sources: [
    { id: "ab-hagerman-2026", title: "Steve Hagerman's agentic vision for Truist's future", publisher: "American Banker", url: "https://www.americanbanker.com/news/the-truist-cio-is-34-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-fraud-2025", title: "How Truist and Western Alliance deploy AI to fight fraud", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-truist-and-western-alliance-deploy-ai-to-fight-fraud", date: "2025-06-04" },
    { id: "ab-ward-2026", title: "Truist's Chris Ward is #42 on the Most Innovative People in Finance ranking", publisher: "American Banker", url: "https://www.americanbanker.com/news/truists-chris-ward-is-42-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-mazzaferro-2025", title: "Thomas Mazzaferro, Chief Data, AI, and Analytics Officer, Truist (profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/thomas-mazzaferro", date: "2025-04-15" },
    { id: "truist-belaud-2025", title: "Truist names Pascal Belaud as chief AI & data officer", publisher: "Truist", url: "https://media.truist.com/2025-11-19-Truist-names-Pascal-Belaud-as-chief-AI-data-officer", date: "2025-11-19" },
    { id: "truist-receivables-2026", title: "Truist launches AI-enabled receivables platform", publisher: "Truist", url: "https://media.truist.com/2026-02-03-Truist-launches-AI-enabled-receivables-platform-to-accelerate-cash-application-and-minimize-exceptions", date: "2026-02-03" },
    { id: "truist-patents-2026", title: "Truist patent boom fueled by AI & machine learning", publisher: "Truist", url: "https://ir.truist.com/2026-06-11-Truist-patent-boom-fueled-by-AI-machine-learning", date: "2026-06-11" },
    { id: "truist-investment-2025", title: "Truist announces significant multi-year investment in high-growth markets", publisher: "Truist", url: "https://ir.truist.com/2025-08-20-Truist-announces-significant-multi-year-investment-in-high-growth-markets", date: "2025-08-20" },
    { id: "truist-insights-2026", title: "Truist delivers 2 billion AI-powered proactive insights", publisher: "Truist via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202609030730PR_NEWS_USPRX____CL39481-1", date: "2026-09-03" },
    { id: "bloomberg-lyons-2026", title: "Being Big Doesn't Guarantee You'll Control Your Own Fate", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/newsletters/2026-09-03/being-big-in-banking-doesn-t-guarantee-you-ll-control-your-own-fate", date: "2026-09-03" }
  ],
  lastUpdated: "2026-09-09"
};
