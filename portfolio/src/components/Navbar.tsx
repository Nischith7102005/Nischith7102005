"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { identity } from "@/lib/data";
import { cn } from "@/lib/utils";

const pillItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const cream = "#E1E0CC";
const creamSoft = "rgba(225, 224, 204, 0.8)";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
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
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Primary"
        className={cn(
          "fixed left-1/2 top-0 z-50 -translate-x-1/2 transition-all duration-300",
          scrolled && "pt-3"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-4 rounded-b-2xl bg-black px-4 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 sm:px-6 md:rounded-b-3xl md:px-7 lg:gap-8",
            scrolled && "rounded-2xl ring-1 ring-primary/10"
          )}
        >
          <a
            href="#top"
            className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] transition-opacity hover:opacity-70 sm:text-xs"
            style={{ color: cream }}
            aria-label="Back to top"
          >
            NR<span className="text-primary">*</span>
          </a>

          <span className="hidden h-4 w-px bg-primary/20 sm:block" aria-hidden="true" />

          <nav className="hidden items-center gap-4 lg:flex lg:gap-9" aria-label="Primary">
            {pillItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: creamSoft }}
                onMouseEnter={(e) => (e.currentTarget.style.color = cream)}
                onMouseLeave={(e) => (e.currentTarget.style.color = creamSoft)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full text-[#E1E0CC] transition-colors hover:bg-white/5 lg:hidden"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
          >
            <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay" />
            <div className="relative flex h-full flex-col justify-center px-10">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {pillItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-2 text-5xl font-medium tracking-[-0.04em] text-[#E1E0CC] transition-colors hover:text-[#E1E0CC]/60"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-primary/50"
              >
                {identity.location}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
