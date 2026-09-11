"use server";

import { redirect } from "next/navigation";
import { addOrActivateSubscriber, ensureSchema } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/welcome-email";

/**
 * The one subscribe action behind every form on the site (homepage, the
 * bottom of every tracker / bank / agents page, the thank-you page).
 *
 * `src` is the path of the page the form was on. It rides along to
 * /subscribed as a query parameter so the thank-you page can report which
 * page converted (GA4 event `subscribe` with `source`), which is the only
 * way to learn which content actually earns readers.
 *
 * The welcome email goes only to addresses that are new or were unsubscribed;
 * an active subscriber re-submitting gets nothing. A failure to send never
 * fails the signup — the row is already saved.
 */
export async function subscribeAction(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const rawSrc = String(formData.get("src") || "/");
  const src = /^\/[A-Za-z0-9\-_/.]*$/.test(rawSrc) ? rawSrc : "/";
  if (!email || !email.includes("@") || email.length > 254) return;

  await ensureSchema();
  const result = await addOrActivateSubscriber(email);

  if (result.status === "new" || result.status === "reactivated") {
    try {
      await sendWelcomeEmail(email);
    } catch (e) {
      console.error("welcome email failed", email, e);
    }
  }

  redirect(`/subscribed?src=${encodeURIComponent(src)}&s=${result.status}`);
}
