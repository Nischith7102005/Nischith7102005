import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-[#fcfcfb] py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the skills"
          description="Focused certifications across cloud, data, analytics, AI, and operational platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex h-full flex-col rounded-[12px] border border-border bg-white p-6 transition-colors hover:border-border-strong"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                {cert.issuer}
              </p>
              <h3 className="mt-2 text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                {cert.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
