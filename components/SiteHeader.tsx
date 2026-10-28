"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const OPEN_PATH = "M4 7h16M4 12h16M4 17h16";
const CLOSE_PATH = "M6 6l12 12M18 6 6 18";

interface SiteHeaderProps {
  /** Address used by the desktop "Join Our Team" button. */
  desktopJoinEmail: string;
}

export default function SiteHeader({ desktopJoinEmail }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        open &&
        !menuRef.current?.contains(target) &&
        !toggleRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onDocumentClick);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header sticky top-0 z-50 bg-white">
      <nav
        className="mx-auto flex min-h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="brand-font shrink-0 text-[23px] font-extrabold tracking-[-0.06em] text-[#191321]"
          aria-label="Lingo Atlas home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/atlas-logo.webp" alt="Lingo Atlas" className="h-16 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#716a7c] transition hover:text-[#8500bd]"
          >
            Home
          </Link>

          <Link
            href="/careers"
            aria-current="page"
            className="border-b-2 border-[#8500bd] py-2 text-sm font-bold text-[#8500bd]"
          >
            Careers
          </Link>

          <a
            href="mailto:info@afro-european.com?subject=General%20Enquiry"
            className="text-sm font-medium text-[#716a7c] transition hover:text-[#8500bd]"
          >
            Contact
          </a>
        </div>

        <a
          href={`mailto:${desktopJoinEmail}?subject=Career%20Enquiry`}
          className="hidden items-center gap-2 rounded-xl bg-[#8500bd] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#61008f] md:inline-flex"
        >
          Join Our Team
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button
          ref={toggleRef}
          id="menu-toggle"
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e9e3ed] text-[#191321] transition hover:bg-[#f8f0fc] md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <svg
            id="menu-icon"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path id="menu-path" d={open ? CLOSE_PATH : OPEN_PATH} />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`${open ? "" : "hidden "}border-t border-[#e9e3ed] bg-white px-5 pb-5 pt-3 md:hidden`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm font-medium text-[#5f566a] hover:bg-[#f8f0fc]"
          >
            Home
          </Link>

          <Link
            href="/careers"
            aria-current="page"
            onClick={closeMenu}
            className="rounded-xl bg-[#f5e8fc] px-4 py-3 text-sm font-bold text-[#8500bd]"
          >
            Careers
          </Link>
          <a
            href="mailto:info@afro-european.com?subject=General%20Enquiry"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-sm font-medium text-[#5f566a] hover:bg-[#f8f0fc]"
          >
            Contact
          </a>
          <a
            href="mailto:aerecruitment@mylingoatlas.com?subject=Career%20Enquiry"
            onClick={closeMenu}
            className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#8500bd] px-5 py-3 text-sm font-bold text-white"
          >
            Join Our Team <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
