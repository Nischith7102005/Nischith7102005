import { identity } from "@/lib/data";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10">
      <div className="container-x pt-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">© {new Date().getFullYear()} — {identity.name}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-primary/40">
              {identity.location}
            </p>
          </div>
          <a
            href={`mailto:${identity.email}`}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-primary/20 py-1 pl-5 pr-1 text-sm text-primary transition-all hover:gap-3 hover:border-primary/50 sm:self-auto"
          >
            {identity.email}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black transition-transform group-hover:scale-110">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Giant wordmark */}
        <div className="pointer-events-none mt-14 select-none" aria-hidden="true">
          <p
            className="text-center font-medium leading-[0.8] tracking-[-0.06em] text-primary/95"
            style={{ fontSize: "clamp(4rem, 15.5vw, 15rem)" }}
          >
            NISCHITH<span className="align-super text-[0.3em]">*</span>
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-primary/10">
        <div className="container-x flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">
          <p className="text-xs text-primary/40">
            Built with React, Next.js & Tailwind. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/15 text-primary/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/15 text-primary/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${identity.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/15 text-primary/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/15 text-primary/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
