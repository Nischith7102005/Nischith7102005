import { education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-[#111111] bg-black py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mx-auto max-w-[860px] border border-[#1A1A1A] bg-[#0A0A0A]">
          {/* Top */}
          <div className="grid gap-8 p-6 sm:grid-cols-[1.3fr_0.7fr] sm:p-8">
            <div>
              <span className="inline-flex border border-[#1A1A1A] bg-black px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                {education.period}
              </span>

              <h3 className="mt-4 max-w-[24ch] text-[20px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[22px]">
                {education.degree}
              </h3>
              <p className="mt-2 text-[14px] font-medium tracking-[-0.01em] text-white">
                {education.university}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-[#8A8A8A]">
                {education.location}
              </p>
            </div>

            <div className="flex flex-col justify-center sm:items-end sm:text-right">
              <p className="text-[36px] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[40px]">
                {education.cgpa.split(" ")[0]}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A5A5A]">
                CGPA · 10 scale
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[#8A8A8A]">
                Graduation {education.cgpa.includes("/") ? "2027" : ""}
              </p>
            </div>
          </div>

          {/* Coursework */}
          <div className="border-t border-[#1A1A1A] bg-black px-6 py-6 sm:px-8">
            <ul className="grid gap-3 sm:grid-cols-3">
              {education.details.map((d, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-[13px] leading-[1.6] text-[#8A8A8A]"
                >
                  <span
                    className="mt-[0.6em] h-px w-3 shrink-0 bg-[#2A2A2A]"
                    aria-hidden
                  />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications — integrated, not a separate section */}
          <div className="border-t border-[#1A1A1A] bg-[#050505] px-6 py-6 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A5A5A]">
                Credentials
              </p>
              <span className="font-mono text-[11px] tracking-wide text-[#5A5A5A]">
                {certifications.length} certifications
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="border border-[#1A1A1A] bg-[#0A0A0A] px-4 py-3"
                >
                  <p className="text-[13px] font-medium leading-snug tracking-[-0.01em] text-white">
                    {c.title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-[#8A8A8A]">
                    {c.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
