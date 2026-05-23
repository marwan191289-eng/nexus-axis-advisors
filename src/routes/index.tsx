import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import heroOffice from "@/assets/hero-office.jpg";
import { ArrowRight, Scale, Building2, Users, Shield, Briefcase, FileCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${SITE.name} — Premier UAE Legal & Corporate Consultancy` },
      { name: "description", content: "Strategic legal counsel, corporate structuring, litigation, tax advisory, HR compliance and business setup across the UAE and Egypt. Trusted by founders, investors and multinationals." },
      { property: "og:title", content: `${SITE.name} — Strategic Counsel for Ambitious Enterprises` },
      { property: "og:description", content: "End-to-end legal and corporate advisory across the UAE and the GCC." },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const PILLARS = [
  { icon: Scale, title: "Commercial Litigation", desc: "Civil, commercial, labor, real estate and enforcement representation across UAE federal and local courts." },
  { icon: Building2, title: "Corporate Structuring", desc: "Mainland and Free Zone entity formation, shareholder agreements, M&A and reorganizations." },
  { icon: FileCheck, title: "Corporate Tax Strategy", desc: "Full-stack UAE Corporate Tax planning, ESR, transfer pricing and VAT compliance." },
  { icon: Users, title: "HR & Workforce Architecture", desc: "MOHRE-compliant employment frameworks, executive contracts and policy drafting." },
  { icon: Shield, title: "Regulatory & Compliance", desc: "AML, UBO, data protection and sector-specific licensing across regulated industries." },
  { icon: Briefcase, title: "Business Setup & Visas", desc: "End-to-end company formation, Golden Visa, investor and residency solutions." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-paper opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 lg:pt-28 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8">
              <span className="h-px w-10 bg-accent" />
              Est. UAE · Practicing Across the GCC
            </div>
            <h1 className="serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-ink">
              Strategic counsel<br />
              for the <span className="gold-text italic">architects</span><br />
              of enterprise.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              Nexus Axis Consultants brings together commercial litigators, corporate counsel
              and regulatory specialists under one roof — built to translate ambition into
              durable, compliant, profitable structures.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent hover:text-ink transition"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.25em] hover:border-accent hover:text-accent-foreground transition"
              >
                Practice Areas
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["12+", "Years Combined"],
                ["340+", "Mandates Delivered"],
                ["2", "Jurisdictions"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="serif text-3xl text-ink">{n}</div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-accent" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-accent" />
            <img
              src={heroOffice}
              alt="Nexus Axis Consultants boardroom overlooking the UAE skyline"
              className="relative w-full h-[560px] object-cover"
              width={1600}
              height={1200}
            />
            <div className="absolute bottom-8 left-8 right-8 bg-ink/90 backdrop-blur text-bone p-6 border-l-2 border-accent">
              <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-2">Headquarters</div>
              <div className="serif text-lg">Falcon Tower 1409 · Ajman, UAE</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-28 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" /> Practice
            </div>
            <h2 className="serif text-4xl md:text-5xl text-ink leading-tight">
              Six disciplines. One coordinated bench.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-background p-10 group hover:bg-secondary transition cursor-default"
              >
                <Icon className="h-7 w-7 text-accent mb-8 stroke-[1.25]" />
                <h3 className="serif text-xl text-ink mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-8 h-px w-8 bg-ink group-hover:w-16 group-hover:bg-accent transition-all" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] hover:text-accent transition">
              Explore all practice areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative bg-ink text-bone py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-paper" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6">Our Discipline</div>
          <p className="serif text-3xl md:text-5xl leading-tight font-light">
            “The law is not an obstacle to ambition — it is the
            <span className="gold-text italic"> architecture </span>
            that allows ambition to scale.”
          </p>
          <div className="mt-10 text-[11px] tracking-[0.3em] uppercase text-bone/60">
            Marwan Negm · Founder & Managing Partner
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" /> Engage
            </div>
            <h2 className="serif text-4xl md:text-5xl text-ink leading-tight">
              A confidential first conversation, on us.
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              Whether you are entering the UAE market, restructuring an established group,
              or facing a contested matter, our partners offer a complimentary 30-minute
              strategy session to scope your mandate.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent hover:text-ink transition"
            >
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
