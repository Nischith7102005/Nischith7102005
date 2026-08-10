import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-[720px] md:mb-12", className)}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8A8A]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[36px] md:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-[#8A8A8A] sm:text-[15.5px]">
          {description}
        </p>
      )}
    </div>
  );
}
