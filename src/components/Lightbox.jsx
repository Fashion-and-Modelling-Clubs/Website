import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmartImage from "./SmartImage";
import { clubs } from "../data/clubs";

/**
 * Premium lightbox. Keyboard: ESC closes, ← previous, → next.
 */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);
  const open = index !== null && index >= 0;
  const item = open ? items[index] : null;

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrev, onNext]);

  const club = item?.club ? clubs[item.club] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
  className="fixed inset-0 z-[999] flex flex-col bg-ink/96"
  role="dialog"
  aria-modal="true"
  aria-label={item.caption}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  <div className="flex items-center justify-between px-5 py-4 sm:px-8">
    <span className="text-[10px] uppercase tracking-label text-ash">
      {index + 1} / {items.length}
    </span>
    <button
      ref={closeRef}
      type="button"
      onClick={onClose}
      className="rounded-full border border-paper/20 bg-ink px-4 py-2 text-[10px] uppercase tracking-label text-paper transition-colors hover:border-brass hover:text-brass"
    >
      Close ✕
    </button>
  </div>

          <div className="flex flex-1 items-center justify-center px-4 pb-4 sm:px-16">
            <motion.div
              key={item.id}
              className="max-h-full w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <SmartImage
                src={item.image}
                alt={item.caption}
                label={item.caption}
                ratio={
                  item.orientation === "panoramic"
                    ? "21 / 9"
                    : item.orientation === "landscape"
                      ? "3 / 2"
                      : item.orientation === "square"
                        ? "1 / 1"
                        : "3 / 4"
                }
                className="mx-auto max-h-[70svh] w-auto max-w-full"
                imgClassName="object-contain"
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-paper/10 px-5 py-4 sm:px-8">
            <button
              type="button"
              onClick={onPrev}
              className="text-[10px] uppercase tracking-label text-paper/70 transition-colors hover:text-brass"
            >
              ← Previous
            </button>

            <div className="text-center">
              <p className="text-sm font-light text-paper/85">{item.caption}</p>
              <p className="mt-1 text-[10px] uppercase tracking-label text-ash">
                {[club?.name, item.category].filter(Boolean).join(" · ")}
              </p>
            </div>

            <button
              type="button"
              onClick={onNext}
              className="text-[10px] uppercase tracking-label text-paper/70 transition-colors hover:text-brass"
            >
              Next →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
