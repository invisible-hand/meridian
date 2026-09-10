import type { Bank } from "@/lib/banks";

export const SCHWAB: Bank = {
  slug: "charles-schwab",
  name: "The Charles Schwab Corporation",
  shortName: "Schwab",
  ticker: "SCHW",
  hq: "Westlake, TX",
  fedRank: 0,
  leadBank: "Charles Schwab Bank, SSB",
  assetsUsdMillions: 517300,
  charter: "Texas savings bank (state member, Federal Reserve); savings and loan holding company",
  posture: "A $517 billion brokerage-and-bank whose CEO calls AI a 'real accelerant' for extending wealthy-client service to everyone, with its first retail gen-AI feature live since May 2026, a gen-AI knowledge assistant for service staff, and an RIA programme to push AI adoption across 63% of advisers already using it.",
  platform: {
    name: "Portfolio Insights, Schwab Knowledge Assistant and Schwab Advisor AI in Action",
    detail: "Schwab's first generative-AI capability for retail clients, Portfolio Insights, began rolling out on 5 May 2026 and reached all self-directed US retail clients by end of May: tailored summaries on the Account Summary page that combine portfolio performance, third-party market news and Schwab Center for Financial Research commentary to explain what may be moving a client's holdings, explicitly 'information, not investment advice' and under Schwab's privacy and security standards. Internally, the Schwab Knowledge Assistant (disclosed February 2025) gives client-service representatives a ChatGPT-like large-language-model search over the Knowledge Center with cited answers to process and policy questions, on top of long-standing machine-learning fraud models and natural-language processing in service. For the 15,000-plus independent advisers who custody with Schwab, Schwab Advisor AI in Action (January 2026) offers education, peer connection and resources after a 533-firm study found 63% using AI, mostly individually for notetaking and email, and only one in ten integrating it into strategy. CIO Dennis Howard leads a combined technology, operations and data organisation from July 2026.",
    sources: ["schwab-insights-2026", "schwab-knowledge-2025", "schwab-ria-2026", "bankingdive-transitions-2026"]
  },
  answerFirst:
    "Charles Schwab, the Westlake, Texas brokerage and savings-and-loan holding company with $517 billion of assets, more than $10 trillion of client assets and a bank that is a savings institution rather than a commercial bank (so it sits outside the Federal Reserve's commercial-bank ranking), treats AI as the answer to the question that hit its shares in February 2026. When an AI tax-planning tool from the start-up Altruist sent wealth-manager stocks tumbling on 10 February, Schwab fell 7.4%; chief executive Rick Wurster said he was 'disappointed and surprised' and that AI would make advisers more efficient rather than irrelevant. By May he was calling AI a 'real accelerant' and telling investors Schwab would use it to extend benefits usually reserved for wealthy clients to the less affluent. The concrete pieces: Portfolio Insights, Schwab's first generative-AI capability for retail investors, launched 5 May 2026 and reached all self-directed US retail clients by end of May, combining holdings performance, market news and Schwab research commentary into per-client explanations of what is moving a portfolio, positioned as information rather than advice after a survey of nearly 1,000 clients found 60% interested in AI and nearly 70% wanting it paired with human expertise; the Schwab Knowledge Assistant, a gen-AI tool with cited answers for client-service representatives, disclosed February 2025 alongside machine-learning fraud detection and natural-language service models Schwab has run for years; and Schwab Advisor AI in Action, a January 2026 programme for independent advisers after Schwab's study found RIA AI adoption had more than doubled since 2023 to 63% but with only one in ten integrating it strategically. In January 2026 CIO Dennis Howard was given a combined technology, operations and data organisation, effective July, and Tyler Woulfe became bank CEO. Business momentum is strong: record first-quarter revenue of $6.48 billion and net income of $2.48 billion, then record second-quarter revenue of $7.1 billion, net income of $2.8 billion, $120 billion of core net new assets, 11.9 million daily average trades, $67 billion of bank loans and the launches of Schwab Crypto and the Teen Investor account. Schwab does not disclose AI spending or headcount.",
  keyPoints: [
    "CEO thesis: AI is a 'real accelerant' that lets Schwab extend wealthy-client service to the less affluent, a direct rebuttal to the February 2026 'AI kills wealth managers' selloff (Schwab −7.4% on 10 February).",
    "First retail gen-AI feature live: Portfolio Insights (from 5 May 2026, all self-directed US retail clients by end of May) explains portfolio moves with Schwab research and market news; information, not advice.",
    "Client research drives the design: 60% of ~1,000 surveyed clients interested in AI, nearly 70% want it paired with human expertise.",
    "Service staff already use gen-AI: the Schwab Knowledge Assistant gives representatives cited LLM answers to process and policy questions; ML fraud models and NLP service models predate it.",
    "Ecosystem push: Schwab Advisor AI in Action (January 2026) after a 533-firm study found 63% of RIAs using AI, mostly ad hoc, with only ~10% integrating it into strategy.",
    "Organisation: CIO Dennis Howard now runs technology, operations and data together (July 2026); record Q2 2026 revenue $7.1 billion and $2.8 billion net income; AI spend undisclosed."
  ],
  leadership: [
    { name: "Rick Wurster", role: "President and CEO", sources: ["bloomberg-accelerant-2026", "bloomberg-boost-2026"], linkedin: "https://www.linkedin.com/in/rickwurster/" },
    { name: "Dennis Howard", role: "Chief Information Officer; head of technology, operations and data (from July 2026)", sources: ["bankingdive-transitions-2026"], linkedin: "https://www.linkedin.com/in/denniswhoward/" },
    { name: "Jonathan Craig", role: "Head of Retail Investing", sources: ["schwab-insights-2026"], linkedin: "https://www.linkedin.com/in/jonathanmcraig/" },
    { name: "Neesha Hathi", role: "Head of Wealth Advisory and Banking Services (from July 2026)", sources: ["bankingdive-transitions-2026"], linkedin: "https://www.linkedin.com/in/neesha-hathi/" },
    { name: "Tyler Woulfe", role: "CEO, Charles Schwab Bank (from July 2026)", sources: ["bankingdive-transitions-2026"], linkedin: "https://www.linkedin.com/in/tyler-woulfe-1733527/" },
    { name: "Lisa Salvi", role: "Head of Business Consulting and Education, Schwab Advisor Services", sources: ["schwab-ria-2026"], linkedin: "https://www.linkedin.com/in/lisa-salvi-1699982/" }
  ],
  timeline: [
    { date: "2025-02-05", title: "Schwab Knowledge Assistant disclosed", detail: "Gen-AI search with cited answers for client-service representatives; ML fraud and NLP models noted.", sources: ["schwab-knowledge-2025"] },
    { date: "2026-01-22", title: "RIA AI study and Advisor AI in Action programme", detail: "63% of 533 RIAs use AI; ~10% integrate it strategically.", sources: ["schwab-ria-2026"] },
    { date: "2026-01-30", title: "Technology, operations and data combined under the CIO", detail: "Bank CEO succession; wealth advisory and banking services organisation created.", sources: ["bankingdive-transitions-2026"] },
    { date: "2026-02-10", title: "Shares fall 7.4% on AI-disruption fears", detail: "Altruist's AI tax tool hits wealth managers.", sources: ["bloomberg-selloff-2026"] },
    { date: "2026-02-11", title: "CEO: AI will boost wealth managers, not hurt them", detail: "Wurster 'disappointed and surprised' by the selloff.", sources: ["bloomberg-boost-2026"] },
    { date: "2026-04-16", title: "Record first-quarter 2026; spot crypto trading announced", detail: "Revenue $6.48 billion; net income $2.48 billion; 1.3 million new accounts.", sources: ["reuters-q1-2026"] },
    { date: "2026-05-05", title: "Portfolio Insights launched", detail: "First gen-AI capability for retail clients; all self-directed US clients by end of May.", sources: ["schwab-insights-2026"] },
    { date: "2026-05-13", title: "AI a 'real accelerant' for serving the less affluent", detail: "CEO plans to extend wealthy-client benefits via AI.", sources: ["bloomberg-accelerant-2026"] },
    { date: "2026-07-21", title: "Record second-quarter 2026", detail: "Revenue $7.1 billion; net income $2.8 billion; Portfolio Insights and Schwab Crypto cited.", sources: ["ft-q2-2026", "sec-q2-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Portfolio Insights", detail: "Gen-AI explanations of portfolio performance with Schwab research and market news.", status: "In production", sources: ["schwab-insights-2026", "ft-q2-2026"] },
    { useCase: "generative-agentic-ai", name: "Schwab Knowledge Assistant", detail: "LLM search over the Knowledge Center with cited answers for service representatives.", status: "In production", sources: ["schwab-knowledge-2025"] },
    { useCase: "fraud", name: "Machine-learning fraud detection", detail: "Long-running ML models across the business.", status: "In production", sources: ["schwab-knowledge-2025"] },
    { useCase: "customer-chatbots", name: "NLP models in client service", detail: "Natural-language processing supporting service interactions.", status: "In production", sources: ["schwab-knowledge-2025"] },
    { useCase: "governance-general", name: "Schwab Advisor AI in Action", detail: "Education, peer networking and resources for RIAs adopting AI.", status: "In production", sources: ["schwab-ria-2026"] },
    { useCase: "generative-agentic-ai", name: "AI to extend premium service to mass-affluent clients", detail: "CEO-stated direction for further client-facing AI.", status: "Announced", sources: ["bloomberg-accelerant-2026"] }
  ],
  numbers: [
    { label: "Total assets", value: "$517.3 billion", asOf: "2026-06-30", sources: ["sec-q2-2026"] },
    { label: "Second-quarter 2026 revenue / net income", value: "$7.1 billion / $2.8 billion", asOf: "2026-07-21", sources: ["ft-q2-2026"] },
    { label: "Core net new assets, Q2 2026", value: "$120 billion", asOf: "2026-07-21", sources: ["ft-q2-2026"] },
    { label: "Daily average trades, Q2 2026", value: "11.9 million (record)", asOf: "2026-07-21", sources: ["ft-q2-2026"] },
    { label: "Bank loan balances", value: "$67.0 billion (+33% y/y)", asOf: "2026-06-30", sources: ["ft-q2-2026"] },
    { label: "Retail clients wanting AI paired with human expertise", value: "≈ 70% (of ≈ 1,000 surveyed)", asOf: "2026-05-05", sources: ["schwab-insights-2026"] },
    { label: "RIAs using AI tools", value: "63% (up from < 30% in 2023)", asOf: "2026-01-22", sources: ["schwab-ria-2026"] },
    { label: "Share move on AI-disruption fears", value: "−7.4% (10 Feb 2026)", asOf: "2026-02-10", sources: ["bloomberg-selloff-2026"] }
  ],
  quotes: [
    { who: "Jonathan Craig", role: "Head of Retail Investing", date: "2026-05-05", quote: "Our clients have made it clear that they want the efficiency of AI combined with guidance from our professionals.", sources: ["schwab-insights-2026"] },
    { who: "Lisa Salvi", role: "Head of Business Consulting and Education, Schwab Advisor Services", date: "2026-01-22", quote: "Firms that set a clear vision and invest in upskilling their talent and building strong data foundations will be better positioned to turn AI from a curiosity into a huge competitive advantage.", sources: ["schwab-ria-2026"] }
  ],
  regulatory: [
    { authority: "sec", why: "Portfolio Insights and any future AI guidance to retail investors sit at the centre of the SEC's predictive-analytics conflicts and AI-washing concerns for broker-dealers and advisers.", docSlugs: ["sec-pda-conflicts-proposal-34-97990", "sec-exam-priorities-fy2026"] },
    { authority: "federal-reserve", why: "Schwab is a savings and loan holding company supervised by the Fed, and Charles Schwab Bank is a state member savings bank; model-risk guidance covers fraud and service models.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Bank deposit and lending products and consumer-facing AI explanations bring UDAAP and chatbot-circular scrutiny.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] }
  ],
  suggestions: [
    { title: "'Information, not advice' is the line Schwab must hold", detail: "Portfolio Insights explains moves without recommending action; the moment it suggests a trade, Reg BI and adviser-conflict rules attach, which is why the wording is careful." },
    { title: "The mass-affluent AI promise is the growth story", detail: "Extending wealthy-client service down-market with AI is the strategic answer to Altruist-style disruption and to Vanguard's move on the RIA custody market; investors will want product dates." },
    { title: "Sweep and bank income remain the exposure", detail: "AI agents that optimise client cash threaten the net interest revenue on hundreds of billions of sweep balances; Schwab's own AI is the hedge." },
    { title: "RIA adoption is Schwab's distribution lever", detail: "If Advisor AI in Action moves RIAs from ad hoc notetaking to integrated AI, Schwab's custody platform becomes the default AI rail for independent advice." }
  ],
  faq: [
    { q: "What is Schwab's Portfolio Insights?", a: "Portfolio Insights is Charles Schwab's first generative-AI capability for retail clients, launched on 5 May 2026 and available to all self-directed US retail clients by the end of May. On the Account Summary page it combines a client's portfolio performance, relevant market news and Schwab Center for Financial Research commentary into tailored summaries of what may be affecting their holdings. Schwab positions it as information, not investment advice." },
    { q: "Why isn't Charles Schwab in the Federal Reserve's ranking of large commercial banks?", a: "Charles Schwab Bank is a savings bank (a Texas state savings bank and Federal Reserve member) rather than a commercial bank, and the Charles Schwab Corporation is a savings and loan holding company, so it is not listed in the Fed's Large Commercial Banks release. By total assets of about $517 billion at 30 June 2026 it would rank among the ten largest US banking companies, which is why it is included here with its holding-company assets rather than a lead-bank figure." }
  ],
  sources: [
    { id: "bankingdive-transitions-2026", title: "Charles Schwab banking unit CEO to retire", publisher: "Banking Dive", url: "https://bankingdive.com/news/charles-schwab-bank-ceo-paul-woolway-retire-tyler-woulfe/811079", date: "2026-01-30" },
    { id: "bloomberg-accelerant-2026", title: "Schwab Plans to Use AI to Reach, Serve Less-Affluent Customers", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-05-13/schwab-plans-to-use-ai-to-reach-serve-less-affluent-customers", date: "2026-05-13" },
    { id: "bloomberg-boost-2026", title: "Charles Schwab CEO Says AI Is Poised to Boost Wealth Managers", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-02-11/charles-schwab-ceo-says-ai-is-poised-to-boost-wealth-managers", date: "2026-02-11" },
    { id: "bloomberg-selloff-2026", title: "Wealth Manager Stocks Sink as Traders Flee Next AI Casualty", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2026-02-10/wealth-manager-stocks-sink-as-new-ai-tool-sparks-disruption-fear", date: "2026-02-10" },
    { id: "ft-q2-2026", title: "Schwab Reports Record Quarterly Revenue and Earnings", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202607210730BIZWIRE_USPRX____20260721_BW955369-1", date: "2026-07-21" },
    { id: "reuters-q1-2026", title: "Charles Schwab posts record quarterly profit, set to launch spot crypto trading", publisher: "Reuters", url: "https://www.reuters.com/business/charles-schwab-posts-record-quarterly-profit-client-growth-trading-haul-2026-04-16/", date: "2026-04-16" },
    { id: "schwab-insights-2026", title: "Charles Schwab Launches AI-Powered Capability That Helps Investors Understand Portfolio Performance and Market Activity", publisher: "Charles Schwab", url: "https://pressroom.aboutschwab.com/press-releases/press-release/2026/Charles-Schwab-Launches-AI-Powered-Capability-That-Helps-Investors-Understand-Portfolio-Performance-and-Market-Activity/default.aspx", date: "2026-05-05" },
    { id: "schwab-knowledge-2025", title: "AI on the other end of the line (but you're not talking to a computer)", publisher: "Charles Schwab", url: "https://www.aboutschwab.com/mss/story/ai-on-the-other-end-of-the-line", date: "2025-02-05" },
    { id: "schwab-ria-2026", title: "Schwab Study Reveals RIA AI Adoption More Than Doubles - But Most Firms Still in Early Stages", publisher: "Charles Schwab", url: "https://pressroom.aboutschwab.com/press-releases/press-release/2026/Schwab-Study-Reveals-RIA-AI-Adoption-More-Than-Doubles---But-Most-Firms-Still-in-Early-Stages/default.aspx", date: "2026-01-22" },
    { id: "sec-q2-2026", title: "Exhibit 99.1: Schwab Reports Record Quarterly Revenue and Earnings (Form 8-K)", publisher: "SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/316709/000031670926000027/a2q26exhibit991.htm", date: "2026-07-21" }
  ],
  lastUpdated: "2026-09-10"
};
