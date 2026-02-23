import { NextResponse } from "next/server";
import { ensureSchema } from "@/lib/db";
import { generateFintechDigest } from "@/lib/digest";

export async function GET() {
  await ensureSchema();
  const digest = await generateFintechDigest();
  return NextResponse.json({ ok: true, digest });
}
