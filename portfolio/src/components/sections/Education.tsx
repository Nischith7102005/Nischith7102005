"use client";

import { education } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="Education" title="Academic background" />

        <Reveal>
          <div className="relative">
            <span
              className="absolute left-[5px] top-2 h-full w-px bg-primary/15"
              aria-hidden="true"
            />
            <div className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full bg-primary ring-4 ring-primary/10" />
              <div className="rounded-3xl border border-primary/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-primary/25 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <span className="eyebrow mb-3 block">{education.period}</span>
                    <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] text-primary sm:text-3xl">
                      {education.degree}
                    </h3>
                    <p className="mt-2 text-primary/70">{education.university}</p>
                    <p className="mt-1 text-sm text-primary/45">{education.location}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-5xl font-medium leading-none tracking-[-0.04em] text-primary sm:text-6xl">
                      {education.cgpa}
                    </p>
                    <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary/45">
                      CGPA
                    </p>
                  </div>
                </div>

                <ul className="mt-8 grid gap-4 border-t border-primary/10 pt-8 sm:grid-cols-3">
                  {education.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-primary/55">
                      <span className="mt-[0.1em] font-mono text-primary/60">*</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
