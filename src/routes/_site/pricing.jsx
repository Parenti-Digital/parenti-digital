import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PriceRow from "@/components/site/PriceRow";
import CtaBand from "@/components/site/CtaBand";
import { serviceGroups } from "@/lib/services-data";

export const Route = createFileRoute("/_site/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Parenti Media Solutions" },
      {
        name: "description",
        content:
          "Published prices for websites, domains and email, social media setup, and monthly website support. Production, streaming, audio, training, and consulting are quoted after a walkthrough.",
      },
    ],
  }),
  component: PricingPage,
});

const fixedGroups = serviceGroups.filter((g) => g.pricing !== "quote");
const quotedGroups = serviceGroups.filter((g) => g.pricing === "quote");

function PricingPage() {
  return (
    <>
      <PageHeader
        index="Pricing"
        kicker="Rates"
        title="Published prices, or a real quote."
        description="Digital work is priced up front so you can budget without a phone call. Production, installation, training, and consulting are quoted after I see the room, the gear, and the scope — because guessing at those numbers helps nobody."
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <section className="py-14 lg:py-20">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span className="text-primary">A</span>
            <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
            <span className="text-muted-foreground">Fixed price</span>
          </div>
          <h2 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
            Priced before we start.
          </h2>

          <div className="mt-10 space-y-12">
            {fixedGroups.map((group) => (
              <div key={group.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-primary/30 pb-4">
                  <h3 className="font-display text-lg font-bold tracking-[-0.01em]">
                    <span className="mr-3 font-mono text-xs text-primary">{group.number}</span>
                    {group.title}
                  </h3>
                  <Link
                    to="/services"
                    hash={group.id}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    Details
                  </Link>
                </div>
                {group.items.map((item) => (
                  <PriceRow key={item.name} item={item} />
                ))}
                {group.note ? (
                  <p className="mt-4 max-w-2xl border-l border-border pl-4 text-xs leading-relaxed text-muted-foreground">
                    {group.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-14 lg:py-20">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span className="text-primary">B</span>
            <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
            <span className="text-muted-foreground">Quoted work</span>
          </div>
          <h2 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
            Quoted after a walkthrough.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            These depend on room size, existing equipment, channel count, and timeline. Send the
            details and you will get a written scope with a number attached.
          </p>

          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {quotedGroups.map((group) => (
              <div key={group.id} className="bg-background p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-primary">
                    {group.number}
                  </span>
                  <span className="mono-label border border-border px-2 py-1 text-[9px]">
                    Quote
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold tracking-[-0.01em]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-[7px] h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
                      {item.name}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex min-h-[44px] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary"
                >
                  Request a quote
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-14 lg:py-20">
          <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
            What the prices do and do not include.
          </h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
            {[
              {
                title: "Included",
                body: "Design, build, configuration, testing, launch, and a walkthrough of what was delivered.",
              },
              {
                title: "Billed separately",
                body: "Domain registration, mailbox fees, streaming platforms, and hardware are paid at cost or purchased directly by you.",
              },
              {
                title: "Quoted separately",
                body: "New pages, major changes, additional development, and production work outside the original scope.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-background p-6">
                <h3 className="mono-label text-primary">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}