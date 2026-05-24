import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "David Biton — Senior Engineering Manager. AI, identity, and scale.";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#07070a",
          backgroundImage:
            "radial-gradient(ellipse 600px 400px at 80% 20%, rgba(34, 211, 238, 0.18), transparent), radial-gradient(ellipse 500px 400px at 20% 80%, rgba(167, 139, 250, 0.18), transparent)",
          color: "#f5f5f7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#a1a1aa",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#22c55e",
            }}
          />
          Available · Select Engagements
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: -2,
              backgroundImage:
                "linear-gradient(120deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            David Biton
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: "#f5f5f7",
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            Senior Engineering Manager
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              lineHeight: 1.3,
              maxWidth: 1000,
            }}
          >
            Building AI tools, identity platforms, and the teams that ship them.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            <span>davidbiton.vercel.app</span>
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 24,
              fontWeight: 600,
              backgroundImage:
                "linear-gradient(120deg, #22d3ee 0%, #a78bfa 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            db.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
