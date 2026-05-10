import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0c0c0c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 110,
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.04em",
          borderRadius: 0
        }}
      >
        B<span style={{ color: "#4f7fff" }}>n</span>
      </div>
    ),
    { ...size }
  );
}
