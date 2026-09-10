import type { Bank } from "@/lib/banks";

export const CIBC_US: Bank = {
  slug: "cibc-us",
  name: "CIBC Bank USA",
  shortName: "CIBC",
  ticker: "CM",
  hq: "Chicago, IL (US); Toronto (group)",
  fedRank: 41,
  leadBank: "CIBC Bank USA",
  assetsUsdMillions: 65130,
  charter: "Illinois state member bank (Federal Reserve); subsidiary of Canadian Imperial Bank of Commerce",
  posture: "A Chicago commercial bank inside a Canadian group that built its own gen-AI platform, counts 1.2 million hours saved in a quarter, and has won 'Best Gen-AI Initiative' three years running.",
  platform: {
    name: "CAI, the CIBC AI platform, plus Smart Library and the Agents Marketplace",
    detail: "CIBC built its own enterprise generative-AI chat tool and platform, CAI, described in June 2025 by Chris Patterson, head of enterprise AI platforms and solutions, and expanded since with in-house capabilities such as a Teams meeting note-taker the bank chose to build because giving a third party access to meeting audio was 'a non-starter'. In 2025 it launched Smart Library, a natural-language search over internal content, and the Agents Marketplace, where employees create, subscribe to and share custom agents, which together won The Digital Banker's Best Gen-AI Initiative award in July 2026, the third consecutive year after CAI (2025) and Knowledge Central (2024). At the April 2026 annual meeting the bank said AI-driven tools saved its team 1.2 million hours in the first quarter alone and introduced Core-tex, a platform for personalised offers and client insights. Jaime Tatis, executive vice-president and chief data and AI officer, leads; a July 2026 essay from the platform team sets out 'agentic AI with humans in control'.",
    sources: ["cibc-cai-2026", "cibc-genai-2025", "ft-awards-2026", "cibc-agm-2026", "cibc-agentic-2026"]
  },
  answerFirst:
    "CIBC Bank USA is the Chicago-based commercial and commercial-real-estate lender that Canadian Imperial Bank of Commerce built from its 2017 PrivateBancorp acquisition; it produced net income of $228 million in the quarter to July 2026, up 23%, on average loans of $41 billion and deposits of $34 billion, and has been led by Kevin Li as president and CEO since the group's November 2025 CEO transition to Harry Culham. Its AI is the group's, and the group's record is unusually specific. CIBC built its own enterprise generative-AI platform, CAI, and an internally developed chat tool, then added a home-built Teams meeting note-taker because letting a vendor touch meeting audio was 'a non-starter' in a regulated bank; its platform team reports that AI fluency follows no pattern of level, role, age or location, and that the heaviest user was a co-op student. In 2025 it launched Smart Library (natural-language search over internal content) and an Agents Marketplace where staff build, subscribe to and share custom agents; The Digital Banker named them Best Gen-AI Initiative in July 2026, CIBC's third straight win. At its April 2026 annual meeting the bank said AI-driven tools had saved 1.2 million hours in a single quarter, described AI as 'an accelerant' for its strategy, and introduced Core-tex, a platform for personalised product offers and client insights, alongside AI in fraud detection and credit monitoring. Jaime Tatis is executive vice-president and chief data and AI officer; the platform head's July 2026 essay is titled 'Agentic AI with humans in control'. The US bank's own AI-adjacent activity is on the lending side: CIBC Innovation Banking, which operates in the United States, has financed AI companies including Gradient AI, EnsoData and Modo Energy in 2026, and the group hired a digital-assets lead from Accenture in May 2026. US-specific AI deployments and budgets are not broken out.",
  keyPoints: [
    "Built, not bought: CAI, the CIBC AI platform, and an internally developed gen-AI chat tool; a home-built Teams note-taker because vendor access to meeting audio was 'a non-starter'.",
    "Products with awards: Smart Library (natural-language internal search) and the Agents Marketplace (create, subscribe to and share custom agents), Best Gen-AI Initiative 2026, the third consecutive year.",
    "Quantified: 1.2 million hours saved by AI-driven tools in the first quarter of fiscal 2026, per the annual meeting; Core-tex generates personalised offers and client insights.",
    "Governance voice: 'Agentic AI with humans in control' (July 2026) from the enterprise AI platforms head; AI fluency shows 'no discernible pattern' by level, role, age or location.",
    "The US bank: Chicago-based commercial and CRE lender, net income $228 million (up 23%) in the quarter to July 2026, loans $41 billion, deposits $34 billion; Kevin Li CEO since late 2025.",
    "AI as a lending market: CIBC Innovation Banking financed Gradient AI, EnsoData and Modo Energy in 2026; a digital-assets head hired from Accenture in May 2026."
  ],
  leadership: [
    { name: "Kevin Li", role: "President and CEO, CIBC Bank USA (from November 2025)", sources: ["ab-li-2025", "ab-us-results-2026"] },
    { name: "Harry Culham", role: "President and CEO, CIBC (from 1 November 2025)", sources: ["bankingdive-dodig-2025", "bankingdive-li-2025"] },
    { name: "Jaime Tatis", role: "EVP, Chief Data and Artificial Intelligence Officer", sources: ["ft-awards-2026", "cibc-tatis-2026"], linkedin: "https://www.linkedin.com/in/jaime-tatis-37608512/" },
    { name: "Chris Patterson", role: "VP, Enterprise AI Platforms and Solutions", sources: ["cibc-agentic-2026", "cibc-genai-2025"], linkedin: "https://www.linkedin.com/in/chris-patterson-9081422/" },
    { name: "John Lee", role: "Head of Digital Assets (from May 2026, ex-Accenture)", sources: ["bloomberg-lee-2026"] }
  ],
  timeline: [
    { date: "2025-01-30", title: "'Creating value through experimentation'", detail: "The bank's framing of how generative AI is changing long-standing AI use.", sources: ["cibc-experimentation-2025"] },
    { date: "2025-03-13", title: "CEO transition announced", detail: "Harry Culham to succeed Victor Dodig on 1 November 2025.", sources: ["bankingdive-dodig-2025"] },
    { date: "2025-06-26", title: "The enterprise gen-AI journey", detail: "How the internally developed chat tool was launched and integrated.", sources: ["cibc-genai-2025"] },
    { date: "2025-08-12", title: "Kevin Li named CEO of CIBC Bank USA", detail: "The fourth US head since the 2017 PrivateBancorp deal.", sources: ["ab-li-2025", "bankingdive-li-2025"] },
    { date: "2026-03-03", title: "Innovation Banking funds Gradient AI", detail: "Growth capital for an insurance AI company; EnsoData and Modo Energy follow in May and July.", sources: ["ft-gradient-2026", "ft-ensodata-2026"] },
    { date: "2026-04-16", title: "1.2 million hours saved in a quarter", detail: "Annual meeting: AI as 'an accelerant'; Core-tex for personalised offers; AI in fraud detection and credit monitoring.", sources: ["cibc-agm-2026"] },
    { date: "2026-04-24", title: "The chief data and AI officer on the next chapter", detail: "Integration, responsible AI and enterprise-wide capability.", sources: ["cibc-tatis-2026"] },
    { date: "2026-05-25", title: "Digital-assets lead hired from Accenture", detail: "John Lee to run the strategy.", sources: ["bloomberg-lee-2026"] },
    { date: "2026-07-20", title: "Inside the CAI platform; agentic AI 'with humans in control'", detail: "A home-built meeting note-taker, fluency bell curves, and a governance-first agent stance.", sources: ["cibc-cai-2026", "cibc-agentic-2026"] },
    { date: "2026-07-28", title: "Best Gen-AI Initiative, third year running", detail: "Smart Library and the Agents Marketplace; Request a Call wins Best Digital Transformation Program.", sources: ["ft-awards-2026"] },
    { date: "2026-08-27", title: "US unit lifts group profit", detail: "Net income $228 million, up 23%; loans and deposits up 9% and 14%.", sources: ["ab-us-results-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "CAI platform and enterprise chat", detail: "Internally built platform with a home-grown meeting note-taker and reusable transcription.", status: "In production", sources: ["cibc-cai-2026", "cibc-genai-2025"] },
    { useCase: "generative-agentic-ai", name: "Agents Marketplace", detail: "Employees create, subscribe to and share task-automating agents.", status: "In production", sources: ["ft-awards-2026"] },
    { useCase: "generative-agentic-ai", name: "Smart Library", detail: "Natural-language search and work over internal content.", status: "In production", sources: ["ft-awards-2026"] },
    { useCase: "customer-chatbots", name: "Core-tex personalised offers and insights", detail: "AI-generated product offers and timely client insights.", status: "Rolling out", sources: ["cibc-agm-2026"] },
    { useCase: "fraud", name: "AI in fraud detection and credit monitoring", detail: "Cited at the annual meeting as faster and more effective risk work.", status: "In production", sources: ["cibc-agm-2026"] },
    { useCase: "governance-general", name: "'Agentic AI with humans in control'", detail: "Human judgment, governance and culture at the centre of agent design.", status: "In production", sources: ["cibc-agentic-2026"] }
  ],
  numbers: [
    { label: "Hours saved by AI tools, Q1 fiscal 2026", value: "1.2 million", asOf: "2026-04-16", sources: ["cibc-agm-2026"] },
    { label: "Consecutive Best Gen-AI Initiative awards", value: "3 (2024, 2025, 2026)", asOf: "2026-07-28", sources: ["ft-awards-2026"] },
    { label: "CIBC Bank USA net income, quarter to July 2026", value: "$228 million, up 23%", asOf: "2026-08-27", sources: ["ab-us-results-2026"] },
    { label: "CIBC Bank USA average loans / deposits", value: "$41 billion / $34 billion", asOf: "2026-08-27", sources: ["ab-us-results-2026"] }
  ],
  quotes: [
    { who: "Jaime Tatis", role: "EVP, Chief Data and Artificial Intelligence Officer", date: "2026-07-28", quote: "We are embedding AI and digital tools into the way we work to reduce time spent on administrative tasks, improve access to information, and help our teams spend more time on higher-value activities that benefit our clients.", sources: ["ft-awards-2026"] },
    { who: "Chris Patterson", role: "VP, Enterprise AI Platforms and Solutions", date: "2026-07-20", quote: "Our number one user of the platform, measured simply by consumption, was a temporary co-op student. The number two is a senior director.", sources: ["cibc-cai-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "CIBC Bank USA is an Illinois state member bank and CIBC Bancorp USA its holding company; group-built platforms used in US processes fall under the model-risk letter and affiliate-service rules.", docSlugs: ["fed-sr-26-2", "fed-sr-23-4"] },
    { authority: "fincen", why: "AI in fraud detection and credit monitoring for a US commercial lender sits within BSA/AML program expectations.", docSlugs: ["fincen-aml-cft-program-nprm-2026"] },
    { authority: "basel-committee", why: "A Canadian D-SIB's group AI governance is framed by BCBS 239 and its third-party risk principles.", docSlugs: ["bcbs-239", "bcbs-third-party-risk-principles-2025"] },
    { authority: "fsb", why: "Canadian supervisors have intensified AI scrutiny; the FSB's sound-practices work applies to the group.", docSlugs: ["fsb-ai-sound-practices-consultation-2026"] }
  ],
  suggestions: [
    { title: "Owning the platform changes what the US bank can inherit", detail: "Because CIBC built CAI, the note-taker and the marketplace, the US subsidiary receives capabilities whose data handling was designed for a regulated bank; that is easier to examine than a stack of vendor tools." },
    { title: "The hours-saved number invites a US breakdown", detail: "1.2 million hours in a quarter is a group figure; US examiners and investors will want to know how much of it, and which agents, run inside CIBC Bank USA." },
    { title: "Agents Marketplace is decentralised by design", detail: "Letting employees build and share agents is how adoption scales and how shadow AI is avoided; 'humans in control' is the governance promise that makes it supervisable." },
    { title: "Innovation Banking makes CIBC a lender to the AI economy", detail: "Financing AI companies in insurance, healthcare and energy gives the US bank first-hand exposure to how AI businesses perform, a credit-risk edge and a concentration to watch." }
  ],
  faq: [
    { q: "What is CIBC's CAI platform?", a: "CAI is CIBC's internally built enterprise AI platform and generative-AI chat tool, launched in 2025 and expanded with in-house capabilities such as a Teams meeting note-taker the bank chose to build rather than buy. It underpins the Smart Library and the Agents Marketplace, which won The Digital Banker's Best Gen-AI Initiative award in July 2026, CIBC's third straight win." },
    { q: "How much has AI saved CIBC?", a: "At its April 2026 annual meeting the bank said AI-driven tools saved its team 1.2 million hours in the first quarter alone, describing AI as an accelerant for its strategy and citing personalised offers through its Core-tex platform and faster fraud detection and credit monitoring. Figures are not broken out for CIBC Bank USA." }
  ],
  sources: [
    { id: "cibc-cai-2026", title: "Scaling AI at CIBC: Inside the CAI Platform", publisher: "CIBC", url: "https://cibc.com/en/about-cibc/future-banking/ai/leadership/scaling-ai-cai-platform.html", date: "2026-07-20" },
    { id: "cibc-agentic-2026", title: "Agentic AI With Humans In Control", publisher: "CIBC", url: "https://cibc.com/en/about-cibc/future-banking/ai/leadership/agentic-ai-humans-in-control.html", date: "2026-07-20" },
    { id: "cibc-genai-2025", title: "Transformation at scale: CIBC's strategic leap into Enterprise Generative AI", publisher: "CIBC", url: "https://www.cibc.com/en/about-cibc/future-banking/ai/leadership/enterprise-generative-ai.html", date: "2025-06-26" },
    { id: "cibc-tatis-2026", title: "Leading the next chapter of data and AI at CIBC", publisher: "CIBC", url: "https://cibc.com/en/about-cibc/future-banking/innovation/leadership/leading-next-chapter-data-and-ai.html", date: "2026-04-24" },
    { id: "cibc-experimentation-2025", title: "Artificial intelligence: Creating value through experimentation", publisher: "CIBC", url: "https://cibc.com/en/about-cibc/future-banking/innovation/emerging-tech/artificial-intelligence-value-experimentation.html", date: "2025-01-30" },
    { id: "cibc-agm-2026", title: "CIBC Annual and Special Meeting of Shareholders 2026 (remarks: AI as an accelerant; 1.2 million hours saved)", publisher: "CIBC", url: "https://cibc.com/content/dam/cibc-public-assets/about-cibc/investor-relations/pdfs/annual_meetings/2026/hkc-agm-2026-en.pdf", date: "2026-04-16" },
    { id: "ft-awards-2026", title: "CIBC wins two Digital Banker awards for AI innovation and digital transformation", publisher: "CNW via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202607280853CANADANWCANADAPR_C7795-1", date: "2026-07-28" },
    { id: "ft-gradient-2026", title: "CIBC Innovation Banking Provides Growth Capital to Gradient AI", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603030700BIZWIRE_USPRX____20260303_BW529911-1", date: "2026-03-03" },
    { id: "ft-ensodata-2026", title: "CIBC Innovation Banking Provides Growth Capital to EnsoData", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/full?dockey=600-202605120700BIZWIRE_USPRX____20260512_BW709333-1", date: "2026-05-12" },
    { id: "ab-li-2025", title: "Canadian bank CIBC names new U.S. head amid CEO transition", publisher: "American Banker", url: "https://www.americanbanker.com/news/canadian-bank-cibc-promotes-kevin-li-to-lead-u-s-unit", date: "2025-08-12" },
    { id: "ab-us-results-2026", title: "U.S. unit's strong results push CIBC's profits higher", publisher: "American Banker", url: "https://www.americanbanker.com/news/u-s-units-strong-results-push-cibcs-profits-higher", date: "2026-08-27" },
    { id: "bankingdive-li-2025", title: "CIBC taps new US CEO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/cibc-taps-new-us-ceo-li-beber-culham/757567/", date: "2025-08-13" },
    { id: "bankingdive-dodig-2025", title: "CIBC CEO Victor Dodig to retire in October", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/cibc-ceo-victor-dodig-retire-culham/742469/", date: "2025-03-13" },
    { id: "bloomberg-lee-2026", title: "CIBC Hires John Lee From Accenture To Lead Digital Assets Push", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-05-25/cibc-hires-john-lee-from-accenture-to-lead-digital-assets-push", date: "2026-05-25" }
  ],
  lastUpdated: "2026-09-10"
};
