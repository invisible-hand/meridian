import type { Bank } from "@/lib/banks";

export const SALLIE_MAE: Bank = {
  slug: "sallie-mae",
  name: "SLM Corporation (Sallie Mae)",
  shortName: "Sallie Mae",
  ticker: "SLM",
  hq: "Newark, DE",
  fedRank: 67,
  leadBank: "Sallie Mae Bank",
  assetsUsdMillions: 29457,
  charter: "Utah industrial bank (FDIC)",
  posture: "The largest private student lender hired a Bank of America data-and-analytics technology head to run a data-first transformation, uses AI conversation simulation to train call-centre agents, and treats AI's effect on graduate employment as a credit question it has studied and dismissed.",
  platform: {
    name: "Technology and enablement organisation under Steve Turner",
    detail: "In February 2026 Sallie Mae appointed Steve Turner chief technology and enablement officer, responsible for technology architecture and delivery, IT innovation, data, and information and physical security, with a brief to 'harness data to deliver faster, simpler, and more reliable experiences'. Turner was previously managing director and head of data, analytics, insights and marketing technology at Bank of America and, before that, chief information officer at Walgreens. The company's 2026 proxy describes using its product and credit knowledge to improve 'underwriting, credit administration, marketing, and other key functions' in the core private student-loan business, and its earnings materials list 'risks related to artificial intelligence' among operating risks. Its contact centre uses Zenarate's AI Coach conversation simulator to train new and tenured agents in place of human role-play. No model inventory, AI vendor for underwriting or AI budget has been disclosed.",
    sources: ["slm-turner-2026", "slm-proxy-2026", "slm-q2deck-2026"]
  },
  answerFirst:
    "Sallie Mae, formally SLM Corporation, the Newark, Delaware parent of Sallie Mae Bank, a Utah industrial bank with about $29 billion of assets and the leading private student lender, made its AI move through a hire. On 2 February 2026 it named Steve Turner chief technology and enablement officer, giving him technology architecture and delivery, IT innovation, data, and information and physical security; Turner ran data, analytics, insights and marketing technology at Bank of America and was CIO at Walgreens, and CEO Jon Witter said his experience with 'large-scale, customer-focused platforms' would 'strengthen our technology foundation, drive innovation across the business, and deepen our relationships with our customers'. The 2026 proxy frames technology as improvements to 'underwriting, credit administration, marketing, and other key functions' and a push into graduate lending; the second-quarter earnings deck lists 'risks related to artificial intelligence' alongside cyber risk. In the contact centre the company uses an AI conversation simulator to train agents. AI also matters to Sallie Mae as a credit variable: asked at RBC's March 2026 conference whether AI would hollow out the jobs of new graduates and their cosigners, Witter said the company had 'looked long and hard at the AI threat', that recent-graduate unemployment spikes had been resolving within a month or two of prior patterns, and that a 93% cosigner rate gives the book resilience. Business is growing: second-quarter 2026 private education loan originations were $716 million, up 4.5%, with graduate originations up 29%, and 2026 guidance calls for 12% to 14% origination growth as federal Grad PLUS reforms open what management sizes as a $4.5 billion to $5 billion annual opportunity. In April 2026 CFO Peter Graham and COO Kerri Palmer became co-presidents. Sallie Mae Bank is supervised by the FDIC and the Utah regulator; its lending brings CFPB adverse-action duties to any automated decisioning.",
  keyPoints: [
    "Steve Turner appointed chief technology and enablement officer on 2 February 2026: technology, IT innovation, data and security; ex-Bank of America head of data, analytics and marketing technology and ex-Walgreens CIO.",
    "Technology agenda per the 2026 proxy: improve underwriting, credit administration and marketing in the core private student-loan business; grow graduate lending.",
    "AI risk is disclosed ('risks related to artificial intelligence') in earnings materials; no AI vendor, model inventory or budget is named.",
    "AI conversation simulation trains contact-centre agents in place of human role-play.",
    "Management has studied AI's effect on graduate employment as a credit risk and cites a 93% cosigner rate and resilient graduate job placement.",
    "Q2 2026 originations $716 million (+4.5%), graduate originations +29%; 2026 guidance 12% to 14% origination growth on Grad PLUS reforms."
  ],
  leadership: [
    { name: "Jon Witter", role: "Chief Executive Officer", linkedin: "https://www.linkedin.com/in/jonathan-witter-3763a131", sources: ["slm-turner-2026", "slm-copres-2026"] },
    { name: "Steve Turner", role: "Chief Technology and Enablement Officer", sources: ["slm-turner-2026"] },
    { name: "Kerri Palmer", role: "Co-President and Head of Financial Services; President, Sallie Mae Bank", sources: ["slm-copres-2026"] },
    { name: "Peter Graham", role: "Co-President and Chief Financial Officer", linkedin: "https://www.linkedin.com/in/petermgraham", sources: ["slm-copres-2026"] }
  ],
  timeline: [
    { date: "2025-01-08", title: "Guidance on using AI to write scholarship essays", detail: "Consumer education on generative AI.", sources: ["slm-aiessays-2025"] },
    { date: "2026-02-02", title: "Steve Turner named chief technology and enablement officer", detail: "Data-first mandate; ex-Bank of America and Walgreens.", sources: ["slm-turner-2026"] },
    { date: "2026-03-11", title: "RBC conference: AI and the graduate job market", detail: "CEO says the company 'looked long and hard at the AI threat'; 93% cosigner rate cited.", sources: ["slm-proxy-2026"] },
    { date: "2026-04-27", title: "Proxy statement: technology to improve underwriting and marketing", detail: "Co-presidents named the same day.", sources: ["slm-proxy-2026", "slm-copres-2026"] },
    { date: "2026-07-23", title: "Second-quarter 2026 results", detail: "Originations $716 million; diluted EPS $0.29; AI listed among operating risks.", sources: ["slm-q2-2026", "slm-q2deck-2026"] },
    { date: "2026-06-30", title: "Second-quarter originations reach $716 million", detail: "Up 4.5% year on year; graduate originations up 29%.", sources: ["slm-q2deck-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "AI-simulated training for contact-centre agents", detail: "Conversation and chat simulation replaces agent-to-agent role-play.", status: "In production", sources: ["slm-turner-2026"] },
    { useCase: "credit-underwriting", name: "Underwriting and credit-administration improvements", detail: "Data-led enhancements to the core private student-loan process under the new technology organisation.", status: "Rolling out", sources: ["slm-proxy-2026", "slm-turner-2026"] },
    { useCase: "model-risk", name: "AI as a credit-risk variable", detail: "Management analysis of AI's effect on graduate employment and cosigner strength.", status: "In production", sources: ["slm-proxy-2026"] },
    { useCase: "cybersecurity", name: "Information and physical security under the CTEO", detail: "Security consolidated with technology and data.", status: "In production", sources: ["slm-turner-2026"] }
  ],
  numbers: [
    { label: "Private education loan originations, Q2 2026", value: "$716 million (+4.5% year on year; graduate +29%)", asOf: "2026-07-23", sources: ["slm-q2deck-2026"] },
    { label: "Diluted EPS, Q2 2026", value: "$0.29", asOf: "2026-07-23", sources: ["slm-q2deck-2026"] },
    { label: "2026 guidance: origination growth / diluted EPS", value: "12% to 14% / $3.10 to $3.20", asOf: "2026-07-23", sources: ["slm-q2deck-2026"] },
    { label: "Cosigner rate on borrowers", value: "93%", asOf: "2026-03-11", sources: ["slm-proxy-2026"] }
  ],
  quotes: [
    { who: "Steve Turner", role: "Chief Technology and Enablement Officer", date: "2026-02-02", quote: "I look forward to leading our technology organization to accelerate innovation and harness data to deliver faster, simpler, and more reliable experiences for the students and families we serve.", sources: ["slm-turner-2026"] },
    { who: "Jon Witter", role: "Chief Executive Officer", date: "2026-02-02", quote: "Steve's deep experience managing large-scale, customer-focused platforms makes him the right leader to strengthen our technology foundation, drive innovation across the business, and deepen our relationships with our customers.", sources: ["slm-turner-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Sallie Mae Bank is an FDIC-supervised industrial bank; model-risk and third-party guidance govern any AI in underwriting or servicing.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "cfpb", why: "Private student lending carries ECOA adverse-action duties and UDAAP exposure for automated decisions and servicing chatbots.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-chatbots-in-consumer-finance-2023"] },
    { authority: "sec", why: "AI-related risk disclosure in earnings materials is subject to SEC scrutiny of AI claims.", docSlugs: ["sec-exam-priorities-fy2026"] }
  ],
  suggestions: [
    { title: "The hire tells you the plan", detail: "Recruiting Bank of America's data-and-analytics technology head signals a data platform build before visible AI products; expect underwriting and marketing models to follow." },
    { title: "AI is a credit-risk input here, not only a tool", detail: "A lender whose collateral is future graduate earnings has to model AI's labour-market effect; Sallie Mae has done that analysis and should publish more of it." },
    { title: "Training simulation is a low-risk proving ground", detail: "AI coaching of agents avoids customer-facing model risk while building the vendor-management muscle regulators will examine." },
    { title: "Grad PLUS growth needs scalable decisioning", detail: "A $4.5 billion to $5 billion annual opportunity in graduate loans will strain manual underwriting; automation is the enabler and the exam topic." }
  ],
  faq: [
    { q: "Does Sallie Mae use AI?", a: "Sallie Mae uses AI conversation simulation to train contact-centre agents and discloses 'risks related to artificial intelligence' in its earnings materials. In February 2026 it hired Steve Turner from Bank of America as chief technology and enablement officer to run technology, data and security with a mandate to harness data for faster customer experiences. No AI underwriting vendor or model has been named." },
    { q: "How does Sallie Mae view AI's effect on student borrowers?", a: "CEO Jon Witter told RBC's March 2026 conference the company had 'looked long and hard at the AI threat' to graduate employment, found recent-graduate unemployment spikes resolving close to historical patterns, and cited a 93% cosigner rate as a source of resilience." }
  ],
  sources: [
    { id: "slm-aiessays-2025", title: "The Do's and Don'ts of Using AI to Write Scholarship Essays", publisher: "Sallie Mae", url: "https://www.salliemae.com/blog/using-ai-to-write-scholarship-essays/", date: "2025-01-08" },
    { id: "slm-turner-2026", title: "Sallie Mae Names Steve Turner Chief Technology and Enablement Officer", publisher: "Sallie Mae", url: "https://news.salliemae.com/news-releases/news-releases-details/2026/Sallie-Mae-Names-Steve-Turner-Chief-Technology-and-Enablement-Officer/default.aspx", date: "2026-02-02" },
    { id: "slm-proxy-2026", title: "SLM Corporation 2026 Proxy Statement", publisher: "Sallie Mae", url: "https://salliemae.com/content/dam/slm/writtencontent/Reports/investors/SLM_Corporation_Proxy_Statement_April_27_2026.pdf", date: "2026-04-27" },
    { id: "slm-copres-2026", title: "Sallie Mae Announces Senior Leadership Appointments", publisher: "Sallie Mae (Business Wire)", url: "https://businesswire.com/news/home/20260427101118/en/Sallie-Mae-Announces-Senior-Leadership-Appointments", date: "2026-04-27" },
    { id: "slm-q2-2026", title: "Sallie Mae Reports Second Quarter 2026 Financial Results", publisher: "Sallie Mae", url: "https://news.salliemae.com/news-releases/news-releases-details/2026/Sallie-Mae-Reports-Second-Quarter-2026-Financial-Results/default.aspx", date: "2026-07-23" },
    { id: "slm-q2deck-2026", title: "Second Quarter 2026 Earnings Presentation", publisher: "Sallie Mae", url: "https://salliemae.com/content/dam/slm/writtencontent/Reports/investors/2Q26_Sallie_Mae_Earnings_Presentation.pdf", date: "2026-07-23" }
  ],
  lastUpdated: "2026-09-10"
};
