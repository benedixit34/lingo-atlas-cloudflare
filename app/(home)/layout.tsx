import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lingo Atlas | Coming Soon",
  description:
    "Lingo Atlas is coming soon. Join our newsletter to be among the first to know when we launch.",
  icons: { icon: [{ url: "/assets/favicon_atlas.ico", type: "image/x-icon" }] },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
