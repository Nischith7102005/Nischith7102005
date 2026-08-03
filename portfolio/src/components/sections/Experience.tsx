"use client";

import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Professional experience"
          description="Early-career exposure applying operations, coordination, and technology skills in a real organisation."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={job.role} className="relative">
                <Reveal delay={idx * 0.06}>
                  <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#E1E0CC]/10 bg-[#111] p-7 transition-all duration-500 hover:border-[#E1E0CC]/20 hover:bg-[#151515] sm:p-10">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="pointer-events-none absolute -top-20 right-0 h-40 w-40 bg-white/[0.04] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#E1E0CC]/50">
                          <span className="h-1 w-1 rounded-full bg-[#E1E0CC]/60" /> {job.period}
                        </span>
                        <h3 className="mt-4 text-[1.75rem] font-[500] leading-[0.95] tracking-[-0.03em] text-[#E1E0CC] sm:text-[2rem]">
                          {job.role}
                        </h3>
                        <p className="mt-2 text-[1rem] text-[#E1E0CC]/65">{job.company}</p>
                      </div>
                      <span className="rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#E1E0CC]/40">
                        {job.location}
                      </span>
                    </div>

                    <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-[#E1E0CC]/55">
                      {job.summary}
                    </p>

                    <ul className="mt-8 grid gap-3 border-t border-[#E1E0CC]/10 pt-8 sm:grid-cols-2">
                      {job.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-[#E1E0CC]/55"
                        >
                          <span className="mt-[0.2em] h-1 w-1 shrink-0 rounded-full bg-[#E1E0CC]/30" />
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
