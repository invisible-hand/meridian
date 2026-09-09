import type { Bank } from "@/lib/banks";

export const BNY_MELLON: Bank = {
  slug: "bny-mellon",
  name: "BNY (Bank of New York Mellon)",
  shortName: "BNY",
  ticker: "BK",
  hq: "New York, NY",
  fedRank: 10,
  leadBank: "The Bank of New York Mellon",
  assetsUsdMillions: 467349,
  charter: "State member bank (Fed)",
  posture: "'AI for everyone, everywhere, everything': one platform, half the staff building agents, 'digital employees' on the org chart.",
  platform: {
    name: "Eliza",
    detail: "BNY's enterprise AI platform, on which nearly all employees are trained; Eliza 2.0 launched in September 2025, OpenAI's models and Deep Research were added under a multi-year deal in February 2025 and Google Cloud's Gemini Enterprise in December 2025. By the first quarter of 2026 about 50% of employees were daily AI users, more than 50% were building agents, and the bank counted roughly 220 enterprise AI solutions and 140 'digital employees' in production.",
    sources: ["bny-q1-2026", "bny-eliza-insight-2025", "wsj-openai-2025", "bankingdive-google-2025", "ab-eliza-2025"]
  },
  answerFirst:
    "BNY, America's oldest bank and the world's largest custodian, spends a larger share of revenue on technology than any big-bank peer — about $3.8 billion in 2025, roughly 19% of revenue — and CEO Robin Vince's mantra is that 'AI is for everyone, everywhere and for everything'. The vehicle is Eliza, an enterprise platform that nearly every employee is trained on and that more than half of them now use to build agents; by the first quarter of 2026 the bank reported about 220 AI solutions and 140 'digital employees' in production, up from 117 solutions six months earlier. BNY has tripled its intern and analyst classes since 2022 to hire for AI proficiency, saw headcount fall 7% year on year by mid-2026, and in July 2026 Vince joined OpenAI's board — the clearest public tie between a systemically important bank and a frontier-model developer.",
  keyPoints: [
    "Technology spend of about $3.8 billion in 2025, roughly 19% of revenue — the highest proportion among large US banks, per CNBC's comparison.",
    "Eliza platform: nearly all employees trained; ~50% daily AI users and >50% building agents; ~220 enterprise AI solutions and ~140 digital employees in production (Q1 2026 deck); 117 solutions in production at September 30, 2025, up 75% in a quarter.",
    "Model partners on the platform: a multi-year OpenAI deal (February 2025, Deep Research and reasoning models) and Google Cloud's Gemini Enterprise (December 2025) for employee-built data-analysis agents.",
    "Workforce: intern and analyst classes tripled since 2022 to tap AI proficiency; headcount down 7% year on year in Q2 2026 while revenue hit a record $5.7 billion; Vince calls AI 'a jobs creator, not a destroyer'.",
    "Research and outreach: a five-year, $10 million AI R&D agreement with Carnegie Mellon (September 2025); a Future of Work Alliance with the University of Manchester (May 2026); free AI and cyber training for 1,000 community-bank executives.",
    "July 2026: CEO Robin Vince appointed to OpenAI's for-profit and nonprofit boards ahead of its IPO."
  ],
  leadership: [
    { name: "Robin Vince", role: "Chairman and CEO; OpenAI board member since July 2026", sources: ["bloomberg-openai-board-2026", "bankingdive-vince-2025"] },
    { name: "Leigh-Ann Russell", role: "Chief Information Officer and Global Head of Engineering", sources: ["cnbc-cio-2025", "bankingdive-costs-2025"] },
    { name: "Dermot McDonogh", role: "Chief Financial Officer", sources: ["ab-paying-off-2026"] }
  ],
  timeline: [
    { date: "2025-01-22", title: "Enterprise gen-AI assistant and anomaly detection described", detail: "An AI solution for anomaly detection in daily calculations cuts hours to minutes; a firm-wide generative assistant helps staff find procedures.", sources: ["bny-growth-2025"] },
    { date: "2025-02-26", title: "Multi-year OpenAI deal", detail: "Access to Deep Research and OpenAI's most advanced reasoning models to 'supercharge' Eliza.", sources: ["wsj-openai-2025"] },
    { date: "2025-09-10", title: "CIO: among the 5% seeing meaningful AI ROI", detail: "Russell on Eliza and training employees toward 100% AI adoption.", sources: ["cnbc-cio-2025"] },
    { date: "2025-09-11", title: "$10 million, five-year AI R&D agreement with Carnegie Mellon", detail: "Students, faculty and BNY experts on AI applications and systems.", sources: ["bny-cmu-2025"] },
    { date: "2025-10-16", title: "117 AI solutions in production; Eliza 2.0", detail: "Up 75% from the second quarter; Vince: 'AI is for everyone, everywhere and for everything'.", sources: ["ab-eliza-2025"] },
    { date: "2025-10-20", title: "'AI in the Next Phase': the adoption playbook published", detail: "Hackathons, promptathons, AI champions; most AI builders now come from outside engineering.", sources: ["bny-eliza-insight-2025", "bny-next-phase-2025"] },
    { date: "2025-10-28", title: "Vince at Money20/20: adoption, not capability, is the constraint", detail: "'Human adoption and culture and potentially organizational inertia' will get in the way.", sources: ["bankingdive-vince-2025"] },
    { date: "2025-12-08", title: "Google Cloud Gemini Enterprise added to Eliza", detail: "Employees build agents for data analysis such as parsing financial reports.", sources: ["bankingdive-google-2025"] },
    { date: "2026-02-09", title: "134 'digital employees'; $3.8 billion tech spend", detail: "CNBC: about 19% of revenue, the highest proportion among peers.", sources: ["cnbc-digital-employees-2026"] },
    { date: "2026-04-16", title: "Q1 deck: 50% daily users, >50% building agents, ~220 solutions, ~140 digital employees", detail: "Record quarterly revenue; the transformation agenda's metrics.", sources: ["bny-q1-2026", "reuters-q1-2026"] },
    { date: "2026-05-04", title: "Vince: AI is 'a jobs creator, not a destroyer'", detail: "At Milken: savings in one place create capacity to do more elsewhere.", sources: ["ab-jobs-creator-2026"] },
    { date: "2026-05-21", title: "Future of Work Alliance with the University of Manchester", detail: "Responsible, human-led AI research and testing.", sources: ["bny-manchester-2026"] },
    { date: "2026-05-28", title: "Intern and analyst classes tripled since 2022", detail: "Vince, 'an AI optimist', hires young staff for their AI proficiency.", sources: ["bloomberg-interns-2026"] },
    { date: "2026-07-15", title: "Q2: record $5.7 billion revenue, headcount −7%, guidance raised", detail: "Client impact of AI called 'measurable'; CFO declines to track prompt counts, focuses on outcomes.", sources: ["ab-paying-off-2026", "bny-q2-2026"] },
    { date: "2026-07-21", title: "Vince joins OpenAI's boards", detail: "Named to the OpenAI Foundation and OpenAI Group PBC boards ahead of a prospective IPO.", sources: ["bloomberg-openai-board-2026", "cnbc-openai-board-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Eliza and employee-built agents", detail: "Enterprise platform; more than half of employees building agents; ~140 digital employees on repetitive tasks.", status: "In production", sources: ["bny-q1-2026", "cnbc-digital-employees-2026"] },
    { useCase: "governance-general", name: "Anomaly detection in daily calculations", detail: "Flags areas for review in minutes instead of hours.", status: "In production", sources: ["bny-growth-2025"] },
    { useCase: "generative-agentic-ai", name: "AI-generated code", detail: "The CFO says engineers write a growing share of code with AI; the bank routes tasks to the most appropriate models.", status: "In production", sources: ["ab-paying-off-2026"] },
    { useCase: "third-party-vendors", name: "OpenAI and Google Cloud models on Eliza", detail: "Multi-model platform: OpenAI (Feb 2025) and Gemini Enterprise (Dec 2025).", status: "In production", sources: ["wsj-openai-2025", "bankingdive-google-2025"] },
    { useCase: "governance-general", name: "Community-bank AI training", detail: "Free AI and cyber training for 1,000 community-bank executives, led by senior BNY leaders.", status: "In production", sources: ["bankingdive-community-2026"] }
  ],
  numbers: [
    { label: "Technology spend", value: "≈ $3.8 billion (2025), ≈ 19% of revenue", asOf: "2026-02-09", sources: ["cnbc-digital-employees-2026"] },
    { label: "Daily AI users / agent builders", value: "≈ 50% / > 50% of employees", asOf: "2026-04-16", sources: ["bny-q1-2026"] },
    { label: "AI solutions / digital employees in production", value: "≈ 220 / ≈ 140", asOf: "2026-04-16", sources: ["bny-q1-2026"] },
    { label: "Headcount change", value: "−7% year on year", asOf: "2026-07-15", sources: ["ab-paying-off-2026"] },
    { label: "Assets under custody / administration", value: "$59.4 trillion", asOf: "2026-04-16", sources: ["reuters-q1-2026"] },
    { label: "Carnegie Mellon AI agreement", value: "$10 million over five years", asOf: "2025-09-11", sources: ["bny-cmu-2025"] }
  ],
  quotes: [
    { who: "Robin Vince", role: "Chairman and CEO", date: "2025-10-16", quote: "At BNY, AI is for everyone, everywhere and for everything.", sources: ["ab-eliza-2025"] },
    { who: "Robin Vince", role: "Chairman and CEO", date: "2026-05-28", quote: "I am an AI optimist. I think this is a revolutionary technology that for sure has to be well-managed.", sources: ["bloomberg-interns-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "State member bank and G-SIB holding company; SR 26-2 and the third-party guidance govern the OpenAI and Google dependencies on Eliza.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "ny-dfs", why: "New York-chartered: Part 500 certification and the DFS frontier-AI letter apply.", docSlugs: ["ny-dfs-23-nycrr-part-500", "ny-dfs-industry-letter-2026-05-21-frontier-ai-models"] },
    { authority: "basel-committee", why: "Custody at $59 trillion makes BCBS 239 data lineage and the third-party principles central.", docSlugs: ["bcbs-239", "bcbs-third-party-risk-principles-2025"] },
    { authority: "fsb", why: "G-SIB; the FSB's concentration warning names a few model providers — one of whose boards the CEO now sits on.", docSlugs: ["fsb-ai-sound-practices-consultation-2026", "fsb-financial-stability-implications-of-ai-2024"] },
    { authority: "sec", why: "Investment-services and asset-management businesses under SEC exam priorities on AI.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "The most decentralised agent program in banking", detail: "More than half of employees building agents is a different governance problem from a central AI team shipping use cases. The 'digital employee' count and the routing of tasks to appropriate models are how the bank makes that legible; supervisors will ask how it is inventoried." },
    { title: "A board seat at a model provider is a conflict to be managed, not hidden", detail: "Vince on OpenAI's boards while BNY runs OpenAI models on Eliza is disclosed and public. Expect questions on vendor selection and on how the bank's third-party risk program treats the relationship." },
    { title: "Headcount is falling while hiring rises — the BNY version of the workforce story", detail: "−7% headcount, tripled junior classes and 'jobs creator' rhetoric describe a reshaped pyramid, not a smaller one. It is the model other custody and operations-heavy banks will be measured against." },
    { title: "Outcomes over tokens", detail: "The CFO's refusal to report prompt counts sets BNY apart from peers reporting prompts per day; it is a deliberate choice that will age well if AI costs keep rising." }
  ],
  faq: [
    { q: "What is Eliza at BNY?", a: "Eliza is BNY's enterprise AI platform, on which nearly all employees are trained. Eliza 2.0 launched in September 2025; it runs OpenAI's models under a multi-year agreement announced in February 2025 and added Google Cloud's Gemini Enterprise in December 2025 so employees can build their own agents. By the first quarter of 2026 about half of employees used AI daily, more than half were building agents, and the bank counted roughly 220 AI solutions and 140 'digital employees' in production." },
    { q: "How much does BNY spend on technology?", a: "About $3.8 billion in 2025, roughly 19% of revenue — the highest proportion among large US banks according to CNBC's comparison in February 2026." }
  ],
  sources: [
    { id: "bny-q1-2026", title: "Quarterly Update Presentation, 1Q 2026", publisher: "BNY", url: "https://www.bny.com/assets/corporate/documents/pdf/investor-relations/earnings/quarterly-update-presentation-1q-2026.pdf", date: "2026-04-16" },
    { id: "bny-q2-2026", title: "Quarterly Update Presentation, 2Q 2026", publisher: "BNY", url: "https://www.bny.com/content/dam/bnymellon/documents/pdf/investor-relations/earnings/quarterly-update-presentation-2q-2026.pdf", date: "2026-07-15" },
    { id: "bny-eliza-insight-2025", title: "Unlocking Value with BNY's Enterprise AI Platform", publisher: "BNY", url: "https://www.bny.com/corporate/global/en/insights/unlocking-potential-enterprise-ai-platform-bny.html", date: "2025-10-20" },
    { id: "bny-next-phase-2025", title: "AI in the Next Phase: Driving Adoption", publisher: "BNY", url: "https://www.bny.com/content/dam/bnymellon/documents/pdf/insights/ai-in-the-next-phase-driving-adoption.pdf", date: "2025-10-20" },
    { id: "bny-growth-2025", title: "Unlocking AI Growth in Financial Services", publisher: "BNY", url: "https://www.bny.com/corporate/global/en/insights/unlocking-the-ai-growth-multiplier.html", date: "2025-01-22" },
    { id: "bny-cmu-2025", title: "BNY and Carnegie Mellon University Join Forces to Advance Research and Development in AI", publisher: "BNY", url: "https://www.bny.com/corporate/global/en/about-us/newsroom/press-release/bny-and-carnegie-mellon-university-join-forces-to-advance-research-and-development-in-ai-130443.html", date: "2025-09-11" },
    { id: "bny-manchester-2026", title: "BNY and The University of Manchester Launch the Future of Work Alliance", publisher: "BNY", url: "https://www.bny.com/corporate/global/en/about-us/newsroom/press-release/bny-and-the-university-of-manchester-launch-the-future-of-work-alliance.html", date: "2026-05-21" },
    { id: "wsj-openai-2025", title: "BNY, America's Oldest Bank, Signs Multiyear Deal With OpenAI", publisher: "The Wall Street Journal", url: "https://www.wsj.com/articles/bny-americas-oldest-bank-signs-multiyear-deal-with-openai-74987d1d", date: "2025-02-26" },
    { id: "cnbc-cio-2025", title: "BNY among 5% seeing meaningful return on investment from AI, says CIO", publisher: "CNBC", url: "https://www.cnbc.com/video/2025/09/10/sq-leigh-ann-russell.html", date: "2025-09-10" },
    { id: "cnbc-digital-employees-2026", title: "Digital employees, AI bootcamps: America's oldest bank is spending billions on tech", publisher: "CNBC", url: "https://www.cnbc.com/2026/02/09/digital-employees-ai-bootcamps-americas-oldest-bank-spends-billions-on-tech.html", date: "2026-02-09" },
    { id: "cnbc-openai-board-2026", title: "OpenAI appoints two new members to board of directors", publisher: "CNBC", url: "https://www.cnbc.com/2026/07/21/openai-appoints-two-new-members-to-board-of-directors.html", date: "2026-07-21" },
    { id: "bloomberg-openai-board-2026", title: "OpenAI Names BNY, Nubank CEOs to Board Ahead of IPO", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-07-21/openai-names-bny-nubank-ceos-to-board-ahead-of-ipo", date: "2026-07-21" },
    { id: "bloomberg-interns-2026", title: "BNY Triples Hiring of Interns and Analysts to Tap AI Proficiency", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-28/bny-triples-hiring-of-interns-and-analysts-to-tap-ai-proficiency", date: "2026-05-28" },
    { id: "reuters-q1-2026", title: "BNY's profit rises on strong fees, interest income growth", publisher: "Reuters", url: "https://www.reuters.com/business/finance/bnys-profit-rises-strong-fees-interest-income-growth-2026-04-16/", date: "2026-04-16" },
    { id: "ab-eliza-2025", title: "BNY moves quickly to adopt AI solutions, platforms", publisher: "American Banker", url: "https://www.americanbanker.com/news/bny-tops-estimates-reports-revenue-upswing", date: "2025-10-16" },
    { id: "ab-paying-off-2026", title: "BNY: AI bet is paying off, client impact is 'measurable'", publisher: "American Banker", url: "https://www.americanbanker.com/news/bny-ai-bet-is-paying-off-client-impact-is-measurable", date: "2026-07-15" },
    { id: "ab-jobs-creator-2026", title: "BNY CEO says AI is a jobs creator, not a destroyer", publisher: "American Banker", url: "https://www.americanbanker.com/news/bny-ceo-says-ai-is-a-jobs-creator-not-a-destroyer", date: "2026-05-04" },
    { id: "bankingdive-vince-2025", title: "BNY's Robin Vince stays big on AI", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/bnys-robin-vince-stays-big-on-ai/804139/", date: "2025-10-29" },
    { id: "bankingdive-google-2025", title: "BNY looks to Google Cloud for agentic AI push", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/bny-google-cloud-agentic-AI-robin-vince/807390/", date: "2025-12-09" },
    { id: "bankingdive-costs-2025", title: "AI adoption will trim banking industry costs by up to 20%", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/ai-trim-banking-industry-costs-20-percent-jpmorgan-bny-capital-one-mckinsey/804384/", date: "2025-10-31" },
    { id: "bankingdive-community-2026", title: "'These players matter': BNY embraces role on small lenders' AI journey", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/bny-ai-community-banks-initiative-razzaque/811224/", date: "2026-02-03" }
  ],
  lastUpdated: "2026-09-09"
};
