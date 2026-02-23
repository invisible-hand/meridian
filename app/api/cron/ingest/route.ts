import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { runIngestion } from "@/lib/ingest";

export async function GET() {
  await ensureSchema();
  const stats = await runIngestion();
  return NextResponse.json({ ok: true, stats });
}
