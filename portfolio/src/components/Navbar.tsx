"use client";

import { useState, useEffect } from "react";
import { identity } from "@/lib/data";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-[12px] transition-colors ${
        scrolled
          ? "border-border bg-white/90 supports-[backdrop-filter]:bg-white/80"
          : "border-transparent bg-white/0"
      }`}
    >
      <div className="container-main flex h-[64px] items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 focus-visible:outline-offset-4"
          aria-label="Home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-foreground text-[13px] font-semibold tracking-tight text-white">
            {identity.initials}
          </span>
          <span className="hidden text-[14px] font-medium tracking-tight sm:inline">
            {identity.name}
            <span className="ml-2 font-mono text-[11px] font-normal tracking-wide text-muted">
              {identity.location.split(",")[0]}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[14px] text-muted transition-colors hover:bg-muted-faint hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${identity.email}`}
            className="hidden rounded-full border border-border bg-white px-4 py-2 text-[13px] font-medium transition-colors hover:border-border-strong hover:bg-muted-faint sm:inline-flex"
          >
            Email me
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            LinkedIn
          </a>

          <button
            type="button"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted-faint md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all ${open ? "top-[7px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[1.5px] w-4 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all ${open ? "top-[7px] -rotate-45" : "top-[14px]"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container-main flex flex-col py-4" aria-label="Mobile">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-muted-faint"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-border py-2.5 text-center text-[14px] font-medium"
              >
                GitHub
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-foreground py-2.5 text-center text-[14px] font-medium text-white"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-4 font-mono text-[11px] text-muted">
              {identity.email} · {identity.location}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
