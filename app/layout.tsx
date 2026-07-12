"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation"; // Yeh check karega ki user kis page par hai
import "./globals.css";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Agar user main homepage "/" par hai, toh sidebar nahi dikhega
  const showSidebar = pathname !== "/"; 

  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: "Arial" }}>
        <div style={{ display: "flex" }}>
          
          {/* Agar showSidebar true hoga (matlab homepage ke ilawa koi page), tabhi sidebar dikhega */}
          {showSidebar && <Sidebar />}
          
          {/* Main Content Area */}
          <main style={{ flex: 1 }}>
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
