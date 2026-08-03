"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
          "group relative overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft",
          open && "border-brand/30"
        )}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={img}
            alt={`${project.title} project visual`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 font-mono text-xs backdrop-blur-md">
            <span className="text-brand">0{index + 1}</span>
          </div>
        </div>

        <div className="p-7">
          <h3 className="font-display text-2xl text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-brand">{project.tagline}</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-brand"
          >
            {open ? "Show less" : "What I did"}
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-5 grid gap-2.5 border-t border-border pt-5 sm:grid-cols-2">
                  {project.focus.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Outcome: </span>
                  {project.outcome}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="05 · Projects"
          title="Selected work"
          description="Projects where I combined operations thinking with technology to deliver structure, insight, and decision support."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
