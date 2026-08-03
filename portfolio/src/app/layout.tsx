import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nischithr.vercel.app"),
  title: {
    default: "Nischith R | Business Operations · Supply Chain · Technology Management",
    template: "%s | Nischith R",
  },
  description:
    "Nischith R combines business operations, supply chain, analytics, and technology to solve organizational problems and improve business processes. B.Tech Computer Science & Technology, Dayananda Sagar University.",
  keywords: [
    "Nischith R",
    "business operations",
    "supply chain",
    "operations management",
    "business analysis",
    "project management",
    "operations analytics",
    "process improvement",
    "technology management",
    "Bengaluru",
  ],
  authors: [{ name: "Nischith R" }],
  creator: "Nischith R",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nischith R | Business Operations · Supply Chain · Technology Management",
    description:
      "I solve business problems with technology, automation, analytics, and AI.",
    siteName: "Nischith R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nischith R | Business Operations · Supply Chain · Technology Management",
    description:
      "I solve business problems with technology, automation, analytics, and AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* next/font is intentionally avoided for offline-friendly builds;
            Google Fonts load at runtime and fall back to system fonts. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {/* Subtle full-page film grain, above everything, never blocks input */}
        <div
          className="page-noise pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
