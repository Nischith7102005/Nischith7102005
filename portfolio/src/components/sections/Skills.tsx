import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[#111111] bg-[#0A0A0A] py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Skills"
          title="Toolkit for operations & technology"
          description="Organized for how hiring managers scan — business, engineering, data, cloud, and day-to-day tools. No percentages, no bars."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="border border-[#1A1A1A] bg-black p-6 transition-colors hover:border-[#2A2A2A]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                  {cat.label}
                </h3>
                <span className="font-mono text-[11px] tracking-wide text-[#5A5A5A]">
                  {String(cat.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-1 h-px w-full bg-[#111111]" aria-hidden />

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-[#1A1A1A] bg-[#0A0A0A] px-2.5 py-1 text-[12.5px] leading-none tracking-[-0.01em] text-[#CFCFCF]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[60ch] text-center font-mono text-[11px] leading-relaxed tracking-wide text-[#5A5A5A]">
          Prefer composition over sprawl — pick the right lever for the problem,
          not every tool at once.
        </p>
      </div>
    </section>
  );
}
