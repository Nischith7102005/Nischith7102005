import { identity } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="bg-white" aria-label="Introduction">
      <div className="container-main pb-20 pt-14 sm:pb-28 sm:pt-20">
        <p className="text-sm font-medium text-neutral-500">
          Hi, I&rsquo;m {identity.name} · {identity.location}
        </p>

        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl">
          Business operations and technology, backed by an engineering
          background.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
          I work where operations, data, and software meet — mapping how work
          actually flows, finding the friction, and building the processes and
          tools that remove it. I&rsquo;m a final-year B.Tech Computer Science
          student at Dayananda Sagar University.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-900 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-700"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 text-[15px] font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            Get in touch
          </a>
        </div>

        <p className="mt-10 max-w-xl text-sm text-neutral-500">
          {identity.availability}. Based in Bengaluru, comfortable working
          remotely.
        </p>
      </div>
    </section>
  );
}
