import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl md:mb-12", className)}>
      <h2 className="text-[26px] font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
