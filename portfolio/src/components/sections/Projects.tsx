import Image from "next/image";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Projects() {
  return (
    <section
      id="work"
      className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          title="Selected work"
          description="Projects where I owned delivery or built the product — from credential verification and LLM observability to content intelligence."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md">
      {project.image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[18px] font-semibold tracking-tight text-neutral-900">
          {project.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-neutral-500">
          {project.tagline}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
          {project.description}
        </p>
        <p className="mt-4 rounded-lg bg-neutral-50 px-4 py-3 text-sm leading-relaxed text-neutral-700">
          <span className="font-medium text-neutral-900">Result: </span>
          {project.outcome}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              View repository <span aria-hidden>→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
