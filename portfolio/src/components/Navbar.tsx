"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { identity } from "@/lib/data";
import { cn } from "@/lib/utils";

const pillItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const cream = "#E1E0CC";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        aria-label="Primary"
        className={cn(
          "fixed left-1/2 top-0 z-50 -translate-x-1/2 transition-all duration-500",
          scrolled ? "pt-3" : "pt-0"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-1 rounded-b-[1.25rem] border border-white/10 bg-black/70 px-2 py-2 shadow-[0_10px_50px_rgba(0,0,0,0.6),0_0_0_1px_rgba(225,224,204,0.06)_inset] backdrop-blur-2xl transition-all duration-500 sm:gap-4 sm:px-4 md:rounded-b-[1.5rem] md:px-5 lg:gap-6",
            scrolled &&
              "rounded-[1.75rem] border-[#E1E0CC]/15 bg-black/80 shadow-[0_12px_60px_rgba(0,0,0,0.7)]"
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2 pl-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] transition-opacity hover:opacity-70 sm:text-xs"
            style={{ color: cream }}
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#E1E0CC] font-sans text-[0.9rem] font-bold tracking-[-0.02em] text-black">
              N
            </span>
            <span className="hidden sm:inline">NR *</span>
          </a>

          <span className="ml-1 hidden h-5 w-px bg-[#E1E0CC]/10 sm:block" />

          <div className="hidden items-center gap-1 lg:flex">
            {pillItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[0.8rem] tracking-[0.01em] text-[#E1E0CC]/70 transition-all hover:bg-[#E1E0CC]/10 hover:text-[#E1E0CC]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-[#E1E0CC] px-4 py-2 text-xs font-medium text-black transition-all hover:gap-2 lg:inline-flex"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-[#E1E0CC] transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-[-10%] h-[120%] w-[30%] -translate-x-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-[80px]" />
            </div>
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" />
            <div className="relative flex h-full flex-col justify-center px-8 py-20">
              <nav className="flex flex-col" aria-label="Mobile">
                {pillItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      delay: 0.07 * i + 0.12,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-baseline justify-between border-b border-[#E1E0CC]/10 py-5 text-[13vw] font-medium leading-[0.9] tracking-[-0.05em] text-[#E1E0CC] last:border-0"
                  >
                    {item.label}
                    <ArrowUpRight className="h-6 w-6 opacity-20 transition-all group-hover:opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-12 flex flex-col gap-6"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-[#E1E0CC]/30">
                  {identity.location} · {identity.email}
                </p>
                <div className="flex gap-3">
                  <a
                    href={identity.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#E1E0CC]/15 px-5 py-2.5 text-sm text-[#E1E0CC]/80 transition-colors hover:bg-[#E1E0CC]/10 hover:text-[#E1E0CC]"
                  >
                    GitHub
                  </a>
                  <a
                    href={identity.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#E1E0CC] px-5 py-2.5 text-sm font-medium text-black"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
