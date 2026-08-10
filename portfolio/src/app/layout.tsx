import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nischith R — Business Operations · Supply Chain · Technology",
    template: "%s — Nischith R",
  },
  description:
    "Nischith R — Business Operations, Supply Chain, and Technology Management. B.Tech CS & Technology, Dayananda Sagar University (CGPA 8.13, 2027). Projects in secure credential systems, LLM observability, and data-driven operations.",
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
    title: "Nischith R — Business Operations · Supply Chain · Technology",
    description:
      "I solve business problems with technology, automation, analytics, and AI.",
    siteName: "Nischith R",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://nischith-r.example.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Inter + JetBrains Mono — loaded at runtime, no build-time fetch */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black font-sans text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
