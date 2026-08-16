import { useMemo, useState } from "react";
import { events } from "../data/events";
import { site } from "../data/site";
import { groupByYear } from "../utils/format";
import SectionHeading from "./SectionHeading";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import Reveal from "./Reveal";

/** "THE STAGE" — all events shown, no filtering. */
export default function EventsCalendar() {
  const [active, setActive] = useState(null);

  const groups = useMemo(() => groupByYear(events), []);

  return (
    <section id="events" className="bg-paper py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label={site.events.label}
          lines={[site.events.heading]}
          intro={site.events.intro}
          tone="light"
          labelAlign="center"
        />

        <div className="mt-10">
          {groups.length === 0 && (
            <p className="border-t border-ink/12 pt-8 text-sm font-light text-ink/60">
              {site.events.empty}
            </p>
          )}

          {groups.map(([year, list]) => (
            <div key={year} className="mb-12">
              <Reveal>
                <div className="flex items-baseline gap-4">
                  <h3 className="font-display text-3xl font-light text-ink/85 sm:text-4xl">
                    {year}
                  </h3>
                  <span className="h-px flex-1 rule-dark" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-label text-ink/45">
                    {list.length} {list.length === 1 ? "event" : "events"}
                  </span>
                </div>
              </Reveal>

              <div className="mt-6">
                {list.map((event, i) => (
                  <Reveal key={event.id} delay={0.04 * i}>
                    <EventCard event={event} onOpen={setActive} />
                  </Reveal>
                ))}
                <div className="h-px rule-dark" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <EventModal event={active} onClose={() => setActive(null)} />
    </section>
  );
}