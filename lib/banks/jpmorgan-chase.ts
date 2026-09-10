import type { Bank } from "@/lib/banks";

export const JPMORGAN_CHASE: Bank = {
  slug: "jpmorgan-chase",
  name: "JPMorgan Chase",
  shortName: "JPMorgan",
  ticker: "JPM",
  hq: "New York, NY",
  fedRank: 1,
  leadBank: "JPMorgan Chase Bank, N.A.",
  assetsUsdMillions: 4016571,
  charter: "National bank (OCC)",
  posture: "Build the platform, rent the models, deploy to everyone — then redeploy the people.",
  platform: {
    name: "LLM Suite",
    detail: "A proprietary abstraction layer through which third-party models (OpenAI, Anthropic and others) are swapped in and out; rolled out firm-wide in 2024, available to roughly 250,000 employees by late 2025, with about half using it daily.",
    sources: ["ab-democratized-2025", "ab-wib-2025"]
  },
  answerFirst:
    "JPMorgan Chase runs the most publicly documented AI program in banking: a technology budget of nearly $20 billion a year, more than 63,000 technologists, and a proprietary generative-AI platform, LLM Suite, that has been in the hands of most of its workforce since 2024. Its stated end state, per chief analytics officer Derek Waldron, is a bank in which every employee has a personal AI assistant, every process is run by agents and every client has an AI concierge. In 2026 the program moved from tools to workforce: CEO Jamie Dimon told the July earnings call that AI had cut headcount by 30 to 40 percent in some units, while the bank said it expects to deploy agents that run autonomously for hours before year-end.",
  keyPoints: [
    "Technology budget of about $18 billion in 2025 and nearly $20 billion in 2026; 63,000-plus technologists under global CIO Lori Beer.",
    "LLM Suite launched in 2024 as an opt-in corporate ChatGPT and became the firm's flagship gen-AI platform; American Banker's Innovation of the Year 2025.",
    "Evident's AI index has ranked JPMorgan first among the world's largest banks every year the index has run.",
    "Agent strategy is explicit and published: a March 2026 engineering post sets safeguards by an agent's capability and 'blast radius'; a June 2026 interview promised long-running autonomous agents in 2026.",
    "The workforce effect is now disclosed: 30–40% headcount reductions in some units, a 'huge redeployment' plan, and a warning from Dimon that 'you don't uniquely benefit from AI' because rivals have the same tools.",
    "A named launch partner for Anthropic's restricted Mythos model under Project Glasswing; Dimon calls frontier-model cyber risk 'very heightened'."
  ],
  leadership: [
    { name: "Lori Beer", role: "Global Chief Information Officer", sources: ["ab-beer-2026"], linkedin: "https://www.linkedin.com/in/lori-beer-93355a/" },
    { name: "Teresa Heitsenrether", role: "Chief Data & Analytics Officer (retiring end-2026)", sources: ["ab-heitsenrether-2025"], linkedin: "https://www.linkedin.com/in/teresa-heitsenrether-8a37901/" },
    { name: "Derek Waldron", role: "Chief Analytics Officer", sources: ["cnbc-agents-2026"], linkedin: "https://www.linkedin.com/in/derek-waldron/" },
    { name: "Guy Halamish", role: "COO, Commercial & Investment Bank, with the AI mandate", sources: ["reuters-halamish-2026"] }
  ],
  timeline: [
    { date: "2023-01-01", title: "Employees get OpenAI models through an early LLM Suite", detail: "The groundwork for the firm-wide platform: a corporate ChatGPT for drafting emails and summarising documents.", sources: ["cnbc-blueprint-2025"] },
    { date: "2024-08-09", title: "LLM Suite reaches 60,000 employees", detail: "CNBC reports the opt-in rollout; by mid-2025 American Banker describes it as available to almost all employees.", sources: ["ab-democratized-2025"] },
    { date: "2025-09-30", title: "The 'fully AI-connected megabank' blueprint", detail: "Waldron describes the end state: personal AI assistants for every employee, agent-powered processes, AI concierges for clients.", sources: ["cnbc-blueprint-2025"] },
    { date: "2025-10-13", title: "Tops the Evident AI Index again", detail: "The bank says it continues to lead the 50-bank index across talent, innovation, leadership and transparency.", sources: ["jpm-evident-2025"] },
    { date: "2025-12-09", title: "Productivity doubled with AI, says consumer chief", detail: "Marianne Lake: consumer-bank productivity at 6% with AI versus 3% before; operations specialists' productivity expected to rise 40–50%.", sources: ["reuters-execs-2025"] },
    { date: "2026-02-12", title: "Halamish named CIB COO to accelerate AI", detail: "An internal memo tasks the new chief operating officer with maximising the impact of AI across markets, banking, payments and securities services.", sources: ["reuters-halamish-2026", "bloomberg-halamish-2026"] },
    { date: "2026-02-24", title: "Dimon: 'huge redeployment plans'", detail: "At an investor update Dimon says the bank has displaced people with AI and offers them other jobs; the same day he calls AI-disruption fears 'overblown'.", sources: ["cnbc-redeploy-2026", "wsj-dimon-fears-2026"] },
    { date: "2026-03-23", title: "Engineering post on securing agents", detail: "The bank publishes its approach: align safeguards to capability and risk; agents combining untrusted inputs, sensitive data and authority to act require continuous enforcement.", sources: ["jpm-agents-blog-2026"] },
    { date: "2026-04-02", title: "Fence guardrail framework", detail: "A data-driven framework that tests LLM use cases for hallucination, topic drift and prompt injection using synthetic data.", sources: ["jpm-fence-2026"] },
    { date: "2026-04-14", title: "Testing Anthropic's Mythos; Dimon warns on cyber", detail: "JPMorgan is a named Glasswing launch partner; Dimon says frontier models first make companies more vulnerable.", sources: ["cnbc-mythos-2026", "reuters-asia-mythos-2026"] },
    { date: "2026-05-19", title: "CIO: early AI tools lift productivity up to 30%", detail: "Beer tells Bloomberg TV agentic AI promises more, while the bank races to contain new risks.", sources: ["bloomberg-beer-2026"] },
    { date: "2026-06-09", title: "Long-running agents promised for 2026", detail: "Waldron: agents will run for an hour or two, act as 'team managers' delegating to sub-agents; AI already lifted private-banking gross sales 20%.", sources: ["cnbc-agents-2026"] },
    { date: "2026-06-18", title: "Anthropic access cut for Hong Kong staff", detail: "Claude models removed from the approved list in Hong Kong, following a similar move by Goldman Sachs.", sources: ["ft-hk-2026"] },
    { date: "2026-07-14", title: "AI has cut 30–40% of jobs in some units", detail: "On the record-quarter earnings call Dimon discloses the reductions, says most staff were offered other roles, and cautions that margins will not uniquely benefit.", sources: ["cnbc-earnings-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "LLM Suite and agentic workflows", detail: "Firm-wide gen-AI platform; agents in production for software testing, private-banking research screening and payments; long-running agents planned for 2026.", status: "In production", sources: ["cnbc-agents-2026", "ab-haus-2026", "ab-payments-2026"] },
    { useCase: "customer-chatbots", name: "Call-centre and client assistants", detail: "Generative AI in call centres for agents serving Chase customers; AI concierge for clients is the stated end state.", status: "Rolling out", sources: ["wsj-rise-2025", "cnbc-blueprint-2025"] },
    { useCase: "fraud", name: "Fraud and AML analytics", detail: "Machine-learning monitoring across roughly $10 trillion of daily payment flows, per the bank's own operating description.", status: "In production", sources: ["jpm-coo-letter-2025"] },
    { useCase: "trading-markets", name: "AI investing agents (research)", detail: "Research built multi-agent systems that beat a 60/40 portfolio in two-decade backtests — a research result, not a product.", status: "Pilot", sources: ["bloomberg-6040-2026"] },
    { useCase: "cybersecurity", name: "Frontier-model vulnerability testing", detail: "Testing Mythos to find vulnerabilities in its own systems as a Glasswing partner.", status: "Pilot", sources: ["cnbc-mythos-2026"] }
  ],
  numbers: [
    { label: "Technology budget", value: "≈ $20 billion (2026); $18 billion (2025)", asOf: "2026-06-09", sources: ["cnbc-agents-2026", "mckinsey-waldron-2025"] },
    { label: "Technologists", value: "63,000+", asOf: "2026-06-01", sources: ["ab-beer-2026"] },
    { label: "LLM Suite access", value: "≈ 250,000 employees, about half daily users", asOf: "2026-04-29", sources: ["ab-wib-2025"] },
    { label: "Productivity lift from early tools", value: "up to 30%", asOf: "2026-05-19", sources: ["bloomberg-beer-2026"] },
    { label: "Private-banking gross sales lift", value: "+20%", asOf: "2026-06-09", sources: ["cnbc-agents-2026"] },
    { label: "Headcount cut in some units", value: "30–40%", asOf: "2026-07-14", sources: ["cnbc-earnings-2026"] }
  ],
  quotes: [
    { who: "Jamie Dimon", role: "Chairman and CEO", date: "2026-02-24", quote: "We already have huge redeployment plans for our own people. We have displaced people from AI — and we offer them other jobs.", sources: ["cnbc-redeploy-2026"] },
    { who: "Derek Waldron", role: "Chief Analytics Officer", date: "2026-06-09", quote: "We've entered now the era of long-running autonomous agents.", sources: ["cnbc-agents-2026"] },
    { who: "Lori Beer", role: "Global CIO", date: "2026-05-19", quote: "Early AI tools are boosting productivity as much as 30%.", sources: ["bloomberg-beer-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Lead bank is a national bank; the revised interagency model risk guidance applies, and generative and agentic AI fall outside it into broader governance.", docSlugs: ["occ-bulletin-2026-13", "occ-bulletin-2023-17"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; SR 26-2 and the third-party guidance govern vendor models such as those behind LLM Suite.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer lending and Chase chatbots answer to ECOA adverse-action and UDAAP expectations.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "eu-ai-act", why: "EU operations: credit scoring is high-risk from December 2, 2027; transparency duties since August 2026.", docSlugs: ["eu-ai-act-regulation-2024-1689"] },
    { authority: "fsb", why: "As a G-SIB, the FSB's proposed sound practices and its frontier-AI warning are written with banks like this in mind.", docSlugs: ["fsb-ai-sound-practices-consultation-2026", "fsb-chair-letter-g20-august-2026"] }
  ],
  suggestions: [
    { title: "The disclosure gap is now workforce, not technology", detail: "The bank has said what AI does to jobs in some units but not which units or how many people. As other banks are pressed for the same numbers, the July 2026 disclosure sets the reference point analysts will use." },
    { title: "Agents outrun the rulebook the bank itself operates under", detail: "SR 26-2 excludes agentic AI from model risk management. JPMorgan's published agent-security framework is, in effect, the governance path supervisors asked banks to build for themselves; expect it to be cited back to the industry." },
    { title: "Model concentration is a live decision", detail: "LLM Suite's design lets models be swapped, and the Hong Kong access change shows the switch is used for jurisdictional reasons, not only performance. Watch which models are approved where." },
    { title: "The revenue case is arriving before the cost case", detail: "Management's own framing moved in 2026 from savings to sales lift (private banking +20%) and coverage expansion — the metric to watch next is client coverage per banker." }
  ],
  faq: [
    { q: "What is JPMorgan's LLM Suite?", a: "LLM Suite is JPMorgan Chase's proprietary generative-AI platform — a portal and abstraction layer through which large language models from OpenAI, Anthropic and others are made available to employees with the bank's controls. It launched in 2024 on an opt-in basis, reached roughly 250,000 employees by late 2025, and won American Banker's Innovation of the Year award for 2025." },
    { q: "How much does JPMorgan spend on AI?", a: "The bank does not break out AI spending. Its total technology budget was about $18 billion in 2025 and nearly $20 billion in 2026, according to executives quoted by McKinsey and CNBC; a multi-billion portion funds AI." },
    { q: "Has AI cut jobs at JPMorgan?", a: "Yes. On the July 14, 2026 earnings call Jamie Dimon said AI had already reduced headcount by 30 to 40 percent in some of the bank's units, adding that most affected employees were offered positions elsewhere in the firm and that the bank still plans to hire." }
  ],
  sources: [
    { id: "cnbc-agents-2026", title: "JPMorgan Chase plans to deploy more powerful AI agents this year", publisher: "CNBC", url: "https://www.cnbc.com/2026/06/09/jpmorgan-chase-ai-agents.html", date: "2026-06-09" },
    { id: "cnbc-blueprint-2025", title: "Here's JPMorgan Chase's blueprint to become the world's first fully AI-powered megabank", publisher: "CNBC", url: "https://www.cnbc.com/2025/09/30/jpmorgan-chase-fully-ai-connected-megabank.html", date: "2025-09-30" },
    { id: "cnbc-redeploy-2026", title: "Jamie Dimon says AI is already reshaping JPMorgan Chase's workforce as bank plans 'huge redeployment'", publisher: "CNBC", url: "https://www.cnbc.com/2026/02/24/jpm-ceo-jamie-dimon-ai-reshaping-workforce-redeployment.html", date: "2026-02-24" },
    { id: "cnbc-mythos-2026", title: "Jamie Dimon says Anthropic's Mythos reveals 'a lot more vulnerabilities' for cyberattacks", publisher: "CNBC", url: "https://www.cnbc.com/2026/04/14/jamie-dimon-anthropic-mythos-vulnerabilities-cyber-attacks.html", date: "2026-04-14" },
    { id: "cnbc-earnings-2026", title: "Bank earnings takeaways: from Goldman Sachs' SpaceX IPO fees to JPMorgan's AI job cuts", publisher: "CNBC", url: "https://www.cnbc.com/2026/07/14/jpm-bank-of-america-citi-bank-earnings-live-updates.html", date: "2026-07-14" },
    { id: "reuters-halamish-2026", title: "JPMorgan's commercial and investment bank names Halamish as COO to lead AI strategy, memo shows", publisher: "Reuters", url: "https://www.reuters.com/business/finance/jpmorgans-commercial-investment-bank-names-halamish-coo-lead-ai-strategy-memo-2026-02-12/", date: "2026-02-12" },
    { id: "bloomberg-halamish-2026", title: "JPMorgan Promotes Halamish With Mandate to Accelerate AI Rollout", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-02-12/jpmorgan-promotes-halamish-with-mandate-to-accelerate-ai-rollout", date: "2026-02-12" },
    { id: "bloomberg-beer-2026", title: "JPMorgan's CIO Sees Leadership Test as AI Fuels Major Shift", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-19/jpmorgan-s-cio-sees-big-leadership-test-as-ai-fuels-major-shift", date: "2026-05-19" },
    { id: "bloomberg-6040-2026", title: "JPMorgan Builds AI Agents That Beat 60/40 Portfolio in Backtests", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-07-09/jpmorgan-builds-ai-agents-that-beat-60-40-portfolio-in-backtests", date: "2026-07-09" },
    { id: "reuters-execs-2025", title: "US bank executives say AI will boost productivity, cut jobs", publisher: "Reuters", url: "https://www.reuters.com/business/finance/us-bank-executives-say-ai-will-boost-productivity-cut-jobs-2025-12-09/", date: "2025-12-09" },
    { id: "reuters-asia-mythos-2026", title: "Banks in Asia brace for complex cyber threats from frontier AI", publisher: "Reuters", url: "https://www.reuters.com/legal/litigation/banks-asia-brace-complex-cyber-threats-frontier-ai-2026-04-30/", date: "2026-04-30" },
    { id: "ft-hk-2026", title: "JPMorgan Chase cuts off Anthropic access for its Hong Kong staff", publisher: "Financial Times", url: "https://www.ft.com/content/de83d303-6a03-456b-bfb9-7b11dd502ab3", date: "2026-06-18" },
    { id: "wsj-rise-2025", title: "The Rise of Artificial Intelligence at JPMorgan", publisher: "The Wall Street Journal", url: "https://www.wsj.com/tech/ai/jpmorgan-chase-artificial-intelligence-banking-939b1b32", date: "2025-02-24" },
    { id: "wsj-dimon-fears-2026", title: "Jamie Dimon Dismisses Fears Over How AI Will Hit JPMorgan", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/jamie-dimon-dismisses-fears-over-how-ai-will-hit-jpmorgan-f4e31e35", date: "2026-02-24" },
    { id: "ab-beer-2026", title: "Lori Beer is turning JPMorganChase into an AI-native bank, and she's got $20 billion to do it", publisher: "American Banker", url: "https://www.americanbanker.com/news/chases-lori-beer-is-8-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-heitsenrether-2025", title: "The Most Powerful Women in Banking, No. 8, Teresa Heitsenrether, JPMorganChase", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-in-banking-no-8-teresa-heitsenrether-jpmorganchase", date: "2025-10-07" },
    { id: "ab-democratized-2025", title: "How JPMorganChase democratized employee access to gen AI", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-jpmorganchase-democratized-employee-access-to-gen-ai", date: "2025-05-22" },
    { id: "ab-wib-2025", title: "Driving AI Use Cases and Adoption (Women in Banking 2025 session)", publisher: "American Banker", url: "https://www.americanbanker.com/video/wib-2025/driving-ai-use-cases-and-adoption-aligning-business-value-data-readiness-and-risk-management", date: "2025-10-21" },
    { id: "ab-haus-2026", title: "Translating technology from cost to competitive edge (Gill Haus)", publisher: "American Banker", url: "https://www.americanbanker.com/news/jpmorganchases-gill-haus-is-40-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-payments-2026", title: "JPMorgan Payments' agentic commerce play", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/jpmorgan-payments-agentic-commerce-play-ripples-australian-deal", date: "2026-03-11" },
    { id: "jpm-evident-2025", title: "JPMorganChase continues to lead the world's top banks in AI maturity", publisher: "JPMorganChase", url: "https://www.jpmorganchase.com/about/technology/blog/jpmc-evident-25", date: "2025-10-13" },
    { id: "jpm-agents-blog-2026", title: "Securing the next generation of AI agents", publisher: "JPMorganChase", url: "https://www.jpmorganchase.com/about/technology/blog/securing-agentic-ai", date: "2026-03-23" },
    { id: "jpm-fence-2026", title: "Strengthening LLM guardrails with synthetic data generation", publisher: "JPMorganChase", url: "https://www.jpmorganchase.com/about/technology/blog/fence-framework", date: "2026-04-02" },
    { id: "jpm-coo-letter-2025", title: "Future-Proofing the Company and Our Operations (COO letter, 2024 annual report)", publisher: "JPMorganChase", url: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/chief-operating-officer-letter.pdf", date: "2025-04-09" },
    { id: "mckinsey-waldron-2025", title: "JPMorgan Chase's Derek Waldron on building an AI-first bank culture", publisher: "McKinsey", url: "https://www.mckinsey.com/industries/financial-services/our-insights/jpmorgan-chases-derek-waldron-on-building-an-ai-first-bank-culture", date: "2025-10-29" },
  ],
  lastUpdated: "2026-09-09"
};
