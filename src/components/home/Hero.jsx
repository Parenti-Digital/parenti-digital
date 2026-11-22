import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const facts = [
  "Fixed-price websites from $1,000",
  "Livestream & broadcast systems",
  "Audio engineering & system tuning",
  "Training for the team that runs it",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em]">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-1.5 w-1.5 animate-pulse bg-primary" />
            </span>
            <span className="text-muted-foreground">Signal acquired · Media · AV · Live</span>
          </div>

          <h1 className="mt-7 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[4.1rem]">
            Media that works
            <br />
            every time you
            <br />
            <span className="text-primary">turn it on.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Websites, livestreams, sound systems, and the training to run them. Fixed prices for
            digital work, scoped quotes for production, and one person accountable from the first
            call to the day it goes live.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 bg-primary px-7 font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a quote
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex min-h-[52px] items-center justify-center border border-border px-7 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              See pricing
            </Link>
          </div>

          <ul className="mt-12 grid gap-x-6 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-2.5 font-mono text-[12px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground"
              >
                <span className="mt-1 h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src="https://media.base44.com/images/public/6b024dc75191b06f08c1b92c/a6c9e9288_generated_image.png"
              alt="Macro view of a mixing console fader lit by red LEDs"
              className="absolute inset-0 h-full w-full object-cover"
              fittingType="fill"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-foreground/70">
                Fig. 01 — Signal chain
              </span>
              <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.28em] text-primary">
                <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />
                Live
              </span>
            </div>
          </div>
          <div
            className="absolute -bottom-3 -left-3 hidden h-24 w-24 border-b border-l border-primary/40 lg:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}