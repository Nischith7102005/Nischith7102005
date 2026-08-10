import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-[#fcfcfb] py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Skills"
          title="Toolkit for operations & technology"
          description="Grouped across disciplines I use to improve business processes, ship automation, and turn signals into decisions."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-[12px] border border-border bg-white p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                  {cat.label}
                </h3>
                <span className="font-mono text-[11px] text-muted">
                  {cat.skills.length} skills
                </span>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">
                {cat.blurb}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted-faint px-3 py-1 text-[12px] text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
