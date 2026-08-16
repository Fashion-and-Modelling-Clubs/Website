import Reveal from "./Reveal";

/**
 * The heading block used by every section: a tracked label, a hairline, and an
 * oversized display heading. Keeping it in one component is what makes the two
 * clubs impossible to accidentally style differently.
 */
export default function SectionHeading({
  label,
  lines = [],
  intro = "",
  tone = "dark",
  align = "left",
  labelAlign = "left",
  size = "lg",
}) {
  const isLight = tone === "light";
  const headingSize =
    size === "sm"
      ? "text-[clamp(2.2rem,6vw,4rem)]"
      : "text-[clamp(2.8rem,9vw,7.5rem)]";

  return (
    <div className={align === "center" ? "text-center" : ""}>
  {label && (
  <Reveal>
    {labelAlign === "center" ? (
      <div className="flex w-full items-center justify-center gap-4">
        <span
          className={`h-px w-20 sm:w-32 ${
            isLight ? "rule-dark" : "rule"
          }`}
          aria-hidden="true"
        />

        <span
          className={`eyebrow whitespace-nowrap ${
            isLight ? "text-ink/50" : ""
          }`}
        >
          {label}
        </span>

        <span
          className={`h-px w-20 sm:w-32 ${
            isLight ? "rule-dark" : "rule"
          }`}
          aria-hidden="true"
        />
      </div>
    ) : (
      <div className="flex items-center gap-4">
        <span className={`eyebrow ${isLight ? "text-ink/50" : ""}`}>
          {label}
        </span>

        <span
          className={`h-px flex-1 max-w-[8rem] ${
            isLight ? "rule-dark" : "rule"
          }`}
          aria-hidden="true"
        />
      </div>
    )}
  </Reveal>
)}

      <Reveal delay={0.05}>
        <h2 className={`display mt-6 ${headingSize}`}>
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-7 max-w-xl text-sm font-light leading-relaxed ${
              isLight ? "text-ink/70" : "text-paper/60"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
