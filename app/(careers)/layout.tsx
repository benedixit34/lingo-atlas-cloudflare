import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Careers | Lingo Atlas",
  description:
    "Explore careers at Lingo Atlas. Join our mission to connect people through language, culture, and meaningful learning experiences.",
  openGraph: {
    title: "Careers | Lingo Atlas",
    description:
      "Help people connect through languages and cultures. Explore opportunities at Lingo Atlas.",
    type: "website",
  },
  icons: { icon: [{ url: "/assets/favicon_atlas.ico", type: "image/x-icon" }] },
};

export const viewport: Viewport = {
  themeColor: "#7200a8",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
