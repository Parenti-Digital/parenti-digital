import SectionHeading from "@/components/site/SectionHeading";
import ServiceCard from "@/components/site/ServiceCard";
import { serviceGroups } from "@/lib/services-data";

export default function ServiceMatrix() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="01"
            kicker="Service matrix"
            title="Nine disciplines, one operator."
            description="Most organizations end up juggling a web designer, a sound guy, and a streaming volunteer who all blame each other. Here it is one system, one point of contact, and one person who knows how the pieces connect."
          />
          <p className="max-w-xs border-l border-primary/40 pl-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
            Digital work is fixed price. Production and install work is quoted after a walkthrough.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <ServiceCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}