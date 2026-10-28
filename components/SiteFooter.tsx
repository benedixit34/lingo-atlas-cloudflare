import Link from "next/link";
import FooterYear from "./FooterYear";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e9e3ed] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="brand-font text-2xl font-extrabold tracking-[-0.06em] text-[#191321]"
              aria-label="Lingo Atlas home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/atlas-logo.webp" alt="Lingo Atlas" className="h-28 w-auto" />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#716a7c]">
              Explore languages, discover cultures, and connect with the world.
              Make every word a step towards understanding.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="brand-font text-sm font-bold text-[#191321]">Explore</h2>

            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <Link className="footer-link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-semibold text-[#8500bd]" href="/careers" aria-current="page">
                  Careers
                </Link>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="mailto:aerecruitment@mylingoatlas.com?subject=General%20Enquiry"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="brand-font text-sm font-bold text-[#191321]">Get in touch</h2>

            <p className="mt-5 text-sm leading-7 text-[#716a7c]">
              Questions, applications, or opportunities to collaborate? We would
              love to hear from you.
            </p>

            <a
              href="mailto:info@afro-european.com"
              className="mt-3 inline-block break-all text-sm font-semibold text-[#8500bd] hover:text-[#61008f]"
            >
              info@afro-european.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#e9e3ed] pt-6 text-xs leading-6 text-[#716a7c] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <FooterYear /> Lingo Atlas. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <p>Made with ❤️ in Greenock, Scotland.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
