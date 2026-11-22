import { Link } from "@tanstack/react-router";
import { BRAND, serviceGroups } from "@/lib/services-data";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-primary/60">
                <span className="h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.22em]">
                  Parenti
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  Media · AV · Live
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Websites, livestreams, sound systems, and the training to run them. Built and
              supported by Michael Parenti.
            </p>
          </div>

          <div>
            <h3 className="mono-label">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceGroups.slice(0, 5).map((group) => (
                <li key={group.id}>
                  <Link
                    to="/services"
                    hash={group.id}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {group.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mono-label">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-foreground">{BRAND.owner}</li>
              <li>
                <a href={BRAND.emailHref} className="text-muted-foreground hover:text-primary">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.phoneHref} className="text-muted-foreground hover:text-primary">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            © {year} {BRAND.name} LLC · All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              On-site and remote · Chicago area
            </p>
            <Link
              to="/login"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
            >
              Owner login
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden px-5 lg:px-8"
      >
        <p className="translate-y-[22%] font-display text-[19vw] font-black leading-none tracking-[-0.04em] text-foreground/[0.045]">
          PARENTI
        </p>
      </div>
    </footer>
  );
}