import type { Bank } from "@/lib/banks";

export const ATLANTIC_UNION: Bank = {
  slug: "atlantic-union",
  name: "Atlantic Union Bankshares",
  shortName: "Atlantic Union",
  ticker: "AUB",
  hq: "Richmond, VA",
  fedRank: 54,
  leadBank: "Atlantic Union Bank",
  assetsUsdMillions: 37229,
  charter: "Virginia state member bank (Federal Reserve)",
  posture: "A $37 billion Mid-Atlantic bank whose CIO calls it innovation 'with a little i': automate what you already have, which is how it converted a $14 billion acquisition with a ten-person team checking 80 million values.",
  platform: {
    name: "Automated conversion and validation tooling (Sandy Spring integration)",
    detail: "Atlantic Union's technology story is the October 2025 integration of Sandy Spring Bancorp, its largest deal. Instead of the usual manual spot-check of about 10% of fields and values, CIO Matt Linderman's ten-person team wrote code that validated every value, column and field of the migrated data, more than 80 million values, and paired it with a real-time dashboard of call-centre volumes and other operating metrics as an early-warning system. Call volume returned to normal in six days, the call-centre abandonment rate came in at 13% against a projected 50% to 70%, and average waits stayed under four minutes through 66,000-plus October calls. The 2025 annual report says the bank is 'exploring exciting opportunities with Artificial Intelligence to further drive innovation and efficiency' and discloses that some of its models already use AI or machine learning, with the bias and interpretability risks that brings.",
    sources: ["ab-linderman-2026", "aub-10k-2025", "aub-sandyspring-2025"]
  },
  answerFirst:
    "Atlantic Union Bankshares, the Richmond, Virginia parent of Atlantic Union Bank with about $37 billion of assets, does not run a branded AI programme, but it has the most concrete automation record of any bank its size on the 2026 innovators list. When it completed the $14 billion (by asset size) acquisition of Sandy Spring Bancorp in 2025, chief information officer Matt Linderman, a Capital One and PNC veteran who joined in 2023, had his ten-person team automate the entire data conversion: code that checked every value, column and field, more than 80 million values, rather than the industry norm of sampling about 10%, plus a real-time operations dashboard. The result was a call-centre abandonment rate of 13% against a forecast of 50% to 70%, wait times under four minutes and normal call volumes within six days of the October 2025 conversion, a performance American Banker ranked 31st among the year's most innovative in finance. Linderman describes the approach as innovation 'with a little i', innovating within the technology a regional bank can afford rather than buying the newest tools. On AI itself the bank is deliberately cautious: the 2025 annual report says it is 'exploring exciting opportunities with Artificial Intelligence', notes that some of its models already use AI or machine learning with 'unique complexities' around training data, bias and interpretability, and adds a new risk factor on agentic AI, third-party models and generative-AI errors. Its public AI content for customers is about AI fraud. The bank's strategy is growth: ten new North Carolina branches over three years, a roughly $2 billion CRE loan sale to Blackstone in 2025 to reshape the balance sheet, record second-quarter 2026 net income to common of $158.0 million, and a first-quarter net charge-off ratio of 0.02%. Atlantic Union Bank is a Virginia state member bank supervised by the Federal Reserve.",
  keyPoints: [
    "Sandy Spring conversion automated end to end: every field validated (80 million-plus values) instead of 10% sampling; abandonment 13% versus a 50–70% forecast; volumes normal in six days.",
    "Philosophy from the CIO: innovation 'with a little i', rethinking existing technology because a regional bank 'is not going to have the funding to buy all the latest tech'.",
    "AI stance is exploratory and disclosed as risk: the 10-K says the bank is exploring AI, already uses some AI/ML models, and flags agentic AI, third-party models and generative-AI errors as new risks.",
    "Customer-facing AI content is defensive: guides on AI fraud and AI-enabled phishing.",
    "Growth plan: 10 North Carolina branches over three years; M&A on the sideline while Sandy Spring is absorbed; $2 billion CRE loan sale to Blackstone in June 2025.",
    "Results: Q2 2026 net income to common $158.0 million; Q1 2026 net charge-offs 0.02% of average loans."
  ],
  leadership: [
    { name: "John Asbury", role: "President and CEO", linkedin: "https://www.linkedin.com/in/johncasbury", sources: ["aub-q2-2026", "ab-carolinas-2025"] },
    { name: "Maria Tedesco", role: "President and Chief Operating Officer, Atlantic Union Bank", linkedin: "https://www.linkedin.com/in/maria-tedesco-b002104", sources: ["aub-sandyspring-2025", "ab-tedesco-2025"] },
    { name: "Matt Linderman", role: "Chief Information Officer (since 2023; ex-Capital One, PNC)", sources: ["ab-linderman-2026"] },
    { name: "Doug Woolley", role: "Chief Credit Officer", linkedin: "https://www.linkedin.com/in/doug-woolley-2810a212a", sources: ["ab-carolinas-2025"] },
    { name: "Shawn O'Brien", role: "EVP, Consumer and Business Banking Group Executive", linkedin: "https://www.linkedin.com/in/shawn-o-brien-a7830719", sources: ["ab-obrien-2026"] }
  ],
  timeline: [
    { date: "2025-05-13", title: "CEO looks south to the Carolinas", detail: "Next chapter planned while integrating the $1.3 billion Sandy Spring purchase.", sources: ["ab-south-2025"] },
    { date: "2025-06-27", title: "About $2 billion of CRE loans sold to Blackstone", detail: "Balance-sheet reshaping after the Sandy Spring deal.", sources: ["bankingdive-blackstone-2025"] },
    { date: "2025-10-14", title: "Sandy Spring integration completed", detail: "Data conversion and systems integration unify the bank across four jurisdictions.", sources: ["aub-sandyspring-2025"] },
    { date: "2025-10-23", title: "Ten North Carolina branches planned", detail: "Raleigh and Wilmington over three years; M&A on the sideline.", sources: ["ab-carolinas-2025"] },
    { date: "2026-03-16", title: "Annual report: 'exploring' AI, agentic-AI risk factor added", detail: "Some models already use AI or machine learning.", sources: ["aub-10k-2025"] },
    { date: "2026-05-21", title: "First-quarter net charge-offs of 0.02%", detail: "Among the lowest of its peers.", sources: ["ab-chargeoffs-2026"] },
    { date: "2026-06-01", title: "CIO ranked No. 31 for automating the merger", detail: "80 million values validated; abandonment 13% versus 50–70% forecast.", sources: ["ab-linderman-2026"] },
    { date: "2026-07-21", title: "Second-quarter 2026 results", detail: "Net income to common $158.0 million; adjusted operating $134.0 million.", sources: ["aub-q2-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Automated merger data conversion and validation", detail: "Code-based checks on every migrated value; real-time operations dashboard.", status: "In production", sources: ["ab-linderman-2026"] },
    { useCase: "model-risk", name: "AI and machine-learning models in use", detail: "Disclosed in the 10-K with training-data, bias and interpretability risks.", status: "In production", sources: ["aub-10k-2025"] },
    { useCase: "governance-general", name: "Exploratory AI programme", detail: "'Exploring exciting opportunities with Artificial Intelligence'; agentic and third-party model risks flagged.", status: "Pilot", sources: ["aub-10k-2025"] },
    { useCase: "fraud", name: "AI fraud education for customers", detail: "Guides on generative-AI scams and AI-generated phishing.", status: "In production", sources: ["aub-aifraud-2025"] }
  ],
  numbers: [
    { label: "Data values validated in the Sandy Spring conversion", value: "> 80 million (no sampling)", asOf: "2026-06-01", sources: ["ab-linderman-2026"] },
    { label: "Call-centre abandonment rate in conversion month", value: "13% (forecast 50–70%)", asOf: "2026-06-01", sources: ["ab-linderman-2026"] },
    { label: "Calls in October 2025", value: "> 66,000; volumes normal in 6 days", asOf: "2026-06-01", sources: ["ab-linderman-2026"] },
    { label: "Second-quarter 2026 net income to common", value: "$158.0 million", asOf: "2026-07-21", sources: ["aub-q2-2026"] },
    { label: "First-quarter 2026 net charge-off ratio", value: "0.02%", asOf: "2026-05-21", sources: ["ab-chargeoffs-2026"] },
    { label: "CRE loans sold to Blackstone", value: "≈ $2 billion", asOf: "2025-06-27", sources: ["bankingdive-blackstone-2025"] }
  ],
  quotes: [
    { who: "Matt Linderman", role: "Chief Information Officer", date: "2026-06-01", quote: "We built code that doesn't sample. That equated to checking more than 80 million values.", sources: ["ab-linderman-2026"] },
    { who: "Matt Linderman", role: "Chief Information Officer", date: "2026-06-01", quote: "At a regional scale, we're not going to have the funding to buy all the latest tech. So it's important to think about lowercase-i innovation.", sources: ["ab-linderman-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Atlantic Union Bank is a Virginia state member bank; Fed model-risk guidance covers the AI and ML models the 10-K discloses and the third-party models it flags.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer lending and servicing bring ECOA adverse-action and UDAAP duties to any AI-based decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor AI models.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "Automation without a model is still the biggest lever", detail: "The merger result came from deterministic code, not machine learning; it shows what a regional bank can get from engineering discipline before buying AI." },
    { title: "The 10-K reads like a bank preparing to deploy", detail: "Naming agentic AI, third-party model provenance and generative-AI error risk a year before launching anything is the disclosure pattern of a bank that expects examiners to ask." },
    { title: "The conversion tooling is reusable for the Carolinas build-out", detail: "Validation code and the operations dashboard transfer to branch openings and any future deal, which is where the 'little i' pays off twice." },
    { title: "Name the AI use cases next", detail: "The bank says it uses AI/ML models today; saying where (fraud, credit, marketing) would let investors weigh the risk factor it has written." }
  ],
  faq: [
    { q: "How does Atlantic Union Bank use AI?", a: "Atlantic Union says in its 2025 annual report that it is exploring opportunities with artificial intelligence and that some of the models it uses already employ AI or machine learning. It has not named specific AI products. Its best-documented technology achievement is the automated data conversion and validation for the Sandy Spring Bancorp integration in October 2025." },
    { q: "Who is Atlantic Union's CIO?", a: "Matt Linderman, who joined in 2023 after 20 years at large banks including Capital One and PNC. He was ranked 31st on American Banker's 2026 Most Innovative People in Finance for automating the Sandy Spring merger conversion with a ten-person team." }
  ],
  sources: [
    { id: "ab-linderman-2026", title: "#31 Atlantic Union's CIO automated his way through a $14 billion merger", publisher: "American Banker", url: "https://www.americanbanker.com/news/atlantic-union-banks-cio-is-31-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-carolinas-2025", title: "Atlantic Union plans more branches to speed Carolinas growth", publisher: "American Banker", url: "https://www.americanbanker.com/news/atlantic-union-plans-more-branches-to-speed-carolinas-growth", date: "2025-10-23" },
    { id: "ab-south-2025", title: "Atlantic Union's growth-minded CEO looks south to Carolinas", publisher: "American Banker", url: "https://www.americanbanker.com/news/atlantic-unions-growth-minded-ceo-looks-south-to-carolinas", date: "2025-05-13" },
    { id: "ab-tedesco-2025", title: "The Most Powerful Women to Watch, No. 24, Maria Tedesco, Atlantic Union Bank", publisher: "American Banker", url: "https://www.americanbanker.com/news/2025-the-most-powerful-women-to-watch-no-24-maria-tedesco-atlantic-union-bank", date: "2025-09-24" },
    { id: "ab-chargeoffs-2026", title: "What's a banker to say when charge-offs are microscopic?", publisher: "American Banker", url: "https://americanbanker.com/news/whats-a-banker-to-say-when-charge-offs-are-microscopic", date: "2026-05-21" },
    { id: "ab-obrien-2026", title: "Shawn O'Brien, EVP, Consumer and Business Banking, Atlantic Union Bank (speaker profile)", publisher: "American Banker", url: "https://small-business-banking.americanbanker.com/profile/shawn-obrien", date: "2026-06-08" },
    { id: "aub-10k-2025", title: "Atlantic Union Bankshares 2025 Annual Report on Form 10-K", publisher: "Atlantic Union Bankshares", url: "https://investors.atlanticunionbank.com/sec-filings/all-sec-filings/content/0001104659-26-034181/aub-20251231xars.pdf", date: "2026-03-16" },
    { id: "aub-sandyspring-2025", title: "Atlantic Union Bank Completes Integration of Sandy Spring Bank", publisher: "Atlantic Union Bank", url: "https://investors.atlanticunionbank.com/news-events/press-releases/detail/206/atlantic-union-bank-completes-integration-of-sandy-spring", date: "2025-10-14" },
    { id: "aub-q2-2026", title: "Atlantic Union Bankshares Reports Second Quarter Financial Results", publisher: "Atlantic Union Bankshares", url: "https://investors.atlanticunionbank.com/news-events/press-releases/detail/222/atlantic-union-bankshares-reports-second-quarter-financial", date: "2026-07-21" },
    { id: "aub-aifraud-2025", title: "AI Fraud: What It Is and How to Stay Protected", publisher: "Atlantic Union Bank", url: "https://www.atlanticunionbank.com/bank-better/august-2025/ai-fraud", date: "2025-08-01" },
    { id: "bankingdive-blackstone-2025", title: "Atlantic Union sells roughly $2B in CRE loans to Blackstone", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/atlantic-union-sells-roughly-2-billion-cre-loans-blackstone/751889/", date: "2025-06-27" }
  ],
  lastUpdated: "2026-09-10"
};
