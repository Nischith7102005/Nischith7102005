"use client";

import { about } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const pillars = [
  {
    title: "Business-first",
    text: "I start from outcomes and constraints, then choose the right technology to move the needle.",
  },
  {
    title: "Process & operations",
    text: "I map workflows, remove friction, and design the systems that make teams efficient.",
  },
  {
    title: "Bridging teams",
    text: "I translate between technical and business stakeholders so everyone stays aligned.",
  },
  {
    title: "Tech as enabler",
    text: "Automation, analytics, and AI are levers I use deliberately to scale operational impact.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Technology, applied to how organisations actually run"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-primary/70 sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-balance">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-primary/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.05]">
                  <span className="font-mono text-[0.65rem] text-primary/40">*</span>
                  <h3 className="mt-3 font-medium text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/50">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 md:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-[#0d0d0d] p-6 sm:p-8">
                <p
                  className="font-medium leading-none tracking-[-0.04em] text-primary"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  {s.value}
                  {s.suffix}
                </p>
                <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary/45">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
