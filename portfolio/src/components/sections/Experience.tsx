"use client";

import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Early-career exposure applying operations, coordination, and technology skills in a real organisation."
        />

        <div className="relative ml-4 border-l border-border pl-8 sm:ml-0 sm:pl-0">
          {experience.map((job, idx) => (
            <Reveal key={job.role} delay={idx * 0.05}>
              <article className="relative">
                <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-foreground ring-2 ring-foreground/15" />
                <div className="rounded-3xl border border-border bg-card/50 p-7 transition-all duration-300 hover:shadow-soft sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="eyebrow mb-2 block">{job.period}</span>
                      <h3 className="font-display text-2xl text-foreground">{job.role}</h3>
                      <p className="mt-1 font-medium text-foreground">{job.company}</p>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {job.location}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                        <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
