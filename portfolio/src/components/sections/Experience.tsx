"use client";

import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Professional experience"
          description="Early-career exposure applying operations, coordination, and technology skills in a real organisation."
        />

        <div className="relative">
          <span
            className="absolute left-[5px] top-2 h-full w-px bg-primary/15"
            aria-hidden="true"
          />
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div key={job.role} className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-7 h-[11px] w-[11px] rounded-full bg-primary ring-4 ring-primary/10" />
                <Reveal delay={idx * 0.05}>
                  <article className="rounded-3xl border border-primary/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-primary/25 sm:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="eyebrow mb-2 block">{job.period}</span>
                        <h3 className="text-2xl font-medium tracking-[-0.03em] text-primary sm:text-3xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-primary/70">{job.company}</p>
                      </div>
                      <span className="rounded-full border border-primary/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary/50">
                        {job.location}
                      </span>
                    </div>

                    <p className="mt-5 max-w-2xl leading-relaxed text-primary/60">
                      {job.summary}
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-primary/70">
                          <span className="mt-[0.1em] font-mono text-primary/60">*</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
