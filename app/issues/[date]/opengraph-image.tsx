import { ImageResponse } from "next/og";
import { ensureSchema, getDigestForDate } from "@/lib/db";
import type { DailyDigest } from "@/lib/types";
import { formatIssueDateLong } from "@/lib/seo";

// Dynamic per-issue social card. Renders the date, the issue's brief summary
// headline, and the story counts so LinkedIn / Twitter shares show the actual
// content of the issue rather than a generic site card.
export const runtime = "nodejs";
export const alt = "BankingNewsAI Daily AI Brief";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export default async function OpenGraphImage({
  params
}: {
  params: { date: string };
}) {
  const { date } = params;

  let headline = "Banking AI Brief";
  let formatted = date;
  let bankingCount = 0;
  let aiCount = 0;

  if (ISO_DATE.test(date)) {
    await ensureSchema();
    const digest = await getDigestForDate({
      digestDate: date,
      category: "fintech_banking"
    }).catch(() => null);

    if (digest) {
      const content = digest.content_json as DailyDigest | null;
      formatted = formatIssueDateLong(date);
      headline = content?.briefSummary?.trim() || formatted;
      bankingCount = (content?.bankingStories ?? content?.stories ?? []).length;
      aiCount = (content?.aiStories ?? []).length;
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c0c0c",
          display: "flex",
          flexDirection: "column",
          padding: "60px 80px",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 50
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.18em",
              fontWeight: 500,
              color: "#e8e4de",
              fontFamily: "monospace",
              textTransform: "uppercase"
            }}
          >
            Banking<span style={{ color: "#4f7fff" }}>News</span>AI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.22em",
              color: "#666",
              fontFamily: "monospace",
              textTransform: "uppercase"
            }}
          >
            Daily Brief · {formatted}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: 64,
              height: 3,
              background: "#4f7fff",
              marginBottom: 32
            }}
          />
          <div
            style={{
              fontSize: 70,
              fontWeight: 900,
              fontStyle: "italic",
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              maxWidth: 1040,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1a1a1a",
            paddingTop: 24,
            marginTop: 32
          }}
        >
          <div style={{ display: "flex", gap: 14 }}>
            {bankingCount > 0 && (
              <div
                style={{
                  display: "flex",
                  fontSize: 14,
                  fontFamily: "monospace",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6b9cff",
                  border: "1px solid #1e2e5a",
                  padding: "8px 14px",
                  background: "rgba(26,63,203,0.12)"
                }}
              >
                🏦 {bankingCount} Banking AI
              </div>
            )}
            {aiCount > 0 && (
              <div
                style={{
                  display: "flex",
                  fontSize: 14,
                  fontFamily: "monospace",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#5ecb97",
                  border: "1px solid #0e3322",
                  padding: "8px 14px",
                  background: "rgba(13,102,64,0.12)"
                }}
              >
                🤖 {aiCount} General AI
              </div>
            )}
          </div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.18em",
              color: "#555",
              fontFamily: "monospace",
              textTransform: "uppercase"
            }}
          >
            bankingnewsai.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // Cache the rendered image at the edge for a day. OG cards rarely change
      // once the issue is sent and re-rendering hits Supabase, so this avoids
      // a DB roundtrip every time a social platform re-scrapes a share.
      headers: {
        "Cache-Control": "public, immutable, max-age=86400, s-maxage=86400, stale-while-revalidate=604800"
      }
    }
  );
}
