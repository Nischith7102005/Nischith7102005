"use client";

import { careerInterests } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function CareerInterests() {
  return (
    <section id="interests" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Career Interests"
          title="Where I want to make an impact"
          description="The areas where I combine operations, strategy, and technology to solve organisational problems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerInterests.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
