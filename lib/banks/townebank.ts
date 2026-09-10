import type { Bank } from "@/lib/banks";

export const TOWNEBANK: Bank = {
  slug: "townebank",
  name: "TowneBank",
  shortName: "TowneBank",
  ticker: "TOWN",
  hq: "Portsmouth, VA",
  fedRank: 86,
  leadBank: "TowneBank",
  assetsUsdMillions: 22359,
  charter: "Virginia state nonmember bank (FDIC)",
  posture: "A relationship bank that absorbed three acquisitions in 15 months, hired WesBanco's former CIO to run technology, and has Microsoft Copilot on bankers' desks that a regional president admits is 'not being widely used'.",
  platform: {
    name: "Technology organisation under CIO Varun Chandhok; Microsoft Copilot rollout",
    detail: "In February 2026 TowneBank appointed Varun Chandhok senior executive vice president and chief information officer, previously CIO of WesBanco Bank and chief information and operations officer of Premier Bank after a 22-year career in business-line CIO roles at M&T Bank, with a mandate to 'further advance our technology strategy' and 'expand our technology capabilities'. The bank has deployed Microsoft Copilot to banker workstations; in mid-2026 Triad president Scott Baker said 'we have this resource sitting right there, and we don't always go grab it' and commissioned an MBA capstone team to assess governed use, which recommended Copilot for meeting preparation and document review while preserving bankers' judgement and customer data security. Customer-facing AI content covers voice cloning and deepfake scams. No AI leader, model or budget beyond the Copilot licences has been disclosed.",
    sources: ["town-cio-2026", "town-aiscams-2026"]
  },
  answerFirst:
    "TowneBank, the Hampton Roads bank with about $22 billion of assets after acquiring Village Bank, Old Point Financial ($203 million, 2025) and Dogwood State Bank ($476 million in stock, completed 12 January 2026), is candid about the gap between having AI tools and using them. Bankers have Microsoft Copilot installed, but Triad president Scott Baker acknowledged in June 2026 that 'we have this resource sitting right there, and we don't always go grab it', adding that using it well 'would allow us to be much more engaged, authentic and strategic with our customers, rather than just spending our time digesting information'; he asked an MBA capstone team to recommend governed uses, which centred on preparing for customer meetings and reviewing appraisals and credit memos without replacing bankers' judgement. Technology leadership changed in February 2026 when Varun Chandhok, formerly chief information officer of WesBanco Bank and a 22-year M&T Bank technology executive, became senior executive vice president and CIO, charged by chief operating officer Lee Clark with expanding 'our technology capabilities so we can continue providing exquisite service to our members'. The second quarter of 2026 was transformed by the sale of the Towne Vacations resort-management business for a gain of about $198.6 million, lifting reported earnings to $193.2 million, or $2.09 per share, against core earnings of $72.0 million, or $0.78, and funding a $25 million foundation gift and a $0.70 special dividend; deposits reached $18.71 billion and the Carolinas expansion added bankers and treasury officers. Executive chairman Robert Aston and president and CEO William Foster III run what they call the 'Main Street Banking model'. TowneBank is a Virginia state nonmember bank supervised by the FDIC; no AI vendor beyond Microsoft, model or budget has been disclosed.",
  keyPoints: [
    "Microsoft Copilot deployed to bankers but under-used by the bank's own account; an MBA capstone study recommended governed uses for meeting prep and document review.",
    "New CIO Varun Chandhok (February 2026), ex-WesBanco CIO and M&T Bank technology executive, tasked with expanding technology capabilities.",
    "Three acquisitions in 15 months (Village, Old Point, Dogwood State Bank) added $4.5 billion of assets and a Carolinas footprint.",
    "Q2 2026 reported earnings $193.2 million ($2.09) on a $198.6 million gain from selling Towne Vacations; core earnings $72.0 million ($0.78); deposits $18.71 billion.",
    "Customer AI content covers voice cloning and deepfake scams (May 2026).",
    "No AI leader, model or budget disclosed beyond Copilot licences."
  ],
  leadership: [
    { name: "William I. Foster III", role: "President and CEO", linkedin: "https://www.linkedin.com/in/bill-foster-874a875", sources: ["town-q2-2026"] },
    { name: "G. Robert Aston, Jr.", role: "Executive Chairman", linkedin: "https://www.linkedin.com/in/g-robert-aston-jr-468bb2208", sources: ["town-q2-2026", "ab-dogwood-2025"] },
    { name: "Varun Chandhok", role: "Senior EVP and Chief Information Officer", linkedin: "https://www.linkedin.com/in/vchandhok", sources: ["town-cio-2026"] },
    { name: "Lee Clark", role: "Senior EVP and Chief Operating Officer", linkedin: "https://www.linkedin.com/in/lee-clark-a1640746", sources: ["town-cio-2026"] }
  ],
  timeline: [
    { date: "2025-04-04", title: "Old Point Financial acquisition announced", detail: "$203 million in cash and stock; 13 Hampton Roads and Richmond branches.", sources: ["ab-oldpoint-2025"] },
    { date: "2025-08-19", title: "Dogwood State Bank acquisition announced", detail: "$476 million in stock; 17 Carolinas branches; 8% EPS accretion projected for 2027.", sources: ["ab-dogwood-2025"] },
    { date: "2026-02-17", title: "Varun Chandhok named chief information officer", detail: "Ex-WesBanco CIO; mandate to expand technology capabilities.", sources: ["town-cio-2026"] },
    { date: "2026-05-14", title: "Guide to recognising AI scams", detail: "Voice cloning and deepfake videos.", sources: ["town-aiscams-2026"] },
    { date: "2026-07-22", title: "Second-quarter 2026 results; Towne Vacations sold", detail: "Reported EPS $2.09; core EPS $0.78; $198.6 million gain; special dividend $0.70.", sources: ["town-q2-2026"] },
    { date: "2026-01-12", title: "Dogwood State Bank merger completed", detail: "Carolinas growth initiatives follow; early results cited in the second-quarter release.", sources: ["town-q2-2026", "ab-dogwood-2025"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Microsoft Copilot for bankers", detail: "Meeting preparation, appraisal and credit-memo review; adoption still building.", status: "Rolling out", sources: ["town-cio-2026"] },
    { useCase: "third-party-vendors", name: "Acquisition integration (Old Point, Dogwood)", detail: "Systems and brand conversions across Virginia and the Carolinas.", status: "In production", sources: ["ab-dogwood-2025", "town-q2-2026"] },
    { useCase: "fraud", name: "Customer education on AI scams", detail: "Voice cloning and deepfake awareness.", status: "In production", sources: ["town-aiscams-2026"] }
  ],
  numbers: [
    { label: "Q2 2026 reported / core earnings", value: "$193.2 million ($2.09) / $72.0 million ($0.78)", asOf: "2026-07-22", sources: ["town-q2-2026"] },
    { label: "Gain on sale of Towne Vacations", value: "≈ $198.6 million", asOf: "2026-07-22", sources: ["town-q2-2026"] },
    { label: "Total deposits", value: "$18.71 billion", asOf: "2026-06-30", sources: ["town-q2-2026"] },
    { label: "Dogwood State Bank acquisition", value: "$476 million in stock", asOf: "2025-08-19", sources: ["ab-dogwood-2025"] }
  ],
  quotes: [
    { who: "Lee Clark", role: "Senior EVP and Chief Operating Officer", date: "2026-02-17", quote: "Varun is exceptionally well-equipped to further advance our technology strategy and champion our continued growth.", sources: ["town-cio-2026"] },
    { who: "G. Robert Aston, Jr.", role: "Executive Chairman", date: "2026-07-22", quote: "The sale of Towne Vacations generated a gain of nearly $200 million, significantly enhancing our capital levels and tangible book value.", sources: ["town-q2-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "TowneBank is a state nonmember bank; FDIC third-party and model-risk guidance govern Copilot use and acquisition conversions.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Consumer and mortgage products bring adverse-action and UDAAP duties to any automated decisioning.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "federal-reserve", why: "Interagency third-party guidance applies to the Microsoft relationship and acquired-bank vendors.", docSlugs: ["fed-sr-23-4"] }
  ],
  suggestions: [
    { title: "Licences are not adoption", detail: "TowneBank's own admission that Copilot sits unused is the most honest data point in this group; usage metrics and training belong in the CIO's first-year plan." },
    { title: "Govern Copilot before scaling it", detail: "Customer data inside credit memos and appraisals means the governed-use recommendations should become policy before wider rollout." },
    { title: "The new CIO arrives with an AI-capable stack", detail: "Chandhok's WesBanco and M&T background is in enterprise platforms; expect consolidation of three acquired banks' systems before new AI." },
    { title: "Capital from Towne Vacations could fund technology", detail: "A near-$200 million gain is an unusual opportunity to invest in platforms without pressuring core earnings." }
  ],
  faq: [
    { q: "Does TowneBank use AI?", a: "TowneBank has Microsoft Copilot deployed to bankers, though a regional president said in June 2026 it is not widely used and commissioned a study on governed uses such as meeting preparation and document review. The bank hired a new chief information officer in February 2026 and publishes customer guidance on AI scams. No AI leader, model or budget beyond Copilot has been disclosed." },
    { q: "What did TowneBank sell in 2026?", a: "Its Towne Vacations resort property-management segment, generating a pre-tax gain of about $198.6 million in the second quarter of 2026. Reported earnings were $193.2 million, or $2.09 per share, against core earnings of $72.0 million, or $0.78, and the bank paid a $0.70 special dividend and made a $25 million foundation contribution." }
  ],
  sources: [
    { id: "ab-oldpoint-2025", title: "Virginia's TowneBank strikes deal for a local rival", publisher: "American Banker", url: "https://americanbanker.com/news/virginias-townebank-strikes-deal-for-a-local-rival", date: "2025-04-04" },
    { id: "ab-dogwood-2025", title: "Virginia's TowneBank strikes deal to deepen N.C. footprint", publisher: "American Banker", url: "https://americanbanker.com/news/virginias-townebank-strikes-deal-to-deepen-n-c-footprint", date: "2025-08-19" },
    { id: "town-cio-2026", title: "TowneBank Welcomes Varun Chandhok as Chief Information Officer", publisher: "TowneBank", url: "https://townebank.com/about-towne/news-room/2026/varunchandhok", date: "2026-02-17" },
    { id: "town-aiscams-2026", title: "How to Recognize AI Scams in 2026", publisher: "TowneBank", url: "https://townebank.com/personal/resource/security/fraud/ai-scams", date: "2026-05-14" },
    { id: "town-q2-2026", title: "TowneBank Reports Second Quarter 2026 Earnings", publisher: "TowneBank (GlobeNewswire)", url: "https://globenewswire.com/news-release/2026/07/23/3331831/0/en/TowneBank-Reports-Second-Quarter-2026-Earnings.html", date: "2026-07-22" }
  ],
  lastUpdated: "2026-09-10"
};
