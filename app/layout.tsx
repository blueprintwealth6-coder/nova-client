import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nova-client-sigma.vercel.app"),

  title: {
    default: "NOVA - Watch, Upload & Share Short Videos",
    template: "%s | NOVA",
  },

  description:
    "NOVA is a modern short video platform where you can watch trending videos, upload your own content, connect with creators and share with the world.",

  keywords: [
    "NOVA",
    "Short Videos",
    "TikTok Alternative",
    "Video Sharing",
    "Trending Videos",
    "Upload Videos",
    "Social Media",
    "Reels",
  ],

  authors: [
    {
      name: "NOVA",
    },
  ],

  creator: "NOVA",
  publisher: "NOVA",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NOVA - Watch, Upload & Share Short Videos",
    description:
      "Watch trending videos, upload your own content and connect with creators on NOVA.",
    url: "https://nova-client-sigma.vercel.app",
    siteName: "NOVA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NOVA Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NOVA - Watch, Upload & Share Short Videos",
    description:
      "Watch trending videos, upload your own content and connect with creators on NOVA.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}