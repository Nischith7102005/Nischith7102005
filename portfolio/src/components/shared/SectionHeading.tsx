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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "eyebrow mb-5 flex items-center",
          align === "center" && "justify-center"
        )}
      >
        {index && <span className="text-primary">{index}&nbsp;&nbsp;·&nbsp;&nbsp;</span>}
        {eyebrow}
        <span className="ml-3 text-primary">*</span>
      </p>
      <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.045em] text-primary">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed text-primary/60 sm:text-lg",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
