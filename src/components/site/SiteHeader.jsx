import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Parenti Digital home">
          <span className="relative flex h-9 w-9 items-center justify-center border border-primary/60">
            <span className="h-1.5 w-1.5 bg-primary transition-transform duration-300 group-hover:scale-150" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.16em] text-foreground">
              Parenti Digital
            </span>
            <span className="mt-1 font-mono text-[12px] uppercase tracking-[0.3em] text-muted-foreground">
              Websites · AV · Live
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative font-mono text-[13px] uppercase tracking-[0.22em] transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-primary" aria-hidden="true" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden min-h-[42px] items-center gap-2 bg-primary px-5 font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Request a quote
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-[52px] items-center justify-between border-b border-border/60 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground last:border-0"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}