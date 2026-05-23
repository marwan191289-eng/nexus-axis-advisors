import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-11 h-11 bg-ink flex items-center justify-center overflow-hidden">
        <span className="serif text-accent text-lg font-semibold tracking-tighter leading-none">
          N<span className="opacity-60">|</span>A
        </span>
        <span className="absolute inset-x-0 bottom-0 h-px bg-accent" />
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="serif text-[15px] tracking-[0.18em] text-ink font-medium">
            NEXUS AXIS
          </span>
          <span className="text-[9px] tracking-[0.32em] text-muted-foreground uppercase mt-1">
            Consultants
          </span>
        </div>
      )}
    </Link>
  );
}
