"use client";

import { careerInterests } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function CareerInterests() {
  return (
    <section id="interests" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
              <div className="group relative h-full overflow-hidden rounded-[1.25rem] border border-[#E1E0CC]/10 bg-[#111] p-7 transition-all duration-500 hover:border-[#E1E0CC]/20 hover:bg-[#151515]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-[0.62rem] text-[#E1E0CC]/25">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-[1.05rem] font-[450] tracking-[-0.02em] text-[#E1E0CC]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[#E1E0CC]/45">
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
