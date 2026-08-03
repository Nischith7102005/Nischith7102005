"use client";

import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-[#E1E0CC]/[0.06] bg-[#0a0a0a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#E1E0CC]/10 bg-[#111] p-7 transition-all duration-500 hover:border-[#E1E0CC]/20 hover:bg-[#151515]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#E1E0CC]/35">
                  {cert.issuer}
                </p>
                <h3 className="mt-3 text-[1.05rem] font-[450] leading-snug tracking-[-0.02em] text-[#E1E0CC]">
                  {cert.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[#E1E0CC]/45">
                  {cert.description}
                </p>
                <span className="mt-auto pt-6 font-mono text-[#E1E0CC]/20 group-hover:text-[#E1E0CC]/40 transition-colors">✦</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
