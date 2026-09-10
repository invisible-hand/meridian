import type { Bank } from "@/lib/banks";

export const VALLEY: Bank = {
  slug: "valley",
  name: "Valley National Bancorp",
  shortName: "Valley",
  ticker: "VLY",
  hq: "Morristown, NJ",
  fedRank: 42,
  leadBank: "Valley National Bank",
  assetsUsdMillions: 64388,
  charter: "National bank (OCC)",
  posture: "A midsize bank that says AI has flipped build-versus-buy: three vendor contracts already replaced, five tiers of AI access, a head of AI and data science, and a COO who counts tokens monthly.",
  platform: {
    name: "Cloud-first infrastructure, Valley's AI Assistant and tiered access",
    detail: "Valley's AI sits on a cloud-first strategy that moved more than 80% of its data-centre capacity to a cloud hub, giving what chief operating officer Russell Barrett calls a 'single pane of glass' on data, and on a completed core conversion. Nickolaus Lachman, senior vice-president and head of AI and data science, builds custom generative-AI agents and applications for Valley's AI Assistant under a governance framework. Access is tiered: five levels, two of them for engineering, quality assurance and model-risk staff with specialised tools, and about 80 of roughly 3,600 employees with open access as cross-functional 'power users'. Barrett says the bank is already replacing three external software contracts with AI-built workflows and reached production on AI prospecting and fraud tools sooner than similar-sized peers, while tracking spend and token use monthly.",
    sources: ["bankingdive-buildbuy-2026", "ab-barrett-2026", "ab-lachman-2026"]
  },
  answerFirst:
    "Valley National Bancorp, a $64 billion bank spanning New Jersey, New York, Florida, Alabama and California, has one of the more candid AI accounts among midsize lenders because its chief operating officer, Russell Barrett, talks about the economics. Ranked No. 47 on American Banker's 2026 Most Innovative People in Finance list, Barrett credits a cloud-first strategy that moved over 80% of data-centre capacity to a cloud hub, a completed core conversion and a four-year push to build a 'data culture' for letting Valley act on AI faster than peers: a data task that takes another bank five months takes Valley five days, digital transformation has produced nearly $100 million of cost savings over four years, about $20 million of recurring fee revenue and more than 100,000 hours of productivity, and more than 50 digital initiatives launched in a year. In July 2026 he said agentic AI had 'upended the build-versus-buy calculus': Valley is already replacing three external software contracts with its own AI-enabled workflows, has reached production on AI prospecting and fraud capabilities ahead of similar-sized banks working with the same partners, and is 'very token-conscious', tracking spend monthly, with five tiers of AI access and about 80 of 3,600 employees as open-access power users. Nickolaus Lachman, head of AI and data science since 2025, builds custom generative-AI agents for Valley's AI Assistant; a new Valley Foundry explores fintech as a primary focus rather than a side lab. The bank's 2026 moves include senior hires for partner banking, digital and customer care, a $247 million agreement in August 2026 to buy Chicago's Providence Financial for a retail footprint there, and technology expenses of $31.9 million in the first quarter, up 7%. It does not disclose total AI investment.",
  keyPoints: [
    "Build-versus-buy has flipped: 'We are already replacing three external contracts with our ability to leverage AI' (COO, July 2026); AI prospecting and fraud tools reached production ahead of similar-sized peers.",
    "Foundations: 80%-plus of data-centre capacity moved to a cloud hub, a completed core conversion and a 'data culture' begun four years ago; five days versus five months for data tasks.",
    "Measured outcomes: nearly $100 million of cost savings over four years, ~$20 million of recurring fee revenue, 100,000-plus hours of productivity, 50-plus digital initiatives in a year.",
    "Governed access: five AI tiers, two specialised for engineering, QA and model risk; about 80 of ~3,600 employees with open access; spend and token use tracked monthly.",
    "People: Russell Barrett (COO, ex-BNP Paribas and Bank Leumi CIO), Nickolaus Lachman (head of AI and data science, custom agents for Valley's AI Assistant), the Valley Foundry for fintech exploration.",
    "Growth: senior hires for partner banking, digital and customer care (February 2026); Providence Financial in Chicago for $247 million (August 2026); AI used to compete for deposits (Bloomberg, 2025)."
  ],
  leadership: [
    { name: "Ira Robbins", role: "Chairman and CEO", sources: ["valley-q1-2026"], linkedin: "https://www.linkedin.com/in/ira-robbins/" },
    { name: "Russell Barrett", role: "Chief Operating Officer; formerly chief transformation officer", sources: ["ab-barrett-2026", "bankingdive-buildbuy-2026"], linkedin: "https://www.linkedin.com/in/russellsbarrett/" },
    { name: "Nickolaus Lachman", role: "SVP, Head of AI and Data Science", sources: ["ab-lachman-2026"], linkedin: "https://www.linkedin.com/in/nickolauslachman/" },
    { name: "Travis Lan", role: "Chief Financial Officer", sources: ["bankingdive-csuite-2025"], linkedin: "https://www.linkedin.com/in/travis-lan-509bb04/" },
    { name: "Stephen Schroth", role: "Head of Digital and Assisted Channels (from February 2026)", sources: ["ft-leaders-2026"], linkedin: "https://www.linkedin.com/in/stephenschroth/" }
  ],
  timeline: [
    { date: "2025-03-03", title: "CFO and commercial leadership set", detail: "Travis Lan confirmed as CFO.", sources: ["bankingdive-csuite-2025"] },
    { date: "2025-03-19", title: "AI to compete for deposits", detail: "Among regionals using AI on customer data to lure deposits.", sources: ["bloomberg-deposits-2025"] },
    { date: "2026-02-11", title: "Leaders for partner banking, digital and customer care", detail: "Rodrigo Suarez, Stephen Schroth and Ed Montesdeoca appointed.", sources: ["ft-leaders-2026"] },
    { date: "2026-04-15", title: "Head of AI and data science on agent 'fleets'", detail: "Lachman's remit: governance to custom applications for Valley's AI Assistant.", sources: ["ab-lachman-2026"] },
    { date: "2026-04-23", title: "First-quarter 2026 results", detail: "Net income $163.9 million; technology expenses $31.9 million, up about 7%.", sources: ["valley-q1-2026", "bankingdive-buildbuy-2026"] },
    { date: "2026-06-01", title: "COO ranked No. 47 for building an 'AI-ready bank'", detail: "Cloud-first, data culture, the Valley Foundry and $100 million of savings.", sources: ["ab-barrett-2026"] },
    { date: "2026-07-10", title: "'AI is changing the build-versus-buy question'", detail: "Three vendor contracts replaced; five access tiers; token use tracked monthly.", sources: ["bankingdive-buildbuy-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 results", detail: "Net income $170.9 million; salary expense down on 'resource optimization'.", sources: ["valley-q2-2026"] },
    { date: "2026-08-25", title: "Providence Financial acquisition for $247 million", detail: "Fourteen Chicago-area branches; closing expected early 2027.", sources: ["bankingdive-providence-2026", "ab-offense-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Valley's AI Assistant and custom agents", detail: "Machine learning and custom gen-AI agents built by the AI and data science team.", status: "In production", sources: ["ab-lachman-2026"] },
    { useCase: "generative-agentic-ai", name: "AI workflows replacing vendor software", detail: "Three external contracts for specific workflows being replaced.", status: "Rolling out", sources: ["bankingdive-buildbuy-2026"] },
    { useCase: "fraud", name: "AI-powered fraud capabilities", detail: "Reached production with partners ahead of similar-sized banks.", status: "In production", sources: ["bankingdive-buildbuy-2026"] },
    { useCase: "customer-chatbots", name: "AI prospecting and lead generation", detail: "Helping bankers develop relationships 'in a not-creepy way'; AI used to compete for deposits.", status: "In production", sources: ["bankingdive-buildbuy-2026", "bloomberg-deposits-2025"] },
    { useCase: "governance-general", name: "Five-tier AI access and monthly spend tracking", detail: "Specialised tiers for engineering, QA and model risk; ~80 open-access power users.", status: "In production", sources: ["bankingdive-buildbuy-2026"] }
  ],
  numbers: [
    { label: "Vendor contracts being replaced by AI", value: "3", asOf: "2026-07-10", sources: ["bankingdive-buildbuy-2026"] },
    { label: "Employees with open AI access / total", value: "≈ 80 / ≈ 3,600", asOf: "2026-07-10", sources: ["bankingdive-buildbuy-2026"] },
    { label: "Digital transformation results over four years", value: "≈ $100 million saved; ≈ $20 million recurring revenue; 100,000+ hours", asOf: "2026-06-01", sources: ["ab-barrett-2026"] },
    { label: "Data-centre capacity moved to cloud", value: "> 80%", asOf: "2026-06-01", sources: ["ab-barrett-2026"] },
    { label: "Technology, furniture and equipment expense, Q1 2026", value: "$31.9 million, up ≈ 7%", asOf: "2026-04-23", sources: ["bankingdive-buildbuy-2026"] },
    { label: "Providence Financial acquisition", value: "$247 million; $1.6 billion of assets", asOf: "2026-08-25", sources: ["bankingdive-providence-2026"] }
  ],
  quotes: [
    { who: "Russell Barrett", role: "Chief Operating Officer", date: "2026-07-10", quote: "We probably are not market-leading in the number of use cases, but we do feel our ability to execute and see it to fruition is definitely something.", sources: ["bankingdive-buildbuy-2026"] },
    { who: "Russell Barrett", role: "Chief Operating Officer", date: "2026-06-01", quote: "Our persistence over the last few years on building a scalable infrastructure sits at the back of every innovative creation or partnership we now benefit from at Valley.", sources: ["ab-barrett-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Valley National Bank is a national bank; custom agents, AI prospecting and fraud models fall under the model-risk bulletin and the gen-AI risk perspective.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "AI prospecting and deposit targeting for consumers sit under UDAAP; any AI in lending under ECOA.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023", "cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Fraud and prospecting partners are third-party relationships for the holding company; replacing vendors with in-house AI shifts the model inventory.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "ny-dfs", why: "New York operations bring the DFS cyber rule and its frontier-model letter into scope.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2026-05-21-frontier-ai-models"] }
  ],
  suggestions: [
    { title: "Replacing vendors with AI moves risk from third-party to model risk", detail: "Every contract Valley retires with an in-house workflow becomes a model it must inventory, validate and monitor; the tiered access for model-risk staff suggests it knows this." },
    { title: "Token-consciousness is a governance metric", detail: "Monthly tracking of spend and the reason behind it is the discipline most banks lack; publishing the numbers would turn it into a competitive claim." },
    { title: "Execution over use-case counts is the right posture for a $64 billion bank", detail: "The COO's own framing, production before proliferation, is what examiners prefer and what investors can measure." },
    { title: "Chicago adds a footprint and a systems integration", detail: "Providence brings 14 branches onto a cloud-first stack the bank says handles change quickly; it is the first test of that claim through an acquisition." }
  ],
  faq: [
    { q: "How is Valley Bank using AI?", a: "Valley runs custom generative-AI agents and an AI Assistant built by its head of AI and data science, uses AI for prospecting, lead generation and fraud, and is replacing three external software contracts with AI-enabled workflows, according to its chief operating officer in July 2026. Access is tiered across five levels, with about 80 of roughly 3,600 employees given open access, and AI spend and token use are tracked monthly." },
    { q: "What has Valley's digital transformation delivered?", a: "According to COO Russell Barrett's June 2026 profile in American Banker, nearly $100 million of cost savings over four years, about $20 million of recurring fee revenue and more than 100,000 hours of productivity, built on moving over 80% of data-centre capacity to the cloud and a completed core conversion." }
  ],
  sources: [
    { id: "ab-barrett-2026", title: "#47 Valley Bank's COO is building an AI-ready bank", publisher: "American Banker", url: "https://americanbanker.com/news/valley-banks-russell-barrett-is-47-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-lachman-2026", title: "Nickolaus Lachman, SVP, Head of AI & Data Science, Valley Bank (Digital Banking speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/nickolas-lachman", date: "2026-04-15" },
    { id: "ab-offense-2026", title: "Regional bank weighed down by CRE loans goes back on offense", publisher: "American Banker", url: "https://americanbanker.com/news/regional-bank-weighed-down-by-cre-loans-goes-back-on-offense", date: "2026-08-25" },
    { id: "bankingdive-buildbuy-2026", title: "Valley Bank exec: AI is changing build-versus-buy question", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/valley-bank-ai-strategy-roi-vendors-midsize-lenders/824927/", date: "2026-07-10" },
    { id: "bankingdive-providence-2026", title: "Valley National Bank to acquire Chicago-area lender for $247M", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/valley-acquires-providence-bank-chicago-lender-247-million/828724/", date: "2026-08-25" },
    { id: "bankingdive-csuite-2025", title: "Valley National Bank bolsters its C-suite", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/valley-national-bank-csuite-cfo-commercial/741383/", date: "2025-03-03" },
    { id: "bloomberg-deposits-2025", title: "Fifth Third Among Banks Using AI to Help Lure Customer Deposits", publisher: "Bloomberg", url: "https://bloomberg.com/news/articles/2025-03-19/fifth-third-among-banks-using-ai-to-help-lure-customer-deposits", date: "2025-03-19" },
    { id: "ft-leaders-2026", title: "Valley Bank Strengthens Leadership Team to Accelerate Partner Banking, Digital Innovation, and Customer Care", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202602110800BIZWIRE_USPRX____20260211_BW383871-1", date: "2026-02-11" },
    { id: "valley-q1-2026", title: "Valley National Bancorp Announces First Quarter 2026 Results", publisher: "Valley National Bancorp", url: "https://valley.com/content/dam/valley/pdfs/earnings/2026/q1/Exhibit%2099.1%20Earnings%20Release%2004.23.2026%20FINAL.pdf", date: "2026-04-23" },
    { id: "valley-q2-2026", title: "Valley National Bancorp Announces Second Quarter 2026 Results", publisher: "Valley National Bancorp", url: "https://valley.com/content/dam/valley/pdfs/earnings/2026/q2/Exhibit%2099.1%20Earnings%20Release%2007.23.2026%20FINAL%20%20PR.pdf", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};
