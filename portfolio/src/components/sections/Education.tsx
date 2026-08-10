import { education } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-border bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mx-auto max-w-[800px]">
          <div className="rounded-[12px] border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <span className="inline-flex rounded-full border border-border bg-muted-faint px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {education.period}
                </span>
                <h3 className="mt-4 max-w-[22ch] text-[20px] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[22px]">
                  {education.degree}
                </h3>
                <p className="mt-2 text-[14px] font-medium text-foreground">
                  {education.university}
                </p>
                <p className="mt-1 text-[13px] text-muted">
                  {education.location}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-[36px] font-semibold leading-none tracking-tight text-foreground sm:text-[40px]">
                  {education.cgpa.split(" ")[0]}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  CGPA · 10 scale
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <ul className="grid gap-3 sm:grid-cols-3">
                {education.details.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted"
                  >
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-border-strong" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
