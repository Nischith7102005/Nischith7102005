import { about, identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

const PILLARS = [
  {
    title: "Business-first",
    text: "I start from outcomes and constraints, then choose the right technology to move the needle.",
  },
  {
    title: "Process & operations",
    text: "I map workflows, remove friction, and design the systems that make teams efficient.",
  },
  {
    title: "Bridging teams",
    text: "I translate between technical and business stakeholders so everyone stays aligned.",
  },
  {
    title: "Tech as enabler",
    text: "Automation, analytics, and AI are levers I use deliberately to scale operational impact.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="About"
          title="Technology, applied to how organisations actually run"
          description="I chose CS & Technology because it sits at the intersection of engineering and operations. My focus is operational excellence powered by the right tech."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-border bg-muted-faint px-3 py-1 font-mono text-[11px] text-muted">
              {identity.university} · {identity.graduationYear} · Bengaluru
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-balance text-foreground/85">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-[10px] border border-border bg-muted-faint p-5">
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                Currently exploring
              </p>
              <p className="mt-2 max-w-[48ch] text-[14px] leading-relaxed text-foreground">
                Business ops roles where I can own process, translate between
                teams, and ship analytics / automations that stick. Open to
                supply chain, PMO, product ops, and ops analytics positions.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {PILLARS.map((p, idx) => (
                <div
                  key={p.title}
                  className="rounded-[10px] border border-border bg-card p-5"
                >
                  <p className="font-mono text-[11px] text-muted">
                    0{idx + 1}
                  </p>
                  <h3 className="mt-3 text-[14px] font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-border bg-border">
              {about.stats.map((s) => (
                <div key={s.label} className="bg-white p-5">
                  <p className="text-[28px] font-semibold leading-none tracking-tight text-foreground">
                    {s.value}
                    <span className="font-normal text-muted">{s.suffix}</span>
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wide text-muted">
                    {s.label}
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
