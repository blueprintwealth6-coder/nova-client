
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Search,
  Upload,
  User,
  Bell,
  Settings,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const menu = [
    {
      name: "Home",
      href: "/feed",
      icon: <House size={28} />,
    },
    {
      name: "Search",
      href: "/search",
      icon: <Search size={28} />,
    },
    {
      name: "Upload",
      href: "/upload",
      icon: <Upload size={28} />,
    },
    {
      name: "Alerts",
      href: "/notifications",
      icon: <Bell size={28} />,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <User size={28} />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings size={28} />,
    },
  ];

  return (
    <aside
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "120px",
        height: "100vh",
        background: "#07111f",
        borderLeft: "1px solid #12395d",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      {menu.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              textDecoration: "none",
              color: active ? "#19c2ff" : "#ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "18px 0",
              transition: ".3s",
              background: active
                ? "rgba(25,194,255,.12)"
                : "transparent",
            }}
          >
            <div
              style={{
                filter: active
                  ? "drop-shadow(0 0 10px #19c2ff)"
                  : "none",
              }}
            >
              {item.icon}
            </div>

            <span
              style={{
                marginTop: "8px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </aside>
  );
}

