"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Calendar, Box } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.04}>
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#E1E0CC]/10 bg-[#111111] transition-all duration-500 hover:border-[#E1E0CC]/20 hover:bg-[#151515]",
          project.featured && "lg:col-span-1"
        )}
      >
        {/* Subtle light beam accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-60" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-32 -translate-x-1/2 bg-white/5 blur-[40px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        {/* Header */}
        <div className="p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 text-[0.7rem] font-mono text-[#E1E0CC]/60">
                0{index + 1}
              </div>
              {project.featured && (
                <span className="rounded-full border border-[#E1E0CC]/15 bg-[#E1E0CC]/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#E1E0CC]/70">
                  Featured
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 text-[#E1E0CC]/50 transition-all hover:border-[#E1E0CC]/20 hover:text-[#E1E0CC]"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.year && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.03] px-2.5 py-1 font-mono text-[0.6rem] text-[#E1E0CC]/40">
                  <Calendar className="h-3 w-3" /> {project.year}
                </span>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-[1.55rem] font-[500] leading-[0.95] tracking-[-0.03em] text-[#E1E0CC] group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#E1E0CC]/45">
              <Box className="h-3.5 w-3.5" /> {project.tagline} · {project.category}
            </p>
          </div>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-[#E1E0CC]/60">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/[0.04] px-2.5 py-1 text-[0.68rem] tracking-[0.01em] text-[#E1E0CC]/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group/btn inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/15 bg-[#E1E0CC]/5 py-1 pl-5 pr-1 text-[0.8rem] font-medium tracking-[0.01em] text-[#E1E0CC]/80 backdrop-blur transition-all hover:border-[#E1E0CC]/25 hover:bg-[#E1E0CC]/10 hover:gap-3"
            >
              {open ? "Show less" : "Process & outcome"}
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#E1E0CC] text-black transition-transform group-hover/btn:scale-110">
                <motion.span
                  animate={{ rotate: open ? 135 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid place-items-center"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 grid gap-3.5 border-t border-[#E1E0CC]/10 pt-6">
                    {project.focus.map((f, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[0.9rem] leading-relaxed text-[#E1E0CC]/55"
                      >
                        <span className="mt-[0.15em] text-[#E1E0CC]/25">↳</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-[1rem] border border-[#E1E0CC]/10 bg-[#0a0a0a] p-4">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#E1E0CC]/30">
                      Outcome
                    </p>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-[#E1E0CC]/60">
                      {project.outcome}
                    </p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[#E1E0CC]/50 hover:text-[#E1E0CC] transition-colors"
                    >
                      <Github className="h-4 w-4" /> View code on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Systems where ops meets technology"
          description="10 projects pulled from real GitHub work — from secure credential platforms and LLM observability to dead-internet archeology and ephemeral encrypted chat. Each line is shipped, documented, and hosted."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-14">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E1E0CC]/10" />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#E1E0CC]/30">
              More builds · open source
            </span>
            <div className="h-px flex-1 bg-[#E1E0CC]/10" />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={featured.length + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
