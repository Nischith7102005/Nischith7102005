"use client";

import { GraduationCap, Check } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="07 · Education"
          title="Academic background"
        />

        <Reveal>
          <div className="relative ml-4 border-l border-border pl-8 sm:ml-0 sm:pl-0">
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-brand ring-2 ring-brand/30" />
              <div className="rounded-3xl border border-border bg-card/50 p-7 transition-all duration-300 hover:shadow-soft sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="eyebrow mb-2 block">{education.period}</span>
                    <h3 className="flex items-center gap-3 font-display text-2xl text-foreground">
                      <GraduationCap className="h-6 w-6 text-brand" />
                      {education.degree}
                    </h3>
                    <p className="mt-2 font-medium text-brand">{education.university}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{education.location}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-display text-3xl text-foreground">{education.cgpa}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      CGPA
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
                  {education.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                        <Check className="h-3 w-3" />
                      </span>
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
