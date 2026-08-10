import { education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading title="Education" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
            <span className="text-sm font-medium text-neutral-500">
              {education.period}
            </span>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
              {education.degree}
            </h3>
            <p className="mt-1 text-[15px] text-neutral-600">
              {education.university} · {education.location}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-neutral-700">
              <span className="font-medium text-neutral-900">CGPA: </span>
              {education.cgpa}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Certifications
            </h3>
            <ul className="mt-4 divide-y divide-neutral-100">
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="text-[15px] font-medium text-neutral-800">
                    {c.title}
                  </span>
                  <span className="shrink-0 text-sm text-neutral-500">
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
