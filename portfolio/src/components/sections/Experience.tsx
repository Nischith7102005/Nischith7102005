import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          title="Experience"
          description="An early internship doing the kind of work I want to keep doing — coordination, documentation, and making teams more efficient."
        />

        <div className="mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
          {experience.map((job) => (
            <article key={job.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-[15px] text-neutral-600">
                    {job.company}
                  </p>
                </div>
                <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-relaxed text-neutral-700"
                  >
                    <span
                      className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                      aria-hidden
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
