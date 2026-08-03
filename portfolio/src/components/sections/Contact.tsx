"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nischith-r",
      href: identity.linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/Nischith7102005",
      href: identity.github,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's build something efficient together"
          description="If you're looking for someone who can bridge operations, technology, and strategy — I'd be glad to connect."
          align="center"
        />

        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {channels.map((c) => {
                const inner = (
                  <div className="group flex h-full flex-col gap-2 rounded-2xl border border-primary/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/25">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary/40">
                      {c.label}
                    </p>
                    <p className="truncate text-sm font-medium text-primary/75">
                      {c.value}
                    </p>
                    <ArrowUpRight className="mt-auto h-4 w-4 text-primary/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.label} className="h-full">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <a
                href={`mailto:${identity.email}?subject=Opportunity%20for%20Nischith%20R`}
                className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-7 pr-1 text-sm font-medium text-black transition-all hover:gap-4 sm:text-base"
              >
                Send a message
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-11 sm:w-11">
                  <Mail className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </a>
              <p className="mt-5 text-sm text-primary/45">
                Typically happy to talk about operations, supply chain, analytics, and AI roles.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
