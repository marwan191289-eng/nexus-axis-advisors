import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Scale, Building2, Users, Shield, Briefcase, FileCheck, Landmark, Gavel, Globe, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: `Practice Areas — ${SITE.name}` },
      { name: "description", content: "Commercial litigation, corporate structuring, UAE Corporate Tax, HR & MOHRE compliance, business setup, Golden Visa, M&A and regulatory advisory." },
      { property: "og:title", content: `Practice Areas — ${SITE.name}` },
      { property: "og:description", content: "A full-service legal and corporate consultancy serving the UAE and Egypt." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const PRACTICES = [
  { icon: Scale, title: "Commercial Litigation", items: ["Civil & commercial disputes", "Enforcement & cassation", "Appeals & arbitration", "Debt recovery"] },
  { icon: Gavel, title: "Civil, Labor & Criminal", items: ["MOHRE labor cases", "Family & personal status", "Criminal defense", "Rental disputes"] },
  { icon: Building2, title: "Corporate Structuring", items: ["Mainland & Free Zone setup", "Shareholder agreements", "M&A and JV", "Restructuring & liquidation"] },
  { icon: FileCheck, title: "Corporate Tax & VAT", items: ["UAE Corporate Tax filings", "Transfer pricing", "VAT health checks", "ESR compliance"] },
  { icon: Users, title: "HR & Workforce", items: ["Employment contracts", "HR policy drafting", "Executive packages", "End-of-service planning"] },
  { icon: Shield, title: "Regulatory & Compliance", items: ["AML & UBO", "Data protection (PDPL)", "Sector licensing", "Internal audits"] },
  { icon: Briefcase, title: "Business Setup & Visas", items: ["Trade license issuance", "Investor & Golden Visa", "PRO services", "Banking introductions"] },
  { icon: Landmark, title: "Real Estate & Property", items: ["Acquisitions & SPAs", "Rental disputes", "Title due diligence", "Off-plan advisory"] },
  { icon: Globe, title: "Cross-Border Advisory", items: ["GCC market entry", "UAE-Egypt structuring", "International contracts", "Foreign investment"] },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title="A full-service legal house — sharpened by specialization."
        description="Each practice is led by a dedicated senior lawyer, supported by a coordinated bench of paralegals, tax specialists and PRO officers."
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {PRACTICES.map(({ icon: Icon, title, items }) => (
            <div key={title} className="bg-background p-10 group hover:bg-secondary/60 transition">
              <Icon className="h-8 w-8 text-accent stroke-[1.25] mb-8" />
              <h3 className="serif text-2xl text-ink mb-5">{title}</h3>
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[11px] tracking-[0.3em] uppercase text-accent mb-5">Engagement Model</div>
          <h2 className="serif text-4xl md:text-5xl mb-12">How we work with you.</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              ["01", "Scoping", "A confidential 30-minute call with a partner to map your matter."],
              ["02", "Proposal", "Fixed-fee scope, deliverables and timeline — no hourly surprises."],
              ["03", "Execution", "Partner-led delivery with weekly status briefings."],
              ["04", "Stewardship", "Ongoing advisory as your business and risks evolve."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <div className="serif text-accent text-3xl mb-3">{n}</div>
                <div className="serif text-lg mb-2">{t}</div>
                <div className="text-sm text-bone/70 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-flex items-center gap-3 bg-accent text-ink px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-bone transition">
            Begin Your Mandate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
