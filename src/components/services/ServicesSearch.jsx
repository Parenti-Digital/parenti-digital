import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import ServiceSection from "@/components/services/ServiceSection";

const normalize = (value) => (value || "").toString().toLowerCase();

function filterGroups(groups, term) {
  return groups
    .map((group) => {
      const groupMatch = normalize(
        [group.title, group.short, group.note, group.pricing].join(" ")
      ).includes(term);
      const items = group.items.filter((item) =>
        normalize(`${item.name} ${item.description}`).includes(term)
      );
      if (groupMatch) return group;
      if (items.length) return { ...group, items };
      return null;
    })
    .filter(Boolean);
}

export default function ServicesSearch({ groups }) {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const results = useMemo(() => (term ? filterGroups(groups, term) : groups), [groups, term]);

  return (
    <>
      <div className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <label htmlFor="service-search" className="mono-label">
            Search services
          </label>
          <div className="relative mt-3">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try “livestream”, “email”, “sound system”…"
              className="min-h-[52px] w-full border border-border bg-background pl-11 pr-12 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
          {term ? (
            <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
              {results.length} {results.length === 1 ? "service line" : "service lines"} match “{query.trim()}”
            </p>
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {results.length ? (
          results.map((group) => <ServiceSection key={group.id} group={group} />)
        ) : (
          <div className="py-20 text-center">
            <p className="font-display text-2xl font-extrabold tracking-[-0.02em]">
              Nothing matches “{query.trim()}”.
            </p>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Try a shorter term, or tell me what you need and I will point you to the right line.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-7 inline-flex min-h-[44px] items-center border border-border px-4 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </>
  );
}