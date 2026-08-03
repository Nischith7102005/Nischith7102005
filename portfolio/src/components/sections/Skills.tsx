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
    <section id="skills" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="03 · Skills"
          title="A toolkit built for operations & technology leadership"
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
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all",
                active === cat.id
                  ? "border-transparent bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              <cat.icon className="h-4 w-4" />
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
            className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand">
                <current.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-medium text-foreground">{current.label}</h3>
                <p className="text-sm text-muted-foreground">{current.blurb}</p>
              </div>
              <span className="ml-auto hidden font-mono text-xs text-muted-foreground sm:block">
                {current.skills.length} skills
              </span>
            </div>

            <ul className="flex flex-wrap gap-2.5">
              {current.skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.02 * i, duration: 0.3 }}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-brand/40 hover:text-foreground"
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
