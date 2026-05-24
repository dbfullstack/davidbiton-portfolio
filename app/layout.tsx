import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
