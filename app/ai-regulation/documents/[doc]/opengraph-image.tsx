import { ImageResponse } from "next/og";
import { getRegulator } from "@/lib/regulators";
import { effectiveStatus, formatDate, getDocument } from "@/lib/tracker";
import { clampText } from "@/lib/seo";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

// Per-document social card: the document's short name, its full title, and
// its status. Rendered on demand and cached a day.
export const runtime = "nodejs";
export const alt = "AI regulation document — BankingNewsAI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ doc: string }> }) {
  const { doc: slug } = await params;
  const doc = getDocument(slug);
  const authority = doc ? getRegulator(doc.authority) : undefined;
  const fonts = await loadOgFonts();
  const short = doc ? clampText(doc.shortName, 70) : "AI regulation";
  return new ImageResponse(
    (
      <OgFrame
        topRight={ogJoin([authority?.name.toLowerCase() ?? "tracker", doc?.docType.toLowerCase()])}
        bottomRight={ogJoin(doc ? [effectiveStatus(doc).toLowerCase(), formatDate(doc.date).toLowerCase(), "official text linked"] : [])}
      >
        <div style={{ display: "flex", width: 56, height: 2, background: OG_COLORS.accent, marginBottom: 30 }} />
        <div style={{ display: "flex", fontFamily: DISPLAY, fontSize: short.length > 40 ? 52 : 72, fontWeight: 300, lineHeight: 1.06, letterSpacing: "-0.04em", color: OG_COLORS.ink, maxWidth: 1060 }}>
          {short}
        </div>
        <div style={{ display: "flex", marginTop: 22, fontFamily: DISPLAY, fontSize: 30, fontWeight: 300, color: OG_COLORS.accent, maxWidth: 1000, lineHeight: 1.3 }}>
          {doc ? clampText(doc.title, 120) : ""}
        </div>
        <div style={{ display: "flex", marginTop: 22, fontFamily: DISPLAY, fontSize: 24, fontWeight: 300, color: OG_COLORS.soft, maxWidth: 980, lineHeight: 1.35 }}>
          {doc ? clampText(doc.answerFirst, 170) : "What it says, who it applies to."}
        </div>
      </OgFrame>
    ),
    { ...size, fonts, headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800" } }
  );
}
