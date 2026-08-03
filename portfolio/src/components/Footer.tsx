import { identity } from "@/lib/data";
import { ArrowUp, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-12 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-foreground">{identity.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{identity.location}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${identity.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex items-center justify-center py-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
