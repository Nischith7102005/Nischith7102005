import { identity } from "@/lib/data";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#E1E0CC]/10 bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-x pt-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-[#E1E0CC]/40">
              © {new Date().getFullYear()} — {identity.name} · Built with LightPillar / Three.js
            </p>
            <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[#E1E0CC]/25">
              {identity.location} · {identity.degree}
            </p>
          </div>
          <a
            href={`mailto:${identity.email}`}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[#E1E0CC]/15 bg-[#E1E0CC]/5 py-1 pl-5 pr-1 text-sm text-[#E1E0CC]/80 backdrop-blur transition-all hover:gap-3 hover:border-[#E1E0CC]/25 hover:bg-[#E1E0CC]/10 sm:self-auto"
          >
            {identity.email}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E1E0CC] text-black transition-transform group-hover:scale-110">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Giant wordmark */}
        <div className="pointer-events-none mt-12 select-none" aria-hidden="true">
          <p
            className="text-center font-medium leading-[0.8] tracking-[-0.07em] text-[#E1E0CC]/[0.06]"
            style={{ fontSize: "clamp(3rem, 12vw, 11rem)" }}
          >
            NISCHITH R<span className="align-super text-[0.28em] opacity-40">*</span>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-[#E1E0CC]/10">
        <div className="container-x flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#E1E0CC]/25">
            Next.js · Tailwind · Framer Motion · Three.js LightPillar · Deployed on Vercel
          </p>
          <div className="flex items-center gap-2.5">
            {[
              { icon: Linkedin, href: identity.linkedin, label: "LinkedIn" },
              { icon: Github, href: identity.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${identity.email}`, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 text-[#E1E0CC]/40 transition-colors hover:border-[#E1E0CC]/20 hover:bg-[#E1E0CC]/10 hover:text-[#E1E0CC]/80"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-[#E1E0CC]/10 bg-[#E1E0CC]/5 text-[#E1E0CC]/40 transition-colors hover:border-[#E1E0CC]/20 hover:text-[#E1E0CC]/80"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
