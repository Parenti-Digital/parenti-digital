import SectionHeading from "@/components/site/SectionHeading";
import ServiceCard from "@/components/site/ServiceCard";
import { serviceGroups } from "@/lib/services-data";

export default function ServiceMatrix() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Service matrix"
            title="Nine disciplines, one operator."
            description="Keeping your website, sound system, and livestream running smoothly usually means coordinating separate people who rarely talk to each other. I bring all of it together as one connected system, so updates, fixes, and new work all flow through a single point of contact who understands the whole picture."
          />
          <p className="max-w-xs border-l border-primary/40 pl-4 font-mono text-[12px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground">
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