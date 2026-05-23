import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  component: Insights,
  head: () => ({
    meta: [
      { title: `Insights — ${SITE.name}` },
      { name: "description", content: "Commentary and briefings on UAE Corporate Tax, MOHRE labor reforms, AML & UBO compliance, business setup and regional regulatory developments." },
      { property: "og:title", content: `Legal Insights — ${SITE.name}` },
      { property: "og:description", content: "Briefings on UAE law, tax and corporate strategy." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

const POSTS = [
  { tag: "Corporate Tax", title: "UAE Corporate Tax: what founders are still getting wrong in Year Two.", date: "May 2026", read: "6 min" },
  { tag: "Litigation", title: "Enforcement in the UAE: practical strategy after the new Civil Procedure Law.", date: "April 2026", read: "8 min" },
  { tag: "Labor", title: "MOHRE penalties are climbing. A compliance checklist for SMEs.", date: "April 2026", read: "5 min" },
  { tag: "Setup", title: "Mainland vs Free Zone in 2026: a decision framework for foreign founders.", date: "March 2026", read: "7 min" },
  { tag: "Real Estate", title: "Off-plan property disputes: what the law actually protects.", date: "March 2026", read: "9 min" },
  { tag: "Regulatory", title: "UAE PDPL one year in: where boards are still exposed.", date: "February 2026", read: "6 min" },
];

function Insights() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Briefings from the bench."
        description="Plain-language analysis of the regulatory shifts shaping the UAE legal and commercial landscape — written by our partners."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {POSTS.map((p) => (
            <article key={p.title} className="bg-background p-10 group hover:bg-secondary/50 transition cursor-pointer flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent-foreground/70">{p.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>
              <h3 className="serif text-2xl text-ink leading-snug flex-1">{p.title}</h3>
              <div className="mt-10 pt-6 border-t border-border flex justify-between text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                <span>{p.date}</span>
                <span>{p.read} read</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Subscribe</div>
          <h2 className="serif text-3xl md:text-4xl mb-6">The Nexus Brief — monthly, never noisy.</h2>
          <p className="text-bone/70 mb-8 font-light">One email a month with the regulatory shifts that actually matter.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${SITE.emails.info}?subject=Subscribe to Nexus Brief`; }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input type="email" required placeholder="your@email.com" className="flex-1 bg-bone/10 border border-bone/20 px-4 py-3 text-sm placeholder:text-bone/50 focus:outline-none focus:border-accent" />
            <button className="bg-accent text-ink px-6 py-3 text-xs uppercase tracking-[0.22em] hover:bg-bone transition">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
