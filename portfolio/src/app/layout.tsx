import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nischith R | Business Operations · Supply Chain · Technology Management",
    template: "%s | Nischith R",
  },
  description:
    "Nischith R combines business operations, supply chain, analytics, and technology to solve organizational problems. B.Tech CS & Technology, Dayananda Sagar University.",
  keywords: [
    "Nischith R",
    "business operations",
    "supply chain",
    "operations management",
    "business analysis",
    "project management",
    "operations analytics",
    "portfolio",
  ],
  authors: [{ name: "Nischith R" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nischith R | Business Operations · Supply Chain · Technology Management",
    description:
      "I solve business problems with technology, automation, analytics, and AI.",
    siteName: "Nischith R Portfolio",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
