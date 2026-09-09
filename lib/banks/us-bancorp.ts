import type { Bank } from "@/lib/banks";

export const US_BANCORP: Bank = {
  slug: "us-bancorp",
  name: "U.S. Bancorp",
  shortName: "U.S. Bank",
  ticker: "USB",
  hq: "Minneapolis, MN",
  fedRank: 6,
  leadBank: "U.S. Bank, N.A.",
  assetsUsdMillions: 683380,
  charter: "National bank (OCC)",
  posture: "A chief AI officer with a published playbook: pick high-frequency work, measure outcomes not outputs, build reusable patterns, prepare for agents.",
  platform: {
    name: "In-house tools from the AI Center of Excellence",
    detail: "Rather than one flagship assistant, U.S. Bank ships purpose-built internal tools — Design Assistant for its experience designers, a gen-AI assistant for its developer portal, the STAT statement analyser for merchant services, and an AI cash-forecasting product built with Kyriba.",
    sources: ["usb-design-assistant-2026", "ab-devportal-2026", "usb-stat-2026", "usb-liquidity-2026"]
  },
  answerFirst:
    "U.S. Bancorp's AI strategy is the most explicitly methodological of the large banks: a chief AI officer, Prashant Mehrotra, hired in 2025 from Allstate and Capital One, who describes his job as 'evangelize, educate, enable, and execute' and has published a six-step playbook — pick the right work, define outcomes, productize and reuse, invest in skills, scale responsibly, prepare for agents. The results so far are a set of in-house tools rather than one headline platform, an agentic software layer that its technology chief says underpins the early use cases, and a CEO, Gunjan Kedia, who is candid that 'the workforce likes AI about as much as they liked the return-to-office mandates'. It is a build-and-measure posture for a $680 billion bank that cannot outspend the top four.",
  keyPoints: [
    "Chief AI Officer Prashant Mehrotra (since mid-2025; ex-Allstate head of AI, ex-Capital One) leads strategy and execution; his six actions were set out at American Banker's 2026 Digital Banking conference.",
    "Chief information and technology officer Dilip Venkatachari: 'the agentic software that we developed underpins all the early AI use cases'; 'the technology is the easy part'.",
    "In-house builds: Design Assistant (April 2026) from the AI Center of Excellence; a generative-AI assistant for the developer portal (January 2026); STAT, an AI statement analyser first deployed in 2022 and upgraded with vision models.",
    "Client products: U.S. Bank Liquidity Manager, an AI cash-forecasting tool powered by Kyriba (August 2026); an AI-driven push into healthcare payments automation.",
    "CEO Gunjan Kedia, May 2026: most workers are still highly sceptical of AI; confident users must show others successful uses.",
    "Cost discipline is explicit: the AI chief talks about avoiding 'token-maxing' and matching model size to the task."
  ],
  leadership: [
    { name: "Prashant Mehrotra", role: "EVP and Chief AI Officer", sources: ["ab-playbook-2026", "ab-tokens-2026", "wsj-mehrotra-2026"] },
    { name: "Dilip Venkatachari", role: "Senior EVP, Chief Information and Technology Officer", sources: ["ab-venkatachari-2026", "wsj-venkatachari-2025"] },
    { name: "Gunjan Kedia", role: "CEO", sources: ["wsj-kedia-2026"] }
  ],
  timeline: [
    { date: "2022-01-01", title: "STAT statement analyser built in-house", detail: "Rolled out to merchant-services reps; later rebuilt on vision AI that reads poor-quality statements.", sources: ["usb-stat-2026"] },
    { date: "2025-07-01", title: "Prashant Mehrotra becomes Chief AI Officer", detail: "Joins from Allstate; earlier director of data engineering at Capital One.", sources: ["ab-tokens-2026"] },
    { date: "2025-11-07", title: "CIO: 'the technology is the easy part'", detail: "Venkatachari compares AI to the steam locomotive and stresses people and process.", sources: ["wsj-venkatachari-2025"] },
    { date: "2026-01-15", title: "Gen-AI assistant for the developer portal", detail: "Helps embedded-banking clients and partners find and use the right APIs.", sources: ["ab-devportal-2026"] },
    { date: "2026-04-13", title: "Design Assistant launched", detail: "Built by the Experience Design team and the AI Center of Excellence to enforce accessibility, brand and content standards.", sources: ["usb-design-assistant-2026"] },
    { date: "2026-05-05", title: "Kedia: workers like AI 'about as much as' return-to-office", detail: "At the WSJ Future of Everything event the CEO says confident users will need to inspire uptake.", sources: ["wsj-kedia-2026"] },
    { date: "2026-05-14", title: "Mehrotra's four E's", detail: "'Evangelize, educate, enable, and execute' — the chief AI officer on scaling AI: 'if not now, when?'", sources: ["wsj-mehrotra-2026"] },
    { date: "2026-06-26", title: "Healthcare payments automation push", detail: "Senior hires to digitise recordkeeping, benefits, invoicing and payments with AI.", sources: ["ab-healthcare-2026"] },
    { date: "2026-07-30", title: "'Beyond token-maxing'", detail: "The AI chief on balancing innovation with a realistic rein on costs.", sources: ["ab-tokens-2026"] },
    { date: "2026-08-12", title: "AI-driven cash forecasting tool", detail: "U.S. Bank Liquidity Manager, powered by Kyriba, for mid-sized and large firms.", sources: ["usb-liquidity-2026"] },
    { date: "2026-09-02", title: "The six-action playbook", detail: "Pick the right work, define outcomes, productize and reuse, invest in skills, scale responsibly, prepare for agents.", sources: ["ab-playbook-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Agentic software layer", detail: "Internally developed agentic software underpinning early use cases inside and outside technology.", status: "In production", sources: ["ab-venkatachari-2026"] },
    { useCase: "generative-agentic-ai", name: "Design Assistant and developer-portal assistant", detail: "In-house generative tools for designers and API users.", status: "In production", sources: ["usb-design-assistant-2026", "ab-devportal-2026"] },
    { useCase: "generative-agentic-ai", name: "Liquidity Manager cash forecasting", detail: "AI forecasting and scenario planning for corporate clients, with Kyriba.", status: "In production", sources: ["usb-liquidity-2026"] },
    { useCase: "fraud", name: "Treasury fraud defence", detail: "Anomaly detection, behavioural intelligence and network analytics on payments.", status: "In production", sources: ["usb-fraud-2026"] },
    { useCase: "generative-agentic-ai", name: "STAT merchant statement analysis", detail: "Vision AI reading inconsistent merchant statements.", status: "In production", sources: ["usb-stat-2026"] }
  ],
  numbers: [
    { label: "Operations employees under the new COO", value: "16,000+", asOf: "2026-03-26", sources: ["usb-coo-2026"] },
    { label: "Branches", value: "2,000+ in 26 states", asOf: "2025-11-21", sources: ["wsj-branches-2025"] },
    { label: "Small businesses using generative AI (bank survey)", value: "surveyed in the 2026 Small Business Survey", asOf: "2026-06-18", sources: ["usb-sbo-2026"] }
  ],
  quotes: [
    { who: "Gunjan Kedia", role: "CEO", date: "2026-05-05", quote: "The workforce likes AI about as much as they liked the return to office mandates after Covid.", sources: ["wsj-kedia-2026"] },
    { who: "Prashant Mehrotra", role: "Chief AI Officer", date: "2026-09-02", quote: "We need to measure outcomes and not outputs.", sources: ["ab-playbook-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; the revised model risk guidance applies and the OCC says it is right-sizing AI expectations for banks that rely on third-party technology.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "federal-reserve", why: "Holding-company supervisor; vendor products such as the Kyriba-powered forecasting tool fall under third-party guidance.", docSlugs: ["fed-sr-23-4"] },
    { authority: "cfpb", why: "Consumer and small-business lending; adverse-action duties apply to any AI in credit decisions.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "treasury", why: "The Treasury FS AI RMF is designed to scale to banks of this size and is the framework a playbook-driven program maps to.", docSlugs: ["treasury-fs-ai-rmf-and-ai-lexicon-2026"] }
  ],
  suggestions: [
    { title: "The playbook is the product", detail: "For a bank that cannot match a $20 billion budget, a repeatable method — high-frequency work, outcome gates, reusable patterns — is the competitive answer. It also reads like an examiner's checklist, which is not accidental." },
    { title: "Culture is the named bottleneck", detail: "The CEO's return-to-office comparison is the frankest statement on AI adoption resistance from a large-bank chief. Expect training and champion programs before headcount claims." },
    { title: "Cost control before scale", detail: "'Beyond token-maxing' signals the bank will size models to tasks and may lean on smaller or in-house models, a path PNC is taking further." },
    { title: "Agents are next, on a stated timetable", detail: "'Prepare for agents' is the sixth action; the agentic software layer already exists internally, so the move to customer-facing agents is a governance decision, not a technical one." }
  ],
  faq: [
    { q: "Who is U.S. Bank's chief AI officer?", a: "Prashant Mehrotra, executive vice president and chief AI officer since mid-2025. He previously led AI at Allstate and was director of data engineering at Capital One. He describes the role as 'evangelize, educate, enable, and execute' and has set out a six-step AI adoption playbook." },
    { q: "What AI tools has U.S. Bank built?", a: "Publicly described in-house tools include STAT, an AI merchant-statement analyser first deployed in 2022; Design Assistant for its experience designers (April 2026); a generative-AI assistant on its developer portal (January 2026); and U.S. Bank Liquidity Manager, an AI cash-forecasting product built with Kyriba (August 2026)." }
  ],
  sources: [
    { id: "ab-playbook-2026", title: "Benchmarking AI adoption: What U.S. Bank's playbook tells us", publisher: "American Banker", url: "https://www.americanbanker.com/news/benchmarking-ai-adoption-what-u-s-banks-playbook-tells-us", date: "2026-09-02" },
    { id: "ab-tokens-2026", title: "Beyond token-maxing: How U.S. Bank AI chief navigates costs", publisher: "American Banker", url: "https://www.americanbanker.com/news/beyond-token-maxing-how-u-s-bank-ai-chief-navigates-costs", date: "2026-07-30" },
    { id: "ab-venkatachari-2026", title: "Dilip Venkatachari's development of agentic AI and digital-asset infrastructures is driving use cases", publisher: "American Banker", url: "https://www.americanbanker.com/news/u-s-banks-dilip-venkatachari-is-15-on-the-most-innovative-people-in-finance-ranking", date: "2026-06-01" },
    { id: "ab-devportal-2026", title: "U.S. Bank gives embedded banking clients a gen AI assistant", publisher: "American Banker", url: "https://www.americanbanker.com/news/u-s-bank-gives-embedded-banking-clients-a-gen-ai-assistant", date: "2026-01-15" },
    { id: "ab-healthcare-2026", title: "U.S. Bank takes a swing at automating health care payments", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/u-s-bank-hires-new-exec-to-lead-health-care-payment-tech", date: "2026-06-26" },
    { id: "wsj-mehrotra-2026", title: "U.S. Bank Chief AI Officer on Transformation: 'If Not Now, When?'", publisher: "The Wall Street Journal (Deloitte CMO Journal)", url: "https://deloitte.wsj.com/cmo/u-s-bank-chief-ai-officer-on-transformation-if-not-now-when-d6ab3469", date: "2026-05-14" },
    { id: "wsj-venkatachari-2025", title: "U.S. Bancorp CIO on Scaling AI: 'The Technology Is the Easy Part'", publisher: "The Wall Street Journal (Deloitte CIO Journal)", url: "https://deloitte.wsj.com/cio/u-s-bancorp-cio-on-scaling-ai-the-technology-is-the-easy-part-8d480274", date: "2025-11-07" },
    { id: "wsj-kedia-2026", title: "US Bank CEO Says Employees Dislike AI as Much as Return-to-Office Mandates", publisher: "The Wall Street Journal", url: "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-05-05-2026/card/us-bank-ceo-says-employees-dislike-ai-as-much-as-return-to-office-mandates-fBKlue7XVZ9fzlAwH7dP", date: "2026-05-05" },
    { id: "wsj-branches-2025", title: "U.S. Bank Brings a Personal Touch to a Digital World", publisher: "The Wall Street Journal (partner content)", url: "https://partners.wsj.com/comcast-business/powering-perspectives/us-bank-brings-a-personal-touch-to-a-digital-world", date: "2025-11-21" },
    { id: "usb-design-assistant-2026", title: "U.S. Bank launches Design Assistant, an AI solution to empower designers at scale", publisher: "U.S. Bank", url: "https://www.usbank.com/about-us-bank/news-and-stories/article-library/us-bank-launches-design-assistant-an-ai-solution-to-empower-designers-at-scale.html", date: "2026-04-13" },
    { id: "usb-stat-2026", title: "AI-powered Statement Analyzer simplifies payment services for small businesses", publisher: "U.S. Bank", url: "https://www.usbank.com/about-us-bank/news-and-stories/article-library/ai-powered-statement-analyzer-simplifies-payment-services-for-small-businesses.html", date: "2026-08-20" },
    { id: "usb-liquidity-2026", title: "U.S. Bank launches AI-driven cash forecasting tool", publisher: "U.S. Bank", url: "https://www.usbank.com/about-us-bank/news-and-stories/article-library/us-bank-launches-ai-driven-cash-forecasting-tool.html", date: "2026-08-12" },
    { id: "usb-fraud-2026", title: "How Treasury Departments Use AI to Detect and Prevent Fraud", publisher: "U.S. Bank", url: "https://www.usbank.com/corporate-and-commercial-banking/insights/risk/mitigation/treasury-dept-partners-using-ai-to-fight-fraud.html", date: "2026-07-22" },
    { id: "usb-sbo-2026", title: "U.S. Bank 2026 Small Business Survey", publisher: "U.S. Bank", url: "https://www.usbank.com/SBOsurvey.html", date: "2026-06-18" },
    { id: "usb-coo-2026", title: "U.S. Bancorp Announces Leadership Changes in Its Operations Function", publisher: "Business Wire via FT Markets", url: "https://markets-data-api-proxy.ft.com/data/announce/full?dockey=600-202603261645BIZWIRE_USPRX____20260326_BW200557-1", date: "2026-03-26" }
  ],
  lastUpdated: "2026-09-09"
};
