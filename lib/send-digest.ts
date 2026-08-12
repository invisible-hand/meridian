import {
  addSendLog,
  getDigestForDate,
  getHitlRequired,
  listActiveSubscriberEmails,
  markDigestSent
} from "@/lib/db";
import { batchSendDigestEmails } from "@/lib/email";
import { DailyDigest } from "@/lib/types";

export type SendResult =
  | { ok: true; skipped: "no_digest" | "empty_digest" | "already_sent" | "awaiting_approval" | "no_recipients" }
  | { ok: true; sent: number; failed: number };

export async function runSendForToday(options?: {
  forceResend?: boolean;
  bypassHitl?: boolean;
  testMode?: boolean;
}): Promise<SendResult> {
  const forceResend = Boolean(options?.forceResend);
  const bypassHitl = Boolean(options?.bypassHitl);
  const testMode = Boolean(options?.testMode);

  const digestDate = new Date().toISOString().slice(0, 10);
  const digest = await getDigestForDate({
    digestDate,
    category: "fintech_banking"
  });

  if (!digest) {
    return { ok: true, skipped: "no_digest" };
  }

  // Never email an empty digest. A quiet (or broken-pipeline) day produces a
  // digest with zero stories; subscribers should get nothing rather than filler.
  const content = digest.content_json as DailyDigest | null;
  const storyCount =
    (content?.bankingStories ?? content?.stories ?? []).length +
    (content?.aiStories ?? []).length;
  if (!content || storyCount === 0) {
    return { ok: true, skipped: "empty_digest" };
  }

  if (!forceResend && digest.status === "sent") {
    return { ok: true, skipped: "already_sent" };
  }

  const hitlRequired = await getHitlRequired();
  if (!bypassHitl && hitlRequired && digest.status !== "approved") {
    return { ok: true, skipped: "awaiting_approval" };
  }

  const recipients = await listActiveSubscriberEmails();
  if (recipients.length === 0) {
    return { ok: true, skipped: "no_recipients" };
  }

  const { sent: successCount, failed: failCount, failures } =
    await batchSendDigestEmails({ recipients, digest: content });

  // Log failures individually so they're visible in the admin monitor
  for (const { email, error } of failures) {
    await addSendLog({
      digestId: digest.id,
      email,
      status: testMode ? "failed_test" : "failed",
      error
    });
  }

  if (successCount > 0) {
    // Log a single aggregated success entry rather than N individual rows
    await addSendLog({
      digestId: digest.id,
      email: `batch:${successCount}`,
      status: testMode ? "sent_test" : "sent"
    });
    if (!testMode) {
      await markDigestSent(digest.id);
    }
  }

  return {
    ok: true,
    sent: successCount,
    failed: failCount
  };
}
