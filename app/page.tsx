"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#000000,#061b35,#0b3d91,#18b6ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          NOVA
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          The Future of Short Videos
        </h2>

        <p
          style={{
            color: "#ddd",
            fontSize: "20px",
            lineHeight: "34px",
            marginBottom: "50px",
          }}
        >
          Watch millions of amazing short videos, upload your own content,
          connect with creators and grow your audience on NOVA.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/feed">
            <button
              style={{
                padding: "18px 45px",
                borderRadius: "40px",
                border: "none",
                background: "#18b6ff",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ▶ Start Watching
            </button>
          </Link>

          <Link href="/login">
            <button
              style={{
                padding: "18px 45px",
                borderRadius: "40px",
                border: "2px solid #18b6ff",
                background: "transparent",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button
              style={{
                padding: "18px 45px",
                borderRadius: "40px",
                border: "none",
                background: "#ffffff",
                color: "#000",
                fontSize: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            marginTop: "80px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>10M+</h2>
            <p>Videos</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>1M+</h2>
            <p>Creators</p>
          </div>

          <div>
            <h2 style={{ margin: 0 }}>100+</h2>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}