import type { NextConfig } from "next";

// The portfolio is a fully static single-page site, so we export it to plain
// HTML/CSS/JS that can be hosted anywhere (Firebase Hosting, Netlify, GitHub
// Pages, S3, etc.) — no server required.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
