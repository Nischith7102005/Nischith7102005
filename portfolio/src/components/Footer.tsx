import { identity } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-[#fcfcfb]">
      <div className="container-main py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[14px] font-medium tracking-tight text-foreground">
              {identity.name} · {identity.headline.split("·")[0].trim()}
            </p>
            <p className="mt-1 font-mono text-[11px] text-muted">
              © {year} {identity.name} · {identity.location} · {identity.degree}
            </p>
            <p className="mt-3 max-w-[48ch] text-[12px] leading-relaxed text-muted">
              Built with Next.js, Tailwind, and a focus on accessibility,
              performance, and clear information design. No heavy animations.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:underline"
            >
              {identity.email} →
            </a>
            <div className="flex gap-2">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="#top"
                className="rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
