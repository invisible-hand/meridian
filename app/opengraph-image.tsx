import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BankingNewsAI — Daily AI Brief for Banking Executives";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f0ede8",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 60
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.18em",
              fontWeight: 500,
              color: "#111111",
              fontFamily: "monospace",
              textTransform: "uppercase"
            }}
          >
            Banking<span style={{ color: "#1a3fcb" }}>News</span>AI
          </div>
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.22em",
              color: "#9a9a9a",
              fontFamily: "monospace",
              textTransform: "uppercase"
            }}
          >
            Daily Brief
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 86,
              fontWeight: 900,
              fontStyle: "italic",
              color: "#111111",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 28
            }}
          >
            <span>AI news that&nbsp;</span>
            <span style={{ color: "#1a3fcb", fontStyle: "normal" }}>actually matters</span>
            <span>&nbsp;to banking.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#5a5a5a",
              lineHeight: 1.4,
              fontFamily: "Helvetica, sans-serif",
              maxWidth: 900
            }}
          >
            6 curated stories every morning — 3 banking AI, 3 general AI. Free, paywall-free.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #c8c3bb",
            paddingTop: 24,
            marginTop: 40
          }}
        >
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.18em",
              color: "#9a9a9a",
              fontFamily: "monospace",
              textTransform: "uppercase"
            }}
          >
            bankingnewsai.com
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              fontSize: 13,
              fontFamily: "monospace",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9a9a9a"
            }}
          >
            <span>Banking AI</span>
            <span>·</span>
            <span>General AI</span>
            <span>·</span>
            <span>Free Forever</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
