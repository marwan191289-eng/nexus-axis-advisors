import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import marwan from "@/assets/marwan-negm.jpg";
import mohab from "@/assets/mohab-samy.jpg";
import { Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({
    meta: [
      { title: `Leadership — ${SITE.name}` },
      { name: "description", content: "Meet the founding partners of Nexus Axis Consultants — Marwan Negm, Founder & Managing Partner, and Mohab Samy, Partner." },
      { property: "og:title", content: `Leadership — ${SITE.name}` },
      { property: "og:description", content: "The founding partners behind Nexus Axis Consultants." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

const PARTNERS = [
  {
    name: "Marwan Negm",
    role: "Founder & Managing Partner",
    img: marwan,
    bio: [
      "Marwan Negm is the founding partner of Nexus Axis Consultants and the architect of the firm's strategic vision. With over a decade of cross-border practice across the UAE, Egypt and the wider GCC, Marwan is recognized for translating intricate regulatory environments into elegant, commercially viable structures for founders, investors and family offices.",
      "His practice spans corporate structuring, complex commercial litigation, UAE Corporate Tax strategy, and high-stakes negotiation. Marwan has led the formation, restructuring and exit of dozens of regulated entities, advised on contested shareholder matters before the highest UAE courts, and counseled multinational groups on entry strategy into the Emirates.",
      "Clients describe him as both surgical and humane — equally comfortable in a boardroom dictating terms as in a courtroom defending them. Above all, Marwan built Nexus Axis on a single conviction: that exceptional legal work is the discipline of removing risk before it becomes consequence.",
    ],
    expertise: ["Corporate Structuring", "Commercial Litigation", "Corporate Tax", "M&A"],
  },
  {
    name: "Mohab Samy",
    role: "Partner — Litigation & Regulatory",
    img: mohab,
    bio: [
      "Mohab Samy is a Partner at Nexus Axis Consultants and the firm's head of contentious practice. A formidable courtroom advocate with extensive experience before UAE federal and local courts, Mohab leads the firm's commercial, civil, labor and enforcement litigation, alongside its regulatory and compliance advisory work.",
      "His mandates routinely involve high-value commercial disputes, shareholder conflicts, MOHRE labor proceedings, real estate enforcement and white-collar defense. Mohab is particularly noted for his command of UAE procedural law and his ability to navigate matters from Court of First Instance through Cassation with strategic patience.",
      "Beyond litigation, Mohab counsels clients on AML, UBO and PDPL compliance, helping them build defensible governance frameworks before disputes ever arise. His clients value him for one trait above all: he tells them the truth, early.",
    ],
    expertise: ["Commercial Litigation", "Labor & MOHRE", "Regulatory Compliance", "Enforcement"],
  },
];

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="The Partners"
        title="Counsel you can name. Names you can trust."
        description="Nexus Axis is partner-led by design. Every mandate is supervised by a principal lawyer — never delegated, never diluted."
      />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-32">
          {PARTNERS.map((p, i) => (
            <article
              key={p.name}
              className={`grid lg:grid-cols-12 gap-12 items-start ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5 relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-accent" />
                <img src={p.img} alt={`${p.name}, ${p.role}`} className="relative w-full h-[560px] object-cover grayscale hover:grayscale-0 transition duration-700" width={1024} height={1280} loading="lazy" />
              </div>
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-4">{p.role}</div>
                <h2 className="serif text-5xl text-ink mb-6">{p.name}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                  {p.bio.map((para, idx) => <p key={idx}>{para}</p>)}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.expertise.map((e) => (
                    <span key={e} className="text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border border-border bg-secondary/40 text-muted-foreground">
                      {e}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <a href={`mailto:${SITE.emails.legal}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] hover:text-accent transition">
                    <Mail className="h-4 w-4" /> Direct Contact
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] hover:text-accent transition">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
