import {
  addSendLog,
  getDigestForDate,
  getHitlRequired,
  listActiveSubscriberEmails,
  markDigestSent
} from "@/lib/db";
import { sendDigestEmail } from "@/lib/email";
import { DailyDigest } from "@/lib/types";

export type SendResult =
  | { ok: true; skipped: "no_digest" | "already_sent" | "awaiting_approval" | "no_recipients" }
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

  const digestPayload = digest.content_json as DailyDigest;
  let successCount = 0;
  let failCount = 0;

  for (const email of recipients) {
    try {
      await sendDigestEmail({ to: email, digest: digestPayload });
      successCount += 1;
      await addSendLog({
        digestId: digest.id,
        email,
        status: testMode ? "sent_test" : "sent"
      });
    } catch (error) {
      failCount += 1;
      await addSendLog({
        digestId: digest.id,
        email,
        status: testMode ? "failed_test" : "failed",
        error: error instanceof Error ? error.message : "unknown"
      });
    }
  }

  if (successCount > 0 && !testMode) {
    await markDigestSent(digest.id);
  }

  return {
    ok: true,
    sent: successCount,
    failed: failCount
  };
}
