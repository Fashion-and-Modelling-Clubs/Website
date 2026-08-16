import { FALLBACK_TEXT } from "../data/clubs";
import { achievements } from "../data/achievements";
import { site } from "../data/site";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

/**
 * ONE component renders BOTH clubs — same image ratio, same type sizes, same
 * spacing, same button. Change something here and it changes for both. Please
 * don't fork this file per club.
 */
export default function ClubProfile({ club }) {
  const list = achievements[club.id]?.achievements ?? [];

  return (
    <article className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
      <Reveal className="lg:col-span-5">
        <SmartImage
          src={club.cover}
          alt={`${club.name} — club photograph`}
          label={club.name}
          ratio="4 / 5"
          className="mx-auto w-48 sm:w-56"
        />
      </Reveal>

      <div className="lg:col-span-7">
        <Reveal>
          <h3 className="display text-[clamp(2rem,5vw,3.8rem)]">
            {club.name}
          </h3>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-2 font-display text-lg font-light italic text-brass sm:text-xl">
            {club.tagline || FALLBACK_TEXT}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-paper/65">
            {club.description || FALLBACK_TEXT}
          </p>
        </Reveal>

        {club.keywords.length > 0 && (
          <Reveal delay={0.1}>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {club.keywords.map((word) => (
                <li
                  key={word}
                  className="text-[10px] uppercase tracking-label text-paper/55"
                >
                  {word}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <div className="mt-7 grid grid-cols-1 gap-6 border-t border-paper/10 pt-5 sm:grid-cols-2">
          <Reveal delay={0.12}>
            <h4 className="eyebrow">{site.clubs.ideologyHeading}</h4>
            <p className="mt-2 text-sm font-light leading-relaxed text-paper/65">
              {club.ideology || FALLBACK_TEXT}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <h4 className="eyebrow">{site.clubs.legacyHeading}</h4>

            {list.length > 0 ? (
              <ul className="mt-2 space-y-1.5">
                {list.map((item, i) => (
                  <li key={i} className="text-sm font-light text-paper/65">
                    <span className="text-brass">{item.year || "TBA"}</span> —{" "}
                    {item.event}
                    {item.result ? `, ${item.result}` : ""}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm font-light leading-relaxed text-paper/65">
                {site.clubs.legacyEmpty}
              </p>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <a
            href={club.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line mt-6 text-sm text-paper/75 hover:text-brass"
          >
            {club.instagramHandle}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </article>
  );
}
