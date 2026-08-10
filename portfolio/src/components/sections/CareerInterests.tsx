import { careerInterests } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CareerInterests() {
  return (
    <section
      id="interests"
      className="border-t border-border bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Career Interests"
          title="Where I want to make an impact"
          description="The areas where I combine operations, strategy, and technology to solve organisational problems."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careerInterests.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-[12px] border border-border bg-card p-6 transition-colors hover:border-border-strong"
            >
              <span className="font-mono text-[11px] text-muted">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[15px] font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
