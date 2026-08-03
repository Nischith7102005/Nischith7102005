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
    {
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something efficient together"
          description="If you're looking for someone who can bridge operations, technology, and strategy — I'd be glad to connect."
          align="center"
        />

        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card/50 p-1">
            <div className="rounded-[1.9rem] px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {channels.map((c) => {
                  const inner = (
                    <div className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="mt-1 truncate font-medium text-foreground">{c.value}</p>
                      </div>
                      {c.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label}>{inner}</div>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <a
                  href={`mailto:${identity.email}?subject=Opportunity%20for%20Nischith%20R`}
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <Mail className="h-4 w-4" />
                  Send a message
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Typically happy to talk about operations, supply chain, analytics, and AI roles.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
