import { site } from "../data/site";
import Reveal from "./Reveal";

export default function About() {
  const { about } = site;

  return (
    <section id="about" className="bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
       <Reveal>
  <div className="flex items-center justify-center gap-4">
    <span
      className="h-px w-16 rule-dark sm:w-24"
      aria-hidden="true"
    />

    <span className="eyebrow whitespace-nowrap text-ink/50">
      {about.label}
    </span>

    <span
      className="h-px w-16 rule-dark sm:w-24"
      aria-hidden="true"
    />
  </div>
</Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-[clamp(2.8rem,9vw,8rem)]">
              {about.heading.map((line, i) => (
                <span key={line} className="block">
                  {i === 1 ? <em className="font-light italic text-brass">{line}</em> : line}
                </span>
              ))}
            </h2>
          </Reveal>

          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.05}>
              <p className="font-display text-2xl font-light leading-snug sm:text-3xl">
                {about.lead}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-sm font-light leading-relaxed text-ink/70">{about.body}</p>
            </Reveal>
          </div>
        </div>

       <Reveal delay={0.1}>
  <ul className="mt-14 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 border-t border-ink/15 pt-7 text-center">
    {about.vocabulary.map((word, i) => (
      <li key={word} className="flex items-baseline gap-5">
        <span className="font-display text-2xl font-light sm:text-3xl">
          {word}
        </span>

        {i < about.vocabulary.length - 1 && (
          <span className="text-brass" aria-hidden="true">
            /
          </span>
        )}
      </li>
    ))}
  </ul>
</Reveal>
<Reveal delay={0.12}>
  <div className="mt-16 overflow-hidden border-y border-ink/10 py-6">
    <div className="mb-5 flex items-center justify-center gap-4">
      <span className="h-px w-16 rule-dark" aria-hidden="true" />

      <span className="eyebrow text-center text-ink/50">
        PREVIOUS SPONSORS
      </span>

      <span className="h-px w-16 rule-dark" aria-hidden="true" />
    </div>

    <div className="relative overflow-hidden">
      <div className="sponsor-marquee flex w-max">
        {[...about.sponsors, ...about.sponsors].map((sponsor, i) => (
          <div
            key={`${sponsor}-${i}`}
            className="flex items-center"
          >
            <span className="mx-8 whitespace-nowrap font-display text-3xl font-light sm:text-4xl">
              {sponsor}
            </span>

            <span className="text-brass" aria-hidden="true">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</Reveal>
      </div>
    </section>
  );
}
