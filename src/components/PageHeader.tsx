interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="relative border-b border-border bg-secondary/40">
      <div className="absolute inset-0 grid-paper opacity-60" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-[11px] tracking-[0.3em] uppercase text-accent-foreground/70 mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </div>
        <h1 className="serif text-5xl md:text-7xl leading-[1.05] max-w-3xl text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
