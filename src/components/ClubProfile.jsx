import { FALLBACK_TEXT } from "../data/clubs";
import { site } from "../data/site";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

/**
 * ONE component renders BOTH clubs — same image ratio, same type sizes, same
 * spacing, same button. Change something here and it changes for both.
 */
export default function ClubProfile({ club }) {
  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-5 lg:flex lg:justify-center">
        <SmartImage
          src={club.cover}
          alt={`${club.name} — club photograph`}
          label={club.name}
          ratio="4 / 5"
          className="mx-auto w-48 max-w-full sm:w-56"
        />
      </Reveal>

      <div className="min-w-0 text-center lg:col-span-7 lg:text-left">
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

  

        {club.keywords.length > 0 && (
          <Reveal delay={0.1}>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
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

        <Reveal delay={0.12}>
          <div className="mt-7 border-t border-paper/10 pt-5">
            <h4 className="eyebrow">{site.clubs.ideologyHeading}</h4>
<p className="mt-2 max-w-lg whitespace-pre-line text-sm font-light leading-relaxed text-paper/65">
  {club.ideology || FALLBACK_TEXT}
</p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={club.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-line mt-6 justify-center text-sm text-paper/75 hover:text-brass lg:justify-start"
          >
            {club.instagramHandle}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </article>
  );
}