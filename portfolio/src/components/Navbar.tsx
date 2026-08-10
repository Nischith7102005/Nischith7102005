"use client";

import { useState, useEffect } from "react";
import { identity } from "@/lib/data";

const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
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

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[#1A1A1A] bg-black/80 backdrop-blur-xl"
          : "border-transparent bg-black"
      }`}
    >
      <div className="container-main flex h-[64px] items-center justify-between">
        {/* Mark */}
        <a
          href="#top"
          aria-label="Home — Nischith R"
          className="flex items-center gap-3"
        >
          <span className="grid h-8 w-8 place-items-center rounded-[6px] border border-[#2A2A2A] bg-[#111111] text-[11px] font-semibold tracking-[0.08em] text-white">
            {identity.initials}
          </span>
          <span className="hidden text-[13.5px] font-medium tracking-[-0.02em] text-white sm:inline">
            {identity.name}
          </span>
          <span className="hidden text-[11px] tracking-wide text-[#8A8A8A] sm:inline">
            · Bengaluru
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-[13.5px] font-[450] tracking-[-0.01em] text-[#8A8A8A] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${identity.email}`}
            className="hidden h-8 items-center rounded-full bg-white px-4 text-[13px] font-medium tracking-[-0.01em] text-black transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Email
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center rounded-full border border-[#2A2A2A] bg-[#0A0A0A] px-4 text-[13px] font-medium tracking-[-0.01em] text-white transition-colors hover:border-[#3A3A3A] hover:bg-[#141414]"
          >
            LinkedIn
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#2A2A2A] bg-[#0A0A0A] text-white transition-colors hover:bg-[#141414] md:hidden"
          >
            <span className="relative block h-3.5 w-3.5" aria-hidden>
              <span
                className={`absolute left-0 block h-px w-3.5 bg-current transition-all duration-200 ${
                  open ? "top-[6px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-px w-3.5 bg-current transition-opacity duration-150 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-3.5 bg-current transition-all duration-200 ${
                  open ? "top-[6px] -rotate-45" : "top-[12px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-[#1A1A1A] bg-black md:hidden">
          <nav
            aria-label="Mobile"
            className="container-main flex flex-col py-6"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-medium tracking-[-0.01em] text-[#CFCFCF] transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-6 flex gap-3 border-t border-[#1A1A1A] pt-6">
              <a
                href={`mailto:${identity.email}`}
                className="flex-1 rounded-full bg-white py-3 text-center text-[14px] font-medium text-black"
              >
                Email me
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-[#2A2A2A] bg-[#0A0A0A] py-3 text-center text-[14px] font-medium text-white"
              >
                GitHub
              </a>
            </div>
            <p className="mt-5 font-mono text-[11px] tracking-wide text-[#8A8A8A]">
              {identity.email}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
