"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Agar user homepage "/" par hai toh sidebar nahi dikhega
  const showSidebar = pathname !== "/"; 

  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          
          {/* Sidebar sirf feed aur baaki pages par load hoga */}
          {showSidebar && <Sidebar />}
          
          {/* Main area jahan aapki videos aur content load hota hai */}
          <main style={{ flex: 1, width: "100%" }}>
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
