import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#111111] bg-black py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something efficient together"
          description="Open to Business Operations, Supply Chain & Logistics, Project Management / PMO, Product & Tech Ops, and Operations Analytics."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Left — contact actions */}
          <div>
            {/* Big email */}
            <a
              href={`mailto:${identity.email}`}
              className="group block border border-[#1A1A1A] bg-[#0A0A0A] p-6 transition-colors hover:border-[#2A2A2A] hover:bg-[#111111] sm:p-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A8A]">
                Email — fastest response
              </p>
              <p className="mt-3 break-all text-[18px] font-medium tracking-[-0.02em] text-white underline decoration-[#2A2A2A] underline-offset-4 group-hover:decoration-white sm:text-[20px]">
                {identity.email}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#8A8A8A]">
                Response within 24 hours. Based in Bengaluru, open to remote.
              </p>
            </a>

            {/* Two secondary */}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-[#1A1A1A] bg-[#0A0A0A] px-5 py-4 transition-colors hover:border-[#2A2A2A] hover:bg-[#111111]"
              >
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-[13px] font-medium tracking-[-0.01em] text-white">
                    linkedin.com/in/nischith-r
                  </span>
                </span>
                <span className="text-[#5A5A5A] transition-colors group-hover:text-white" aria-hidden>
                  →
                </span>
              </a>

              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-[#1A1A1A] bg-[#0A0A0A] px-5 py-4 transition-colors hover:border-[#2A2A2A] hover:bg-[#111111]"
              >
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                    GitHub
                  </span>
                  <span className="mt-1 block text-[13px] font-medium tracking-[-0.01em] text-white">
                    github.com/Nischith7102005
                  </span>
                </span>
                <span className="text-[#5A5A5A] transition-colors group-hover:text-white" aria-hidden>
                  →
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${identity.email}?subject=Opportunity%20for%20Nischith%20R`}
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-[14px] font-semibold tracking-[-0.01em] text-black transition-opacity hover:opacity-90"
              >
                Send an email
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#2A2A2A] bg-transparent px-6 text-[14px] font-medium tracking-[-0.01em] text-white transition-colors hover:border-[#3A3A3A] hover:bg-[#0A0A0A]"
              >
                Message on LinkedIn
              </a>
            </div>
          </div>

          {/* Right — availability card */}
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A8A]">
              Availability
            </p>
            <h3 className="mt-3 text-[16px] font-semibold tracking-[-0.02em] text-white">
              Available for internships & full-time
            </h3>
            <p className="mt-2 text-[13.5px] leading-[1.6] text-[#8A8A8A]">
              Looking for roles where I can own process, translate between
              teams, and ship analytics or automations that stick.
            </p>

            <div className="mt-6 space-y-0 divide-y divide-[#1A1A1A] border-y border-[#1A1A1A]">
              <div className="flex justify-between py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                  Location
                </span>
                <span className="text-[13px] font-medium text-white">
                  Bengaluru, India
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                  Timezone
                </span>
                <span className="text-[13px] font-medium text-white">
                  IST (UTC+5:30)
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8A8A8A]">
                  Response
                </span>
                <span className="text-[13px] font-medium text-white">
                  Within 24h
                </span>
              </div>
            </div>

            <p className="mt-6 text-[12.5px] leading-relaxed text-[#5A5A5A]">
              Prefer a quick intro? Send your role, team, and what success
              looks like — I’ll reply with how I can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
