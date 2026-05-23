import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Practice" },
  { to: "/team", label: "Leadership" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors relative py-1"
              activeProps={{ className: "!text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-[11px] uppercase tracking-[0.22em] bg-ink text-bone px-5 py-3 hover:bg-accent hover:text-ink transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] border-b border-border/60"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-4 text-center bg-ink text-bone py-3 text-xs uppercase tracking-[0.22em]"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
