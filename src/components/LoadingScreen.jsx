import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../data/site";

/**
 * Short curtain-raise on first load. The line grows outward from the centre —
 * the same hairline that separates the two clubs everywhere else on the site.
 */
export default function LoadingScreen({ onDone }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const wait = reduce ? 200 : 1500;
    const timer = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, wait);
    return () => clearTimeout(timer);
  }, [onDone, reduce]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="grain fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          aria-hidden="true"
        >
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {site.brand.line1}
          </motion.span>

          <motion.div
            className="mt-5 flex items-baseline gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="display text-[clamp(2rem,7vw,4.5rem)]">Fashion</span>
            <span className="font-display text-[clamp(1.4rem,4vw,2.6rem)] font-light italic text-brass">
              /
            </span>
            <span className="display text-[clamp(2rem,7vw,4.5rem)]">Modelling</span>
          </motion.div>

          <div className="mt-10 h-px w-40 overflow-hidden sm:w-56">
            <motion.div
              className="h-full w-full origin-center bg-brass"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0.2 : 1.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
