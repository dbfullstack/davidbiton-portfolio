import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Biton — Senior Full-Stack Engineer",
  description:
    "Senior engineer specializing in identity verification, DevOps, AI integration, and cross-platform mobile. I ship production systems for compliance and developer tooling.",
  openGraph: {
    title: "David Biton — Senior Full-Stack Engineer",
    description:
      "Identity • DevOps • AI Integration. Production systems for compliance and developer tooling.",
    type: "website",
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
