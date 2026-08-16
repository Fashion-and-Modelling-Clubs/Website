import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { site } from "../data/site";
import { formatEventDate } from "../utils/format";
import { clubs } from "../data/clubs";

/** Detail dialog. Fields with no data are not rendered at all. */
export default function EventModal({ event, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!event) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [event, onClose]);

  const club = event?.club ? clubs[event.club] : null;
  const date = event ? formatEventDate(event.date) : null;

  const rows = event
    ? [
        { label: "Date", value: date.label || site.events.tba },
        { label: "Time", value: event.time },
        { label: "Venue", value: event.venue },
        { label: "Host", value: event.host },
        { label: "Performance", value: event.performance },
        { label: "Club", value: club?.name },
        { label: "Type", value: event.type },
      ].filter((row) => Boolean(row.value))
    : [];

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
            className="relative max-h-[92svh] w-full overflow-y-auto border-t border-paper/15 bg-coal sm:max-w-4xl sm:border"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-paper/10 px-5 py-4 sm:px-8">
              <span className="eyebrow">{site.events.label}</span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="text-[10px] uppercase tracking-label text-paper/70 transition-colors hover:text-paper"
              >
                Close ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 md:grid-cols-2 md:gap-10">
              <SmartImage
                src={event.image}
                alt={`${event.title} photograph`}
                label={event.title}
                ratio="4 / 5"
              />

              <div>
                <h3
                  id="event-modal-title"
                  className="display text-[clamp(2rem,6vw,3.6rem)] text-paper"
                >
                  {event.title}
                </h3>

                <dl className="mt-8 border-t border-paper/10">
                  {rows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[7rem_1fr] gap-4 border-b border-paper/10 py-3"
                    >
                      <dt className="text-[10px] uppercase tracking-label text-ash">
                        {row.label}
                      </dt>
                      <dd className="text-sm font-light capitalize text-paper/80">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {event.description && (
                  <p className="mt-6 text-sm font-light leading-relaxed text-paper/70">
                    {event.description}
                  </p>
                )}

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                  <a href="#archive" onClick={onClose} className="btn-line text-paper/75 hover:text-brass">
                    View gallery <span aria-hidden="true">→</span>
                  </a>

                  {(event.instagram || club?.instagram) && (
                    <a
                      href={event.instagram || club.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-line text-paper/75 hover:text-brass"
                    >
                      Instagram <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
