import { cn } from "@/lib/utils";

export default function SectionHeading({ index, kicker, title, description, className }) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em]">
        {index ? <span className="text-primary">{index}</span> : null}
        <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
        <span className="text-muted-foreground">{kicker}</span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-[0.98] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}