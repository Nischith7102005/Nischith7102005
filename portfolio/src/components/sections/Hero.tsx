"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { identity } from "@/lib/data";
import LightPillar from "@/components/LightPillar";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-black"
    >
      {/* LightPillar Background - The core design element */}
      <div className="absolute inset-0">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#000000"
          intensity={0.9}
          rotationSpeed={0.3}
          glowAmount={0.004}
          pillarWidth={7.6}
          pillarHeight={0.1}
          noiseIntensity={0}
          pillarRotation={58}
          interactive={false}
          mixBlendMode="luminosity"
          quality="high"
        />
      </div>

      {/* Secondary subtle pillar for depth (left side) */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <LightPillar
          topColor="#E1E0CC"
          bottomColor="#000000"
          intensity={0.4}
          rotationSpeed={0.15}
          glowAmount={0.002}
          pillarWidth={3.5}
          pillarHeight={0.08}
          noiseIntensity={0}
          pillarRotation={-28}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </div>

      {/* Gradient overlays for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black to-transparent" />

      {/* Noise texture */}
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-28 sm:px-8 md:px-10 md:pb-12">
        {/* Top meta bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/15 bg-[#E1E0CC]/5 px-3 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E1E0CC]" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#E1E0CC]/80">
                Available for 2026 Internships
              </span>
            </span>
            <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#E1E0CC]/40 sm:inline">
              {identity.location} ·
            </span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {[
              { icon: Github, href: identity.github, label: "GitHub" },
              { icon: Linkedin, href: identity.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${identity.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 text-[#E1E0CC]/60 backdrop-blur-md transition-all hover:border-[#E1E0CC]/20 hover:bg-[#E1E0CC]/10 hover:text-[#E1E0CC]"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Main headline area */}
        <div className="mt-auto grid grid-cols-12 items-end gap-6 lg:gap-8">
          {/* Name - huge */}
          <div className="col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h1
                className="font-medium leading-[0.82] tracking-[-0.07em]"
                style={{
                  color: "#E1E0CC",
                  fontSize: "clamp(3.5rem, 13vw, 13.5vw)",
                }}
              >
                <span className="block">Nischith</span>
                <span className="block -mt-[0.04em] flex items-start gap-[0.05em]">
                  R
                  <span className="mt-[0.12em] text-[0.19em] leading-none opacity-60">
                    *
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Mobile secondary info */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[42ch] text-balance text-sm leading-relaxed text-[#E1E0CC]/60 sm:hidden"
            >
              B.Tech CS & Technology @ DSU · I build ops systems where business,
              analytics, and AI meet.
            </motion.p>
          </div>

          {/* Right copy + CTA */}
          <div className="col-span-12 flex flex-col gap-7 lg:col-span-4 lg:pb-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[#E1E0CC]/40">
                Business Operations · Supply Chain · Tech Mgmt
              </p>
              <p
                className="text-balance text-base leading-[1.35] text-[#E1E0CC]/75 md:text-[1.05rem]"
                style={{ fontWeight: 400 }}
              >
                Hi, I&apos;m Nischith — a Computer Science & Technology student
                at Dayananda Sagar University. I solve{" "}
                <span className="text-[#E1E0CC]">business problems</span> with
                technology, automation, analytics, and AI. I bridge ops,
                supply chain, and engineering to make systems flow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#E1E0CC] py-1 pl-6 pr-1 text-sm font-medium text-black transition-all hover:gap-3"
              >
                View Projects
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4 text-[#E1E0CC]" />
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/20 bg-[#E1E0CC]/5 py-1 pl-6 pr-1 text-sm font-medium text-[#E1E0CC] backdrop-blur-md transition-all hover:border-[#E1E0CC]/30 hover:bg-[#E1E0CC]/10 hover:gap-3"
              >
                Let&apos;s connect
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1E0CC] transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 text-black" />
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="hidden items-center gap-6 border-t border-[#E1E0CC]/10 pt-6 sm:flex"
            >
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#E1E0CC]/30">
                  CGPA
                </p>
                <p className="mt-1 text-lg font-medium tracking-tight text-[#E1E0CC]">
                  8.13
                  <span className="text-[#E1E0CC]/40">/10</span>
                </p>
              </div>
              <div className="h-8 w-px bg-[#E1E0CC]/10" />
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#E1E0CC]/30">
                  Projects
                </p>
                <p className="mt-1 text-lg font-medium tracking-tight text-[#E1E0CC]">
                  12+
                </p>
              </div>
              <div className="h-8 w-px bg-[#E1E0CC]/10" />
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#E1E0CC]/30">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-[#E1E0CC]/70">
                  Ops · AI · Data
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
