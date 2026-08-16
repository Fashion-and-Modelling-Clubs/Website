import Reveal from "./Reveal";

/** One filter bar shared by the events calendar and the archive. */
export default function FilterBar({ filters, active, onChange, tone = "dark" }) {
  const isLight = tone === "light";

  return (
    <Reveal delay={0.1}>
      <div
        role="group"
        aria-label="Filters"
        className="no-scrollbar mt-12 flex gap-6 overflow-x-auto border-b pb-4 sm:gap-8"
        style={{ borderColor: isLight ? "rgba(8,8,8,0.15)" : "rgba(244,243,239,0.15)" }}
      >
        {filters.map((f) => {
          const selected = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              aria-pressed={selected}
              className={`whitespace-nowrap text-[11px] uppercase tracking-label transition-colors duration-500 ease-editorial ${
                selected
                  ? "text-brass"
                  : isLight
                    ? "text-ink/50 hover:text-ink"
                    : "text-paper/50 hover:text-paper"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </Reveal>
  );
}
