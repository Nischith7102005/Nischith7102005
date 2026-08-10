import { identity } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-black"
      aria-label="Hero"
    >
      <div className="container-main">
        {/* Eyebrow */}
        <div className="pt-10 sm:pt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8A8A8A]">
            Bengaluru, India · Available for 2026 internships & full-time
          </p>
        </div>

        <div className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
          <h1 className="max-w-[12ch] text-balance text-[48px] font-[700] leading-[0.9] tracking-[-0.045em] text-white sm:text-[62px] lg:text-[74px]">
            {identity.name}
          </h1>

          <p className="mt-6 max-w-[42ch] font-mono text-[11px] uppercase tracking-[0.14em] leading-relaxed text-[#8A8A8A] sm:text-[11.5px]">
            {identity.headline}
          </p>

          <p className="mt-8 max-w-[34ch] text-[20px] font-[450] leading-[1.45] tracking-[-0.02em] text-[#EDEDED] sm:max-w-[28ch] sm:text-[22px]">
            I solve business problems with{" "}
            <span className="font-semibold text-white">
              technology, automation, analytics, and AI
            </span>
            .
          </p>

          <p className="mt-4 max-w-[48ch] text-[15.5px] leading-[1.65] text-[#8A8A8A]">
            Focused on how work actually flows — mapping processes, removing
            friction, and shipping useful systems that teams adopt.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-[44px] items-center justify-center rounded-full bg-white px-7 text-[14px] font-semibold tracking-[-0.01em] text-black transition-opacity hover:opacity-90 focus-visible:outline-offset-4"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-[44px] items-center justify-center rounded-full border border-[#2A2A2A] bg-transparent px-7 text-[14px] font-medium tracking-[-0.01em] text-white transition-colors hover:border-[#3A3A3A] hover:bg-[#0A0A0A] focus-visible:outline-offset-4"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-12 max-w-[56ch] border-t border-[#111111] pt-6 font-mono text-[11px] leading-relaxed tracking-wide text-[#5A5A5A]">
            Open to Business Analysis · Product Ops · Project Management · Strategy · Supply Chain Technology · Data
          </p>
        </div>
      </div>
    </section>
  );
}
