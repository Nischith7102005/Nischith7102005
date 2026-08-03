"use client";

import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="06"
          eyebrow="Certifications"
          title="Credentials that back the skills"
          description="Focused certifications across cloud, data, analytics, AI, and operational platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.05]">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary/40">
                  {cert.issuer}
                </p>
                <h3 className="mt-3 font-medium leading-snug tracking-[-0.01em] text-primary">
                  {cert.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary/50">
                  {cert.description}
                </p>
                <span className="mt-auto pt-5 font-mono text-primary/40">*</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
