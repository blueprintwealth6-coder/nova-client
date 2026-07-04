"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const items = [
    {
      href: "/feed",
      icon: "🏠",
      name: "Home",
    },
    {
      href: "/search",
      icon: "🔍",
      name: "Search",
    },
    {
      href: "/upload",
      icon: "➕",
      name: "Upload",
    },
    {
      href: "/profile",
      icon: "👤",
      name: "Profile",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "110px",
        height: "100vh",
        background: "#050816",
        borderLeft: "1px solid #1b2a45",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {items.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              width: "100%",
              textDecoration: "none",
              color: active ? "#18b6ff" : "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "28px 0",
              borderBottom: "1px solid #17233b",
              transition: "0.3s",
            }}
          >
            <div
              style={{
                fontSize: "38px",
                marginBottom: "10px",
                filter: active
                  ? "drop-shadow(0 0 10px #18b6ff)"
                  : "none",
              }}
            >
              {item.icon}
            </div>

            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: active ? "#18b6ff" : "#ffffff",
              }}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}