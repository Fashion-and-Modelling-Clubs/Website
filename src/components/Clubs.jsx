import { site } from "../data/site";
import { clubPair } from "../data/clubs";
import SectionHeading from "./SectionHeading";
import ClubProfile from "./ClubProfile";

/** Both clubs, rendered by the same component, side by side — equal footing. */
export default function Clubs() {
  return (
    <section id="clubs" className="bg-ink py-14 sm:py-20">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label={site.clubs.label}
          lines={[site.clubs.heading]}
          intro={site.clubs.intro}
          labelAlign="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-14 sm:mt-16 lg:grid-cols-2 lg:gap-10 lg:items-start">
          {clubPair.map((club, i) => (
            <div key={club.id}>
              {i > 0 && (
                <div
                  className="mb-14 h-px rule lg:hidden"
                  aria-hidden="true"
                />
              )}
              <div className="lg:border-l lg:border-paper/10 lg:pl-10 lg:first:border-l-0 lg:first:pl-0">
                <ClubProfile club={club} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}