import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 900,
          color: "#ffffff",
          letterSpacing: "-0.04em"
        }}
      >
        B<span style={{ color: "#4f7fff" }}>n</span>
      </div>
    ),
    { ...size }
  );
}
