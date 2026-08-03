"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-14 max-w-3xl md:mb-20", align === "center" && "mx-auto text-center", className)}
    >
      <div
        className={cn(
          "mb-6 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[#E1E0CC]/40">
            {index}
          </span>
        )}
        {index && <span className="h-px w-8 bg-[#E1E0CC]/15" />}
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-[#E1E0CC]/50">
          {eyebrow}
        </p>
        <span className="text-[#E1E0CC] opacity-60">*</span>
      </div>

      <h2 className="text-balance text-[clamp(2.2rem,5.5vw,4.2rem)] font-[450] leading-[0.92] tracking-[-0.05em] text-[#E1E0CC]">
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-[55ch] text-balance text-[0.95rem] leading-relaxed text-[#E1E0CC]/55 sm:text-[1.05rem]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
