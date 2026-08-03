"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="Toolkit for operations & technology"
          description="Grouped across disciplines I use to improve business processes, ship automation, and turn signals into decisions."
        />

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "inline-flex items-center rounded-full border px-4 py-2 text-sm transition-all",
                active === cat.id
                  ? "border-[#E1E0CC] bg-[#E1E0CC] font-medium text-black shadow-[0_0_20px_rgba(225,224,204,0.15)]"
                  : "border-[#E1E0CC]/15 bg-[#E1E0CC]/[0.03] text-[#E1E0CC]/55 hover:border-[#E1E0CC]/25 hover:text-[#E1E0CC]/90 hover:bg-[#E1E0CC]/[0.06]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[1.5rem] border border-[#E1E0CC]/10 bg-[#111] p-7 sm:p-10"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute -top-24 right-12 h-48 w-56 bg-white/5 blur-[50px]" />

            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[1.35rem] font-[450] tracking-[-0.03em] text-[#E1E0CC]">
                {current.label}
              </h3>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#E1E0CC]/35">
                {current.skills.length} skills · {current.blurb}
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {current.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.018 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-full border border-[#E1E0CC]/10 bg-[#0a0a0a] px-4 py-2 text-[0.9rem] tracking-[0.01em] text-[#E1E0CC]/70 transition-all hover:border-[#E1E0CC]/25 hover:text-[#E1E0CC] hover:bg-[#E1E0CC]/[0.06]"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
