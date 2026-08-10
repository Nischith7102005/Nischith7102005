import { identity } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#111111] bg-black">
      <div className="container-main py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-medium tracking-[-0.02em] text-white">
              {identity.name} · {identity.headline.split("·")[0].trim()}
            </p>
            <p className="mt-1.5 font-mono text-[11px] tracking-wide text-[#5A5A5A]">
              © {year} {identity.name} · {identity.location} · {identity.degree} · CGPA {identity.cgpa}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={`mailto:${identity.email}`}
              className="text-[13px] font-medium tracking-[-0.01em] text-white underline decoration-[#2A2A2A] underline-offset-4 hover:decoration-white"
            >
              {identity.email} →
            </a>
            <div className="flex gap-2">
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#8A8A8A] transition-colors hover:border-[#2A2A2A] hover:text-white"
              >
                GitHub
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#8A8A8A] transition-colors hover:border-[#2A2A2A] hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="#top"
                className="rounded-full border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#8A8A8A] transition-colors hover:border-[#2A2A2A] hover:text-white"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[70ch] border-t border-[#111111] pt-6 font-mono text-[11px] leading-relaxed tracking-wide text-[#3A3A3A]">
          Built with Next.js and Tailwind. Pure monochrome, no extra
          dependencies. Type set in Inter and JetBrains Mono. Every section
          exists once — no duplication.
        </p>
      </div>
    </footer>
  );
}
