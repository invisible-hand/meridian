import type { Bank } from "@/lib/banks";

export const ASSOCIATED: Bank = {
  slug: "associated",
  name: "Associated Banc-Corp",
  shortName: "Associated",
  ticker: "ASB",
  hq: "Green Bay, WI",
  fedRank: 50,
  leadBank: "Associated Bank, National Association",
  assetsUsdMillions: 45538,
  charter: "National bank (OCC)",
  posture: "Wisconsin's largest bank is organising for AI line by line: a senior director of AI for commercial banking hired from U.S. Bank, a chief digital officer from BMO with an explicit AI mandate, a new board technology committee and a combined chief data officer and CIO.",
  platform: {
    name: "Line-of-business AI under a chief data officer / CIO",
    detail: "Associated has chosen to embed AI accountability inside business lines rather than a central lab. Andy Miner, hired from U.S. Bank in June 2026 as senior director, AI for Corporate and Commercial Banking, is 'the single point of accountability for AI within the line of business', owning strategy, use cases, delivery, adoption and 'being a steward of risk and data'; first uses are internal workflows in portfolio management, treasury and payments, then faster loan processing and personalised client insights. Alexander Bush is executive vice-president, chief data officer and chief information officer. Brianna Elsass, chief digital officer from July 2026 after a decade at BMO, is charged with advancing 'the bank's AI and omni channel strategy'. The board created a technology committee at the April 2026 annual meeting. The bank also runs an AI Academy for young people with the Boys & Girls Clubs, led by CIO Terry Williams at launch in 2025.",
    sources: ["asb-miner-2026", "bankingdive-elsass-2026", "ab-bush-2026", "asb-agm-2026"]
  },
  answerFirst:
    "Associated Banc-Corp, the Green Bay-based parent of Associated Bank and the largest bank holding company in Wisconsin, with about $52 billion of assets after closing its $604 million purchase of Omaha's American National on 1 April 2026, has spent 2026 putting AI accountability into named roles rather than announcing products. On 30 June 2026 it hired Andy Miner from U.S. Bank, where he helped launch and scale that bank's enterprise AI effort, as senior director of AI for Corporate and Commercial Banking, reporting to commercial head Phillip Trier; the role is described as 'the single point of accountability for AI within the line of business', responsible for strategy, use cases, delivery and adoption and for stewarding risk and data. The commercial bank is where the bank's growth is (a record 2025, commercial and business lending up about 43% in five years to $12.3 billion, new teams in Kansas City and Dallas), and AI will be applied first to internal workflows in portfolio management, treasury and payments, then to faster loan processing and personalised client insights. In July 2026 Brianna Elsass joined from BMO as chief digital officer with a remit that includes 'advancing the bank's AI and omni channel strategy', succeeding Doug Peacock; Alexander Bush serves as chief data officer and chief information officer; and the board formed a technology committee at the April 2026 annual meeting. Publicly, Associated's AI voice is defensive and educational: webinars and articles on AI-powered social engineering, deepfake fraud and business email compromise, and an AI Academy for young people. It has not disclosed AI spending, use-case counts or generative-AI deployments. Second-quarter 2026 earnings were $121 million, or $140 million excluding American National integration costs, with double-digit commercial and industrial loan growth.",
  keyPoints: [
    "AI accountability placed inside the business: a senior director of AI for Corporate and Commercial Banking (from U.S. Bank's enterprise AI effort) is the 'single point of accountability' for strategy, use cases, delivery, adoption, risk and data.",
    "First commercial uses named: internal workflows in portfolio management, treasury and payments, then loan-processing speed and personalised client insights.",
    "Digital leadership refreshed: chief digital officer Brianna Elsass (ex-BMO, July 2026) with an explicit AI and omnichannel mandate; Alexander Bush as combined chief data officer and CIO.",
    "Board oversight: a new technology committee created at the April 2026 annual meeting.",
    "Public AI content is defensive: recurring webinars and guides on AI-enabled social engineering, deepfakes and business email compromise for mid-market clients.",
    "Growth context: American National acquired ($604 million, closed April 2026); commercial lending up ~43% in five years; Q2 2026 adjusted earnings $140 million."
  ],
  leadership: [
    { name: "Andy Harmening", role: "President and CEO", sources: ["bankingdive-harmening-2026", "ft-q2-2026"], linkedin: "https://www.linkedin.com/in/andyharmening/" },
    { name: "Alexander Bush", role: "EVP, Chief Data Officer and Chief Information Officer", sources: ["ab-bush-2026"], linkedin: "https://www.linkedin.com/in/alexbush/" },
    { name: "Brianna Elsass", role: "Chief Digital Officer (from July 2026)", sources: ["bankingdive-elsass-2026"], linkedin: "https://www.linkedin.com/in/briannaelsass/" },
    { name: "Andy Miner", role: "Senior Director, AI for Corporate and Commercial Banking", sources: ["asb-miner-2026"], linkedin: "https://www.linkedin.com/in/andy-miner/" },
    { name: "Phillip Trier", role: "EVP, Head of Corporate and Commercial Banking", sources: ["asb-miner-2026"], linkedin: "https://www.linkedin.com/in/philliptrier/" }
  ],
  timeline: [
    { date: "2025-06-10", title: "AI Academy launched for young people", detail: "Summer programme with the Boys & Girls Clubs, led by the CIO.", sources: ["asb-academy-2025"] },
    { date: "2025-12-01", title: "American National acquisition announced", detail: "$604 million all-stock deal for the Omaha bank.", sources: ["bankingdive-amnat-2025"] },
    { date: "2026-04-27", title: "CEO on the commercial-bank build-out", detail: "Lending up ~43% to $12.3 billion; Dallas team launched.", sources: ["bankingdive-harmening-2026"] },
    { date: "2026-04-28", title: "Board technology committee created", detail: "Announced with annual-meeting results and a buyback.", sources: ["asb-agm-2026"] },
    { date: "2026-06-30", title: "Senior director of AI for commercial banking hired", detail: "Andy Miner from U.S. Bank; single point of AI accountability in the line.", sources: ["asb-miner-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 earnings", detail: "$121 million reported, $140 million adjusted; American National integration under way.", sources: ["ft-q2-2026"] },
    { date: "2026-07-30", title: "Chief digital officer joins from BMO", detail: "Elsass to advance AI and omnichannel strategy.", sources: ["bankingdive-elsass-2026"] },
    { date: "2026-08-05", title: "Guide on AI-powered social engineering", detail: "Deepfake and BEC risk for mid-market clients.", sources: ["asb-social-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Commercial workflow automation", detail: "Portfolio management, treasury and payments first; then loan processing and client insights.", status: "Rolling out", sources: ["asb-miner-2026"] },
    { useCase: "governance-general", name: "Line-of-business AI accountability and board oversight", detail: "Senior director of AI stewards risk and data; board technology committee.", status: "In production", sources: ["asb-miner-2026", "asb-agm-2026"] },
    { useCase: "fraud", name: "AI-enabled fraud education and controls", detail: "Webinars and guides on social engineering, deepfakes and BEC.", status: "In production", sources: ["asb-social-2026"] },
    { useCase: "customer-chatbots", name: "Digital and omnichannel strategy", detail: "Digital sales and servicing under the new chief digital officer.", status: "Rolling out", sources: ["bankingdive-elsass-2026"] }
  ],
  numbers: [
    { label: "Total assets", value: "≈ $52 billion", asOf: "2026-07-30", sources: ["bankingdive-elsass-2026"] },
    { label: "Second-quarter 2026 earnings (adjusted)", value: "$121 million ($140 million)", asOf: "2026-07-23", sources: ["ft-q2-2026"] },
    { label: "Commercial and business lending", value: "$12.3 billion (+≈ 43% in five years)", asOf: "2026-04-27", sources: ["bankingdive-harmening-2026"] },
    { label: "American National acquisition", value: "$604 million (closed 1 April 2026)", asOf: "2026-07-23", sources: ["bankingdive-amnat-2025", "ft-q2-2026"] }
  ],
  quotes: [
    { who: "Phillip Trier", role: "EVP, Head of Corporate and Commercial Banking", date: "2026-06-30", quote: "Andy's background in psychology and banking, combined with deep expertise in analytics and AI, will help us turn data into meaningful insights that strengthen client relationships and drive growth.", sources: ["asb-miner-2026"] },
    { who: "Brianna Elsass", role: "Chief Digital Officer", date: "2026-07-30", quote: "Helping accelerate digital transformation, elevating customer experiences, and advancing the bank's AI and omni channel strategy.", sources: ["bankingdive-elsass-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "Associated Bank, N.A. is a national bank; commercial AI workflows and any credit-decision models fall under the OCC's model-risk and gen-AI expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Holding-company supervision of model risk and of the American National integration.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer digital servicing and any AI in retail lending bring UDAAP and ECOA duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] }
  ],
  suggestions: [
    { title: "Line-owned AI is a governance choice worth watching", detail: "Putting one accountable owner inside commercial banking, with risk and data stewardship in the job description, is closer to how examiners think than a central lab." },
    { title: "Internal workflows first is the right sequence", detail: "Treasury, payments and portfolio-management automation are low-consumer-harm uses that build the evidence for loan-processing AI later." },
    { title: "Three new technology leaders in six months means a strategy is coming", detail: "A CDO/CIO, a CDO with an AI mandate and a board committee usually precede a public AI plan; expect one after the American National integration." },
    { title: "Fraud content should become fraud disclosure", detail: "Associated's writing on AI-enabled social engineering is strong; disclosing its own detection tooling would complete the picture." }
  ],
  faq: [
    { q: "Who is responsible for AI at Associated Bank?", a: "Andy Miner, hired from U.S. Bank on 30 June 2026 as senior director of AI for Corporate and Commercial Banking, is the single point of accountability for AI in that business, covering strategy, use cases, delivery, adoption, risk and data. Chief digital officer Brianna Elsass, who joined from BMO in July 2026, is charged with advancing the bank's AI and omnichannel strategy, and Alexander Bush is chief data officer and CIO." },
    { q: "Where will Associated Bank use AI first?", a: "In internal commercial-banking workflows such as portfolio management, treasury and payments, according to the June 2026 announcement, followed by faster loan processing and personalised client insights. The bank has not disclosed customer-facing generative-AI products or AI spending." }
  ],
  sources: [
    { id: "ab-bush-2026", title: "Alexander Bush, EVP, Chief Data Officer & CIO, Associated Bank (Digital Banking speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/alexander-bush", date: "2026-04-23" },
    { id: "asb-academy-2025", title: "Associated Bank launches AI Academy, a summer youth education program", publisher: "Associated Banc-Corp", url: "https://investor.associatedbank.com/news/news-details/2025/Associated-Bank-launches-AI-Academy-a-summer-youth-education-program", date: "2025-06-10" },
    { id: "asb-agm-2026", title: "Associated Announces Annual Meeting Results; Dividends; Stock Repurchase Program; and New Technology Committee", publisher: "Associated Banc-Corp", url: "https://investor.associatedbank.com/news/news-details/2026/Associated-Announces-Annual-Meeting-Results-Dividends-Stock-Repurchase-Program-and-New-Technology-Committee", date: "2026-04-28" },
    { id: "asb-miner-2026", title: "Associated Bank Hires Andy Miner as senior director, AI for Corporate & Commercial Banking", publisher: "Associated Banc-Corp", url: "https://investor.associatedbank.com/news/news-details/2026/Associated-Bank-Hires-Andy-Miner-as-senior-director-AI-for-Corporate--Commercial-Banking", date: "2026-06-30" },
    { id: "asb-social-2026", title: "AI-Powered Social Engineering: Is Your Business at Risk?", publisher: "Associated Bank", url: "https://associatedbank.com/education/articles/business-insights/strategy-and-management/ai-powered-social-engineering", date: "2026-08-05" },
    { id: "bankingdive-amnat-2025", title: "Associated Bank to buy Nebraska lender for $604M", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/associated-bank-deal-american-national-omaha-604-million-acquisition/806659/", date: "2025-12-01" },
    { id: "bankingdive-elsass-2026", title: "Associated Bank chief digital officer joins from BMO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/associated-bank-chief-digital-officer-joins-from-bmo/826613/", date: "2026-07-30" },
    { id: "bankingdive-harmening-2026", title: "Associated Bank CEO wants to pave 'highway to private wealth'", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/associated-bank-ceo-harmening-private-wealth-commercial/818566/", date: "2026-04-27" },
    { id: "ft-q2-2026", title: "Associated Banc-Corp Reports Second Quarter 2026 Earnings of $0.63 Per Common Share, or $0.73 Excluding Nonrecurring Items", publisher: "PR Newswire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202607231615PR_NEWS_USPRX____CG11257-1", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};
