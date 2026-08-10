import { identity } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="container-main py-12 sm:py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted-faint px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />
              <span className="font-mono text-[11px] font-medium tracking-wide text-muted">
                Available for 2026 internships · {identity.location}
              </span>
            </div>

            <h1 className="text-balance text-[42px] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[56px] md:text-[64px]">
              {identity.name}
            </h1>

            <p className="mt-4 max-w-[28ch] font-mono text-[12px] uppercase tracking-[0.12em] text-muted sm:text-[13px]">
              {identity.headline}
            </p>

            <div className="mt-8 max-w-[56ch]">
              <p className="text-[17px] leading-relaxed text-foreground sm:text-[19px]">
                I solve business problems with{" "}
                <span className="font-medium underline decoration-border-strong underline-offset-4">
                  technology, automation, analytics, and AI
                </span>
                . Bridging ops, supply chain, and engineering to make systems
                flow.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                B.Tech Computer Science & Technology at{" "}
                <span className="font-medium text-foreground">
                  {identity.university}
                </span>{" "}
                — focused on process design, operational excellence, and
                shipping useful tools that stick.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
              >
                View projects
              </a>
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-white px-5 text-[14px] font-medium text-foreground transition-colors hover:border-border-strong hover:bg-muted-faint"
              >
                Email me
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-white px-5 text-[14px] font-medium text-foreground transition-colors hover:border-border-strong"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  CGPA
                </p>
                <p className="mt-1 text-[15px] font-medium text-foreground">
                  8.13 / 10
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Graduation
                </p>
                <p className="mt-1 text-[15px] font-medium text-foreground">
                  2027
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Focus
                </p>
                <p className="mt-1 text-[15px] font-medium text-foreground">
                  Ops · Data · AI
                </p>
              </div>
            </div>
          </div>

          {/* Right — simple profile card */}
          <div className="lg:pl-8">
            <div className="rounded-[12px] border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-medium text-foreground">
                    {identity.name}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">
                    {identity.degree}
                    <br />
                    {identity.university}
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-foreground text-sm font-semibold text-white">
                  NR
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-[8px] bg-muted-faint px-3 py-2.5">
                  <span className="font-mono text-[11px] text-muted">Email</span>
                  <a
                    href={`mailto:${identity.email}`}
                    className="max-w-[180px] truncate text-[13px] font-medium text-foreground hover:underline"
                  >
                    {identity.email}
                  </a>
                </div>
                <div className="flex items-center justify-between rounded-[8px] bg-muted-faint px-3 py-2.5">
                  <span className="font-mono text-[11px] text-muted">
                    Location
                  </span>
                  <span className="text-[13px] font-medium text-foreground">
                    Bengaluru, India
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[8px] bg-muted-faint px-3 py-2.5">
                  <span className="font-mono text-[11px] text-muted">Open to</span>
                  <span className="text-[13px] font-medium text-foreground">
                    Internships · Full-time
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  Current focus
                </p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-muted">
                  <li className="flex gap-2">
                    <span className="text-border-strong">—</span>
                    Business & operations analysis
                  </li>
                  <li className="flex gap-2">
                    <span className="text-border-strong">—</span>
                    Supply chain & logistics coordination
                  </li>
                  <li className="flex gap-2">
                    <span className="text-border-strong">—</span>
                    AI workflow & analytics dashboards
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-center font-mono text-[11px] text-muted">
              Minimal, fast, accessible — no heavy JS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
