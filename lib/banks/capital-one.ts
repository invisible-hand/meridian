import type { Bank } from "@/lib/banks";

export const CAPITAL_ONE: Bank = {
  slug: "capital-one",
  name: "Capital One",
  shortName: "Capital One",
  ticker: "COF",
  hq: "McLean, VA",
  fedRank: 7,
  leadBank: "Capital One, N.A.",
  assetsUsdMillions: 672010,
  charter: "National bank (OCC)",
  posture: "Build, don't buy: a research lab, a chief scientist from Amazon, and agents that act — starting with car buying.",
  platform: {
    name: "Chat Concierge and the in-house agent stack",
    detail: "Chat Concierge, launched in March 2025, was the bank's first proprietary multi-agent conversational assistant, embedded on car dealers' websites to compare vehicles, schedule test drives and hand qualified buyers to sales; the wider stack is built by an Applied AI research team working on LLM training, customisation and multi-agent reasoning.",
    sources: ["cof-chat-concierge-2025", "cof-applied-research-2025", "ab-agents-prep-2025"]
  },
  answerFirst:
    "Capital One set out to be 'a bank that a technology company would build' and its AI strategy follows: it hires scientists rather than buying tools, runs an Applied AI research group on model training and multi-agent reasoning, funds university AI research at UVA, Illinois and through the National Science Foundation, and holds the second-largest AI talent pool in banking after JPMorgan, per Evident, which has ranked it second overall three times running. Its first agentic product, Chat Concierge, reached dealers' websites in March 2025; its chief scientist, Prem Natarajan, came from running Amazon's Alexa AI. The 2025–26 acquisitions of Discover and Brex added scale, 2,200 AI staff and an agentic business-payments suite, and founder-CEO Richard Fairbank frames the moment as 'the greatest change in human history' in which 'the threat of obsolescence is the greatest ever'.",
  keyPoints: [
    "Evident's AI index: second among the 50 largest banks, behind JPMorgan, in three consecutive editions; second-largest AI talent pool after adding 2,200 AI professionals, largely through the Discover acquisition completed May 2025.",
    "Chief Scientist and Head of Enterprise AI Prem Natarajan, formerly VP of Alexa AI at Amazon; the bank says it builds its AI stack and treats AI as a scientific discipline.",
    "Chat Concierge (March 2025): the first proprietary multi-agent assistant, on dealer websites through the Auto Navigator platform; dealers report double-digit sales lifts.",
    "Research investments: Applied AI research on LLM lifecycle and agentic reasoning; $4.5 million UVA initiative (October 2025); NSF partnership at $1 million a year for five years; agentic-AI research awards at Illinois; an inaugural AI Symposium (April 2026).",
    "Brex acquired for $5.15 billion (announced January 2026, closed April 2026): 35,000 clients and a suite of agentic AI products for business payments.",
    "Capital One Software sells enterprise data-security tooling (Databolt) aimed at 'secure AI adoption' — the bank as vendor."
  ],
  leadership: [
    { name: "Richard Fairbank", role: "Founder, Chairman and CEO", sources: ["cof-ars-2026"] },
    { name: "Prem Natarajan", role: "EVP, Chief Scientist and Head of Enterprise AI", sources: ["bankingdive-talent-2025", "bloomberg-moats-2026"] },
    { name: "Andy Ozment", role: "EVP, Chief Technology Risk Officer", sources: ["ab-ozment-2026"] }
  ],
  timeline: [
    { date: "2024-12-01", title: "Enterprise AI at scale, presented at AWS re:Invent", detail: "The bank lays out use cases across AML, cybersecurity, digital and customer service, and its enterprise AI program.", sources: ["cof-transforming-2025"] },
    { date: "2025-03-04", title: "Chat Concierge launches for auto dealers", detail: "A multi-agent assistant that compares vehicles, books appointments and hands off to sales, on the Auto Navigator platform.", sources: ["cof-chat-concierge-2025", "tfb-chat-concierge-2025"] },
    { date: "2025-05-18", title: "Discover acquisition completes", detail: "Adds more than 2,200 AI professionals to the talent pool, per Evident.", sources: ["bankingdive-talent-2025"] },
    { date: "2025-06-24", title: "Patented AI, described", detail: "The bank on its 'analytical DNA' and customer-centred AI patents.", sources: ["cof-patents-2025"] },
    { date: "2025-07-29", title: "NSF partnership on AI research institutes", detail: "$1 million a year for five years supporting NSF's AI research ecosystem.", sources: ["cof-nsf-2025"] },
    { date: "2025-10-08", title: "Second on the Evident AI index, again", detail: "'A tale of two banks that are very much out in front' — JPMorgan and Capital One.", sources: ["ab-evident-2025"] },
    { date: "2025-10-27", title: "$4.5 million UVA AI research initiative", detail: "Including the Capital One AI Research Neighborhood at UVA Engineering.", sources: ["cof-uva-2025"] },
    { date: "2025-11-20", title: "Applied AI research agenda published", detail: "LLM training, customisation and alignment; synthetic data; multi-agent reasoning.", sources: ["cof-applied-research-2025"] },
    { date: "2026-01-22", title: "Agrees to buy Brex for $5.15 billion", detail: "Corporate cards, expense software and nearly $13 billion in deposits at partner banks.", sources: ["wsj-brex-2026"] },
    { date: "2026-03-17", title: "'Building AI moats': the chief scientist on Bloomberg", detail: "Why the bank builds rather than buys its AI stack; AI as a capacity multiplier.", sources: ["bloomberg-moats-2026"] },
    { date: "2026-03-23", title: "Databolt expands for secure AI adoption", detail: "Capital One Software's data-security product adds capabilities for sensitive unstructured data.", sources: ["ft-databolt-2026"] },
    { date: "2026-04-08", title: "Brex deal closes", detail: "35,000 clients and a suite of agentic AI products join the business-banking strategy.", sources: ["ab-brex-close-2026"] },
    { date: "2026-04-23", title: "Inaugural Capital One AI Symposium", detail: "Two days in McLean on multi-sector AI partnerships.", sources: ["cof-symposium-2026"] },
    { date: "2026-08-03", title: "AI fluency program", detail: "'We don't just use AI — we build it'; sustaining an edge requires more than off-the-shelf models.", sources: ["cof-fluency-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Chat Concierge", detail: "Multi-agent assistant on dealer websites; compares vehicles, schedules appointments, routes to sales.", status: "In production", sources: ["cof-chat-concierge-2025"] },
    { useCase: "aml-kyc", name: "AML and cybersecurity models", detail: "Named by the bank among the areas where AI improves operations.", status: "In production", sources: ["cof-transforming-2025"] },
    { useCase: "customer-chatbots", name: "Digital and customer-service AI", detail: "Part of the enterprise AI program presented at re:Invent.", status: "In production", sources: ["cof-transforming-2025"] },
    { useCase: "generative-agentic-ai", name: "Brex agentic payments", detail: "Agentic AI products for corporate cards and expenses, acquired with Brex.", status: "In production", sources: ["ab-brex-close-2026"] },
    { useCase: "data-privacy", name: "Databolt (Capital One Software)", detail: "Tokenisation and data-security tooling sold to enterprises for secure AI adoption.", status: "In production", sources: ["ft-databolt-2026"] },
    { useCase: "cybersecurity", name: "Fraudulent remote-worker detection", detail: "The chief technology risk officer on nation-state impostor employees.", status: "In production", sources: ["ab-ozment-2026"] }
  ],
  numbers: [
    { label: "Evident AI index rank", value: "#2 of 50 (three editions running)", asOf: "2025-10-08", sources: ["ab-evident-2025"] },
    { label: "AI staff added", value: "2,200+ (largely via Discover)", asOf: "2025-10-09", sources: ["bankingdive-talent-2025"] },
    { label: "Customers", value: "100 million+", asOf: "2026-06-25", sources: ["bankingdive-talent-2025"] },
    { label: "Brex acquisition", value: "$5.15 billion; 35,000 clients", asOf: "2026-04-08", sources: ["wsj-brex-2026", "ab-brex-close-2026"] },
    { label: "University AI research commitments", value: "$4.5 million (UVA); $1 million a year × 5 (NSF)", asOf: "2025-10-27", sources: ["cof-uva-2025", "cof-nsf-2025"] }
  ],
  quotes: [
    { who: "Richard Fairbank", role: "Founder and CEO", date: "2026-03-25", quote: "For companies, the threat of obsolescence is the greatest ever, and so too is the opportunity. The imperative to adapt and lead is existential.", sources: ["cof-ars-2026"] },
    { who: "Capital One", role: "AI fluency program", date: "2026-08-03", quote: "At Capital One, we don't just use AI — we build it.", sources: ["cof-fluency-2026"] }
  ],
  regulatory: [
    { authority: "occ", why: "National bank; the revised model risk guidance applies, and in-house models mean the bank owns validation end to end.", docSlugs: ["occ-bulletin-2026-13"] },
    { authority: "cfpb", why: "A card and auto lender at scale: adverse-action duties, the 2026 Regulation B rule and the chatbot spotlight all bear directly on its AI.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-regulation-b-final-rule-2026", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "colorado-ai-act", why: "Auto and card lending into Colorado: the ADMT Act's notice and explanation duties from January 1, 2027, and the conversational-AI disclosure law for tools like Chat Concierge.", docSlugs: ["co-sb26-189", "co-hb26-1263"] },
    { authority: "california", why: "CCPA-scope business: the CPPA's automated decision-making regulations operative January 1, 2026.", docSlugs: ["ca-cppa-admt-risk-cyber-regulations-2025"] },
    { authority: "nist", why: "In-house model development maps to the NIST AI RMF and its generative-AI profile.", docSlugs: ["nist-ai-100-1", "nist-ai-600-1"] }
  ],
  suggestions: [
    { title: "Building models means owning the model-risk burden", detail: "A bank that trains and customises its own LLMs cannot point to a vendor's validation. Under the revised guidance that is a heavier, not lighter, documentation load — and a reason the research posture doubles as a governance posture." },
    { title: "Chat Concierge is a consumer-law test case", detail: "An agent that steers a car buyer and schedules a sale sits close to state conversational-AI disclosure laws and CFPB expectations on chatbots. How it discloses itself and hands off to humans is the template others will copy." },
    { title: "The talent pool is the asset the acquisitions bought", detail: "Discover added 2,200 AI staff; Brex added agentic products. Integration risk and AI capability are now the same project." },
    { title: "The bank is becoming a vendor", detail: "Databolt and the software business put Capital One on the supply side of bank AI, with the third-party-risk questions reversed." }
  ],
  faq: [
    { q: "What is Capital One's Chat Concierge?", a: "Chat Concierge is Capital One's first proprietary multi-agent conversational AI assistant, launched in March 2025 for auto dealers through its Auto Navigator platform. Embedded on dealers' websites, it answers questions, compares vehicles, schedules test drives and passes qualified buyers to the sales team, taking actions rather than only providing information." },
    { q: "How does Capital One rank in AI among banks?", a: "Evident's AI index, which scores the 50 largest banks in North America, Europe and Asia-Pacific on talent, innovation, leadership and transparency, has placed Capital One second behind JPMorgan Chase in three consecutive editions, most recently October 2025. Evident also puts its AI talent pool second, after the bank added more than 2,200 AI professionals through the Discover acquisition." }
  ],
  sources: [
    { id: "cof-chat-concierge-2025", title: "AI for Car Dealerships: Smarter Car Shopping", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/future-of-ai-car-dealerships-shopping", date: "2025-03-05" },
    { id: "cof-applied-research-2025", title: "Capital One's Applied AI research", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/applied-ai-research", date: "2025-11-20" },
    { id: "cof-transforming-2025", title: "How AI is transforming financial services & banking", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/transforming-financial-services", date: "2025-03-27" },
    { id: "cof-patents-2025", title: "Shaping Financial Services with Patented AI", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/innovating-financial-services-through-customer-centered-ai", date: "2025-06-24" },
    { id: "cof-nsf-2025", title: "Capital One partners with NSF to advance U.S. AI leadership", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/capital-one-nsf-partnership-advances-ai-leadership", date: "2025-07-29" },
    { id: "cof-uva-2025", title: "Capital One deepens UVA partnership to advance AI research", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/capital-one-uva-engineering-partnership", date: "2025-10-27" },
    { id: "cof-symposium-2026", title: "Insights from the inaugural Capital One AI Symposium", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/2026-capital-one-ai-symposium", date: "2026-04-23" },
    { id: "cof-fluency-2026", title: "Advancing AI fluency at Capital One", publisher: "Capital One", url: "https://www.capitalone.com/tech/ai/advancing-ai-fluency", date: "2026-08-03" },
    { id: "cof-ars-2026", title: "Annual report and shareholder letter (filed March 2026)", publisher: "Capital One via SEC EDGAR", url: "https://www.sec.gov/Archives/edgar/data/927628/000119312526124157/d860581dars.pdf", date: "2026-03-25" },
    { id: "tfb-chat-concierge-2025", title: "Capital One's 'Chat Concierge' Puts Agentic AI on Dealer Websites", publisher: "The Financial Brand", url: "https://thefinancialbrand.com/news/banking-products/capital-ones-chat-concierge-puts-agentic-ai-on-car-dealers-websites-187128", date: "2025-03-04" },
    { id: "ab-agents-prep-2025", title: "Goldman Sachs, Capital One prep for self-driving AI agents", publisher: "American Banker", url: "https://www.americanbanker.com/news/goldman-sachs-capital-one-prep-for-self-driving-ai-agents", date: "2025-02-20" },
    { id: "ab-evident-2025", title: "JPMorganChase, Capital One top AI ranking, once again", publisher: "American Banker", url: "https://www.americanbanker.com/news/jpmorganchase-capital-one-top-ai-ranking-once-again", date: "2025-10-08" },
    { id: "ab-brex-close-2026", title: "Capital One pushes deeper into AI, business payments (Brex closes)", publisher: "American Banker", url: "https://www.americanbanker.com/payments/news/capital-one-closes-brex-acquisition", date: "2026-04-08" },
    { id: "ab-ozment-2026", title: "How North Korean operatives infiltrate US bank payrolls", publisher: "American Banker", url: "https://www.americanbanker.com/news/how-north-korean-operatives-infiltrate-us-bank-payrolls", date: "2026-03-24" },
    { id: "bankingdive-talent-2025", title: "BofA, Capital One, Citi lead charge to scale AI talent pool", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/banking-AI-talent-pool-recruitment-evident-bofa-capital-one-citi-jpmorgan-wells/802383/", date: "2025-10-09" },
    { id: "bloomberg-moats-2026", title: "Capital One on Building AI Moats in Banking (Tech Disruptors)", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/audio/2026-03-17/tech-disruptors-capital-one-on-building-ai-moats-in-banking", date: "2026-03-17" },
    { id: "wsj-brex-2026", title: "Capital One Strikes $5.15 Billion Deal for Fintech Brex", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/banking/capital-one-to-buy-fintech-brex-e2dacc67", date: "2026-01-22" },
    { id: "ft-databolt-2026", title: "Capital One Software Expands Databolt Capabilities", publisher: "Business Wire via FT Markets", url: "https://markets.ft.com/data/announce/detail?dockey=600-202603230900BIZWIRE_USPRX____20260323_BW156095-1", date: "2026-03-23" }
  ],
  lastUpdated: "2026-09-09"
};
