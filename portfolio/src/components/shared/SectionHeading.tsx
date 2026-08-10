import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-[720px] md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-[36px] md:text-[42px]",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted sm:text-[16px]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
