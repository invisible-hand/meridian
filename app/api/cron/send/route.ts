import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { runSendForToday } from "@/lib/send-digest";

// Allow up to 5 minutes on Vercel Pro — enough for ~15,000 subscribers via batch API
export const maxDuration = 300;

export async function GET() {
  await ensureSchema();
  const result = await runSendForToday();

  // Immediately update sitemap.xml so today's issue appears in search engines
  if ("sent" in result && result.sent > 0) {
    revalidatePath("/sitemap.xml");
    revalidatePath("/issues");
  }

  return NextResponse.json(result);
}
