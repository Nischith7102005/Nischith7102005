"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Linkedin } from "lucide-react";
import { identity, about } from "@/lib/data";
import { Counter } from "@/components/shared/Counter";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-6"
            >
              Bengaluru, Karnataka, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Nischith&nbsp;R
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <h2 className="max-w-xl font-mono text-base leading-relaxed text-muted-foreground sm:text-lg">
                Business Operations <span className="text-brand">·</span> Supply Chain{" "}
                <span className="text-brand">·</span> Technology Management
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-foreground/80"
            >
              I solve business problems with technology, automation, analytics, and
              AI — improving processes, bridging teams, and driving operational
              efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-foreground/40"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="mt-14 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-brand" />
              Open to roles in business operations, supply chain & technology management
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] glass-card p-1">
              <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[1.7rem]">
                <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px]" />
                <div className="relative flex flex-col items-center gap-5 px-8 text-center">
                  <span className="grid h-28 w-28 place-items-center rounded-3xl bg-foreground font-display text-4xl text-background">
                    NR
                  </span>
                  <div>
                    <p className="font-display text-2xl text-foreground">Nischith R</p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Business · Ops · Technology
                    </p>
                  </div>
                  <div className="mt-2 w-full space-y-2 rounded-2xl border border-border p-4 text-left">
                    {about.stats.slice(0, 3).map((s) => (
                      <div key={s.label} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{s.label}</span>
                        <span className="font-mono font-medium text-foreground">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4"
        >
          {about.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-medium text-foreground">
                <Counter value={Number(s.value)} decimals={s.decimals} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
