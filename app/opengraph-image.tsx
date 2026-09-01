import { ImageResponse } from "next/og";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

export const alt = "BankingNewsAI — Daily AI Brief for Banking Executives";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        topRight="daily brief"
        bottomRight={ogJoin(["banking ai", "general ai", "free"])}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontFamily: DISPLAY,
            fontSize: 92,
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            maxWidth: 1040
          }}
        >
          <span style={{ marginRight: "0.22em" }}>AI news that</span>
          <span style={{ color: OG_COLORS.accent, marginRight: "0.22em" }}>actually matters</span>
          <span>to banking.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontFamily: DISPLAY,
            fontSize: 26,
            fontWeight: 300,
            color: OG_COLORS.soft,
            maxWidth: 860,
            lineHeight: 1.35
          }}
        >
          Six curated stories every morning — three on banking AI, three on general AI. Free, paywall-free.
        </div>
      </OgFrame>
    ),
    { ...size, fonts }
  );
}
