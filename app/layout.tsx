import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "../components/Sidebar";
export const metadata: Metadata = {
  title: "NOVA",
  description: "NOVA Social Media Platform",
  verification: {
    google: "ZGQmQY8h6bc2hMmkGc8qT1bbWc8PyM_OFlJMrlLazhI",
  },
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