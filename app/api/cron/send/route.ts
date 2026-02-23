import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { runSendForToday } from "@/lib/send-digest";

// Allow up to 5 minutes on Vercel Pro — enough for ~15,000 subscribers via batch API
export const maxDuration = 300;

export async function GET() {
  await ensureSchema();
  const result = await runSendForToday();
  return NextResponse.json(result);
}
