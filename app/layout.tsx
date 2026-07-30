import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/motion/SiteChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://davidbiton.vercel.app";
const title = "DB Studio — Engineering, AI, and load-bearing software";
const description =
  "DB Studio is a software studio founded by David Biton. We build AI tools, backend platforms, and the engineering leadership behind them. Available for select engagements.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "David Biton" }],
  keywords: [
    "DB Studio",
    "Software studio",
    "AI integration",
    "Claude API",
    "Engineering leadership",
    "Fractional EM",
    "Backend architecture",
    "Mobile SDK",
    "TypeScript",
    "Node.js",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "DB Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[1000] -translate-y-24 rounded-lg bg-accent px-4 py-2 font-mono text-sm font-semibold text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
