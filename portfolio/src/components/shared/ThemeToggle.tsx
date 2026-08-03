"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dark = mounted && resolvedTheme === "dark";

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:border-foreground/40"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="grid place-items-center"
      >
        {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
      </motion.span>
    </button>
  );
}
