import type { Bank } from "@/lib/banks";

export const SOFI: Bank = {
  slug: "sofi",
  name: "SoFi Technologies",
  shortName: "SoFi",
  ticker: "SOFI",
  hq: "San Francisco, CA",
  fedRank: 46,
  leadBank: "SoFi Bank, National Association",
  assetsUsdMillions: 49668,
  charter: "National bank (OCC); Utah-based subsidiary of a bank holding company",
  posture: "A branchless national bank shipping consumer-facing AI faster than any large incumbent: Cash Coach, SoFi Coach and the acquired Composer strategy engine, on top of AI-heavy engineering and a Galileo/Technisys technology stack it also sells to others.",
  platform: {
    name: "SoFi Coach, Composer by SoFi and the Galileo / Technisys stack",
    detail: "SoFi's consumer AI runs inside its 'everything app'. Cash Coach (third quarter 2025) scans a member's SoFi and external accounts for 'suboptimal' cash and suggests moving deposits or paying down high-rate cards. SoFi Coach (2 June 2026) is a chat-based financial guide built with the firm's financial planners, connected to more than 12,000 institutions through Relay; in testing nearly 70% of engaged members took a meaningful financial action, and SoFi plans to let it open accounts, transfer money and pay down debt over time. Composer by SoFi (23 June 2026), from the acquisition of Composer Securities, lets investors describe a strategy in plain English, back-test it and automate execution, with more than 2,000 community strategies. Underneath sit Galileo and Technisys, the payment-processing and core-banking platforms SoFi owns and sells to other institutions, plus a two-million-line Flutter mobile monorepo whose 2025 to 2026 design-system migration was executed with AI tools in scoping, coding, review and testing.",
    sources: ["ab-cashcoach-2025", "ft-coach-2026", "ft-composer-2026", "sofi-mobile-2026"]
  },
  answerFirst:
    "SoFi Technologies, the San Francisco fintech that became a bank holding company in 2022 and now runs SoFi Bank, N.A. with about $50 billion of bank assets and 15.8 million members, is the most aggressive consumer-AI shipper among the 50 largest US banks. In the third quarter of 2025 it launched Cash Coach, an AI insights engine that looks across a member's SoFi and external accounts for cash earning 'two lousy basis points' at a big bank and suggests moving it or paying down a 25% credit card, explicitly a tool to pull deposits from incumbents. On 2 June 2026 it launched SoFi Coach, a chat-based financial guide built with its financial planners and trained, according to head of advice Brian Walsh, to present advice the way humans act on it (snowball over avalanche debt paydown); in testing nearly 70% of engaged members took a meaningful step such as paying down high-interest debt, and SoFi plans to add account opening, transfers and subscription cancellation. On 23 June 2026 it launched Composer by SoFi after acquiring Composer Securities, an AI platform that turns a plain-English investing idea into a back-tested, automatically executed strategy. Chief executive Anthony Noto, ranked ninth on American Banker's 2026 innovators list, frames these as a 'financial services productivity loop' that raises lifetime value; chief technology officer Jeremy Rishel (ranked 22nd) also oversees a stablecoin, SoFiUSD, and Bitcoin Lightning remittances. Engineering runs on AI too: a 2026 migration of the two-million-line mobile codebase was executed with LLM tools 'in every phase'. Financially, second-quarter 2026 revenue was a record $1.2 billion with net income of $157 million, 35% member growth and 51% of new products opened by existing members, and 2026 revenue guidance was raised to $4.75 to $4.85 billion. As a national bank SoFi's AI coaching sits squarely under OCC supervision and the CFPB's chatbot and adverse-action rules.",
  keyPoints: [
    "Three consumer AI launches in nine months: Cash Coach (Q3 2025, deposit and debt optimisation), SoFi Coach (June 2026, chat-based guide built with financial planners) and Composer by SoFi (June 2026, natural-language investing strategies).",
    "Coach is designed for behaviour, not just maths: trained to position advice the way people act (snowball over avalanche) and evaluated by SoFi's human planners; ~70% of engaged testers took action.",
    "Agentic roadmap stated: Coach to open accounts, set up contributions, transfer money and cancel subscriptions; Composer already executes strategies automatically under investor-set rules.",
    "AI as a deposit weapon: Cash Coach explicitly targets cash and card balances held at big banks; CEO calls it a 'financial services productivity loop'.",
    "Engineering at scale with AI: the two-million-line Flutter mobile monorepo's design-system migration used LLM tools from scoping to code review, on 40,000-plus automated tests.",
    "Scale and growth: 15.8 million members, record $1.2 billion Q2 2026 revenue, $157 million net income, guidance raised to $4.75 to $4.85 billion; leadership ranked ninth (Noto) and 22nd (Rishel) among 2026 innovators."
  ],
  leadership: [
    { name: "Anthony Noto", role: "Chief Executive Officer", sources: ["ab-noto-2026", "ab-cashcoach-2025"] },
    { name: "Jeremy Rishel", role: "Chief Technology Officer", sources: ["ab-rishel-2026"], linkedin: "https://www.linkedin.com/in/jeremyrishel/" },
    { name: "Brian Walsh", role: "Head of Advice and Planning (SoFi Coach)", sources: ["bankingdive-coach-2026"], linkedin: "https://www.linkedin.com/in/brianmwalsh/" }
  ],
  timeline: [
    { date: "2025-07-14", title: "SoFi Tech Solutions on conversational AI", detail: "SoFi's own deployment of Galileo's Konecta cut chat abandonment 50% and sped responses 65%.", sources: ["sofi-tech-chatbot-2025"] },
    { date: "2025-10-28", title: "Cash Coach launched to target big-bank deposits", detail: "AI insights engine across SoFi and external accounts; a fuller SoFi Coach promised for 2026.", sources: ["ab-cashcoach-2025"] },
    { date: "2026-04-29", title: "Record first quarter; guidance unchanged", detail: "Net income $167 million; shares fell 12% on unchanged outlook.", sources: ["reuters-q1-2026"] },
    { date: "2026-06-01", title: "Noto ninth, Rishel 22nd on innovators ranking", detail: "13.7 million members and $3.6 billion 2025 revenue cited; stablecoin and Lightning payments.", sources: ["ab-noto-2026", "ab-rishel-2026"] },
    { date: "2026-06-02", title: "SoFi Coach launched for SoFi Plus members", detail: "Chat-based guide built with planners; ~70% of engaged testers acted.", sources: ["ft-coach-2026"] },
    { date: "2026-06-09", title: "What SoFi learned testing Coach", detail: "Advice reframed for human behaviour; more autonomy planned over time.", sources: ["bankingdive-coach-2026"] },
    { date: "2026-06-23", title: "Composer by SoFi launched after acquisition", detail: "Natural-language strategy creation, back-testing and automated execution.", sources: ["ft-composer-2026", "bloomberg-composer-2026"] },
    { date: "2026-07-06", title: "AI-executed mobile design-system migration", detail: "LLM tools in every phase of a two-million-line Flutter migration.", sources: ["sofi-mobile-2026"] },
    { date: "2026-07-29", title: "Record second-quarter 2026", detail: "Revenue $1.2 billion; net income $157 million; 15.8 million members; guidance raised.", sources: ["ft-q2-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "SoFi Coach", detail: "Chat-based AI financial guide on member and external account data; planner-built.", status: "Rolling out", sources: ["ft-coach-2026", "bankingdive-coach-2026"] },
    { useCase: "customer-chatbots", name: "Cash Coach", detail: "AI insights engine that recommends moving idle cash and paying down high-rate debt.", status: "In production", sources: ["ab-cashcoach-2025"] },
    { useCase: "generative-agentic-ai", name: "Composer by SoFi", detail: "Natural-language creation, back-testing and automated execution of investment strategies.", status: "In production", sources: ["ft-composer-2026", "bloomberg-composer-2026"] },
    { useCase: "generative-agentic-ai", name: "Agentic actions inside Coach", detail: "Planned: open accounts, set up contributions, transfer money, cancel subscriptions.", status: "Announced", sources: ["ft-coach-2026", "ab-cashcoach-2025"] },
    { useCase: "generative-agentic-ai", name: "AI-assisted software engineering", detail: "LLM tools in scoping, coding, review and testing of the mobile monorepo.", status: "In production", sources: ["sofi-mobile-2026"] },
    { useCase: "customer-chatbots", name: "Conversational AI support (Galileo Konecta)", detail: "50% lower chat abandonment, 65% faster responses.", status: "In production", sources: ["sofi-tech-chatbot-2025"] }
  ],
  numbers: [
    { label: "Members", value: "15.8 million (+35% y/y)", asOf: "2026-07-29", sources: ["ft-q2-2026"] },
    { label: "Second-quarter 2026 net revenue / net income", value: "$1.2 billion / $157 million", asOf: "2026-07-29", sources: ["ft-q2-2026"] },
    { label: "Engaged Coach testers who took a meaningful financial action", value: "≈ 70%", asOf: "2026-06-02", sources: ["ft-coach-2026"] },
    { label: "Community-built strategies on Composer", value: "> 2,000", asOf: "2026-06-23", sources: ["ft-composer-2026"] },
    { label: "Institutions connectable through Relay", value: "> 12,000", asOf: "2026-06-02", sources: ["ft-coach-2026"] },
    { label: "Mobile monorepo migrated with AI tooling", value: "> 2 million lines; 40,000+ tests", asOf: "2026-07-06", sources: ["sofi-mobile-2026"] },
    { label: "2026 adjusted net revenue guidance", value: "$4.75–4.85 billion", asOf: "2026-07-29", sources: ["ft-q2-2026"] }
  ],
  quotes: [
    { who: "Anthony Noto", role: "Chief Executive Officer", date: "2025-10-28", quote: "Ultimately, SoFi Coach will supercharge financial services productivity loop and lead to a deeper relationship that drives a higher lifetime value.", sources: ["ab-cashcoach-2025"] },
    { who: "Brian Walsh", role: "Head of Advice and Planning", date: "2026-06-09", quote: "Here's what the math and the science say, but here's how humans actually behave, so let's position it this way, so that way, they're more likely to take positive action in their lives.", sources: ["bankingdive-coach-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "SoFi Bank, N.A. is a national bank; AI coaching that recommends moving deposits and paying debt, and agentic actions, fall under OCC model-risk and gen-AI supervision.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "Consumer-facing AI chat that gives financial guidance and could take actions is the core case in the CFPB's chatbot circular; lending recommendations touch ECOA.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "Composer executes investment strategies and Coach discusses portfolios; the SEC's predictive-analytics and AI-washing focus applies to the broker-dealer and adviser entities.", docSlugs: ["sec-pda-conflicts-proposal-34-97990", "sec-exam-priorities-fy2026"] },
    { authority: "federal-reserve", why: "Holding-company oversight of model risk across the Galileo and Technisys platforms SoFi also sells to third parties.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "Coach is the first mass-market agentic-banking test", detail: "Once it opens accounts and moves money, every UDAAP, ECOA and Reg E question about AI acting for consumers lands on SoFi first; its planner-in-the-loop design is the right posture." },
    { title: "Composer moves AI from advice to execution", detail: "Automated strategy execution for retail investors is where SEC scrutiny of conflicts and disclosure is sharpest; the 'information, not advice' line will be tested." },
    { title: "Behaviour-trained advice needs documented rationale", detail: "Recommending snowball over avalanche is defensible; examiners will want the reasoning recorded so 'suboptimal' guidance is not read as steering." },
    { title: "AI in engineering is a model-risk blind spot", detail: "LLM-generated production code across the mobile app is a change-management and software-supply-chain exposure that model-risk frameworks were not written for." }
  ],
  faq: [
    { q: "What AI products does SoFi offer?", a: "Three: Cash Coach (launched in the third quarter of 2025), which scans a member's accounts for idle cash and expensive debt; SoFi Coach (2 June 2026), a chat-based AI financial guide built with SoFi's financial planners that helps members track spending, manage debt and plan goals; and Composer by SoFi (23 June 2026), which turns a plain-English investing idea into a back-tested, automatically executed strategy." },
    { q: "Will SoFi Coach take actions on a member's behalf?", a: "Not yet. At launch Coach gives personalised information and next steps. SoFi has said that over time it plans to let Coach open accounts, set up recurring contributions, transfer money and pay down debt, and its head of advice has said autonomy will be added gradually because some members want automation and others do not." }
  ],
  sources: [
    { id: "ab-cashcoach-2025", title: "SoFi targets bank deposits with consumer-facing AI", publisher: "American Banker", url: "https://americanbanker.com/news/sofi-targets-bank-deposits-with-consumer-facing-ai", date: "2025-10-28" },
    { id: "ab-noto-2026", title: "#9 Anthony Noto's leadership may not equate to SoFi's 'Miracle on Ice,' but it's pretty close", publisher: "American Banker", url: "https://americanbanker.com/news/sofis-anthony-noto-is-9-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-rishel-2026", title: "#22 SoFi's Jeremy Rishel plays the trust card with customers and their digital assets", publisher: "American Banker", url: "https://www.americanbanker.com/news/sofis-jeremy-rishel-is-22-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "bankingdive-coach-2026", title: "What SoFi learned testing its AI adviser Coach", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/sofi-bank-ai-adviser-coach-financial-planning/822329/", date: "2026-06-09" },
    { id: "bloomberg-composer-2026", title: "SoFi Announces New AI Trading Tool for Individual Investors", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-23/sofi-announces-new-ai-trading-tool-for-individual-investors", date: "2026-06-23" },
    { id: "ft-coach-2026", title: "Introducing SoFi Coach: An AI-Powered Financial Guide to Help Members Get Their Money Right", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202606020900BIZWIRE_USPRX____20260602_BW942219-1", date: "2026-06-02" },
    { id: "ft-composer-2026", title: "Introducing Composer by SoFi: AI-Powered Investing From Idea to Execution", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202606230800BIZWIRE_USPRX____20260623_BW095057-1", date: "2026-06-23" },
    { id: "ft-q2-2026", title: "SoFi Reports Second Quarter 2026 with Record Net Revenue of $1.2 Billion, Record Member and Product Growth, Net Income of $157 Million", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607290700BIZWIRE_USPRX____20260729_BW569583-1", date: "2026-07-29" },
    { id: "reuters-q1-2026", title: "SoFi's unchanged 2026 forecast eclipses record results, shares fall", publisher: "Reuters", url: "https://www.reuters.com/business/finance/fintech-sofis-profit-doubles-record-loan-member-growth-2026-04-29/", date: "2026-04-29" },
    { id: "sofi-mobile-2026", title: "Leveraging AI for Executing a Complex Mobile Migration", publisher: "SoFi (engineering blog)", url: "https://sofietyblog.sofi.com/leveraging-ai-for-executing-a-complex-mobile-migration", date: "2026-07-06" },
    { id: "sofi-tech-chatbot-2025", title: "Why Your Bank's Chatbot Isn't Working (And What Comes Next)", publisher: "SoFi Tech Solutions", url: "https://tech.sofi.com/blog/why-your-banks-chatbot-isnt-working-and-what-comes-next", date: "2025-07-14" }
  ],
  lastUpdated: "2026-09-10"
};
