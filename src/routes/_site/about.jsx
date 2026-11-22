import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import { Image } from "@/components/ui/image";
import { BRAND, serviceGroups } from "@/lib/services-data";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About — Parenti Digital" },
      {
        name: "description",
        content:
          "Parenti Digital is owned and operated by Michael Parenti, building websites, livestreams, and sound systems for organizations that need them to work every week.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Build for the operator",
    body: "The person running the system on a Sunday morning or a show night matters more than the spec sheet. If they cannot run it, it is not finished.",
  },
  {
    title: "Fix the weakest link first",
    body: "A new camera will not fix bad audio, and a new mixer will not fix a room. Find the actual bottleneck before spending money.",
  },
  {
    title: "Fixed price where the work is known",
    body: "Websites, domains, email, and monthly support are published prices. Production and install work is quoted once the scope is real.",
  },
  {
    title: "Document everything",
    body: "Signal flow diagrams, checklists, and logins stay with you. Nothing should require calling me to figure out.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        index="About"
        kicker="The company"
        title="One operator across the whole signal chain."
        description="Parenti Digital is a digital and media company owned and operated by Michael Parenti. It exists because most organizations do not need five vendors who never talk to each other. They need one person who can build the website, wire the room, run the stream, and teach the team to keep it running."
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <section className="grid gap-12 py-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <h2 className="font-display text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl">
              The work is technical. The relationship should not be.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Michael Parenti builds and maintains media systems for churches, nonprofits, small
                businesses, and event teams: the website people find you through, the email on your
                own domain, the video and graphics that carry your brand, the livestream for the
                people who cannot be in the room, and the sound system the room depends on.
              </p>
              <p>
                The digital side is fixed price and clearly scoped. The production side, streaming,
                audio, installation, training, and consulting, is quoted after a walkthrough, because
                room size and existing gear change the number more than anything else.
              </p>
              <p>
                Projects end with documentation and training, not a bill and a shrug. The goal is a
                system your team can run without me in the room.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 bg-primary px-6 font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request a quote
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-border px-6 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image
              src="https://media.base44.com/images/public/6b024dc75191b06f08c1b92c/92d58eb01_generated_image.png"
              alt="Overhead view of an audio workstation with red lighting"
              className="absolute inset-0 h-full w-full object-cover"
              fittingType="fill"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-foreground/70">
                Fig. 02 — Control room
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-primary">
                {BRAND.owner}
              </span>
            </div>
          </div>
        </section>

        <section className="border-t border-border py-14 lg:py-20">
          <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
            How the work gets done.
          </h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {principles.map((principle, i) => (
              <div key={principle.title} className="bg-background p-6 lg:p-8">
                <span className="font-mono text-[13px] tracking-[0.25em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.01em]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
                Where the work happens.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Remote, for anything that runs through a screen. Direct contact, no account
                manager in between.
              </p>
              <a
                href={BRAND.emailHref}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-mono text-[12px] uppercase tracking-[0.22em] text-primary"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {BRAND.email}
              </a>
            </div>
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {serviceGroups.map((group) => (
                <li key={group.id} className="bg-background">
                  <Link
                    to="/services"
                    hash={group.id}
                    className="flex min-h-[52px] items-center gap-3 px-5 py-3 text-[15px] text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="font-mono text-[12px] text-primary">{group.number}</span>
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}