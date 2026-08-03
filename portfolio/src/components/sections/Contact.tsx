"use client";

import { ArrowUpRight, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Contact() {
  const channels = [
    {
      label: "Email",
      value: identity.email,
      href: `mailto:${identity.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nischith-r",
      href: identity.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/Nischith7102005",
      href: identity.github,
      icon: Github,
    },
    {
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: undefined,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="08 · Contact"
          title="Let's build something efficient together"
          description="If you're looking for someone who can bridge operations, technology, and strategy — I'd be glad to connect."
          align="center"
        />

        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card/50 p-1">
            <div className="rounded-[1.9rem] bg-grid-faint [background-size:36px_36px] px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid gap-4 sm:grid-cols-2">
                {channels.map((c) => {
                  const inner = (
                    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="truncate font-medium text-foreground">{c.value}</p>
                      </div>
                      {c.href && (
                        <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
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
