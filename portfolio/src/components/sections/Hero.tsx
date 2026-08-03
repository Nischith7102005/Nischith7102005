"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { WordsPullUp } from "@/components/ui/prisma-hero";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

// Unsplash fallback + poster so the hero never renders empty.
const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2400&auto=format&fit=crop";

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="top" className="h-[100svh] w-full min-h-[560px]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video (falls back to image if it can't load) */}
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_FALLBACK}
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO}
          />
        ) : (
          <Image
            src={HERO_FALLBACK}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[19vw] sm:text-[17vw] md:text-[15vw] lg:text-[13vw] xl:text-[12.5vw] 2xl:text-[13vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Nischith" showAsterisk />
              </h1>
            </div>
            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs text-primary/70 sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Hi, I&apos;m Nischith — a Computer Science &amp; Technology student
                at Dayananda Sagar University. I solve business problems with
                technology, automation, analytics, and AI.
              </motion.p>
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              >
                Let&apos;s connect
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
