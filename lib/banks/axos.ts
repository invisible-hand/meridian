import type { Bank } from "@/lib/banks";

export const AXOS: Bank = {
  slug: "axos",
  name: "Axos Financial",
  shortName: "Axos Bank",
  ticker: "AX",
  hq: "Las Vegas, NV (operations: San Diego, CA)",
  fedRank: 0,
  leadBank: "Axos Bank",
  assetsUsdMillions: 29962,
  charter: "Federal savings association (OCC); lead bank of Axos Financial, outside the Fed's commercial-bank ranking",
  posture: "A branchless, proprietary-technology bank that now writes 90% of its committed code with AI, runs an AI centre of excellence on Claude, Azure OpenAI and LangGraph agents, bought an AI-native fintech for its 'Archie' CFO agent, and tells investors the goal is to scale without hiring or offshoring.",
  platform: {
    name: "AI centre of excellence, Automation CoE, OutSystems Agent Workbench and Arc",
    detail: "Axos built its Universal Digital Bank platform largely in house and has spent fiscal 2026 layering AI across it. On the April 2026 call CEO Greg Garrabrants said the bank had 'established the governance framework and infrastructure to educate, train, and deploy AI tools to all Axos team members' and was scaling use cases: more than 500 team members on an enterprise AI assistant, technical users of AI tools up 37% since the start of calendar 2026, AI's share of committed code at 90%, and 'specialized agents to test, automate, and QC various work product'. Job postings describe an AI Center of Excellence stack of Python/FastAPI, LangGraph agents, Azure OpenAI, the Claude API and n8n; security reviews of LLM integrations across Azure OpenAI, Google Vertex AI and Anthropic Claude with guardrails for agentic workflows; and a Commercial Quality Control role that builds AI-assisted review workflows with Claude, Claude Skills, Claude Code and n8n, all under an Automation CoE governance framework. Consumer-bank developers use OutSystems Agent Workbench to build agents that analyse error logs and automate document data entry, which SVP Kevin Hearn called 'a significant step in our AI strategy'. In July 2026 Axos acquired Arc Technologies, an AI-native cash-management and debt-marketplace platform for technology companies whose 'Archie' CFO agent and 'agentic finance tools' the bank intends to fold into its small-business banking. Conversational AI on Google's contact-centre suite handles omnichannel service. No AI budget is disclosed.",
    sources: ["ax-q3call-2026", "ax-jobs-aiplatform-2026", "ax-jobs-aisecurity-2026", "ax-jobs-cqc-2026", "outsystems-axos-2025", "ax-arc-2026", "ab-arc-2026"]
  },
  answerFirst:
    "Axos Financial, the Las Vegas-domiciled, San Diego-run parent of Axos Bank, a federal savings association with $30.0 billion of assets and no branches, is the most quantified AI adopter of its size. On the April 2026 earnings call president and CEO Greg Garrabrants said Axos had 'established the governance framework and infrastructure to educate, train, and deploy AI tools to all Axos team members' and was now 'focused on scaling the usage of artificial intelligence across more use cases': more than 500 team members use an enterprise AI assistant, technical users of AI tools rose 37% since the start of calendar 2026, AI's share of committed code reached 90%, and the bank is 'adding specialized agents to test, automate, and QC various work product'. In January he told investors AI in software development and credit workflows would let teams 'take on more projects concurrently without the need to increase the pace of new hires or offshoring', that commercial lending had expanded AI use 'in various credit underwriting and portfolio management workflows', and that he could 'feel and taste' a bending of the development cost curve; CFO Derrick Walsh credits AI tools with productivity gains in salaries, data processing and administrative expense. The programme is visible in hiring: dozens of open roles including AI platform engineer, lead AI engineer, cloud and AI security engineer and AI enablement specialist, describing an AI Center of Excellence built on Python/FastAPI, LangGraph agents, Azure OpenAI, the Claude API and n8n, security reviews of Azure OpenAI, Google Vertex AI and Anthropic Claude integrations, and a commercial quality-control role that turns manual review checklists into AI-assisted workflows using Claude, Claude Skills, Claude Code and n8n under an Automation CoE governance framework. Consumer-bank developers build agents on OutSystems Agent Workbench for error-log analysis and document data entry. Deals extend it: Verdant Commercial Capital ($43.5 million, September 2025), $2.3 billion of Jenius Bank consumer deposits (closed 2 May 2026), a $3.2 billion Capital One IRA portfolio (agreed April 2026) and Arc Technologies (closed 20 July 2026), an AI-native fintech whose 'Archie' CFO agent and agentic finance tools Axos will embed in small-business banking. Fiscal 2026 net income was $490.4 million, or $8.48 per diluted share, on a 'best-in-class' margin. Axos Bank is supervised by the OCC as a savings association, and its 10-K lists the development and use of AI, including agentic and generative AI, among its risk factors.",
  keyPoints: [
    "AI writes 90% of committed code; technical AI users up 37% in calendar 2026; 500-plus staff on an enterprise AI assistant; specialised agents test, automate and QC work (Q3 FY2026 call).",
    "Stated goal: scale without new hires or offshoring, with AI in software development, credit underwriting, portfolio management, risk and compliance monitoring.",
    "AI Center of Excellence stack: Python/FastAPI, LangGraph agents, Azure OpenAI, Claude API, n8n; Claude, Claude Skills and Claude Code in commercial quality control; Automation CoE governance framework.",
    "OutSystems Agent Workbench agents in the consumer bank (error-log analysis, document data entry); conversational AI on Google's contact-centre suite.",
    "Arc Technologies acquired 20 July 2026: AI-native cash management and debt marketplace with an 'Archie' CFO agent, to be embedded in small-business banking.",
    "FY2026 net income $490.4 million ($8.48); total assets $30.0 billion; deposits $24.6 billion after the $2.3 billion Jenius deposit purchase; $3.2 billion Capital One IRA deal pending."
  ],
  leadership: [
    { name: "Gregory Garrabrants", role: "President and CEO", linkedin: "https://www.linkedin.com/in/gregorygarrabrants", sources: ["ax-fy26-2026", "ax-q3call-2026"] },
    { name: "Derrick Walsh", role: "EVP and Chief Financial Officer", linkedin: "https://www.linkedin.com/in/derrick-k-walsh-cpa-0b59694", sources: ["ax-q4call-2026", "ax-q3rel-2026"] },
    { name: "Raymond Matsumoto", role: "EVP and Chief Operating Officer", linkedin: "https://www.linkedin.com/in/raymond-matsumoto-1263049", sources: ["ax-fy26-2026"] },
    { name: "John Tolla", role: "EVP and Chief Risk Officer", linkedin: "https://www.linkedin.com/in/jctolla", sources: ["ab-basel-2026"] },
    { name: "Jonathan Crane", role: "SVP, Head of Consumer Bank, Securities and Enterprise Technology", linkedin: "https://www.linkedin.com/in/jonathanpscrane", sources: ["ab-crane-2026"] },
    { name: "Kevin Hearn", role: "SVP, Head of Consumer Bank Development", linkedin: "https://www.linkedin.com/in/kevinhearnsd", sources: ["outsystems-axos-2025"] },
    { name: "Nick Lombardo", role: "CEO and Co-Founder, Arc (an Axos company)", linkedin: "https://www.linkedin.com/in/nicholas-m-lombardo", sources: ["ax-arc-2026"] }
  ],
  timeline: [
    { date: "2025-09-22", title: "Verdant Commercial Capital acquisition announced", detail: "$43.5 million for an equipment-leasing lender; first deal since 2019; Axos technology to cut Verdant's costs.", sources: ["ab-verdant-2025"] },
    { date: "2025-09-30", title: "Early adopter of OutSystems Agent Workbench", detail: "Agents for error-log analysis and document data entry; 'a significant step in our AI strategy'.", sources: ["outsystems-axos-2025"] },
    { date: "2025-10-30", title: "Q1 FY2026 call: AI across risk, compliance, credit, operations, legal, marketing and finance", detail: "AI 'having an impact on our efficiency and software development'.", sources: ["ax-q1call-2025"] },
    { date: "2026-01-29", title: "Q2 FY2026 call: scale without hiring or offshoring", detail: "AI deployed through the software development life cycle and credit workflows; cost curve 'bending'.", sources: ["ax-q2call-2026"] },
    { date: "2026-02-12", title: "Agreement to buy Jenius Bank's consumer deposits", detail: "About $2.3 billion from SMBC MANUBANK's digital bank.", sources: ["ax-jenius-2026"] },
    { date: "2026-04-22", title: "Agreement to buy $3.2 billion of Capital One IRA deposits", detail: "Traditional and Roth IRAs in savings and CDs; OCC approval received in May.", sources: ["ax-capone-2026", "ax-q4call-2026"] },
    { date: "2026-04-30", title: "Q3 FY2026 call: 90% of committed code from AI", detail: "Governance framework in place; 500-plus users; technical users up 37%; specialised QA agents.", sources: ["ax-q3call-2026", "ax-q3rel-2026"] },
    { date: "2026-05-02", title: "Jenius deposit acquisition closes", detail: "About $2.3 billion across 56,000-plus savings accounts.", sources: ["ax-jenius-2026", "ax-fy26-2026"] },
    { date: "2026-07-07", title: "Arc Technologies acquisition announced", detail: "AI-native cash management and capital markets platform; 'Archie' CFO agent.", sources: ["ax-arc-2026", "ab-arc-2026"] },
    { date: "2026-07-20", title: "Arc acquisition closes", detail: "Integration into small-business banking; about $1 million a month added to expenses.", sources: ["ax-fy26-2026", "ax-q4call-2026"] },
    { date: "2026-07-30", title: "Fiscal 2026 results", detail: "Net income $490.4 million; EPS $8.48; assets $30.0 billion; CFO cites AI productivity gains.", sources: ["ax-fy26-2026", "ax-q4call-2026"] },
    { date: "2026-08-20", title: "Fiscal 2026 10-K lists AI development and use as a risk factor", detail: "Agentic and generative AI, third-party models, explainability and evolving AI law.", sources: ["ax-10k-2026"] },
    { date: "2026-08-27", title: "AI platform engineer and AI enablement specialist roles posted", detail: "Automation Center of Excellence governance; platform hardening; adoption at scale.", sources: ["ax-jobs-aiplatform-2026", "ax-jobs-aienablement-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "AI-assisted software development", detail: "90% of committed code AI-generated; agents for testing, automation and QC; development cost curve bending.", status: "In production", sources: ["ax-q3call-2026", "ax-q2call-2026"] },
    { useCase: "credit-underwriting", name: "AI in commercial credit underwriting and portfolio management", detail: "Manual, repetitive underwriting and monitoring tasks automated; AI-assisted commercial quality-control reviews built on Claude and n8n.", status: "In production", sources: ["ax-q2call-2026", "ax-jobs-cqc-2026"] },
    { useCase: "governance-general", name: "AI Center of Excellence and Automation CoE governance framework", detail: "Enterprise AI assistant for all staff; platform standards, RBAC, audit and exam support; Cloud and AI security reviews of LLM integrations.", status: "In production", sources: ["ax-q3call-2026", "ax-jobs-aiplatform-2026", "ax-jobs-aisecurity-2026"] },
    { useCase: "third-party-vendors", name: "OutSystems Agent Workbench agents", detail: "Error-log analysis and document-mapping agents in the consumer bank, built without specialised AI hires.", status: "In production", sources: ["outsystems-axos-2025"] },
    { useCase: "customer-chatbots", name: "Arc 'Archie' CFO agent and conversational AI", detail: "Agentic finance tools for small businesses via Arc; omnichannel conversational AI on Google's contact-centre suite.", status: "Rolling out", sources: ["ab-arc-2026", "ax-arc-2026", "ax-jobs-conversational-2026"] },
    { useCase: "model-risk", name: "AI risk-factor disclosure", detail: "10-K covers agentic and generative AI, third-party model dependence, bias, explainability and evolving regulation.", status: "In production", sources: ["ax-10k-2026"] }
  ],
  numbers: [
    { label: "Share of committed code written by AI", value: "90%", asOf: "2026-04-30", sources: ["ax-q3call-2026"] },
    { label: "Team members using the enterprise AI assistant", value: "> 500; technical AI users +37% since January 2026", asOf: "2026-04-30", sources: ["ax-q3call-2026"] },
    { label: "Fiscal 2026 net income / diluted EPS", value: "$490.4 million / $8.48", asOf: "2026-07-30", sources: ["ax-fy26-2026"] },
    { label: "Total assets / deposits", value: "$30.0 billion / $24.6 billion", asOf: "2026-06-30", sources: ["ax-fy26-2026"] },
    { label: "Deposit acquisitions", value: "$2.3 billion Jenius (closed); $3.2 billion Capital One IRAs (pending)", asOf: "2026-07-30", sources: ["ax-jenius-2026", "ax-capone-2026"] },
    { label: "Open AI-related job postings", value: "≈ 45 matching 'AI' on the careers site", asOf: "2026-09-10", sources: ["ax-jobs-aiplatform-2026"] }
  ],
  quotes: [
    { who: "Gregory Garrabrants", role: "President and CEO", date: "2026-04-30", quote: "Having established the governance framework and infrastructure to educate, train, and deploy AI tools to all Axos team members, we are now focused on scaling the usage of artificial intelligence across more use cases.", sources: ["ax-q3call-2026"] },
    { who: "Gregory Garrabrants", role: "President and CEO", date: "2026-01-29", quote: "They will also allow our team to take on more projects concurrently without the need to increase the pace of new hires or offshoring.", sources: ["ax-q2call-2026"] },
    { who: "Kevin Hearn", role: "SVP, Head of Consumer Bank Development", date: "2025-09-30", quote: "By creating and embedding agents into our operations, we are building a more intelligent and responsive banking ecosystem that is ready for the future of finance.", sources: ["outsystems-axos-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "Axos Bank is an OCC-supervised federal savings association; the 2026 model-risk bulletin and gen-AI risk perspective govern AI in underwriting, QC and development.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Axos Financial is a Fed-supervised savings and loan holding company; SR 11-7 and SR 23-4 apply to model risk and to Azure OpenAI, Anthropic, Google and OutSystems dependencies.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer deposits, mortgages and small-business tools carry UDAAP, chatbot and adverse-action duties for AI in service and credit.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "Quantified AI claims on earnings calls and AI risk factors in the 10-K sit within SEC scrutiny; Axos Clearing and Axos Invest are SEC-registered.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "The metrics are the differentiator", detail: "Code share, user counts and growth rates give investors and examiners something to audit; the next step is outcome metrics such as cycle time per credit decision or cost per account." },
    { title: "Multi-model by design", detail: "Running Azure OpenAI, Anthropic Claude and Google Vertex AI behind a central platform limits single-vendor dependence; the SR 23-4 file should show the substitution plan for each." },
    { title: "AI in credit QC needs validation evidence", detail: "AI-assisted commercial quality-control reviews are exactly where the OCC will ask for independent validation, sampling and human override rates." },
    { title: "Arc turns internal AI into a product", detail: "Embedding a CFO agent in small-business banking moves Axos from cost-side AI to revenue-side AI, and into CFPB chatbot territory for any consumer-facing use." },
    { title: "'No new hires' is a claim to track", detail: "Headcount versus asset growth is the simplest test of the operating-leverage thesis; report it quarterly." }
  ],
  faq: [
    { q: "Does Axos Bank use AI?", a: "Yes, extensively. Axos says AI now writes 90% of its committed code, more than 500 team members use an enterprise AI assistant, and specialised agents test and quality-check work. It runs an AI Center of Excellence on Python, LangGraph agents, Azure OpenAI, the Claude API and n8n, uses OutSystems Agent Workbench agents in its consumer bank, applies AI to commercial credit underwriting and quality control, and in July 2026 acquired Arc Technologies for its AI-native small-business finance platform." },
    { q: "Why isn't Axos in the Federal Reserve's large-bank ranking?", a: "Axos Bank is a federal savings association, not a commercial bank, so the Fed's Large Commercial Banks release omits it. With $30.0 billion of holding-company assets at June 30, 2026 it would sit around rank 65 to 70 if included, so it is placed here by size, like Charles Schwab Bank." }
  ],
  sources: [
    { id: "ab-verdant-2025", title: "Axos makes first deal since 2019, acquiring specialty lender", publisher: "American Banker", url: "https://americanbanker.com/news/axos-financial-buys-equipment-leasing-business-for-43-5m", date: "2025-09-22" },
    { id: "outsystems-axos-2025", title: "OutSystems Announces General Availability of Agent Workbench, Empowering Enterprises to Drive Business Impact with Agentic Systems", publisher: "OutSystems (Business Wire)", url: "https://businesswire.com/news/home/20250930527578/en/OutSystems-Announces-General-Availability-of-Agent-Workbench-Empowering-Enterprises-to-Drive-Business-Impact-with-Agentic-Systems", date: "2025-09-30" },
    { id: "ax-q1call-2025", title: "Axos Financial Inc (AX) Q1 2026 Earnings Call Highlights", publisher: "GuruFocus (Yahoo Finance)", url: "https://finance.yahoo.com/news/axos-financial-inc-ax-q1-030553984.html", date: "2025-10-31" },
    { id: "ax-q2call-2026", title: "Axos Financial Q2 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/news/axos-financial-q2-earnings-call-014227007.html", date: "2026-01-30" },
    { id: "ax-jenius-2026", title: "Axos Financial, Inc. Reports Fiscal Year 2026 Results (Jenius Bank deposit acquisition, closed May 2, 2026)", publisher: "Axos Financial (Business Wire)", url: "https://www.businesswire.com/news/home/20260730727486/en/Axos-Financial-Inc.-Reports-Fiscal-Year-2026-Results", date: "2026-07-30" },
    { id: "ax-capone-2026", title: "Axos Financial, Inc. Q3 2026 Earnings Call Summary (Capital One IRA deposit acquisition)", publisher: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/axos-financial-inc-q3-2026-123000409.html", date: "2026-05-01" },
    { id: "ax-q3rel-2026", title: "Axos Financial, Inc. Reports Third Quarter Fiscal Year 2026 Results", publisher: "Axos Financial (Business Wire)", url: "https://www.businesswire.com/news/home/20260430101393/en/Axos-Financial-Inc.-Reports-Third-Quarter-Fiscal-Year-2026-Results", date: "2026-04-30" },
    { id: "ax-q3call-2026", title: "Axos Financial, Inc. Q3 2026 Earnings Call Summary", publisher: "Yahoo Finance", url: "https://finance.yahoo.com/markets/stocks/articles/axos-financial-inc-q3-2026-123000409.html", date: "2026-05-01" },
    { id: "ab-basel-2026", title: "Some want Basel changes for certain non-QM and HLTV loans", publisher: "American Banker", url: "https://americanbanker.com/news/some-want-basel-changes-for-certain-non-qm-and-hltv-loans", date: "2026-06-22" },
    { id: "ab-crane-2026", title: "Jonathan Crane, speaker profile, Digital Banking 2026", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/jonathan-crane", date: "2026-05-27" },
    { id: "ax-arc-2026", title: "Axos Financial, Inc. to Acquire Arc Technologies, Inc.", publisher: "Axos Financial", url: "https://investors.axosfinancial.com/news-events/press-releases/news-details/2026/Axos-Financial-Inc--to-Acquire-Arc-Technologies-Inc-/default.aspx", date: "2026-07-07" },
    { id: "ab-arc-2026", title: "Axos to buy San Francisco fintech and its AI technology", publisher: "American Banker", url: "https://www.americanbanker.com/news/axos-to-buy-san-francisco-fintech-and-its-ai-technology", date: "2026-07-07" },
    { id: "ax-fy26-2026", title: "Axos Financial, Inc. Reports Fiscal Year 2026 Results", publisher: "Axos Financial (Business Wire)", url: "https://businesswire.com/news/home/20260730727486/en/Axos-Financial-Inc.-Reports-Fiscal-Year-2026-Results", date: "2026-07-30" },
    { id: "ax-q4call-2026", title: "Axos Financial Q4 Earnings Call Highlights", publisher: "MarketBeat (Yahoo Finance)", url: "https://finance.yahoo.com/markets/stocks/articles/axos-financial-q4-earnings-call-030251021.html", date: "2026-08-01" },
    { id: "ax-10k-2026", title: "Axos Financial, Inc. Annual Report on Form 10-K for the fiscal year ended June 30, 2026", publisher: "Axos Financial (SEC filings)", url: "https://investors.axosfinancial.com/sec-filings/documents/default.aspx", date: "2026-08-20" },
    { id: "ax-jobs-aisecurity-2026", title: "Cloud and AI Security Engineer (job posting)", publisher: "Axos Bank careers", url: "https://axos.wd5.myworkdayjobs.com/job/Manila-Philippines/Cloud-and-AI-Security-Engineer_JR4815-1", date: "2026-08-20" },
    { id: "ax-jobs-cqc-2026", title: "Sr. Commercial Quality Control AI Automation Associate (job posting)", publisher: "Axos Bank careers", url: "https://axos.wd5.myworkdayjobs.com/job/HQ---San-Diego-CA/C-I-Lending-Operations-Administrator_JR3502", date: "2026-07-01" },
    { id: "ax-jobs-conversational-2026", title: "Conversational AI Engineer / Junior Omnichannel Technology Analyst (job posting)", publisher: "Axos Bank careers", url: "https://axos.wd5.myworkdayjobs.com/job/HQ---San-Diego-CA/Conversational-AI-Engineer_JR4571", date: "2026-08-18" },
    { id: "ax-jobs-aiplatform-2026", title: "AI Platform Engineer (job posting)", publisher: "Axos Bank careers", url: "https://axos.wd5.myworkdayjobs.com/job/HQ---San-Diego-CA/AI-Platform-Engineer_JR4943", date: "2026-08-27" },
    { id: "ax-jobs-aienablement-2026", title: "AI Enablement Specialist (job posting)", publisher: "Axos Bank careers", url: "https://axos.wd5.myworkdayjobs.com/job/HQ---San-Diego-CA/AI-Enablement-Specialist_JR5216", date: "2026-08-28" }
  ],
  lastUpdated: "2026-09-10"
};
