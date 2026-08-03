"use client";

import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="06 · Certifications"
          title="Credentials that back the skills"
          description="Focused certifications across cloud, data, analytics, AI, and operational platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110">
                    <cert.icon className="h-5 w-5" />
                  </span>
                  <BadgeCheck className="h-5 w-5 text-muted-foreground/50 transition-colors group-hover:text-brand" />
                </div>
                <h3 className="mt-5 font-medium leading-snug text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-brand">
                  {cert.issuer}
                </p>
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
