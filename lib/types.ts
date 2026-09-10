export type DigestStory = {
  /** The take as a headline: what the event means for a bank, not the announcement. */
  title: string;
  /** The one specific reader the take is written for, e.g. "the payments head at a mid-size bank". */
  reader?: string;
  /** One or two sentences of opinion: the tension or decision this creates for that reader's bank. */
  take?: string;
  /** Two or three sentences of facts that support the take. */
  executiveSummary: string;
  /** "Team: instruction." when a bank could open a ticket on it; empty string when there is nothing to do. */
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
