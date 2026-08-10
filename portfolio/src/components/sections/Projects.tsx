"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group flex h-full flex-col rounded-[12px] border border-border bg-card p-6 transition-colors duration-200 hover:border-border-strong">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-border bg-muted-faint font-mono text-[11px] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.featured && (
            <span className="rounded-full bg-foreground px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
              Featured
            </span>
          )}
          <span className="font-mono text-[11px] text-muted">
            {project.year} · {project.category}
          </span>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-3 py-1 text-[12px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            GitHub →
          </a>
        )}
      </div>

      <h3 className="mt-5 text-[20px] font-semibold leading-[1.1] tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-1 text-[13px] font-medium text-muted">
        {project.tagline}
      </p>

      <p className="mt-4 line-clamp-3 text-[14px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-muted-faint px-2.5 py-1 text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground transition-colors hover:text-muted"
        >
          {open ? "Hide details" : "Process & outcome"}
          <span
            className={`inline-block transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden
          >
            ↓
          </span>
        </button>

        {open && (
          <div className="mt-4 animate-[fadeIn_200ms_ease]">
            <ul className="space-y-2.5">
              {project.focus.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[13px] leading-relaxed text-muted"
                >
                  <span className="mt-[2px] text-border-strong">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-[8px] border border-border bg-muted-faint p-3">
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Outcome
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-foreground">
                {project.outcome}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="bg-[#fcfcfb] py-16 sm:py-20 md:py-24 border-t border-border"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Projects"
          title="Systems where ops meets technology"
          description={`6 projects remaining after filtering — from secure credential platforms and LLM observability to content intelligence and LaTeX tooling. Each line is shipped, documented, and hosted.`}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                More builds · open source
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {others.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={featured.length + i}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
