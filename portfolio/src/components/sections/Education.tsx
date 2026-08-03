"use client";

import { education } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Education() {
  return (
    <section id="education" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Education" title="Academic background" />

        <Reveal>
          <div className="mx-auto max-w-4xl">
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#E1E0CC]/10 bg-[#111] p-7 transition-all duration-500 hover:border-[#E1E0CC]/20 sm:p-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex flex-wrap items-start justify-between gap-8">
                <div>
                  <span className="inline-flex rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#E1E0CC]/50">
                    {education.period}
                  </span>
                  <h3 className="mt-5 text-[1.6rem] font-[500] leading-[1.05] tracking-[-0.03em] text-[#E1E0CC] sm:text-[2rem]">
                    {education.degree}
                  </h3>
                  <p className="mt-3 text-[#E1E0CC]/65">{education.university}</p>
                  <p className="mt-1 text-sm text-[#E1E0CC]/35">{education.location}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[3rem] font-[550] leading-none tracking-[-0.05em] text-[#E1E0CC] sm:text-[3.8rem]">
                    {education.cgpa.split(" ")[0]}
                  </p>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#E1E0CC]/35">
                    CGPA · {education.cgpa.includes("/") ? education.cgpa.split("/")[1] + " scale" : ""}
                  </p>
                </div>
              </div>

              <ul className="mt-8 grid gap-4 border-t border-[#E1E0CC]/10 pt-8 sm:grid-cols-3">
                {education.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-[#E1E0CC]/50">
                    <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-[#E1E0CC]/25" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
