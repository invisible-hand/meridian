import type { Bank } from "@/lib/banks";

export const BANK_OF_HOPE: Bank = {
  slug: "bank-of-hope",
  name: "Hope Bancorp (Bank of Hope)",
  shortName: "Bank of Hope",
  ticker: "HOPE",
  hq: "Los Angeles, CA",
  fedRank: 96,
  leadBank: "Bank of Hope",
  assetsUsdMillions: 18652,
  charter: "California state nonmember bank (FDIC)",
  posture: "The largest Korean-American bank is rebuilding profitability through acquisitions in Hawaii and Japanese-corporate banking, balancing 'prudent expense control with targeted investments in technology', with no disclosed AI programme.",
  answerFirst:
    "Hope Bancorp, the Los Angeles holding company for Bank of Hope with about $18.5 billion of assets and the country's largest Korean-American franchise, is in a rebuilding phase defined by deals rather than technology. It closed the drawn-out $78.6 million acquisition of Honolulu's Territorial Bancorp on 2 April 2025 after fending off a rival bid, and on 1 April 2026 agreed to buy the commercial banking unit of SMBC MANUBANK, Sumitomo Mitsui's California lender founded as Manufacturers Bank in 1962, adding eight Los Angeles-area branches, $2.5 billion of loans and $2.7 billion of deposits on a net-book-value basis, a deal chairman and CEO Kevin Kim says 'positions us to drive strategic growth in cross-border middle market banking' with 20% earnings accretion projected for 2027. Second-quarter 2026 net income was $33.0 million, or $0.26 per share, up 12% on the quarter and against a loss a year earlier, with net interest margin up to 2.96% and net interest income of $129.0 million; Kim cites 'loan growth, net interest margin expansion, lower funding costs, increased fee income and expense discipline'. On technology the bank says only that it is 'balancing prudent expense control with targeted investments in technology, talent, risk management, and commercial banking capabilities'; its public technology footprint is business-banking user guides for ACH, positive pay and information reporting on its Q2-based digital platform. Peter Koh became president and chief operating officer of the bank on 1 April 2026, and Kim's employment agreement was extended to 2031 in August 2026. No AI programme, leader, vendor or budget has been disclosed. Bank of Hope is a California state nonmember bank supervised by the FDIC and the California DFPI.",
  keyPoints: [
    "No AI programme, leader, vendor or budget disclosed; technology framed as 'targeted investments' balanced against expense control.",
    "SMBC MANUBANK commercial banking unit acquisition agreed 1 April 2026: eight LA branches, $2.5 billion loans, $2.7 billion deposits; 20% EPS accretion projected for 2027.",
    "Territorial Bancorp (Honolulu) acquired 2 April 2025 for $78.6 million after a contested process.",
    "Q2 2026 net income $33.0 million ($0.26), up 12% on the quarter; NIM 2.96%; net interest income $129.0 million.",
    "Peter Koh promoted to president and COO of Bank of Hope on 1 April 2026; CEO Kevin Kim's contract extended to 2031.",
    "Digital business banking runs on a Q2-based platform with published guides for ACH, positive pay and reporting."
  ],
  leadership: [
    { name: "Kevin S. Kim", role: "Chairman, President and CEO, Hope Bancorp", sources: ["hope-q2-2026", "ab-smbc-2026"] },
    { name: "Peter J. Koh", role: "President and Chief Operating Officer, Bank of Hope", linkedin: "https://www.linkedin.com/in/peter-koh-4b7017b", sources: ["hope-q2-2026"] },
    { name: "Julianna Balicka", role: "Chief Financial Officer", sources: ["hope-q2-2026"] }
  ],
  timeline: [
    { date: "2025-04-02", title: "Territorial Bancorp acquisition closes", detail: "$78.6 million all-stock deal after a competing bid; entry into Hawaii.", sources: ["ab-territorial-2025"] },
    { date: "2025-09-29", title: "Business banking user guides published", detail: "ACH payments, information reporting and login guidance on the Q2 platform.", sources: ["hope-guides-2025"] },
    { date: "2026-04-01", title: "Agreement to acquire SMBC MANUBANK's commercial banking unit", detail: "Eight LA branches; $2.5 billion loans; $2.7 billion deposits; close expected H2 2026.", sources: ["ab-smbc-2026"] },
    { date: "2026-07-27", title: "Second-quarter 2026 results", detail: "Net income $33.0 million; NIM 2.96%; technology investment balanced with expense control.", sources: ["hope-q2-2026"] },
    { date: "2025-03-03", title: "Regulatory approval for the Territorial acquisition", detail: "Closing set for April after a contested process.", sources: ["ab-territorial-approval-2025"] },
    { date: "2026-04-01", title: "Peter Koh named president and COO of Bank of Hope", detail: "Kevin Kim remains chairman and CEO.", sources: ["hope-q2-2026"] }
  ],
  useCases: [
    { useCase: "third-party-vendors", name: "Digital business banking platform (Q2)", detail: "ACH, positive pay, information reporting and user administration.", status: "In production", sources: ["hope-guides-2025"] },
    { useCase: "governance-general", name: "Acquisition integration (Territorial, SMBC MANUBANK)", detail: "Hawaii and Japanese-corporate banking added to the Korean-American core.", status: "Rolling out", sources: ["ab-smbc-2026", "ab-territorial-2025"] }
  ],
  numbers: [
    { label: "Q2 2026 net income / diluted EPS", value: "$33.0 million / $0.26 (+12% on the quarter)", asOf: "2026-07-27", sources: ["hope-q2-2026"] },
    { label: "Net interest margin / net interest income, Q2 2026", value: "2.96% / $129.0 million", asOf: "2026-07-27", sources: ["hope-q2-2026"] },
    { label: "SMBC MANUBANK unit", value: "8 branches; $2.5 billion loans; $2.7 billion deposits", asOf: "2026-04-01", sources: ["ab-smbc-2026"] },
    { label: "Territorial Bancorp acquisition", value: "$78.6 million", asOf: "2025-04-02", sources: ["ab-territorial-2025"] }
  ],
  quotes: [
    { who: "Kevin S. Kim", role: "Chairman, President and CEO", date: "2026-07-27", quote: "We are focused on building a more profitable and resilient franchise through disciplined balance sheet management, prudent expense control and the strengthening of client relationships.", sources: ["hope-q2-2026"] },
    { who: "Kevin S. Kim", role: "Chairman, President and CEO", date: "2026-04-01", quote: "The addition of the Japanese Banking Division complements our Korean Subsidiary Banking Group and positions us to drive strategic growth in cross-border middle market banking.", sources: ["ab-smbc-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Bank of Hope is a state nonmember bank; FDIC model-risk and third-party guidance govern the digital platform and any future AI.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "california", why: "A California-chartered bank under the DFPI and the state's automated-decision and privacy rules.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "fincen", why: "Cross-border Korean and Japanese corporate banking raises AML model expectations for any AI screening.", docSlugs: ["fincen-joint-statement-innovation-2018"] }
  ],
  suggestions: [
    { title: "Integration comes before AI", detail: "Two acquisitions in 18 months, one still closing, will consume the technology budget through 2027; AI is realistically a post-integration item." },
    { title: "Cross-border banking is the natural AI use case", detail: "Korean and Japanese corporate clients generate multilingual documents and sanctions exposure where translation and screening models pay first." },
    { title: "Margin recovery funds technology", detail: "A margin still below 3% means expense discipline dominates; AI would need a revenue or risk case rather than a cost case." },
    { title: "Name the platform strategy", detail: "Published user guides show a vendor digital stack; investors have not been told what sits on top of it." }
  ],
  faq: [
    { q: "Does Bank of Hope use AI?", a: "Hope Bancorp has not disclosed an AI programme, leader, vendor or budget. Management describes balancing expense control with targeted investments in technology, and the bank runs a vendor digital business-banking platform." },
    { q: "What is Hope Bancorp acquiring from SMBC?", a: "The commercial banking unit of SMBC MANUBANK, Sumitomo Mitsui's California lender, including eight Los Angeles-area branches, $2.5 billion of loans and $2.7 billion of deposits, purchased on a net-book-value basis with closing expected in the second half of 2026. Hope projects 20% earnings-per-share accretion in 2027." }
  ],
  sources: [
    { id: "ab-territorial-2025", title: "Hope Bancorp closes drawn-out deal to buy Hawaii bank", publisher: "American Banker", url: "https://americanbanker.com/news/hope-bancorp-closes-drawn-out-deal-to-buy-hawaii-bank", date: "2025-04-02" },
    { id: "hope-guides-2025", title: "Business Online Banking User Guide: ACH Payments", publisher: "Bank of Hope", url: "https://bankofhope.com/files/5e94cd4778dd2a41681ea9ba/user%20guides_ach%20payments.pdf", date: "2025-09-29" },
    { id: "ab-smbc-2026", title: "LA bank to buy US commercial banking unit from Japan's SMBC", publisher: "American Banker", url: "https://www.americanbanker.com/news/l-a-bank-to-buy-u-s-commercial-banking-unit-from-japans-smbc", date: "2026-04-01" },
    { id: "hope-q2-2026", title: "Hope Bancorp Reports Financial Results for the Second Quarter and Six Months Ended June 30, 2026", publisher: "Hope Bancorp (Business Wire via FT)", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607270800BIZWIRE_USPRX____20260727_BW546817-1", date: "2026-07-27" },
    { id: "ab-territorial-approval-2025", title: "Hope Bancorp gets regulatory go-ahead to buy Territorial", publisher: "American Banker", url: "https://americanbanker.com/news/hope-bancorp-gets-regulatory-go-ahead-to-buy-territorial", date: "2025-03-03" }
  ],
  lastUpdated: "2026-09-10"
};
