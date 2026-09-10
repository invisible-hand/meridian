import type { Bank } from "@/lib/banks";

export const HANCOCK_WHITNEY: Bank = {
  slug: "hancock-whitney",
  name: "Hancock Whitney",
  shortName: "Hancock Whitney",
  ticker: "HWC",
  hq: "Gulfport, MS",
  fedRank: 56,
  leadBank: "Hancock Whitney Bank",
  assetsUsdMillions: 35533,
  charter: "Mississippi state nonmember bank (FDIC)",
  posture: "A Gulf South bank with a customer base averaging 65 years old that is modernising its digital channels with MX and buying into Orlando, while its only public AI statements concern the threats AI creates for business clients.",
  platform: {
    name: "MX-powered digital banking modernisation",
    detail: "Hancock Whitney's technology programme is a digital and mobile modernisation delivered with the data and money-experience vendor MX, presented jointly at American Banker's Digital Banking conference in June 2026. The problem statement is demographic: an average customer age of 65 and wealth concentrated among Baby Boomers, so the bank prioritised 'seamless financial experiences to target younger generations', a modern mobile app that drives engagement, and overcoming internal hesitation from teams used to old ways of working. Pam Hymel, director of digital strategy and a 25-year Hibernia and Capital One digital veteran, has led online account opening and online-banking initiatives. Client education adds a free Greenlight family-finance subscription (November 2025). No AI deployment, AI leader or AI spend has been disclosed; the bank's AI content is cybersecurity guidance.",
    sources: ["ab-gardner-2026", "ab-hymel-2026", "hwc-greenlight-2025", "hwc-cyber-2026"]
  },
  answerFirst:
    "Hancock Whitney, the $35.5 billion Gulfport, Mississippi bank serving Mississippi, Louisiana, Alabama, Florida and Texas, has no disclosed AI programme; its technology story is a digital-channel modernisation aimed at a customer base whose average age is 65. Working with the fintech MX, the bank set out to build 'seamless financial experiences to target younger generations', ship a modern mobile app that promotes engagement, and manage 'internal hesitation from teams accustomed to old ways of working', a case study its executives presented alongside MX in June 2026. Pam Hymel, director of digital strategy, brings 25 years of digital leadership from Hibernia National Bank and Capital One and has run online account opening and online-banking initiatives. Where the bank talks about AI it is as a threat: a September 2026 guide for business owners says that 'thanks in large part to artificial intelligence, business cybersecurity risks are reaching unprecedented levels' because AI lets attackers 'automate, scale and refine cyberattacks' and lowers the barrier for less-skilled actors, and earlier pieces cover AI in account-takeover fraud and business email compromise. Strategically the bank is expanding in Florida: it agreed in May 2026 to buy OFB Bancshares, parent of One Florida Bank in Orlando, for $377.6 million in cash, its first bank acquisition in seven years, received regulatory approval in July, and expects more than $37 billion of assets after closing. Financially, fourth-quarter 2025 EPS was $1.49; first-quarter 2026 net income fell to $47.4 million after a $98.6 million pre-tax loss on a securities-portfolio restructuring, or $1.52 per share excluding it, with an efficiency ratio of 55.43%. Hancock Whitney Bank is a state nonmember bank supervised by the FDIC.",
  keyPoints: [
    "No AI programme, leader, vendor or spend disclosed; AI appears only in cybersecurity and fraud guidance for clients.",
    "Digital modernisation with MX targets younger customers against an average customer age of 65 and Boomer-concentrated wealth.",
    "Named digital leader: Pam Hymel, director of digital strategy (25 years at Hibernia and Capital One), owner of online account opening.",
    "First acquisition in seven years: One Florida Bank in Orlando for $377.6 million cash, announced May 2026, approved July 2026.",
    "Results: Q4 2025 EPS $1.49; Q1 2026 adjusted EPS $1.52 after a $98.6 million securities restructuring loss; efficiency ratio 55.43%.",
    "Retail leadership refreshed: Greg Fahey named head of retail banking (October 2025); Greenlight family-finance subscription free for clients."
  ],
  leadership: [
    { name: "John Hairston", role: "President and CEO", sources: ["hwc-q1-2026", "ab-oneflorida-2026"] },
    { name: "Pam Hymel", role: "Director of Digital Strategy", linkedin: "https://www.linkedin.com/in/pam-hymel-5b266314", sources: ["ab-hymel-2026"] },
    { name: "Greg Fahey", role: "Head of Retail Banking Segment (from October 2025)", linkedin: "https://www.linkedin.com/in/greg-fahey", sources: ["hwc-fahey-2025"] }
  ],
  timeline: [
    { date: "2025-10-01", title: "Greg Fahey named head of retail banking", detail: "To guide client experience and consumer growth.", sources: ["hwc-fahey-2025"] },
    { date: "2025-11-12", title: "Free Greenlight subscription for clients", detail: "Family financial-education platform via Greenlight for Banks.", sources: ["hwc-greenlight-2025"] },
    { date: "2026-01-20", title: "Fourth-quarter 2025 results", detail: "Net income $125.6 million; EPS $1.49.", sources: ["hwc-q4-2025"] },
    { date: "2026-04-21", title: "First-quarter 2026 results", detail: "Net income $47.4 million after a $98.6 million securities restructuring loss; adjusted EPS $1.52.", sources: ["hwc-q1-2026"] },
    { date: "2026-05-15", title: "One Florida Bank acquisition announced", detail: "$377.6 million cash for OFB Bancshares, Orlando; first bank deal in seven years.", sources: ["ab-oneflorida-2026", "hwc-oneflorida-2026"] },
    { date: "2026-06-16", title: "Digital modernisation case study with MX", detail: "Younger customers, internal change and a modern mobile app.", sources: ["ab-gardner-2026"] },
    { date: "2026-07-20", title: "Regulatory approval for One Florida Bank", detail: "Closing expected in the third quarter.", sources: ["hwc-approval-2026"] },
    { date: "2026-09-09", title: "'AI is raising business cyber risk' guidance", detail: "Five cybersecurity questions for IT teams and providers.", sources: ["hwc-cyber-2026"] }
  ],
  useCases: [
    { useCase: "customer-chatbots", name: "Digital and mobile modernisation with MX", detail: "Money-experience platform; new mobile app; online account opening.", status: "Rolling out", sources: ["ab-gardner-2026", "ab-hymel-2026"] },
    { useCase: "cybersecurity", name: "AI-threat guidance for business clients", detail: "AI-enabled attack automation, account takeover and BEC.", status: "In production", sources: ["hwc-cyber-2026"] },
    { useCase: "third-party-vendors", name: "One Florida Bank integration", detail: "First acquisition in seven years; systems integration ahead.", status: "Announced", sources: ["hwc-approval-2026"] }
  ],
  numbers: [
    { label: "Average customer age", value: "65", asOf: "2026-06-16", sources: ["ab-gardner-2026"] },
    { label: "One Florida Bank acquisition", value: "$377.6 million cash; > $37 billion assets after closing", asOf: "2026-05-15", sources: ["ab-oneflorida-2026"] },
    { label: "Q1 2026 net income / adjusted EPS", value: "$47.4 million / $1.52", asOf: "2026-04-21", sources: ["hwc-q1-2026"] },
    { label: "Securities restructuring loss, Q1 2026", value: "$98.6 million pre-tax", asOf: "2026-04-21", sources: ["hwc-q1-2026"] },
    { label: "Efficiency ratio, Q1 2026", value: "55.43%", asOf: "2026-04-21", sources: ["hwc-q1-2026"] }
  ],
  quotes: [
    { who: "John Hairston", role: "President and CEO", date: "2026-04-21", quote: "The first quarter of 2026 was a solid start to the year.", sources: ["hwc-q1-2026"] },
    { who: "Hancock Whitney", role: "Cybersecurity guidance for businesses", date: "2026-09-09", quote: "Thanks in large part to artificial intelligence, business cybersecurity risks are reaching unprecedented levels.", sources: ["hwc-cyber-2026"] }
  ],
  regulatory: [
    { authority: "fdic", why: "Hancock Whitney Bank is a state nonmember bank; the FDIC supervises the digital programme, the MX relationship and the One Florida integration.", docSlugs: ["fdic-fil-29-2023", "fdic-fil-15-2026"] },
    { authority: "federal-reserve", why: "Holding-company oversight and interagency model-risk guidance for any future AI in credit or fraud.", docSlugs: ["fed-sr-11-7", "fed-sr-23-4"] },
    { authority: "cfpb", why: "Online account opening and consumer digital servicing fall under UDAAP and, if AI is added, the chatbot circular.", docSlugs: ["cfpb-chatbots-in-consumer-finance-2023"] }
  ],
  suggestions: [
    { title: "Demographics make digital the AI prerequisite", detail: "A 65-year-old average customer means the mobile and data foundation with MX has to land before any AI personalisation can matter." },
    { title: "The bank writes about AI attackers but not AI defences", detail: "Its guidance describes AI-automated attacks; disclosing the AI in its own fraud and cyber stack would reassure the business clients it is warning." },
    { title: "Orlando adds integration before innovation", detail: "The first deal in seven years will absorb the technology team through the second half of 2026; AI disclosure is unlikely before the conversion is done." },
    { title: "MX is a data-aggregation dependency", detail: "Money-experience platforms hold customer transaction data across institutions; the FDIC's third-party guidance applies to the vendor as much as the app." }
  ],
  faq: [
    { q: "Does Hancock Whitney use AI?", a: "Hancock Whitney has not disclosed any AI programme, AI leader or AI spending. Its public technology work is a digital-banking modernisation with the vendor MX aimed at younger customers, and its AI-related content is cybersecurity and fraud guidance describing how attackers use AI." },
    { q: "What is Hancock Whitney acquiring?", a: "OFB Bancshares, the parent of One Florida Bank in Orlando, for $377.6 million in cash. The deal was announced on 15 May 2026, received regulatory approval on 20 July 2026, and is expected to close in the third quarter, taking the bank past $37 billion of assets." }
  ],
  sources: [
    { id: "ab-oneflorida-2026", title: "Hancock Whitney inks deal to buy Orlando community bank", publisher: "American Banker", url: "https://www.americanbanker.com/news/hancock-whitney-inks-deal-to-buy-orlando-community-bank", date: "2026-05-15" },
    { id: "ab-gardner-2026", title: "Customer Experience session: Hancock Whitney and MX (Digital Banking 2026 speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/nate-gardner", date: "2026-06-03" },
    { id: "ab-hymel-2026", title: "Pam Hymel, Director of Digital Strategy, Hancock Whitney (speaker profile)", publisher: "American Banker", url: "https://digital-banking.americanbanker.com/profile/pam-hymel", date: "2026-06-03" },
    { id: "hwc-fahey-2025", title: "Hancock Whitney Names Greg Fahey Head of Retail Banking Segment", publisher: "Hancock Whitney", url: "https://hancockwhitney.com/newsroom/hancock-whitney-names-greg-fahey-head-of-retail-banking-segment", date: "2025-10-01" },
    { id: "hwc-greenlight-2025", title: "Hancock Whitney Expands Offering with Free Greenlight Subscription for Clients", publisher: "Hancock Whitney", url: "https://hancockwhitney.com/newsroom/hancock-whitney-expands-offering-with-free-greenlight-subscription-for-clients", date: "2025-11-12" },
    { id: "hwc-q4-2025", title: "Hancock Whitney Reports Fourth Quarter 2025 EPS of $1.49", publisher: "Hancock Whitney", url: "https://investors.hancockwhitney.com/news/news-details/2026/Hancock-Whitney-Reports-Fourth-Quarter-2025-EPS-of-1-49", date: "2026-01-20" },
    { id: "hwc-q1-2026", title: "Hancock Whitney Reports First Quarter 2026 EPS of $0.57", publisher: "Hancock Whitney", url: "https://investors.hancockwhitney.com/news/news-details/2026/Hancock-Whitney-Reports-First-Quarter-2026-EPS-of-0-57", date: "2026-04-21" },
    { id: "hwc-oneflorida-2026", title: "Hancock Whitney to Acquire One Florida Bank", publisher: "Hancock Whitney", url: "https://investors.hancockwhitney.com/news/news-details/2026/Hancock-Whitney-to-Acquire-One-Florida-Bank", date: "2026-05-15" },
    { id: "hwc-approval-2026", title: "Hancock Whitney Receives Regulatory Approval to Acquire One Florida Bank", publisher: "Hancock Whitney", url: "https://investors.hancockwhitney.com/news/news-details/2026/Hancock-Whitney-Receives-Regulatory-Approval-to-Acquire-One-Florida-Bank", date: "2026-07-20" },
    { id: "hwc-cyber-2026", title: "5 Critical Cybersecurity Questions to Ask Your IT Team or Service Provider", publisher: "Hancock Whitney", url: "https://www.hancockwhitney.com/insights/5-critical-cybersecurity-questions-to-ask-your-it-team-or-service-provider", date: "2026-09-09" }
  ],
  lastUpdated: "2026-09-10"
};
