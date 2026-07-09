import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "NOVA",
  description: "NOVA Social Media Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#000",
          color: "#fff",
          fontFamily: "Arial",
        }}
      >
        <Sidebar />

        <main
          style={{
            marginLeft: "260px",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}