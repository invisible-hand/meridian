import { ImageResponse } from "next/og";
import { REGULATORS, TRACKER_LAST_REVIEWED, formatTimelineDate } from "@/lib/regulators";
import { DOCUMENTS } from "@/lib/regulatory-documents";
import { DISPLAY, OG_COLORS, OG_SIZE, OgFrame, loadOgFonts, ogJoin } from "@/lib/og";

// One card for the whole tracker (hub, authority, document and derived pages
// inherit it). Counts and the review date come from the data files.
export const alt = "AI in Banking Regulation Tracker — BankingNewsAI";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <OgFrame
        topRight="ai regulation tracker"
        bottomRight={ogJoin([
          `${REGULATORS.length} authorities`,
          `${DOCUMENTS.length} documents`,
          `reviewed ${formatTimelineDate(TRACKER_LAST_REVIEWED).toLowerCase()}`
        ])}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: DISPLAY,
            fontSize: 84,
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
            maxWidth: 1060
          }}
        >
          <span>Who regulates AI in banking?</span>
          <span style={{ color: OG_COLORS.accent }}>Every major authority, tracked.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontFamily: DISPLAY,
            fontSize: 26,
            fontWeight: 300,
            color: OG_COLORS.soft,
            maxWidth: 900,
            lineHeight: 1.35
          }}
        >
          Every bulletin, rule, consultation and deadline — with a link to the official source.
        </div>
      </OgFrame>
    ),
    { ...size, fonts }
  );
}
