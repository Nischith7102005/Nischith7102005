import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nischith R — Business Operations & Technology",
    template: "%s · Nischith R",
  },
  description:
    "Nischith R — business operations, supply chain, and technology management. Final-year B.Tech Computer Science student at Dayananda Sagar University, Bengaluru.",
  keywords: [
    "Nischith R",
    "Business Operations",
    "Supply Chain",
    "Technology Management",
    "Business Analysis",
    "Project Management",
    "Operations Analytics",
    "Dayananda Sagar University",
  ],
  authors: [{ name: "Nischith R" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nischith R — Business Operations & Technology",
    description:
      "Business operations and technology, with a computer science background.",
    siteName: "Nischith R",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
