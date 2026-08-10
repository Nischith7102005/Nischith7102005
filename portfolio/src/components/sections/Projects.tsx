import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="border-t border-[#111111] bg-black py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Projects — 06"
          title="Systems where ops meets technology"
          description="Shipped, documented, and hosted. Each project solves a concrete operational problem — from credential fraud and LLM waste to content intelligence."
        />

        {/* Featured — 3 */}
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Remaining */}
        {others.length > 0 && (
          <>
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1A1A1A]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A5A5A]">
                More builds
              </span>
              <div className="h-px flex-1 bg-[#1A1A1A]" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {others.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={featured.length + i}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="group flex h-full flex-col border border-[#1A1A1A] bg-[#0A0A0A] p-6 transition-colors duration-200 hover:border-[#2A2A2A] hover:bg-[#111111] sm:p-6">
      {/* Meta row */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] tracking-wide text-[#5A5A5A]">
          {String(index + 1).padStart(2, "0")} · {project.year} ·{" "}
          {project.category}
        </span>
        {project.featured && (
          <span className="rounded-full border border-[#2A2A2A] bg-[#141414] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8A8A8A]">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-4 text-[18px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
        {project.title}
      </h3>
      <p className="mt-1 text-[13px] font-medium leading-snug text-[#8A8A8A]">
        {project.tagline}
      </p>

      <p className="mt-3 text-[13.5px] leading-[1.6] text-[#CFCFCF]">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2">
        {project.focus.slice(0, 5).map((f, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[13px] leading-[1.5] text-[#8A8A8A]"
          >
            <span className="mt-[0.55em] h-px w-3 shrink-0 bg-[#2A2A2A]" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-[6px] border border-[#1A1A1A] bg-[#141414] px-3 py-2.5">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#5A5A5A]">
          Outcome
        </p>
        <p className="mt-1 text-[13px] leading-relaxed text-[#CFCFCF]">
          {project.outcome}
        </p>
      </div>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5 border-t border-[#1A1A1A] pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wide text-[#5A5A5A]"
            >
              {tag}
              <span className="px-1.5 text-[#2A2A2A]">·</span>
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[-0.01em] text-white underline decoration-[#2A2A2A] underline-offset-4 transition-colors hover:decoration-white"
          >
            View repository <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
