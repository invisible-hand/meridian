import type { Bank } from "@/lib/banks";

export const ZIONS: Bank = {
  slug: "zions",
  name: "Zions Bancorporation",
  shortName: "Zions",
  ticker: "ZION",
  hq: "Salt Lake City, UT",
  fedRank: 32,
  leadBank: "Zions Bancorporation, N.A.",
  assetsUsdMillions: 87957,
  charter: "National bank (OCC); the bank is the holding company",
  posture: "The regional that finished a decade-long core replacement first — 56% of staff on generative AI, a Gemini-based enterprise platform, and a deliberate refusal to put autonomous AI in front of customers.",
  platform: {
    name: "A modern core plus a Gemini-based enterprise AI platform",
    detail: "Zions completed an 11-year replacement of its loan and deposit cores in 2024, which the bank calls the first modern integrated deposit-and-loan core among larger US banks; its president says being 'digital at the core' with all loans and deposits on one data model is 'a massive advantage'. On that base, 56% of the workforce used generative AI by September 2025 for contract review, relationship-review prep, credit presentations and email triage, supported by Genovate, a peer-coaching training programme, and new products relying on the core ship 20% faster. The new CIO, Margaret Mayer, is building an enterprise AI platform on Google Gemini; the bank uses AI to process unstructured documents for onboarding and loan origination and for fraud detection, and says it has deliberately avoided fully autonomous AI in client-facing or critical decisions.",
    sources: ["ab-smith-2025", "ab-tech-leadership-2026", "bankingdive-smith-2026"]
  },
  answerFirst:
    "Zions is the rare regional bank whose AI story starts with a finished core. It completed a decade-plus replacement of its loan and deposit systems in 2024, and executives say that single data model is what lets it move on AI and digital assets at all. By September 2025, 56% of employees were using generative AI for contract review, relationship-review preparation, credit presentations and sorting customer emails, trained through an internal peer-coaching programme called Genovate, and the bank said products relying on the core now ship 20% faster and technology availability incidents had fallen by half. In March 2026 the executive who led that work, chief technology and operations officer Jennifer Smith, left; her role was split between Margaret Mayer, a Capital One and Discover veteran who became CIO and is building an enterprise AI platform on Google Gemini, and Ken Collins, now chief transformation and operations officer, who describes AI processing unstructured customer, internal and supplier documents to speed account opening, onboarding and loan origination. The stance is explicitly cautious: management says it is in the early stages and has 'deliberately avoided deploying fully autonomous AI in client-facing or critical decision-making processes', with fraud detection among the targeted workflows and the CEO's example of 330,000 address-change emails a year as automation candidates. Headcount has fallen from about 10,300 in 2019 to under 9,200 while the efficiency ratio improved to 62.6% in 2025. The same period brought a $50 million charge on two fraudulent California loans that briefly rattled regional-bank stocks in October 2025, a new Zions Bank CEO from Wells Fargo, and plans to trial tokenised deposits and stablecoins in an innovation lab with the core vendor's Quartz software.",
  keyPoints: [
    "Core first: an 11-year loan-and-deposit core replacement finished in 2024, described as the first modern integrated core among larger US banks; 'digital at the core' is management's stated AI advantage.",
    "Adoption: 56% of the workforce on generative AI by September 2025 (contracts, relationship reviews, credit presentations, email triage), trained through the Genovate peer-coaching programme; core-dependent products ship 20% faster.",
    "Platform: an enterprise AI platform on Google Gemini under new CIO Margaret Mayer; AI already processes unstructured documents for onboarding and loan origination and supports fraud detection.",
    "Deliberate caution: no fully autonomous AI in client-facing or critical decisions; targeted workflows first; 330,000 annual address-change emails cited as an automation target.",
    "Leadership change: CTO/COO Jennifer Smith left in March 2026; Mayer (CIO) and Ken Collins (chief transformation and operations officer) co-run technology and operations; Nate Callister became Zions Bank CEO in January 2026.",
    "Efficiency and risk: headcount down from ~10,300 (2019) to under 9,200, efficiency ratio 62.6% in 2025; a $50 million loss on two fraudulent loans in October 2025; tokenised-deposit and stablecoin trials planned for 2026."
  ],
  leadership: [
    { name: "Harris Simmons", role: "Chairman and CEO, Zions Bancorporation", sources: ["ab-tech-leadership-2026", "reuters-q3-2025"] },
    { name: "Scott McLean", role: "President and Chief Operating Officer", sources: ["ab-tech-leadership-2026", "bankingdive-smith-2026"] },
    { name: "Margaret Mayer", role: "Chief Information Officer (from March 2026; ex-Discover, Capital One)", sources: ["bankingdive-smith-2026", "ab-tech-leadership-2026"] },
    { name: "Ken Collins", role: "Chief Transformation and Operations Officer", sources: ["bankingdive-smith-2026", "ab-tech-leadership-2026"] },
    { name: "Jennifer Smith", role: "Former Chief Technology and Operations Officer (2015–March 2026); led the core replacement and gen-AI rollout", sources: ["ab-smith-2025", "bankingdive-smith-2026"] },
    { name: "Nate Callister", role: "CEO, Zions Bank (from January 2026, ex-Wells Fargo)", sources: ["bankingdive-callister-2025"] }
  ],
  timeline: [
    { date: "2024-12-31", title: "Core replacement complete, gen AI integrated", detail: "The multi-year overhaul of loan and deposit cores finishes with generative AI built in.", sources: ["ab-smith-2025"] },
    { date: "2025-09-12", title: "CEO scans for acquisitions", detail: "Simmons signals interest in bank deals as consolidation picks up.", sources: ["bankingdive-acquisitions-2025"] },
    { date: "2025-09-24", title: "56% of staff on generative AI", detail: "Genovate peer coaching; copilots for bankers and fraud-detection tools under construction; products 20% faster.", sources: ["ab-smith-2025"] },
    { date: "2025-10-16", title: "$50 million loss on two loans disclosed", detail: "Alleged fraud in the California division triggers a regional-bank selloff; the bank calls it isolated.", sources: ["reuters-q3-2025", "wsj-selloff-2025"] },
    { date: "2025-10-20", title: "Third-quarter profit rises despite the charge", detail: "Net income $221 million; remaining charge-offs 'very benign'.", sources: ["reuters-q3-2025"] },
    { date: "2025-12-22", title: "Wells Fargo alumnus named Zions Bank CEO", detail: "Nate Callister succeeds Paul Burdiss from 1 January 2026.", sources: ["bankingdive-callister-2025"] },
    { date: "2026-03-03", title: "Jennifer Smith departs; technology leadership split", detail: "Margaret Mayer becomes CIO, Ken Collins adds operations.", sources: ["bankingdive-smith-2026"] },
    { date: "2026-03-10", title: "Gemini platform, document AI, and 'no autonomous AI' in client decisions", detail: "The new leadership on AI governance, unstructured-document processing and a measured stance; stablecoin trials planned.", sources: ["ab-tech-leadership-2026"] },
    { date: "2026-03-23", title: "Agrees to buy Basis Multifamily's agency lending business", detail: "A bolt-on in multifamily agency lending.", sources: ["ab-tech-leadership-2026"] }
  ],
  useCases: [
    { useCase: "generative-agentic-ai", name: "Generative AI for bankers (56% adoption)", detail: "Contract review, relationship-review prep, credit presentations, email triage.", status: "In production", sources: ["ab-smith-2025"] },
    { useCase: "credit-underwriting", name: "Unstructured-document processing for onboarding and origination", detail: "AI reads customer, internal and supplier documents to find what is missing.", status: "In production", sources: ["ab-tech-leadership-2026"] },
    { useCase: "fraud", name: "AI in targeted fraud-detection workflows", detail: "Named by management as an early targeted use.", status: "In production", sources: ["ab-tech-leadership-2026"] },
    { useCase: "generative-agentic-ai", name: "Enterprise AI platform on Google Gemini", detail: "A single platform with governance, policies and standards for enterprise use.", status: "Rolling out", sources: ["ab-tech-leadership-2026"] },
    { useCase: "customer-chatbots", name: "Automation of service emails", detail: "330,000 annual address-change and similar emails targeted for AI handling.", status: "Announced", sources: ["ab-tech-leadership-2026"] }
  ],
  numbers: [
    { label: "Workforce using generative AI", value: "56%", asOf: "2025-09-24", sources: ["ab-smith-2025"] },
    { label: "Speed-up for products relying on the new core", value: "20% faster", asOf: "2025-09-24", sources: ["ab-smith-2025"] },
    { label: "Technology availability incidents", value: "down 50%", asOf: "2025-09-24", sources: ["ab-smith-2025"] },
    { label: "Headcount", value: "< 9,200, from ≈ 10,300 in 2019", asOf: "2026-03-10", sources: ["ab-tech-leadership-2026"] },
    { label: "Efficiency ratio, 2025", value: "62.6% (64.2% in 2024)", asOf: "2026-03-10", sources: ["ab-tech-leadership-2026"] },
    { label: "Fraud-related loan loss, Q3 2025", value: "$50 million", asOf: "2025-10-20", sources: ["reuters-q3-2025"] }
  ],
  quotes: [
    { who: "Scott McLean", role: "President and Chief Operating Officer", date: "2026-03-10", quote: "If you want to survive in a digital world, you have to be digital at the core, okay? And the fact that we have all of our loans and deposits on one data model sounds kind of boring, but it's a big deal.", sources: ["ab-tech-leadership-2026"] },
    { who: "Margaret Mayer", role: "Chief Information Officer", date: "2026-03-10", quote: "AI is a critical enabler for us, and we have been putting in the governance, the policies, the standards, for AI, for us to be able to leverage it throughout the enterprise.", sources: ["ab-tech-leadership-2026"] },
    { who: "Jennifer Smith", role: "Chief Technology and Operations Officer", date: "2025-09-24", quote: "The adoption curve for generative AI is steeper than that of previous transformative technologies, meaning we'll have far less time for the labor market and educational systems to adapt.", sources: ["ab-smith-2025"] }
  ],
  regulatory: [
    { authority: "occ", why: "Zions Bancorporation, N.A. is a national bank without a holding company; document AI in origination and the Gemini platform fall under OCC model-risk and gen-AI expectations.", docSlugs: ["occ-bulletin-2026-13", "occ-semiannual-risk-perspective-spring-2026"] },
    { authority: "cfpb", why: "AI in account opening, onboarding and loan origination is an ECOA and adverse-action question.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action", "cfpb-regulation-b-final-rule-2026"] },
    { authority: "federal-reserve", why: "Google and Tata Consultancy Services are critical third parties under interagency guidance; the 2026 model-risk letter covers the fraud and document models.", docSlugs: ["fed-sr-23-4", "fed-sr-26-2"] },
    { authority: "colorado-ai-act", why: "A Colorado footprint (Vectra Bank) brings the state's automated-decision law into scope for consumer lending.", docSlugs: ["co-sb26-189"] }
  ],
  suggestions: [
    { title: "The core is the moat, and the bank knows it", detail: "One data model for all loans and deposits is what most regionals lack; Zions should expect its AI results to compound from here, and its disclosure to be read against that head start." },
    { title: "Explicit caution is a governance asset", detail: "Saying publicly that no autonomous AI touches client-facing or critical decisions gives examiners a clear boundary; the cost is that competitors will ship agents sooner." },
    { title: "The fraud loss and the AI fraud tools belong in one conversation", detail: "A $50 million loss on two loans in the same year the bank was building AI fraud detection is the sharpest possible argument for where the next dollar goes." },
    { title: "Leadership transition is the near-term risk", detail: "Losing the executive who ran technology for a decade, months before an enterprise AI platform launches, puts the new CIO–COO pairing under immediate scrutiny." }
  ],
  faq: [
    { q: "How does Zions use AI?", a: "By September 2025, 56% of Zions' workforce used generative AI for contract review, relationship-review preparation, credit presentations and email triage, trained through an internal peer-coaching programme. The bank uses AI to process unstructured documents for onboarding and loan origination and in targeted fraud-detection workflows, and is building an enterprise AI platform on Google Gemini. It says it has deliberately avoided fully autonomous AI in client-facing or critical decisions." },
    { q: "Who leads technology and AI at Zions?", a: "Since March 2026, chief information officer Margaret Mayer (formerly of Discover and Capital One) and chief transformation and operations officer Ken Collins co-run enterprise technology and operations, after long-time chief technology and operations officer Jennifer Smith, who led the core replacement, left the bank." }
  ],
  sources: [
    { id: "ab-smith-2025", title: "The Most Powerful Women to Watch, No. 3, Jennifer Smith, Zions Bancorporation", publisher: "American Banker", url: "https://americanbanker.com/news/2025-the-most-powerful-women-to-watch-no-3-jennifer-smith-zions-bancorporation", date: "2025-09-24" },
    { id: "ab-tech-leadership-2026", title: "Zions' revamped tech leadership team eyes AI, stablecoins", publisher: "American Banker", url: "https://americanbanker.com/news/zions-revamped-tech-leadership-team-eyes-ai-stablecoins", date: "2026-03-10" },
    { id: "bankingdive-smith-2026", title: "Zions Bancorporation sees executive shuffle", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/zions-jennifer-smith-cio-technology-operations-chief-leaving-mayer-collins/813657/", date: "2026-03-03" },
    { id: "bankingdive-callister-2025", title: "Wells Fargo alum tapped as Zions Bank's next CEO", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/zions-bank-ceo-nate-callister-utah-wells-fargo-alum-paul-burdiss-retire-harris-simmons/808642/", date: "2025-12-23" },
    { id: "bankingdive-acquisitions-2025", title: "Zions CEO eyes acquisition opportunities", publisher: "Banking Dive", url: "https://www.bankingdive.com/news/zions-bank-acquisition-merger-opportunities-ceo-simmons/760024/", date: "2025-09-12" },
    { id: "reuters-q3-2025", title: "Zions Bancorp's quarterly profit rises on interest income; offsets loan loss", publisher: "Reuters", url: "https://reuters.com/business/finance/zions-bancorps-quarterly-profit-rises-interest-income-offsets-loan-loss-2025-10-20", date: "2025-10-20" },
    { id: "wsj-selloff-2025", title: "Regional Bank Worries Weigh on Stocks", publisher: "The Wall Street Journal", url: "https://www.wsj.com/finance/stocks/regional-bank-worries-weigh-on-stocks-504a92a8", date: "2025-10-16" }
  ],
  lastUpdated: "2026-09-10"
};
