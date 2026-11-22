import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { BRAND } from "@/lib/services-data";

export default function CtaBand({ title, description }) {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="mono-label text-primary">Next step</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1] tracking-[-0.025em] sm:text-4xl">
            {title || "Tell me what is broken, or what does not exist yet."}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {description ||
              "Send the details and you will get a straight answer: what it takes, what it costs, and whether I am the right person for it."}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            to="/contact"
            className="group inline-flex min-h-[48px] items-center justify-center gap-3 bg-primary px-6 font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a quote
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <a
            href={BRAND.phoneHref}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-border px-6 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {BRAND.phone}
          </a>
          <a
            href={BRAND.emailHref}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-border px-6 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}