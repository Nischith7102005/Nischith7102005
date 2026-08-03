"use client";

import { careerInterests } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function CareerInterests() {
  return (
    <section id="interests" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="02 · Career Interests"
          title="Where I want to make an impact"
          description="The areas where I combine operations, strategy, and technology to solve organisational problems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerInterests.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100 sm:opacity-0" />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-medium text-foreground">{item.title}</h3>
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
