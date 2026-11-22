import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";
import ServiceSection from "@/components/services/ServiceSection";
import CtaBand from "@/components/site/CtaBand";
import { serviceGroups } from "@/lib/services-data";

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services — Parenti Digital" },
      {
        name: "description",
        content:
          "Websites, domains and professional email, maintenance, livestream and broadcast systems, audio engineering, sound system tuning, team training, multimedia consulting, and content production.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        index="Services"
        kicker="Full catalog"
        title="Everything that carries your message."
        description="Nine service lines that cover the whole chain: the site people find, the email that reaches them, the room they sit in, the stream they watch from home, and the team that keeps it running."
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {serviceGroups.map((group) => (
            <Link
              key={group.id}
              to="/services"
              hash={group.id}
              className="inline-flex min-h-[38px] items-center border border-border px-3 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              {group.number} · {group.title}
            </Link>
          ))}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {serviceGroups.map((group) => (
          <ServiceSection key={group.id} group={group} />
        ))}
      </div>

      <CtaBand
        title="Not sure which line you need?"
        description="Describe the situation in plain language. You will get an honest read on what to fix first, and whether it is a fixed-price job or a quoted one."
      />
    </>
  );
}