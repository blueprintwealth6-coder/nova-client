"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          color: "#18b6ff",
          marginBottom: "20px",
        }}
      >
        NOVA
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        Watch • Upload • Connect
      </p>

      <Link href="/feed">
        <button
          style={{
            padding: "18px 45px",
            fontSize: "20px",
            border: "none",
            borderRadius: "50px",
            background: "#18b6ff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Enter NOVA
        </button>
      </Link>
    </div>
  );
}