import { identity } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-200 bg-neutral-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-main">
        <SectionHeading
          title="Get in touch"
          description="For project discussions, collaboration, or a conversation about operations, data, and software, feel free to reach out."
        />

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${identity.email}`}
            className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-900 px-6 text-[15px] font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Email me
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 text-[15px] font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
          >
            LinkedIn
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 text-[15px] font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
          >
            GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          {identity.email}
        </p>
      </div>
    </section>
  );
}
