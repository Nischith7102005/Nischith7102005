import { identity } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-main flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">
          © {year} {identity.name} · {identity.location}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            GitHub
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${identity.email}`}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
