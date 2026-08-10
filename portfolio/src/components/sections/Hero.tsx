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

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-neutral-600">
          I work where operations, data, and software meet — mapping how work
          actually flows, finding the friction, and building the processes and
          tools that remove it.
        </p>
      </div>
    </section>
  );
}
