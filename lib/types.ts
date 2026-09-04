export type DigestStory = {
  title: string;
  executiveSummary: string;
  businessImpact: string;
  sourceUrl: string;
};

export type DailyDigest = {
  date: string;
  category: "fintech_banking";
  bankingStories: DigestStory[];
  aiStories: DigestStory[];
  /** 2-3 headline phrases joined by " · " derived from top story titles */
  briefSummary?: string;
  /** One or two plain sentences describing today's updates, shown large at the top */
  lede?: string;
  /** @deprecated kept for backwards-compat when reading old digests from DB */
  stories?: DigestStory[];
  /** One-off note from the developer, rendered in a highlighted box at the top of the email */
  developerNote?: string;
};
