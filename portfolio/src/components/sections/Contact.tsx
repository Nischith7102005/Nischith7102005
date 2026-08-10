import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
      hint: "Response within 24h",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nischith-r",
      href: identity.linkedin,
      hint: "Professional profile",
    },
    {
      label: "GitHub",
      value: "github.com/Nischith7102005",
      href: identity.github,
      hint: "Code & projects",
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-border bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something efficient together"
          description="If you're looking for someone who can bridge operations, technology, and strategy — I'd be glad to connect."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="grid gap-3 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-[10px] border border-border bg-card p-5 transition-colors hover:border-border-strong"
                >
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    {c.label}
                  </p>
                  <p className="mt-2 truncate text-[13px] font-medium text-foreground">
                    {c.value}
                  </p>
                  <p className="mt-1 text-[12px] text-muted">{c.hint}</p>
                  <p className="mt-4 text-[12px] font-medium text-foreground opacity-60 transition-opacity group-hover:opacity-100">
                    Open →
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-[12px] border border-border bg-[#fcfcfb] p-6">
              <p className="text-[14px] font-medium text-foreground">
                Currently available
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Open to internships and full-time roles in Business Operations,
                Supply Chain & Logistics, Project Management / PMO, Product &
                Technology Operations, and Operations Analytics. Based in
                Bengaluru, open to remote.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${identity.email}?subject=Opportunity%20for%20Nischith%20R`}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  Send an email
                </a>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-white px-5 text-[14px] font-medium text-foreground transition-colors hover:border-border-strong"
                >
                  Message on LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[12px] border border-border bg-card p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
              Quick intro
            </p>
            <h3 className="mt-3 text-[18px] font-semibold tracking-tight text-foreground">
              Nischith R — Operations · Supply Chain · Tech
            </h3>
            <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-muted">
              <p>
                B.Tech Computer Science & Technology student at Dayananda Sagar
                University (CGPA 8.13, graduation 2027).
              </p>
              <p>
                I focus on process mapping, workflow optimization, and building
                analytics / automations that remove friction between teams.
              </p>
              <p>
                Preference for roles where I can own documentation, translate
                requirements, and keep delivery predictable.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-[8px] bg-muted-faint px-3 py-3">
                <p className="font-mono text-[11px] text-muted">Location</p>
                <p className="mt-1 text-[13px] font-medium text-foreground">
                  Bengaluru, India
                </p>
              </div>
              <div className="rounded-[8px] bg-muted-faint px-3 py-3">
                <p className="font-mono text-[11px] text-muted">Timezone</p>
                <p className="mt-1 text-[13px] font-medium text-foreground">
                  IST (UTC+5:30)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
