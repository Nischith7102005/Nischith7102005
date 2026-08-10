"use client";

import { useState, useEffect } from "react";
import { identity } from "@/lib/data";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-neutral-200 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-main flex h-16 items-center justify-between">
        <a
          href="#top"
          aria-label="Home — Nischith R"
          className="text-[15px] font-semibold tracking-tight text-neutral-900"
        >
          Nischith R
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${identity.email}`}
            className="hidden h-9 items-center rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-700 sm:inline-flex"
          >
            Email me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav aria-label="Mobile" className="container-main flex flex-col py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-neutral-100 py-3 text-[15px] font-medium text-neutral-700 last:border-0 hover:text-neutral-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${identity.email}`}
              className="mt-4 mb-2 inline-flex h-10 items-center justify-center rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white"
            >
              Email me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
