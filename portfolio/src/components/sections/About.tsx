"use client";

import { about, identity } from "@/lib/data";
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
    <section id="about" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-32">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E1E0CC]/15 to-transparent" />
      
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Technology, applied to how organisations actually run"
          description="I chose CS & Technology because it sits at the intersection of engineering and operations. My focus is operational excellence powered by the right tech."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 px-3 py-1 backdrop-blur">
                <div className="h-1 w-1 rounded-full bg-[#E1E0CC]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#E1E0CC]/60">
                  {identity.university} · {identity.graduationYear}
                </span>
              </div>

              <div className="space-y-5 text-[1.02rem] leading-relaxed text-[#E1E0CC]/65">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-balance">
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-2">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#E1E0CC]/30">
                  Currently exploring
                </p>
                <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-[#E1E0CC]/50">
                  Business ops roles where I can own process, translate between teams, and ship analytics / automations that stick. Open to supply chain, PMO, product ops, and ops analytics positions.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-[1.25rem] border border-[#E1E0CC]/10 bg-[#E1E0CC]/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#E1E0CC]/20 hover:bg-[#E1E0CC]/[0.04]">
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-mono text-[0.65rem] text-[#E1E0CC]/30">— 0{i+1}</span>
                  <h3 className="mt-4 text-[1.05rem] font-[450] tracking-[-0.02em] text-[#E1E0CC]">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#E1E0CC]/50">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-[#E1E0CC]/10 bg-[#E1E0CC]/10 md:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-[#101010] p-7 sm:p-8">
                <p className="font-[550] leading-none tracking-[-0.05em] text-[#E1E0CC]" style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}>
                  {s.value}
                  <span className="text-[#E1E0CC]/40">{s.suffix}</span>
                </p>
                <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#E1E0CC]/35">
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
