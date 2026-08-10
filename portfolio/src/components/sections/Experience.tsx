import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[#111111] bg-[#0A0A0A] py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Early-career exposure applying operations, coordination, and delivery discipline in a real organisation."
        />

        <div className="mx-auto max-w-[860px]">
          {experience.map((job) => (
            <article
              key={job.role}
              className="border border-[#1A1A1A] bg-black"
            >
              {/* Header */}
              <div className="grid gap-6 p-6 sm:grid-cols-[1.25fr_0.75fr] sm:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 border border-[#1A1A1A] bg-[#0A0A0A] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                    <span className="h-1 w-1 rounded-full bg-white" aria-hidden />
                    {job.type} · {job.period}
                  </div>

                  <h3 className="mt-4 text-[22px] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-[24px]">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] font-medium tracking-[-0.01em] text-white">
                    {job.company}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-[#8A8A8A]">
                    {job.location}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="max-w-[40ch] text-[13.5px] leading-[1.6] text-[#8A8A8A] sm:ml-auto">
                    {job.summary}
                  </p>
                </div>
              </div>

              {/* Highlights — resume bullets */}
              <div className="border-t border-[#1A1A1A] bg-[#050505] px-6 py-6 sm:px-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A5A5A]">
                  Impact & responsibilities
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {job.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13.5px] leading-[1.55] text-[#CFCFCF]"
                    >
                      <span
                        className="mt-[0.6em] h-px w-3 shrink-0 bg-[#2A2A2A]"
                        aria-hidden
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
