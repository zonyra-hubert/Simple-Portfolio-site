import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/components/content";

// The preview card shown when the site is shared on LinkedIn, X, WhatsApp, etc.
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "assets/hubert-cutout.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#d3d3d3",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Black diagonal panel, as in the hero (SVG: next/og has no clip-path) */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <polygon points="700,0 1200,0 1200,630 580,630" fill="#0b0b0b" />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            width: "62%",
            color: "#0b0b0b",
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 600 }}>Hi, I am</div>
          <div style={{ fontSize: 76, fontWeight: 500, marginTop: 8, lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 26, color: "#555", marginTop: 18 }}>
            Frontend Engineer · Full-Stack Developer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 700,
              borderLeft: "3px solid #0b0b0b",
              borderRight: "3px solid #0b0b0b",
              padding: "6px 24px",
              alignSelf: "flex-start",
            }}
          >
            {profile.location}
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={432}
          height={540}
          style={{ position: "absolute", right: 70, bottom: 0, height: 560, width: 448 }}
        />
      </div>
    ),
    size
  );
}
