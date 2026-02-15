import { ImageResponse } from "next/og";

export const alt = "Cursor Community Cebu — Where Cebu Builds with Cursor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              background: "rgba(31, 31, 35, 1)",
              borderRadius: 8,
              border: "1px solid rgba(39, 39, 42, 1)",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#f97316",
              }}
            />
            <span
              style={{
                fontSize: 18,
                color: "#a1a1aa",
                fontWeight: 500,
              }}
            >
              Officially supported by Cursor
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#fafafa",
                lineHeight: 1.1,
              }}
            >
              Where Cebu Builds
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#f97316",
                lineHeight: 1.1,
              }}
            >
              with Cursor
            </span>
          </div>
          <p
            style={{
              fontSize: 24,
              color: "#a1a1aa",
              maxWidth: 600,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Join workshops, hackathons, meetups, and Cafe Cursor events in Cebu,
            Philippines.
          </p>
        </div>
      </div>
    ),
    size,
  );
}
