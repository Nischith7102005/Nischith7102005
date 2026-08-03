"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import LightPillar from "@/components/LightPillar";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nischith-r",
      href: identity.linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/Nischith7102005",
      href: identity.github,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden border-t border-[#E1E0CC]/[0.06] bg-black py-24 md:py-32">
      {/* Light pillar at bottom for drama */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#000000"
          intensity={0.7}
          rotationSpeed={0.2}
          glowAmount={0.003}
          pillarWidth={5.5}
          pillarHeight={0.12}
          noiseIntensity={0}
          pillarRotation={32}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />

      <div className="container-x relative z-10">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's build something efficient together"
          description="If you're looking for someone who can bridge operations, technology, and strategy — I'd be glad to connect."
          align="center"
        />

        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {channels.map((c) => {
                const inner = (
                  <div className="group flex h-full flex-col gap-2 rounded-[1.25rem] border border-[#E1E0CC]/10 bg-[#111]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#E1E0CC]/20 hover:bg-[#151515]">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#E1E0CC]/30">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-medium tracking-[0.01em] text-[#E1E0CC]/70">
                      {c.value}
                    </p>
                    <ArrowUpRight className="mt-auto h-4 w-4 text-[#E1E0CC]/25 transition-all group-hover:text-[#E1E0CC]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="h-full">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <a
                href={`mailto:${identity.email}?subject=Opportunity%20for%20Nischith%20R`}
                className="group inline-flex items-center gap-2 rounded-full bg-[#E1E0CC] py-1 pl-7 pr-1 text-sm font-medium tracking-[0.01em] text-black transition-all hover:gap-4"
              >
                Send a message
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-11 sm:w-11">
                  <Mail className="h-4 w-4 text-[#E1E0CC]" />
                </span>
              </a>
              <p className="mx-auto mt-6 max-w-[38ch] text-balance text-[0.9rem] leading-relaxed text-[#E1E0CC]/35">
                Typically happy to talk about operations, supply chain, analytics, and AI roles. Response within 24h.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Big footer word */}
        <div className="mt-20 overflow-hidden border-t border-[#E1E0CC]/10 pt-10 md:mt-28">
          <p className="select-none text-center font-medium leading-[0.8] tracking-[-0.07em] text-[#E1E0CC]/[0.06]" style={{ fontSize: "clamp(3rem, 12vw, 11vw)" }}>
            NISCHITH R
          </p>
        </div>
      </div>
    </section>
  );
}
