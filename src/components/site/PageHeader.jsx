import { cn } from "@/lib/utils";

export default function PageHeader({ index, kicker, title, description, children, className }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hairline-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-5 pb-12 pt-14 lg:px-8 lg:pb-16 lg:pt-20",
          className
        )}
      >
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em]">
          {index ? <span className="text-primary">{index}</span> : null}
          <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-muted-foreground">{kicker}</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}