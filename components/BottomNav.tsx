
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const itemStyle = (path: string) => ({
    color: pathname === path ? "#ff0050" : "#ffffff",
    textDecoration: "none",
    fontSize: "28px",
  });

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "#111",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #333",
        zIndex: 999,
      }}
    >
      <Link href="/feed" style={itemStyle("/feed")}>
        🏠
      </Link>

      <Link href="/search" style={itemStyle("/search")}>
        🔍
      </Link>

      <Link href="/upload" style={itemStyle("/upload")}>
        ➕
      </Link>

      <Link href="/profile" style={itemStyle("/profile")}>
        👤
      </Link>
    </div>
  );
}

