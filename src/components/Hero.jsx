import { motion, useReducedMotion } from "framer-motion";
import { images } from "../data/images";
import { site } from "../data/site";
import SmartImage from "./SmartImage";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section
      id="top"
      className="relative flex h-[92svh] min-h-[540px] flex-col justify-end overflow-hidden bg-ink sm:h-[100svh]"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.12 }}
        animate={reduce ? false : { scale: 1 }}
        transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SmartImage
          src={images.hero.main}
          alt="Models on the runway at NIT Jalandhar"
          label="Hero image"
          ratio="auto"
          eager
          className="!absolute inset-0 h-full w-full !ring-0"
          imgClassName="h-full w-full object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink"
        aria-hidden="true"
      />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-page px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12">
        <motion.p className="eyebrow text-paper/70" {...rise(0.1)}>
          {site.hero.eyebrow}
        </motion.p>

        <motion.h1 className="display mt-4 text-[clamp(3rem,14vw,12rem)]" {...rise(0.2)}>
          <span className="block">{site.hero.lineOne}</span>
          <span className="block">
            <span className="font-display italic text-brass">{site.hero.ampersand}</span>{" "}
            {site.hero.lineTwo}
          </span>
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-paper/15 pt-6"
          {...rise(0.35)}
        >
          <p className="max-w-md text-sm font-light leading-relaxed text-paper/75">
            {site.hero.tagline}
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-label text-paper/60 transition-colors duration-500 hover:text-paper"
          >
            {site.hero.scroll}
            <motion.span
              className="block h-6 w-px bg-paper/50"
              animate={reduce ? {} : { scaleY: [0.3, 1, 0.3] }}
              style={{ originY: 0 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
