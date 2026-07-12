import type { Metadata } from "next";
import "./globals.css"; // Ensure your global styles are imported here

export const metadata: Metadata = {
  title: "NOVA - The Future of Short Videos",
  description: "Watch millions of amazing short videos on NOVA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #070b19 0%, #0f172a 50%, #1e3a8a 100%)",
        color: "#ffffff",
        minHeight: "100vh",
        overflowX: "hidden"
      }}>
        {children}
      </body>
    </html>
  );
}
