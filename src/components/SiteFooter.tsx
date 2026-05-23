import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone mt-32">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="serif text-2xl tracking-[0.15em]">NEXUS AXIS</div>
          <div className="text-[10px] tracking-[0.35em] text-accent uppercase mt-2">
            Consultants
          </div>
          <p className="mt-6 max-w-md text-sm text-bone/70 leading-relaxed">
            {SITE.description}
          </p>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-5">
            Navigate
          </div>
          <ul className="space-y-3 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Practice Areas"],
              ["/team", "Leadership"],
              ["/insights", "Insights"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-bone/70 hover:text-accent transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-5">
            Reach Us
          </div>
          <ul className="space-y-4 text-sm text-bone/70">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <div className="flex flex-col gap-1">
                <a href={`mailto:${SITE.emails.info}`} className="hover:text-accent">
                  {SITE.emails.info}
                </a>
                <a href={`mailto:${SITE.emails.legal}`} className="hover:text-accent">
                  {SITE.emails.legal}
                </a>
              </div>
            </li>
            {SITE.offices.map((o) => (
              <li key={o.city} className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>
                  <span className="text-bone">{o.country}</span> — {o.city}, {o.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[10px] tracking-[0.25em] uppercase text-bone/50">
          <span>© {new Date().getFullYear()} Nexus Axis Consultants. All rights reserved.</span>
          <span>Licensed Legal Consultancy · UAE · Egypt</span>
        </div>
      </div>
    </footer>
  );
}
