import type { Bank } from "@/lib/banks";

export const ARVEST: Bank = {
  slug: "arvest",
  name: "Arvest Bank",
  shortName: "Arvest",
  ticker: "private (Arvest Bank Group)",
  hq: "Fayetteville, AR",
  fedRank: 71,
  leadBank: "Arvest Bank",
  assetsUsdMillions: 28024,
  charter: "Arkansas state member bank (Federal Reserve); Walton family-owned",
  posture: "The Walton family's private bank is several years into a core and cloud modernisation, hired a Synovus technology chief with an AI-strategy certification as CIO, and was named one of Fortune's most innovative companies, while its customer-facing AI content is about scams.",
  platform: {
    name: "Multi-year technology modernisation (cloud-native core, Google Cloud, Baker Hill UN/FY)",
    detail: "Arvest agreed with Thought Machine in 2021 to build a cloud-native core and with Google Cloud in 2022 to migrate its data centres and adopt Google's AI and machine-learning tools; its first product on the new core, an equipment-finance loan, launched in 2024. In December 2025 it hired Jennifer Baker, formerly Synovus Bank's chief technology officer and holder of a Cornell AI-strategy certification, as chief information officer in a newly designed executive role to lead 'all technology departments and teams' and continue a modernisation strategy aimed at customer experience, associate enablement, 'data accessibility and tools' and resource utilisation. In February 2026 it upgraded its 30-year Baker Hill relationship to the UN/FY platform to digitise the small-business lending lifecycle, integrated with its Fiserv Signature core and Salesforce. Chief product and innovation officer Amy Morbeck leads product innovation; no AI model, vendor for decisioning or AI budget has been disclosed.",
    sources: ["arvest-cio-2025", "arvest-bakerhill-2026", "arvest-fortune-2026"]
  },
  answerFirst:
    "Arvest Bank, the Fayetteville, Arkansas bank owned by the Walton family with about $28 billion of assets and more than 270 branches across Arkansas, Oklahoma, Missouri and Kansas, is a private company that has said more about its technology stack than about AI. It signed with Thought Machine in 2021 for a cloud-native core and with Google Cloud in 2022 for a five-year migration of its data centres and access to Google's AI and machine-learning tools, and it launched its first product on the new core in 2024. The AI-adjacent signal is a hire: on 3 December 2025 Arvest named Jennifer Baker chief information officer, a newly designed executive role with cross-functional leadership of all technology teams; Baker spent five years as chief technology officer of Synovus, holds a Cornell certification in AI strategy and was recognised by Rotary International among the top women of impact in AI and technology. Her brief is to continue 'a multi-year technology modernization strategy' that matures 'data accessibility and tools' alongside customer experience and associate enablement. In February 2026 Arvest upgraded its Baker Hill small-business lending platform to UN/FY, which digitises applications, underwriting and workflows and integrates with the bank's Fiserv Signature core and Salesforce. In March 2026 Fortune and Statista named Arvest one of America's Most Innovative Companies, judged on product innovation, process innovation and innovation culture; chief product and innovation officer Amy Morbeck said innovation 'is more than just using new technology'. In April 2026 Forbes ranked it in the top 20 of the World's Best Banks under president and CEO Matt Machen. Customer-facing AI content is defensive, covering deepfake and AI-powered scams, phantom-hacker schemes and the fraud value of good data quality. Arvest is an Arkansas state member bank supervised by the Federal Reserve; as a private company it publishes no 10-K, so its AI governance and spending are undisclosed.",
  keyPoints: [
    "CIO Jennifer Baker (from December 2025): ex-Synovus CTO, Cornell AI-strategy certification, newly designed role leading all technology teams.",
    "Modernisation stack: Thought Machine cloud-native core (2021), Google Cloud migration and AI tools (2022), first product on the new core in 2024.",
    "Baker Hill UN/FY small-business lending platform (February 2026) digitises applications, underwriting and workflows; integrated with Fiserv Signature and Salesforce.",
    "Fortune and Statista America's Most Innovative Companies 2026; Forbes World's Best Banks top 20 (2026).",
    "Customer AI content is fraud education: AI-powered scams and deepfakes, phantom-hacker scams, data quality against fraud.",
    "Private, Walton family-owned; no 10-K, no disclosed AI model, vendor for decisioning or budget."
  ],
  leadership: [
    { name: "Matt Machen", role: "President and CEO", linkedin: "https://www.linkedin.com/in/matt-machen-27994414", sources: ["arvest-forbes-2026"] },
    { name: "Jennifer Baker", role: "Chief Information Officer", linkedin: "https://www.linkedin.com/in/jenbaker-atl", sources: ["arvest-cio-2025"] },
    { name: "Amy Morbeck", role: "Chief Product and Innovation Officer", linkedin: "https://www.linkedin.com/in/amy-morbeck-9838078a", sources: ["arvest-fortune-2026"] },
    { name: "Brad Crain", role: "Regional Executive, Enhanced Banking Services", linkedin: "https://www.linkedin.com/in/brad-crain", sources: ["arvest-bakerhill-2026"] }
  ],
  timeline: [
    { date: "2024-09-04", title: "Authorized push payment fraud guidance", detail: "Social-engineering scam education for customers.", sources: ["arvest-app-2024"] },
    { date: "2025-12-03", title: "Jennifer Baker named chief information officer", detail: "Newly designed executive role; continues multi-year modernisation with data accessibility as a pillar.", sources: ["arvest-cio-2025"] },
    { date: "2026-02-09", title: "Baker Hill UN/FY small-business lending platform", detail: "Digital applications, streamlined underwriting, automated workflows; Fiserv and Salesforce integration.", sources: ["arvest-bakerhill-2026"] },
    { date: "2026-03-25", title: "Fortune America's Most Innovative Companies 2026", detail: "Judged on product innovation, process innovation and innovation culture.", sources: ["arvest-fortune-2026"] },
    { date: "2026-04-03", title: "'Good data quality, less fraud' customer guidance", detail: "Data accuracy framed as a fraud control.", sources: ["arvest-dataquality-2026"] },
    { date: "2026-04-08", title: "Forbes World's Best Banks top 20", detail: "Customer-survey ranking; CEO Matt Machen quoted.", sources: ["arvest-forbes-2026"] }
  ],
  useCases: [
    { useCase: "credit-underwriting", name: "Digitised small-business lending (Baker Hill UN/FY)", detail: "Automated workflows and streamlined underwriting across the lending lifecycle.", status: "Rolling out", sources: ["arvest-bakerhill-2026"] },
    { useCase: "third-party-vendors", name: "Cloud-native core and cloud migration", detail: "Thought Machine core and Google Cloud infrastructure with AI and ML tooling.", status: "In production", sources: ["arvest-cio-2025"] },
    { useCase: "fraud", name: "Customer fraud education on AI-enabled scams", detail: "Deepfakes, phantom-hacker schemes, push-payment fraud, data quality.", status: "In production", sources: ["arvest-dataquality-2026", "arvest-app-2024"] },
    { useCase: "governance-general", name: "Innovation culture programme", detail: "Product and innovation office under Amy Morbeck; Fortune recognition.", status: "In production", sources: ["arvest-fortune-2026"] }
  ],
  numbers: [
    { label: "Total assets", value: "≈ $28 billion", asOf: "2026-03-31", sources: ["arvest-cio-2025"] },
    { label: "Baker Hill relationship", value: "≈ 30 years, upgraded to UN/FY", asOf: "2026-02-09", sources: ["arvest-bakerhill-2026"] },
    { label: "Forbes World's Best Banks 2026", value: "Top 20 of 410 banks", asOf: "2026-04-08", sources: ["arvest-forbes-2026"] }
  ],
  quotes: [
    { who: "Amy Morbeck", role: "Chief Product and Innovation Officer", date: "2026-03-25", quote: "At Arvest, we believe innovation is more than just using new technology. It means finding creative ways to support our neighbors and make managing their finances easier.", sources: ["arvest-fortune-2026"] },
    { who: "Brad Crain", role: "Regional Executive, Enhanced Banking Services", date: "2026-02-09", quote: "The UN/FY platform gives us the flexibility, integration and efficiency we need to support our customers at scale.", sources: ["arvest-bakerhill-2026"] }
  ],
  regulatory: [
    { authority: "federal-reserve", why: "Arvest is a state member bank; the Fed's model-risk and third-party guidance govern the cloud core, lending platform and any AI tooling.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Automated small-business and consumer credit workflows carry ECOA adverse-action and UDAAP duties.", docSlugs: ["cfpb-ecoa-regulation-b-adverse-action"] },
    { authority: "fdic", why: "Deposit-insurance supervision and interagency third-party guidance apply to vendor platforms.", docSlugs: ["fdic-fil-29-2023"] }
  ],
  suggestions: [
    { title: "The infrastructure is ahead of the AI story", detail: "A cloud-native core and Google Cloud data estate are what most peers lack before they can run models; Arvest has them and has said little about what runs on top." },
    { title: "The CIO hire names the next phase", detail: "Recruiting an AI-certified former regional-bank CTO into a newly created role signals that data and AI, not migration, are the coming agenda." },
    { title: "Private ownership lowers disclosure, not risk", detail: "No 10-K means no AI risk factors; examiners still expect model inventories for automated underwriting on the new lending platform." },
    { title: "Fraud education should become fraud automation", detail: "A bank that teaches customers about deepfakes has the data platform to detect them; that would be the natural first public AI use case." }
  ],
  faq: [
    { q: "Does Arvest Bank use AI?", a: "Arvest has not disclosed a specific AI deployment. It runs a cloud-native core from Thought Machine on Google Cloud, which includes access to Google's AI and machine-learning tools, digitised small-business lending on Baker Hill's UN/FY platform in 2026, and in December 2025 hired Jennifer Baker, an AI-strategy-certified former Synovus CTO, as chief information officer." },
    { q: "Who owns and runs Arvest?", a: "Arvest is owned by the Walton family through Arvest Bank Group. Matt Machen is president and CEO, Jennifer Baker is chief information officer and Amy Morbeck is chief product and innovation officer. It is an Arkansas state member bank supervised by the Federal Reserve." }
  ],
  sources: [
    { id: "arvest-app-2024", title: "Authorized Push Payment Fraud", publisher: "Arvest Bank", url: "https://arvest.com/about/articles/risk-fraud-awareness/authorized-push-payment-fraud", date: "2024-09-04" },
    { id: "arvest-cio-2025", title: "Arvest names new CIO, Chief Credit Administration Officer", publisher: "Arvest Bank", url: "https://arvest.com/about/newsroom/arvest-names-new-cio-chief-credit-administration-officer", date: "2025-12-03" },
    { id: "arvest-bakerhill-2026", title: "Arvest Bank Deepens Three-Decade Partnership with Baker Hill, Upgrades to UN/FY Platform to Advance Small Business Lending", publisher: "Baker Hill (PR Newswire)", url: "https://prnewswire.com/news-releases/arvest-bank-deepens-three-decade-partnership-with-baker-hill-upgrades-to-unfy-platform-to-advance-small-business-lending-302682843.html", date: "2026-02-09" },
    { id: "arvest-fortune-2026", title: "Arvest Named One of America's Most Innovative Companies 2026 by Fortune", publisher: "Arvest Bank", url: "https://arvest.com/about/newsroom/arvest-named-one-of-americas-most-innovative-companies-2026-by-fortune", date: "2026-03-25" },
    { id: "arvest-dataquality-2026", title: "Good data quality, less fraud!", publisher: "Arvest Bank", url: "https://arvest.com/about/articles/risk-fraud-awareness/good-data-quality-less-fraud", date: "2026-04-03" },
    { id: "arvest-forbes-2026", title: "Arvest Ranked Top 20 on Forbes' World's Best Banks List", publisher: "Arvest Bank", url: "https://arvest.com/about/newsroom/arvest-ranked-top-20-on-forbes-worlds-best-banks-list", date: "2026-04-08" }
  ],
  lastUpdated: "2026-09-10"
};
