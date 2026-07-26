import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { authorizeOperator } from "@/lib/api-auth";
import { ensureSchema } from "@/lib/db";
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
  }

  return NextResponse.json(result);
}
