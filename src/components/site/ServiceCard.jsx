import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const pricingLabels = {
  fixed: "Fixed price",
  quote: "Quoted",
  mixed: "Fixed + quoted",
};

export default function ServiceCard({ group }) {
  return (
    <Link
      to="/services"
      hash={group.id}
      className="group relative flex h-full flex-col justify-between gap-8 border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-primary/50 hover:bg-card focus-visible:border-primary"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[13px] tracking-[0.25em] text-primary">{group.number}</span>
          <span className="mono-label whitespace-nowrap border border-border px-2 py-1 text-[12px]">
            {pricingLabels[group.pricing]}
          </span>
        </div>
        <h3 className="mt-6 font-display text-lg font-bold leading-tight tracking-[-0.01em] text-foreground">
          {group.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{group.short}</p>
      </div>
      <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-foreground/70 transition-colors group-hover:text-primary">
        View details
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}