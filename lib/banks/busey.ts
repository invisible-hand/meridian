import type { Bank } from "@/lib/banks";

export const BUSEY: Bank = {
  slug: "busey",
  name: "First Busey Corporation",
  shortName: "Busey Bank",
  ticker: "BUSE",
  hq: "Champaign, IL",
  fedRank: 98,
  leadBank: "Busey Bank",
  assetsUsdMillions: 18012,
  charter: "Illinois state member bank (Federal Reserve)",
  posture: "A year after doubling through the CrossFirst acquisition, Busey created its first director of AI, data science and insights, hired from FNB and Huntington, with a mandate for 'responsible implementation of AI/ML models to drive revenue growth, operational efficiency and transformative productivity'.",
  platform: {
    name: "Director of AI, Data Science and Insights (from April 2026)",
    detail: "On 6 April 2026 Busey Bank appointed Adrianne Bernini as its first-ever director of AI, data science and insights, responsible for 'formulating, communicating and executing the strategic use of enterprise data and responsible implementation of AI/ML models to drive revenue growth, operational efficiency and transformative productivity', working with data analysts across the company so that initiatives 'align with corporate financial goals'. Bernini was director of data science and insights at FNB Corporation from 2019 to 2025, where she worked with Busey's current CFO Chris Chan, and most recently enterprise analytics transformation director at Huntington Bank. Chan said he had seen her 'successfully deploy AI, data science and quantitative modeling across the enterprise to drive revenue growth, client engagement and operational efficiency'. Busey's risk factors flag 'the development and implementation of tools incorporating artificial intelligence' by the bank and its vendors as a source of unforeseen consequences. No vendor, model inventory or budget has been disclosed.",
    sources: ["buse-bernini-2026", "buse-q1deck-2026"]
  },
  answerFirst:
    "First Busey Corporation, the Champaign, Illinois parent of Busey Bank with about $18 billion of assets after closing the $917 million acquisition of CrossFirst Bankshares of Leawood, Kansas, on 1 March 2025, took its first named step on AI in April 2026 by creating a director of AI, data science and insights and hiring Adrianne Bernini into it. Her brief is the strategic use of enterprise data and the 'responsible implementation of AI/ML models to drive revenue growth, operational efficiency and transformative productivity' across business units; she came from Huntington Bank's enterprise analytics transformation team and, before that, FNB Corporation, where she worked with Busey's chief financial officer, Chris Chan, who vouched that she had deployed 'AI, data science and quantitative modeling across the enterprise'. The hire sits on a strengthening base: second-quarter 2026 net income was $63.2 million, or $0.69 per diluted share, up 9.5% year on year on an adjusted basis, with an adjusted return on assets of 1.43%, a 3.62% adjusted margin, a 54.0% efficiency ratio improved by 134 basis points, record wealth fee income on $16.51 billion of assets under care, CET1 of 12.53% after $128.8 million of buybacks year to date, and chairman, president and CEO Van Dukeman, who has agreed to stay through July 2029, describing an 'indomitable balance sheet'. Busey's fee mix is unusually technology-linked, with payment technology solutions and treasury management alongside wealth, and its customer content covers AI fraud and deepfakes. Its investor materials list AI tools built by the bank or its vendors as a risk factor. Busey Bank is an Illinois state member bank supervised by the Federal Reserve; no AI vendor, model or budget has been named.",
  keyPoints: [
    "First director of AI, data science and insights, Adrianne Bernini, appointed 6 April 2026 with a mandate for responsible AI/ML models driving revenue, efficiency and productivity.",
    "CFO Chris Chan, who worked with Bernini at FNB, sponsors the role; AI tools flagged as a risk factor in investor materials.",
    "CrossFirst Bankshares acquired for $917 million, closed 1 March 2025, roughly doubling the company.",
    "Q2 2026 net income $63.2 million ($0.69); adjusted ROA 1.43%; efficiency ratio 54.0%; CET1 12.53%; $128.8 million of buybacks year to date.",
    "Record wealth fee income on $16.51 billion of assets under care; payment technology and treasury management are significant fee lines.",
    "CEO Van Dukeman agreed to remain through July 2029; customer content covers AI fraud and deepfake threats."
  ],
  leadership: [
    { name: "Van A. Dukeman", role: "Chairman, President and CEO", linkedin: "https://www.linkedin.com/in/van-dukeman-a3909a379", sources: ["buse-q2-2026"] },
    { name: "Chris Chan", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/christopher-chan-0470a756", sources: ["buse-bernini-2026"] },
    { name: "Adrianne Bernini", role: "Director of AI, Data Science and Insights", linkedin: "https://www.linkedin.com/in/adrianne-bernini-103391b0", sources: ["buse-bernini-2026"] }
  ],
  timeline: [
    { date: "2025-03-01", title: "CrossFirst Bankshares acquisition closes", detail: "$917 million deal completed ahead of schedule.", sources: ["ab-crossfirst-2025", "ab-headstart-2025"] },
    { date: "2026-04-06", title: "First director of AI, data science and insights appointed", detail: "Adrianne Bernini from Huntington and FNB; responsible AI/ML mandate.", sources: ["buse-bernini-2026"] },
    { date: "2026-04-28", title: "First-quarter 2026 results and deck", detail: "AI tools listed among technology risk factors; fee mix detailed.", sources: ["buse-q1deck-2026"] },
    { date: "2026-07-28", title: "Second-quarter 2026 results", detail: "Net income $63.2 million; efficiency 54.0%; record wealth fees.", sources: ["buse-q2-2026"] },
    { date: "2025-02-01", title: "'The Rise of AI in Fraud' customer guide", detail: "How criminals use AI and how to respond.", sources: ["buse-aifraud"] },
    { date: "2025-06-01", title: "Deepfake threat guidance for businesses", detail: "Fraud in the age of AI.", sources: ["buse-deepfake"] }
  ],
  useCases: [
    { useCase: "governance-general", name: "Enterprise AI and data-science function", detail: "Strategy, communication and execution of responsible AI/ML models across business units.", status: "Rolling out", sources: ["buse-bernini-2026"] },
    { useCase: "fraud", name: "Customer education on AI fraud and deepfakes", detail: "Guidance for consumers and businesses.", status: "In production", sources: ["buse-aifraud", "buse-deepfake"] },
    { useCase: "third-party-vendors", name: "Payment technology solutions", detail: "Lockbox, ACH, merchant and online payments as a fee line.", status: "In production", sources: ["buse-q1deck-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$63.2 million / $0.69", asOf: "2026-07-28", sources: ["buse-q2-2026"] },
    { label: "Adjusted ROA / efficiency ratio, Q2 2026", value: "1.43% / 54.0%", asOf: "2026-07-28", sources: ["buse-q2-2026"] },
    { label: "Wealth assets under care", value: "$16.51 billion", asOf: "2026-06-30", sources: ["buse-q2-2026"] },
    { label: "CrossFirst acquisition", value: "$917 million", asOf: "2025-03-01", sources: ["ab-headstart-2025"] }
  ],
  quotes: [
    { who: "Chris Chan", role: "Chief Financial Officer", date: "2026-04-06", quote: "At Busey, she will bring deep experience, proven leadership and specialized expertise to responsibly expand the ways AI and data transform our workflows and enhance how we serve our clients.", sources: ["buse-bernini-2026"] },
    { who: "Van A. Dukeman", role: "Chairman, President and CEO", date: "2026-07-28", quote: "Busey delivered a strong second quarter, with adjusted diluted EPS of $0.69, up 9.5% year-over-year.", sources: ["buse-q2-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Busey Bank is a state member bank; SR 11-7 and SR 23-4 govern the AI/ML models the new function will build and the vendors it uses.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and wealth products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "sec", why: "AI risk-factor language in investor materials sits within SEC scrutiny of AI-related disclosure.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "A named AI owner with a CFO sponsor is the right start", detail: "Reporting through finance ties models to revenue and efficiency targets; the next step is publishing which use cases the function is prioritising." },
    { title: "Wealth and payments are the data-rich lines", detail: "Record wealth fees and a payment-technology business give the new function immediate places to apply analytics." },
    { title: "Risk factors should evolve into governance disclosure", detail: "Listing AI as a risk is the minimum; a model-risk framework statement would match the hire." },
    { title: "Post-CrossFirst data consolidation comes first", detail: "A doubled bank has two data estates; unifying them is the prerequisite for the models the role is meant to deliver." }
  ],
  faq: [
    { q: "Does Busey Bank use AI?", a: "Busey created its first director of AI, data science and insights in April 2026, hiring Adrianne Bernini from Huntington Bank with a mandate for responsible AI and machine-learning models that drive revenue, efficiency and productivity. No vendor, model or budget has been disclosed; customer content covers AI-enabled fraud." },
    { q: "How has Busey changed since the CrossFirst deal?", a: "The $917 million acquisition of CrossFirst Bankshares closed on 1 March 2025 and roughly doubled the company to about $18 billion of assets. By the second quarter of 2026 Busey reported net income of $63.2 million, an adjusted return on assets of 1.43%, a 54.0% efficiency ratio and record wealth fee income." }
  ],
  sources: [
    { id: "buse-aifraud", title: "The Rise of AI in Fraud: What You Need to Know", publisher: "Busey Bank", url: "https://moneymatters.busey.com/busey-bank-the-rise-of-ai-in-fraud-what-you-need-to-know", date: "2025-02-01" },
    { id: "buse-deepfake", title: "Fraud in the Age of AI: Protecting Your Business from Deepfake Threats", publisher: "Busey Bank", url: "https://moneymatters.busey.com/busey-bank-fraud-in-the-age-of-ai-protecting-your-business-from-deepfake-threats", date: "2025-06-01" },
    { id: "ab-crossfirst-2025", title: "First Busey closes acquisition of CrossFirst", publisher: "American Banker", url: "https://www.americanbanker.com/list/first-busey-closes-acquisition-of-crossfirst", date: "2025-03-07" },
    { id: "ab-headstart-2025", title: "Head start: Old National says Bremer deal will close early", publisher: "American Banker", url: "https://americanbanker.com/news/head-start-old-national-says-bremer-deal-will-close-early", date: "2025-04-22" },
    { id: "buse-bernini-2026", title: "Bernini Joins Busey as Director of AI, Data Science and Insights", publisher: "Busey Bank", url: "https://www.busey.com/about-us/news-and-announcements/busey-announces-director-of-ai-data-science-and-insights", date: "2026-04-06" },
    { id: "buse-q1deck-2026", title: "Q1 2026 Earnings Investor Presentation", publisher: "First Busey Corporation", url: "https://ir.busey.com/static-files/e566cc4a-c381-404d-a3b6-e8d0a79aced4", date: "2026-04-28" },
    { id: "buse-q2-2026", title: "First Busey Corporation Announces 2026 Second Quarter Earnings", publisher: "First Busey Corporation (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/28/3334801/10701/en/First-Busey-Corporation-Announces-2026-Second-Quarter-Earnings.html", date: "2026-07-28" }
  ],
  lastUpdated: "2026-09-10"
};
