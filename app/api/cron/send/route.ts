import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
import { pingIndexNow } from "@/lib/indexnow";
import { runSendForToday } from "@/lib/send-digest";

// Allow up to 5 minutes on Vercel Pro — enough for ~15,000 subscribers via batch API
export const maxDuration = 300;

export async function GET(request: Request) {
  const denied = await authorizeOperator(request);
  if (denied) return denied;

  await ensureSchema();
  const result = await runSendForToday();

  // After a successful send, push the new issue into search-engine-visible
  // surfaces immediately by invalidating the relevant ISR caches.
  let indexNow: Awaited<ReturnType<typeof pingIndexNow>> | null = null;
  if ("sent" in result && result.sent > 0) {
    const today = new Date().toISOString().slice(0, 10);
    revalidatePath("/sitemap.xml");
    revalidatePath("/news-sitemap.xml");
    revalidatePath("/rss.xml");
    revalidatePath("/issues");
    // A new issue shifts every archive page boundary by one, so page 2+ all go
    // stale — revalidate the whole dynamic route, not just the first page.
    revalidatePath("/issues/page/[n]", "page");
    revalidatePath(`/issues/${today}`);

    // Tell IndexNow (Bing, Yandex, Seznam, Naver) about the new issue right
    // away. Deliberately after revalidation, so a crawler arriving seconds
    // later gets the fresh page rather than a stale cached one. Never allowed
    // to fail the send — the email has already gone out by this point.
    indexNow = await pingIndexNow([`/issues/${today}`, "/issues", "/"]);
    if (!indexNow.ok) {
      console.error("[cron/send] IndexNow ping failed:", indexNow.reason);
    }
  }

  return NextResponse.json({ ...result, indexNow });
}
