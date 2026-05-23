import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      { name: "description", content: "Book a confidential consultation with Nexus Axis Consultants. UAE: Falcon Tower 1409, Ajman. Egypt: Nasr City, Cairo. Call +971 58 559 2355." },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:description", content: "Book a confidential consultation across our UAE and Egypt offices." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Consultation request — ${fd.get("name")}`;
    const body = `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nMatter: ${fd.get("matter")}\n\n${fd.get("message")}`;
    window.location.href = `mailto:${SITE.emails.info}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="A confidential conversation, on your terms."
        description="Reach our partners directly. All initial consultations are bound by attorney-client confidentiality."
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Channels */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-5">Direct Channels</div>
              <div className="space-y-5">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 group">
                  <Phone className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Telephone</div>
                    <div className="serif text-xl text-ink group-hover:text-accent transition">{SITE.phone}</div>
                  </div>
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <MessageCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">WhatsApp</div>
                    <div className="serif text-xl text-ink group-hover:text-accent transition">Message Us Now</div>
                  </div>
                </a>
                {Object.entries(SITE.emails).map(([k, v]) => (
                  <a key={k} href={`mailto:${v}`} className="flex items-start gap-4 group">
                    <Mail className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{k}</div>
                      <div className="serif text-base text-ink group-hover:text-accent transition break-all">{v}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-5">Offices</div>
              <div className="space-y-5">
                {SITE.offices.map((o) => (
                  <div key={o.city} className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{o.country}</div>
                      <div className="serif text-lg text-ink">{o.city}</div>
                      <div className="text-sm text-muted-foreground">{o.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-secondary/40 p-10 border border-border">
            <h2 className="serif text-3xl text-ink mb-2">Request a Consultation</h2>
            <p className="text-sm text-muted-foreground mb-8">A partner will respond within one business day.</p>

            {sent ? (
              <div className="py-12 text-center">
                <div className="serif text-2xl text-ink mb-3">Thank you.</div>
                <p className="text-muted-foreground">Your email client has opened. We'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field name="name" label="Full Name" required />
                  <Field name="email" label="Email" type="email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field name="phone" label="Phone" />
                  <Field name="matter" label="Matter Type" placeholder="e.g. Litigation, Setup, Tax…" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">Brief Description</label>
                  <textarea name="message" rows={5} required className="w-full bg-background border border-border p-3 text-sm focus:outline-none focus:border-accent" />
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-ink text-bone px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent hover:text-ink transition">
                  Submit Request <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-border p-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}
