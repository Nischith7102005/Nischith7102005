import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Early-career exposure applying operations, coordination, and technology skills in a real organisation."
        />

        <div className="mx-auto max-w-[800px]">
          {experience.map((job) => (
            <article
              key={job.role}
              className="rounded-[12px] border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted-faint px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                    <span className="h-1 w-1 rounded-full bg-foreground" />
                    {job.period}
                  </div>
                  <h3 className="mt-4 text-[22px] font-semibold leading-tight tracking-tight text-foreground sm:text-[24px]">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[15px] font-medium text-foreground">
                    {job.company}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {job.location}
                </span>
              </div>

              <p className="mt-6 max-w-[65ch] text-[14px] leading-relaxed text-muted">
                {job.summary}
              </p>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Highlights
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {job.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
