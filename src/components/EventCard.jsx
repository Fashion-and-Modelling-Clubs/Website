import SmartImage from "./SmartImage";
import { site } from "../data/site";
import { formatEventDate } from "../utils/format";

/** One row of the calendar. The whole row is a button that opens the modal. */
export default function EventCard({ event, onOpen }) {
  const date = formatEventDate(event.date);

  return (
    <button
      type="button"
      onClick={() => onOpen(event)}
      aria-haspopup="dialog"
      className="group grid w-full grid-cols-[1fr_auto] items-center gap-4 border-t border-ink/12 py-5 text-left transition-colors duration-500 ease-editorial hover:bg-ink/[0.03] sm:grid-cols-[7rem_5.5rem_1fr_auto] sm:gap-6"
    >
      <span className="order-2 text-[11px] uppercase tracking-label text-brass sm:order-1">
        {date.label || site.events.tba}
      </span>

      <span className="order-1 hidden sm:order-2 sm:block">
        <SmartImage
          src={event.image}
          alt={`${event.title} photograph`}
          label={event.title}
          ratio="3 / 2"
          tone="light"
          className="w-full"
          imgClassName="group-hover:scale-[1.06]"
        />
      </span>

      <span className="order-3 sm:order-3">
        <span className="block font-display text-[clamp(1.6rem,4vw,2.6rem)] font-light leading-tight">
          {event.title}
        </span>
        <span className="mt-1 block text-[11px] uppercase tracking-wide2 text-ink/45">
          {[event.type, event.venue].filter(Boolean).join(" · ") || "Venue TBA"}
        </span>
      </span>

      <span className="order-4 flex items-center gap-3 text-[10px] uppercase tracking-label text-ink/50 transition-colors duration-500 group-hover:text-brass">
        <span className="hidden sm:inline">Details</span>
        <span aria-hidden="true">→</span>
      </span>
    </button>
  );
}
