import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site -> emit plain HTML/CSS/JS to ./out for Cloudflare.
  // (Old *.html URLs are redirected to the clean URLs by Cloudflare's
  // built-in "pretty URLs" handling; no Next.js redirects needed.)
  output: "export",
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
