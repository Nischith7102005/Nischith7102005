import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          title="Skills"
          description="The areas I work in and the tools I use day to day."
        />

        <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                {cat.label}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-700">
                {cat.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
