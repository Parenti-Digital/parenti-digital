import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import PriceRow from "@/components/site/PriceRow";

const pricingLabels = {
  fixed: "Fixed price",
  quote: "Quoted after walkthrough",
  mixed: "Fixed price + quoted",
};

export default function ServiceSection({ group }) {
  return (
    <section id={group.id} className="scroll-mt-24 border-b border-border py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em]">
            <span className="text-primary">{group.number}</span>
            <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
            <span className="text-muted-foreground">{pricingLabels[group.pricing]}</span>
          </div>
          <h2 className="mt-5 font-display text-2xl font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-3xl">
            {group.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{group.short}</p>
          <Link
            to="/contact"
            className="group mt-7 inline-flex min-h-[44px] items-center gap-2 border border-border px-4 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            Start a conversation
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div>
          <div className="border-t border-border">
            {group.items.map((item) => (
              <PriceRow key={item.name} item={item} />
            ))}
          </div>
          {group.note ? (
            <p className="mt-6 max-w-2xl border-l border-primary/40 pl-4 text-xs leading-relaxed text-muted-foreground">
              {group.note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}