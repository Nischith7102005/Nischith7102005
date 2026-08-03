"use client";

import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the skills"
          description="Focused certifications across cloud, data, analytics, AI, and operational platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {cert.issuer}
                </p>
                <h3 className="mt-2 font-medium leading-snug text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
