import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { runSendForToday } from "@/lib/send-digest";

export async function GET() {
  await ensureSchema();
  const result = await runSendForToday();
  return NextResponse.json(result);
}
