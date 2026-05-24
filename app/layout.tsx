import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://davidbiton.vercel.app";
const title = "David Biton — Senior Engineering Manager";
const description =
  "Senior engineering manager building AI tools, identity-verification platforms, and the teams that ship them. Available for select freelance engagements.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "David Biton" }],
  keywords: [
    "Senior Engineering Manager",
    "Engineering Manager",
    "AI integration",
    "Claude API",
    "Identity verification",
    "Microservices",
    "Mobile SDK",
    "Freelance engineer",
    "TypeScript",
    "Node.js",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "David Biton",
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
