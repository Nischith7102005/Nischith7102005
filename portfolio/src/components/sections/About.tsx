"use client";

import { Target, Workflow, Users, Cpu } from "lucide-react";
import { about, identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const pillars = [
  {
    icon: Target,
    title: "Business-first",
    text: "I start from outcomes and constraints, then choose the right technology to move the needle.",
  },
  {
    icon: Workflow,
    title: "Process & operations",
    text: "I map workflows, remove friction, and design the systems that make teams efficient.",
  },
  {
    icon: Users,
    title: "Bridging teams",
    text: "I translate between technical and business stakeholders so everyone stays aligned.",
  },
  {
    icon: Cpu,
    title: "Tech as enabler",
    text: "Automation, analytics, and AI are levers I use deliberately to scale operational impact.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="01 · About"
          title="Technology, applied to how organisations actually run"
        />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-foreground/85">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-balance">
                  {p}
                </p>
              ))}
              <div className="rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">{identity.degree}</span>
                {" · "}
                {identity.university} · Class of {identity.graduationYear} · CGPA{" "}
                {identity.cgpa}/10
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-medium text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
