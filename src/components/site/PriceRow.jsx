export default function PriceRow({ item }) {
  return (
    <div className="grid gap-3 border-b border-border/70 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10">
      <div>
        <h4 className="font-display text-base font-bold tracking-[-0.01em] text-foreground">
          {item.name}
        </h4>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
      <div className="sm:min-w-[9.5rem] sm:text-right">
        <div
          className={
            item.quote
              ? "font-mono text-xs uppercase tracking-[0.2em] text-primary"
              : "font-mono text-base text-foreground"
          }
        >
          {item.price}
        </div>
        {item.unit ? (
          <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
            {item.unit}
          </div>
        ) : null}
      </div>
    </div>
  );
}