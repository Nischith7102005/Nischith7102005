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
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="A toolkit built for operations & technology"
          description="Grouped across the disciplines I use to improve business processes and drive efficiency."
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
                  ? "border-transparent bg-primary font-medium text-black"
                  : "border-primary/20 text-primary/55 hover:border-primary/40 hover:text-primary"
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
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-primary/10 bg-white/[0.03] p-6 sm:p-10"
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-xl font-medium tracking-[-0.02em] text-primary">
                {current.label}
              </h3>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary/40">
                {current.skills.length} skills
              </span>
            </div>
            <p className="mb-7 text-sm text-primary/50">{current.blurb}</p>

            <ul className="flex flex-wrap gap-2.5">
              {current.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.02 * i, duration: 0.3 }}
                  className="rounded-full border border-primary/15 bg-black/40 px-4 py-2 text-sm text-primary/70 transition-colors hover:border-primary/40 hover:text-primary"
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
