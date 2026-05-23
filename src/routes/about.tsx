import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import heroOffice from "@/assets/hero-office.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About — ${SITE.name}` },
      { name: "description", content: "Inside Nexus Axis Consultants: our founding philosophy, partners, and the standards that define our practice across the UAE and Egypt." },
      { property: "og:title", content: `About ${SITE.name}` },
      { property: "og:description", content: "The philosophy, people and standards behind Nexus Axis Consultants." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the Firm"
        title="A modern legal house, built on classical discipline."
        description="Nexus Axis Consultants was founded to do one thing exceptionally — translate complex regulatory environments into clean, defensible commercial outcomes for our clients."
      />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <img src={heroOffice} alt="Office interior" className="w-full h-[500px] object-cover" width={1600} height={1200} loading="lazy" />
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-4">Our Story</div>
            <h2 className="serif text-4xl text-ink mb-6 leading-tight">A boutique by design, a powerhouse by capability.</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed font-light">
              <p>
                Established in the UAE with deep roots in Egypt, Nexus Axis serves founders,
                family offices, regulated institutions and multinationals navigating the
                Gulf's most dynamic legal environment.
              </p>
              <p>
                We deliberately maintain a partner-led model: every mandate is touched by a
                principal lawyer, not delegated. That intimacy is our competitive edge —
                and the reason our clients return.
              </p>
              <p>
                From the Federal Decree-Law on Corporate Tax to MOHRE's evolving labor
                framework, we operate at the leading edge of UAE regulation so that our
                clients never have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { t: "Discretion", d: "Every mandate is bound by enforceable confidentiality. Sensitive matters stay sensitive." },
            { t: "Precision", d: "We draft, structure and litigate with the same exacting standard we'd apply to our own affairs." },
            { t: "Accountability", d: "Fixed scopes, transparent fees, and direct partner access on every engagement." },
          ].map((v) => (
            <div key={v.t} className="border-l-2 border-accent pl-6">
              <div className="serif text-2xl text-ink mb-3">{v.t}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-5">Jurisdictions</div>
          <h2 className="serif text-4xl md:text-5xl text-ink mb-10">Two offices. One standard.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SITE.offices.map((o) => (
              <div key={o.city} className="bg-ink text-bone p-10 text-left">
                <div className="text-[10px] tracking-[0.35em] uppercase text-accent mb-3">{o.country}</div>
                <div className="serif text-3xl mb-2">{o.city}</div>
                <div className="text-bone/70 text-sm">{o.address}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
