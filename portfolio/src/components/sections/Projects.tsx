"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const images: Record<string, string> = {
  CertiSure: "/images/certisure.jpg",
  "Monitr-AI": "/images/monitr-ai.jpg",
  Psymap: "/images/psymap.jpg",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const img = images[project.title];

  return (
    <Reveal delay={index * 0.06}>
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white/[0.03] transition-all duration-300 hover:border-primary/25",
          open && "border-primary/25"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={img}
            alt={`${project.title} project visual`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-7 sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-2xl font-medium tracking-[-0.03em] text-primary">
              {project.title}
            </h3>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary/40">
              0{index + 1}
            </span>
          </div>
          <p className="mt-1 text-sm text-primary/50">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-primary/60">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/15 px-3 py-1 text-[0.7rem] text-primary/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-7">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group/btn inline-flex items-center gap-2 self-start rounded-full border border-primary/20 py-1 pl-5 pr-1 text-xs font-medium text-primary transition-all hover:gap-3 hover:border-primary/50 sm:text-sm"
            >
              {open ? "Show less" : "What I did"}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-black transition-transform group-hover/btn:scale-110 sm:h-9 sm:w-9">
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid place-items-center"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 grid gap-3 border-t border-primary/10 pt-6">
                    {project.focus.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-primary/60">
                        <span className="mt-[0.1em] font-mono text-primary/50">*</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-2xl border border-primary/10 bg-black/40 p-4 text-sm leading-relaxed text-primary/55">
                    <span className="font-medium text-primary">Outcome — </span>
                    {project.outcome}
                  </p>
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
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          description="Projects where I combined operations thinking with technology to deliver structure, insight, and decision support."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
