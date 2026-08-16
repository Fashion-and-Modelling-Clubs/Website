import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/site";
import { clubPair } from "../data/clubs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-paper focus:px-4 focus:py-2 focus:text-[11px] focus:uppercase focus:tracking-label focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,backdrop-filter,border-color] duration-500 ease-editorial ${
          scrolled || open
            ? "border-b border-paper/10 bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-page items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
        >
          <a href="#top" className="group flex items-baseline gap-2.5" aria-label="NITJ Fashion and Modelling — home">
            <span className="font-display text-xl font-medium leading-none tracking-wide sm:text-2xl">
              {site.brand.line1}
            </span>
            <span className="text-[8px] uppercase tracking-[0.12em] text-ash transition-colors duration-500 group-hover:text-paper sm:text-[10px]">
  {site.brand.line2}
</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="link-underline text-[11px] uppercase tracking-label text-paper/70 transition-colors duration-500 hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex items-center gap-3 lg:hidden"
          >
            <span className="text-[10px] uppercase tracking-label text-paper/70">
              {open ? "Close" : "Menu"}
            </span>
            <span className="flex h-4 w-6 flex-col justify-center gap-[5px]">
              <span
                className={`h-px w-full bg-paper transition-transform duration-500 ease-editorial ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-paper transition-transform duration-500 ease-editorial ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="grain fixed inset-0 z-[65] flex flex-col justify-between bg-ink px-5 pb-10 pt-24 sm:px-8 lg:hidden"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-paper/10"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-4xl font-light sm:text-5xl"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <span className="eyebrow">Instagram</span>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {clubPair.map((club) => (
                  <a
                    key={club.id}
                    href={club.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-paper/80"
                  >
                    {club.instagramHandle}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
