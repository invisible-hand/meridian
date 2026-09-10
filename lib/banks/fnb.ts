import type { Bank } from "@/lib/banks";

export const FNB: Bank = {
  slug: "fnb",
  name: "F.N.B. Corporation",
  shortName: "FNB",
  ticker: "FNB",
  hq: "Pittsburgh, PA",
  fedRank: 45,
  leadBank: "First National Bank of Pennsylvania",
  assetsUsdMillions: 50421,
  charter: "National bank (OCC)",
  posture: "A $50 billion bank whose CEO argues smaller banks will out-innovate the megabanks, built on a decade-old proprietary digital platform, an in-house data hub and newly hired AI and data-science directors.",
  platform: {
    name: "eStore, the Common app and FNB's data hub",
    detail: "FNB's 'Clicks-to-Bricks' strategy, launched in 2016, centres on eStore, a proprietary e-commerce-style storefront where one Common application opens more than 50 consumer and business products; business loans were added in March 2026 with 'AI-driven insights and advanced data analytics' to cut keystrokes and application time. The bank kept critical data fields on premises in a data hub it built itself, which CEO Vincent Delie says gave it a head start on AI. Santosh Sinha, director of AI and innovation, owns the AI strategy 'with a focus on ethical and compliant practices'; Sundeep Tangirala, director of data science and formerly head of data and machine-learning engineering at PNC, runs decisioning, forecasting and regulatory models. An AI-driven customer insights tool that analyses eStore transactions and recommends products is due late 2026 or early 2027, and eStore is being combined with interactive teller machines at 150 locations.",
    sources: ["bankingdive-delie-2026", "fnb-ai-directors-2025", "ft-estore-2026"]
  },
  answerFirst:
    "F.N.B. Corporation, the $50 billion Pittsburgh-based parent of First National Bank of Pennsylvania with about 350 branches from Pennsylvania to the Carolinas, is unusual among regional banks in owning a proprietary digital platform, eStore, and in having a chief executive who argues that AI will let smaller banks beat the megabanks. 'Large banks have bureaucracy, they have embedded spend,' Vincent Delie told Banking Dive in April 2026; with AI democratising capabilities such as coding assistants, 'the future's going to lead to smaller banks coming out with some very innovative tools that the larger banks miss.' FNB's foundation is a decade of data management: it kept critical data on premises in a self-built data hub and invested in governance so that its own tools could consume it, which Delie says gave it a head start on AI and data science. In September 2025 it hired Santosh Sinha as director of AI and innovation, with responsibility for an AI strategy focused on ethical and compliant practice, and Sundeep Tangirala, ex-PNC, as director of data science over decisioning, forecasting and regulatory models, both reporting to chief strategy officer Chris Chan. In March 2026 the eStore Common application, which already let clients apply for more than 50 products at once, added business loans using AI-driven insights to reduce keystrokes and application time, and an AI-based customer insights tool that analyses eStore transactions and recommends products is planned for late 2026 or early 2027. The second quarter of 2026 brought record revenue of $462.7 million and net income of $148.7 million, with Delie crediting 'investments in digital capabilities, data analytics and artificial intelligence' for efficiency and household penetration. FNB does not disclose its technology or AI spend; 2025 non-interest expense was about $1 billion, partly on technology. It ranked 16th for customer reputation in 2026 and is opening almost 30 branches in the Southeast and Mid-Atlantic over five years, each with eStore and interactive teller machines.",
  keyPoints: [
    "CEO thesis: AI democratises capability, so 'smaller banks [will come] out with some very innovative tools that the larger banks miss' (April 2026).",
    "Named AI leadership since September 2025: Santosh Sinha (director of AI and innovation, ethical and compliant AI strategy) and Sundeep Tangirala (director of data science, ex-PNC), under chief strategy officer Chris Chan.",
    "Proprietary platform: eStore and the Common app cover 50-plus products in one application; business loans added March 2026 with AI-driven insights to cut keystrokes.",
    "Data kept on premises in a self-built hub with heavy governance investment, which management says gave FNB a head start on AI.",
    "Next release: an AI-driven customer insights tool analysing eStore transactions and recommending products, due late 2026 or early 2027; eStore combined with interactive teller machines at 150 sites.",
    "Results: record Q2 2026 revenue $462.7 million, EPS up 17%, attributed partly to digital, data-analytics and AI investment; technology spend undisclosed."
  ],
  leadership: [
    { name: "Vincent J. Delie, Jr.", role: "Chairman, President and CEO", sources: ["bankingdive-delie-2026", "fnb-ai-directors-2025"] },
    { name: "Chris Chan", role: "Chief Strategy Officer (AI and data-science directors report here)", sources: ["fnb-ai-directors-2025"] },
    { name: "Santosh Sinha", role: "SVP, Director of AI and Innovation", sources: ["fnb-ai-directors-2025"], linkedin: "https://www.linkedin.com/in/santoshsinha13/" },
    { name: "Sundeep Tangirala", role: "SVP, Director of Data Science", sources: ["fnb-ai-directors-2025"], linkedin: "https://www.linkedin.com/in/sundeeptangirala/" },
    { name: "Vincent Calabrese", role: "Chief Financial Officer", sources: ["ft-q2-2026"], linkedin: "https://www.linkedin.com/in/vince-calabrese-66b47614/" }
  ],
  timeline: [
    { date: "2025-09-02", title: "Southeast expansion with eStore-equipped branches", detail: "Almost 30 new branches over five years; analysts single out FNB's technology.", sources: ["ab-southeast-2025"] },
    { date: "2025-09-18", title: "AI and data-science directors hired", detail: "Sinha (AI and innovation) and Tangirala (data science) join the strategy team.", sources: ["fnb-ai-directors-2025"] },
    { date: "2026-03-10", title: "Business loans added to the eStore Common app", detail: "AI-driven insights and analytics to cut keystrokes and application time.", sources: ["ft-estore-2026"] },
    { date: "2026-04-03", title: "CEO: smaller banks will out-innovate megabanks with AI", detail: "Data hub, on-premises data and an AI insights tool due late 2026.", sources: ["bankingdive-delie-2026"] },
    { date: "2026-04-16", title: "First-quarter 2026 earnings", detail: "Net income $137.0 million.", sources: ["ft-q1-2026"] },
    { date: "2026-07-16", title: "Record second-quarter 2026 revenue", detail: "Revenue $462.7 million; CEO credits digital, data-analytics and AI investment.", sources: ["ft-q2-2026"] },
    { date: "2026-08-17", title: "16th for customer reputation", detail: "Score 79.8 in American Banker's 2026 survey.", sources: ["ab-reputation-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "eStore Common app with AI-driven insights", detail: "One application for 50-plus consumer and business products; AI reduces keystrokes and time.", status: "In production", sources: ["ft-estore-2026"] },
    { useCase: "customer-chatbots", name: "AI customer insights and recommendations", detail: "Analyses eStore transactions, suggests products and cash-flow improvements.", status: "Announced", sources: ["bankingdive-delie-2026"] },
    { useCase: "model-risk", name: "Decisioning, forecasting and regulatory models", detail: "Data-science team under Tangirala maintains strategic decisioning systems and regulatory models.", status: "In production", sources: ["fnb-ai-directors-2025"] },
    { useCase: "governance-general", name: "Ethical and compliant AI strategy", detail: "Explicit remit of the director of AI and innovation.", status: "Rolling out", sources: ["fnb-ai-directors-2025"] },
    { useCase: "generative-agentic-ai", name: "AI coding assistants for smaller-bank development", detail: "CEO cites AI-powered coding as a capability equaliser.", status: "Announced", sources: ["bankingdive-delie-2026"] }
  ],
  numbers: [
    { label: "Products available through one Common application", value: "> 50", asOf: "2026-03-10", sources: ["ft-estore-2026"] },
    { label: "Locations with interactive teller machines", value: "150", asOf: "2026-04-03", sources: ["bankingdive-delie-2026"] },
    { label: "Second-quarter 2026 revenue / net income", value: "$462.7 million / $148.7 million", asOf: "2026-07-16", sources: ["ft-q2-2026"] },
    { label: "2025 non-interest expense (incl. technology)", value: "≈ $1 billion", asOf: "2026-04-03", sources: ["bankingdive-delie-2026"] },
    { label: "New Southeast and Mid-Atlantic branches", value: "≈ 30 over five years", asOf: "2025-09-02", sources: ["ab-southeast-2025"] },
    { label: "Customer reputation rank", value: "16th (79.8)", asOf: "2026-08-17", sources: ["ab-reputation-2026"] }
  ],
  quotes: [
    { who: "Vincent J. Delie, Jr.", role: "Chairman, President and CEO", date: "2026-04-03", quote: "I think the future's going to lead to smaller banks coming out with some very innovative tools that the larger banks miss.", sources: ["bankingdive-delie-2026"] },
    { who: "Vincent J. Delie, Jr.", role: "Chairman, President and CEO", date: "2026-07-16", quote: "Our investments in digital capabilities, data analytics and artificial intelligence enable us to gain efficiency and deepen household penetration.", sources: ["ft-q2-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "First National Bank of Pennsylvania is a national bank; decisioning models, AI recommendations and the Common app fall under OCC model-risk and gen-AI expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "AI-driven product recommendations and automated applications for consumers raise UDAAP and ECOA questions.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "federal-reserve", why: "Holding-company oversight of model risk and of the on-premises data infrastructure that feeds AI.", docSlugs: ["fed-sr-11-7"] }
  ],
  suggestions: [
    { title: "Recommendation engines are the next examiner question", detail: "An AI insights tool that suggests products from transaction data is a fairness and UDAAP exposure; publishing its guardrails alongside the launch would be prudent." },
    { title: "The on-premises data hub is a genuine differentiator", detail: "Most peers are still migrating data; FNB's decade of governance is why its AI hires can ship quickly." },
    { title: "'Ethical and compliant' needs a published framework", detail: "The AI director's remit implies one exists; disclosing it would support the small-bank innovation thesis with governance evidence." },
    { title: "Track whether AI shows up in the efficiency ratio", detail: "Management links AI to positive operating leverage; investors should look for that claim to be quantified in 2027." }
  ],
  faq: [
    { q: "How does FNB use AI?", a: "FNB uses AI-driven insights and data analytics inside its eStore Common application to cut keystrokes and application time across more than 50 products, runs decisioning and forecasting models under a director of data science, and plans an AI customer insights tool that analyses eStore transactions and recommends products for late 2026 or early 2027. A director of AI and innovation, hired in September 2025, owns an AI strategy focused on ethical and compliant practice." },
    { q: "Who leads AI at FNB?", a: "Santosh Sinha is senior vice-president and director of AI and innovation, and Sundeep Tangirala, formerly head of data and machine-learning engineering at PNC, is director of data science. Both joined in September 2025 and report to chief strategy officer Chris Chan." }
  ],
  sources: [
    { id: "ab-southeast-2025", title: "FNB Corp. is the latest bank to plot growth in the Southeast", publisher: "American Banker", url: "https://www.americanbanker.com/news/fnb-corp-is-the-latest-bank-to-plot-growth-in-the-southeast", date: "2025-09-02" },
    { id: "ab-reputation-2026", title: "Top Banks by Reputation 2026: Customers", publisher: "American Banker", url: "https://www.americanbanker.com/news/top-banks-by-reputation-2026-customers", date: "2026-08-17" },
    { id: "bankingdive-delie-2026", title: "FNB CEO: smaller banks will out-innovate large ones with AI", publisher: "Banking Dive", url: "https://bankingdive.com/news/fnb-first-national-bank-ai-data-estore-branches-ceo-delie/816568", date: "2026-04-03" },
    { id: "fnb-ai-directors-2025", title: "FNB Adds AI and Data Science Directors to Strategy Leadership Team", publisher: "F.N.B. Corporation", url: "https://www.fnb-online.com/about-us/newsroom/press-releases/2025/fnb-hires-ai-and-data-science-directors-250918", date: "2025-09-18" },
    { id: "ft-estore-2026", title: "F.N.B. Corporation Further Expands eStore Common Application Capabilities with Introduction of Business Loan Products", publisher: "PR Newswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603101047PR_NEWS_USPRX____NE06645-1", date: "2026-03-10" },
    { id: "ft-q1-2026", title: "F.N.B. Corporation Reports First Quarter 2026 Earnings", publisher: "PR Newswire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202604161631PR_NEWS_USPRX____NE36701-1", date: "2026-04-16" },
    { id: "ft-q2-2026", title: "F.N.B. Corporation Reports Second Quarter 2026 Earnings", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607161630PR_NEWS_USPRX____NE06555-1", date: "2026-07-16" }
  ],
  lastUpdated: "2026-09-10"
};
