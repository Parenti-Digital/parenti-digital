import SectionHeading from "@/components/site/SectionHeading";
import { processSteps } from "@/lib/services-data";

export default function Process() {
  return (
    <section className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          index="02"
          kicker="How it runs"
          title="Four steps, no mystery."
          description="Every project follows the same path, whether it is a $1,000 website or a sound system install."
        />

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="bg-background p-6">
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}