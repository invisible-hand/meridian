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
  /** @deprecated kept for backwards-compat when reading old digests from DB */
  stories?: DigestStory[];
};
