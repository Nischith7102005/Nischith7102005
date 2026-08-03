"use client";

import { careerInterests } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function CareerInterests() {
  return (
    <section id="interests" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="07"
          eyebrow="Career Interests"
          title="Where I want to make an impact"
          description="The areas where I combine operations, strategy, and technology to solve organisational problems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerInterests.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="group h-full rounded-2xl border border-primary/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.05]">
                <span className="font-mono text-[0.65rem] text-primary/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-medium tracking-[-0.01em] text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/50">
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
