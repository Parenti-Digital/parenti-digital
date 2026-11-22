import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import RequestForm from "@/components/contact/RequestForm";
import { BRAND, serviceGroups } from "@/lib/services-data";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request Services — Parenti Media Solutions" },
      {
        name: "description",
        content:
          "Request a quote for a website, livestream setup, sound system work, training, or consulting. Direct contact with Michael Parenti by form, phone, or email.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        index="Contact"
        kicker="Request services"
        title="Start with the problem, not the package."
        description="Tell me what you have, what is not working, and what you want it to do. Fixed-price work gets a number. Production work gets a walkthrough and a written quote."
      />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <RequestForm />
          </div>

          <aside className="space-y-8">
            <div className="border border-border bg-card/40 p-6">
              <h2 className="mono-label text-primary">Direct</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <p className="text-sm font-medium text-foreground">{BRAND.owner}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Owner & operator
                  </p>
                </li>
                <li>
                  <a
                    href={BRAND.emailHref}
                    className="flex min-h-[44px] items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                    {BRAND.email}
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.phoneHref}
                    className="flex min-h-[44px] items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                    {BRAND.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                  <span>On site in the Chicago area, remote anywhere.</span>
                </li>
              </ul>
            </div>

            <div className="border border-border p-6">
              <h2 className="mono-label text-primary">Fastest path</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <span className="text-foreground">Website, domain, or email:</span> include your
                  current site if you have one.
                </li>
                <li>
                  <span className="text-foreground">Streaming or audio:</span> describe the room,
                  the gear, and how many inputs.
                </li>
                <li>
                  <span className="text-foreground">Training:</span> say how many people and what
                  they already know.
                </li>
              </ul>
            </div>

            <div className="border border-border p-6">
              <h2 className="mono-label text-primary">Services</h2>
              <ul className="mt-4 grid gap-1.5">
                {serviceGroups.map((group) => (
                  <li key={group.id} className="text-sm text-muted-foreground">
                    <span className="mr-2 font-mono text-[10px] text-primary">{group.number}</span>
                    {group.title}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}