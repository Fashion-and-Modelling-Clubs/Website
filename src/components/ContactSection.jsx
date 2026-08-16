import { clubPair } from "../data/clubs";
import { facultyCoordinators, studentCoordinators } from "../data/coordinators";
import { site } from "../data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Instagram first, phone and email underneath for anyone who needs them. */
export default function ContactSection() {
  return (
    <section id="contact" className="bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <SectionHeading label={site.contact.label} lines={[site.contact.heading]} tone="light"
        labelAlign="center" />

        <Reveal delay={0.06}>
          <p className="mt-7 max-w-2xl font-display text-2xl font-light leading-snug sm:text-3xl">
            {site.contact.lead}
          </p>
          <p className="mt-3 text-sm font-light text-ink/60">{site.contact.sub}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {clubPair.map((club, i) => (
            <Reveal key={club.id} delay={0.06 * i}>
              <a
                href={club.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-10 border border-ink/15 p-7 transition-colors duration-500 ease-editorial hover:border-ink/45 sm:p-9"
              >
                <div>
                  <h3 className="display text-[clamp(1.8rem,4.5vw,3rem)]">{club.name}</h3>
                  <p className="mt-2 text-sm font-light text-ink/60">{club.instagramHandle}</p>
                </div>
                <span className="btn-line text-ink/70 group-hover:text-brass">
                  {site.contact.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <h3 className="eyebrow text-ink/50">{site.contact.studentHeading}</h3>
                <span className="h-px flex-1 rule-dark" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="mt-6 space-y-6">
              {studentCoordinators.map((person, i) => (
                <Reveal key={person.id} delay={0.05 * i}>
                  <div className="border-t border-ink/12 pt-4">
                    <p className="text-[10px] uppercase tracking-label text-ink/45">
                      {person.clubName}
                    </p>
                    <p className="mt-1 font-display text-2xl font-light">{person.name}</p>
<div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
  <a
    href={`tel:+91${person.phone}`}
    className="link-underline text-sm font-light text-ink/70 hover:text-ink"
  >
    <span className="mr-2 text-[10px] uppercase tracking-label text-ink/45">
      Phone
    </span>
    {person.phoneDisplay}
  </a>

  <a
    href={`mailto:${person.email}`}
    className="link-underline break-all text-sm font-light text-ink/70 hover:text-ink"
  >
    <span className="mr-2 text-[10px] uppercase tracking-label text-ink/45">
      Gmail
    </span>
    {person.email}
  </a>
</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <h3 className="eyebrow text-ink/50">{site.contact.facultyHeading}</h3>
                <span className="h-px flex-1 rule-dark" aria-hidden="true" />
              </div>
            </Reveal>

            <div className="mt-6 space-y-6">
              {facultyCoordinators.map((person, i) => (
                <Reveal key={person.id} delay={0.05 * i}>
                  <div className="border-t border-ink/12 pt-4">
                    <p className="font-display text-2xl font-light">{person.name}</p>
                    {person.department && (
                      <p className="mt-1 text-sm font-light text-ink/60">{person.department}</p>
                    )}
  <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
  <a
    href={`tel:+91${person.phone}`}
    className="link-underline text-sm font-light text-ink/70 hover:text-ink"
  >
    <span className="mr-2 text-[10px] uppercase tracking-label text-ink/45">
      Phone
    </span>
    {person.phoneDisplay}
  </a>

  <a
    href={`mailto:${person.email}`}
    className="link-underline break-all text-sm font-light text-ink/70 hover:text-ink"
  >
    <span className="mr-2 text-[10px] uppercase tracking-label text-ink/45">
      Gmail
    </span>
    {person.email}
  </a>
</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
