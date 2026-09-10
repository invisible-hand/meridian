import type { Bank } from "@/lib/banks";

export const CITY_NATIONAL: Bank = {
  slug: "city-national",
  name: "City National Bank (RBC)",
  shortName: "City National",
  ticker: "RY",
  hq: "Los Angeles, CA (US); Toronto (RBC)",
  fedRank: 30,
  leadBank: "City National Bank",
  assetsUsdMillions: 99947,
  charter: "National bank (OCC); subsidiary of Royal Bank of Canada",
  posture: "A turnaround bank inside one of the most AI-invested parents in banking: RBC targets $700 million to $1 billion of value from AI by 2027, while City National rebuilds risk controls, recruits bankers and heads for Texas.",
  platform: {
    name: "RBC Borealis and the parent's AI programme",
    detail: "City National's AI capability comes from Toronto. RBC founded its AI research institute, Borealis AI, in 2016 and now describes a 'Borealis agentic AI platform' bridging lines of business; its 2025 annual report targets $700 million to $1 billion of incremental enterprise value from AI by 2027, and its researchers won the agentic-retrieval challenge at the 2025 ACM conference on AI in finance. At City National the visible AI leadership is Jaya Kandaswamy, senior vice-president for product, AI and innovation, who speaks publicly on agentic AI and 'who controls the customer relationship'. The bank's own 2026 priorities, as its president of commercial banking put it, are recruiting, the Southeast expansion and watching 'AI disruptions' among clients and vendors.",
    sources: ["rbc-workforce-ai", "rbc-annual-2025", "rbc-icaif-2026", "ab-kandaswamy-2026", "cnb-labj-2026"]
  },
  answerFirst:
    "City National Bank is Royal Bank of Canada's US bank, and its AI is largely inherited. RBC has run an AI research institute, Borealis AI, since 2016, now operates a Borealis agentic AI platform for its lines of business, targets $700 million to $1 billion of incremental enterprise value from AI by 2027 in its 2025 annual report, and told analysts in December 2025 that its return-on-equity target could rise further depending on AI deployment. City National itself has spent 2024–2026 recovering: after a $65 million OCC fine in February 2024 for systemic risk-management deficiencies, a $31 million redlining settlement in 2023 and heavy remediation spending, RBC's CEO said in August 2025 the bank was 'back on its front foot', recruiting commercial and private bankers; by the quarter to July 2026 its net income was up 61% year on year to $184 million and the parent was talking about adding bankers in Texas and possibly acquisitions. The bank's public AI voice is Jaya Kandaswamy, senior vice-president for product, AI and innovation, who frames agentic AI as a contest over 'who controls the customer relationship'; its commercial-banking president says leadership discusses 'sometimes weekly' where the bank needs to be on AI and how it will affect clients and vendors. A Fifth Third alumni team, executive chair Greg Carmichael and CEO Howard Hammond, runs the turnaround, RBC plans to migrate City National to the RBC brand, and expansion offices opened in Charlotte and Greenville in December 2025. No City National-specific AI budgets, use-case counts or headcount effects have been disclosed.",
  keyPoints: [
    "Parent capability: Borealis AI since 2016, a Borealis agentic AI platform, $700 million to $1 billion of AI-driven enterprise value targeted by 2027, and a first-place finish in the 2025 ICAIF agentic-retrieval challenge.",
    "The turnaround comes first: a $65 million OCC fine (2024) and remediation spending; 'back on its front foot' (RBC CEO, August 2025); net income up 61% to $184 million in the quarter to July 2026.",
    "AI leadership at the bank: SVP Jaya Kandaswamy for product, AI and innovation; the commercial-banking president says AI is discussed 'sometimes weekly' with respect to clients and vendors.",
    "Growth plan: recruiting bankers, Charlotte and Greenville offices (December 2025), Texas hiring and a mortgage build-out; acquisitions only if they create 'meaningful shareholder value' (August 2026).",
    "Brand and management: a Fifth Third alumni leadership (Carmichael, Hammond, Yurosek); migration toward a single RBC brand in the US announced at the March 2025 investor day.",
    "Disclosure: no bank-level AI budgets, use-case counts or headcount figures; the Borealis platform and RBC targets are the only quantified AI record."
  ],
  leadership: [
    { name: "Howard Hammond", role: "Chief Executive Officer, City National Bank (ex-Fifth Third)", sources: ["ab-rbc-strategy-2025", "cnb-labj-2026"], linkedin: "https://www.linkedin.com/in/howardhammond1/" },
    { name: "Greg Carmichael", role: "Executive Chair, RBC US; former Fifth Third CEO", sources: ["ab-rbc-strategy-2025"], linkedin: "https://www.linkedin.com/in/gregdcarmichael/" },
    { name: "Jaya Kandaswamy", role: "SVP, Product, AI and Innovation", sources: ["ab-kandaswamy-2026", "ab-kandaswamy-2025"], linkedin: "https://www.linkedin.com/in/jkanda/" },
    { name: "Joe Yurosek", role: "President, Commercial Banking", sources: ["cnb-labj-2026", "ab-rbc-strategy-2025"] },
    { name: "Dave McKay", role: "President and CEO, Royal Bank of Canada", sources: ["ab-front-foot-2025", "ab-texas-2026"], linkedin: "https://www.linkedin.com/in/dave-mckay-4189071/" }
  ],
  timeline: [
    { date: "2025-03-27", title: "RBC's revised US strategy", detail: "Cross-selling, a mortgage expansion and a move toward one RBC brand; Fifth Third alumni lead the turnaround.", sources: ["ab-rbc-strategy-2025"] },
    { date: "2025-05-20", title: "AI-driven product lead speaks at Digital Banking", detail: "Jaya Kandaswamy on AI-driven product innovation at City National.", sources: ["ab-kandaswamy-2025"] },
    { date: "2025-08-27", title: "'Back on its front foot'", detail: "Net income of $114 million for May–July 2025, the best in three years; remediation costs falling.", sources: ["ab-front-foot-2025"] },
    { date: "2025-12-03", title: "RBC raises its return target; AI could lift it further", detail: "ROE of at least 17% by 2027; another revision possible depending on AI deployment.", sources: ["ab-rbc-target-2025"] },
    { date: "2025-12-15", title: "Charlotte and Greenville offices open", detail: "The Carolinas push, part of the Southeast expansion.", sources: ["ft-carolinas-2025", "bankingdive-carolinas-2025"] },
    { date: "2026-01-05", title: "RBC on preparing its workforce for AI", detail: "Borealis AI, founded 2016, described as a core strategic enabler.", sources: ["rbc-workforce-ai"] },
    { date: "2026-03-02", title: "'AI disruptions. It's here.'", detail: "The commercial-banking president on weekly discussions of AI's impact on clients and vendors.", sources: ["cnb-labj-2026"] },
    { date: "2026-05-27", title: "RBC researchers win the ICAIF agentic-retrieval challenge", detail: "Borealis AI first among global teams on financial-filing analysis.", sources: ["rbc-icaif-2026"] },
    { date: "2026-07-24", title: "New head of personal and business banking", detail: "Lindsay Dunn named executive vice-president.", sources: ["ab-roundup-2026"] },
    { date: "2026-08-27", title: "Texas on the map; net income up 61%", detail: "$184 million for the quarter to July; deposits up 5%; acquisitions possible if they create value.", sources: ["ab-texas-2026"] },
    { date: "2026-09-01", title: "CFO Chris Doll leaves for KeyCorp", detail: "After nearly three years as City National's finance chief.", sources: ["bankingdive-doll-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Borealis agentic AI platform (RBC)", detail: "The parent's platform bridging lines of business with production agents.", status: "Rolling out", sources: ["rbc-agentic-job-2026", "rbc-workforce-ai"] },
    { useCase: "trading-markets", name: "Agentic retrieval over financial filings (Borealis research)", detail: "Award-winning research on finding and interpreting information in complex filings.", status: "Pilot", sources: ["rbc-icaif-2026"] },
    { useCase: "governance-general", name: "Post-remediation risk management", detail: "Controls rebuilt after the 2024 OCC order; the frame for any AI deployment at the bank.", status: "In production", sources: ["ab-front-foot-2025"] },
    { useCase: "customer-chatbots", name: "AI-driven product innovation", detail: "Led by the SVP for product, AI and innovation; specifics undisclosed.", status: "Announced", sources: ["ab-kandaswamy-2025"] }
  ],
  numbers: [
    { label: "RBC incremental enterprise value from AI, target", value: "$700 million – $1 billion by 2027", asOf: "2025-12-02", sources: ["rbc-annual-2025"] },
    { label: "City National net income, quarter to July 2026", value: "$184 million, up 61% year on year", asOf: "2026-08-27", sources: ["ab-texas-2026"] },
    { label: "OCC penalty for risk-management deficiencies", value: "$65 million (February 2024)", asOf: "2025-08-27", sources: ["ab-front-foot-2025"] },
    { label: "Total assets", value: "≈ $98 billion", asOf: "2025-12-16", sources: ["bankingdive-carolinas-2025"] }
  ],
  quotes: [
    { who: "Dave McKay", role: "President and CEO, Royal Bank of Canada", date: "2025-08-27", quote: "City National is now on its front foot and recruiting commercial bankers, recruiting private bankers, adding clients.", sources: ["ab-front-foot-2025"] },
    { who: "Joe Yurosek", role: "President, Commercial Banking", date: "2026-03-02", quote: "And we'll see AI disruptions. It's here. It's helping our clients. Our clients are adapting to this change. The unknown is just to the extent of who it will disrupt next.", sources: ["cnb-labj-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "City National is a national bank operating under the 2024 OCC action on risk management; any AI deployment is examined inside that remediation.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "RBC US Group Holdings is the intermediate holding company; the Borealis platform is a group-provided service under third-party and affiliate guidance.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "cfpb", why: "Consumer and private banking with a redlining settlement in its past make fair-lending controls on any AI in credit decisions central.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "california", why: "A Los Angeles-based bank with California consumers falls under the CPPA's automated-decision rules.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] }
  ],
  suggestions: [
    { title: "The parent's AI is the bank's opportunity and its dependency", detail: "Borealis gives City National capability most $100 billion banks cannot build; the question examiners will ask is how a group platform is governed inside a US bank still under an OCC order." },
    { title: "Remediation sets the pace", detail: "A bank rebuilding risk management is right to sequence AI behind controls; the cost is that peers report agent counts while City National reports recruiting." },
    { title: "Agentic AI as a customer-relationship question", detail: "The bank's AI lead frames agents as a fight for who owns the client; for a private-banking and entertainment-industry franchise, relationship control is the whole business model." },
    { title: "Brand migration will change what 'City National AI' means", detail: "If the US business becomes RBC-branded, AI disclosure will move to Toronto's annual report, where the $700 million to $1 billion target already lives." }
  ],
  faq: [
    { q: "What is City National Bank's AI strategy?", a: "It is largely RBC's. The parent has run Borealis AI since 2016, operates a Borealis agentic AI platform, and targets $700 million to $1 billion of incremental enterprise value from AI by 2027. At City National, an SVP for product, AI and innovation leads the work, but the bank has not disclosed budgets, use-case counts or headcount effects, and its 2024–2026 priority has been risk-management remediation and banker recruiting." },
    { q: "Who runs City National Bank?", a: "CEO Howard Hammond and executive chair of RBC's US operations Greg Carmichael, both formerly of Fifth Third, lead a turnaround that RBC's CEO Dave McKay says has the bank 'back on its front foot'. RBC has said it plans to migrate the US business toward a single RBC brand." }
  ],
  sources: [
    { id: "rbc-workforce-ai", title: "Tech @ RBC: Preparing our workforce for a future with AI", publisher: "RBC", url: "https://jobs.rbc.com/ca/en/preparing-our-workforce-for-a-future-with-ai", date: "2026-01-05" },
    { id: "rbc-annual-2025", title: "RBC 2025 Annual Report ($700 million to $1 billion incremental enterprise value from AI by 2027)", publisher: "RBC", url: "https://www.rbc.com/investor-relations/_assets-custom/pdf/ar_2025_e.pdf", date: "2025-12-02" },
    { id: "rbc-icaif-2026", title: "RBC researchers win global AI challenge for finance", publisher: "RBC", url: "https://jobs.rbc.com/ca/en/rbc-researchers-win-global-ai-challenge-for-finance", date: "2026-05-27" },
    { id: "rbc-agentic-job-2026", title: "Agentic SDET I (Borealis agentic AI platform)", publisher: "RBC", url: "https://jobs.rbc.com/ca/en/job/R-0000177703/Agentic-SDET-I", date: "2026-05-20" },
    { id: "ab-kandaswamy-2026", title: "Jaya Kandaswamy, SVP, Product, AI and Innovation, City National Bank (Virtual Summits profile)", publisher: "American Banker", url: "https://virtual-summits.americanbanker.com/profile/jaya-kandaswamy", date: "2026-08-07" },
    { id: "ab-kandaswamy-2025", title: "Jaya Kandaswamy, SVP, Product, AI and Innovation, City National Bank (Digital Banking speaker)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/speaker/jaya-kandaswamy", date: "2025-05-20" },
    { id: "ab-front-foot-2025", title: "RBC's City National Bank is back on 'front foot,' CEO says", publisher: "American Banker", url: "https://americanbanker.com/news/rbcs-city-national-bank-is-back-on-front-foot-ceo-says", date: "2025-08-27" },
    { id: "ab-texas-2026", title: "Texas is on RBC's map to grow its City National Bank unit", publisher: "American Banker", url: "https://americanbanker.com/news/texas-is-on-rbcs-map-to-grow-its-city-national-bank-unit", date: "2026-08-27" },
    { id: "ab-rbc-strategy-2025", title: "RBC plans mortgage expansion under revised US strategy", publisher: "American Banker", url: "https://americanbanker.com/news/rbc-plans-mortgage-expansion-under-revised-us-strategy", date: "2025-03-27" },
    { id: "ab-rbc-target-2025", title: "RBC lifts its return target, downplays interest in US M&A", publisher: "American Banker", url: "https://americanbanker.com/news/rbc-lifts-its-return-target-downplays-interest-in-u-s-m-a", date: "2025-12-03" },
    { id: "ab-roundup-2026", title: "BNY and Nubank CEOs join OpenAI board, shake-up at Old National (roundup: City National names Lindsay Dunn)", publisher: "American Banker", url: "https://americanbanker.com/list/bny-and-nubank-ceos-join-openai-board-shake-up-at-old-national", date: "2026-07-24" },
    { id: "bankingdive-carolinas-2025", title: "RBC's City National makes Carolinas push", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/rbc-city-national-bank-charlotte-greenville-carolina-offices/808040/", date: "2025-12-16" },
    { id: "bankingdive-doll-2026", title: "KeyCorp taps City National, Fifth Third alum as strategy chief", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/keycorp-taps-city-national-fifth-third-alum-as-strategy-chief/829317/", date: "2026-09-01" },
    { id: "ft-carolinas-2025", title: "City National Bank Expands in the Carolinas with New Offices in Charlotte and Greenville", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202512151100PR_NEWS_USPRX____SF47596-1", date: "2025-12-15" },
    { id: "cnb-labj-2026", title: "Banking & Finance Quarterly: Riding Winds of Change (Los Angeles Business Journal interview with Joe Yurosek, reprinted by City National)", publisher: "City National Bank", url: "https://cnb.com/content/dam/cnb/library/publishers/los-angeles-business-journal/media/L-A-Business-Journal-Joe-Yurosek-riding-winds-of-change-20260302-2656973.pdf", date: "2026-03-02" }
  ],
  lastUpdated: "2026-09-10"
};
