import { useMemo, useState } from "react";
import { galleryItems, galleryFilters } from "../data/gallery";
import { site } from "../data/site";
import SectionHeading from "./SectionHeading";
import FilterBar from "./FilterBar";
import SmartImage from "./SmartImage";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

const SPAN = {
  portrait: "col-span-1",
  square: "col-span-1",
  landscape: "col-span-2",
  panoramic: "col-span-2 md:col-span-4",
};

const RATIO = {
  portrait: "3 / 4",
  square: "1 / 1",
  landscape: "3 / 2",
  panoramic: "21 / 9",
};

/** "THE ARCHIVE" — editorial masonry grid, filtered in the browser. */
export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "all") return galleryItems;
    return galleryItems.filter(
      (item) => item.club === filter || item.category === filter
    );
  }, [filter]);

  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % filtered.length));

  return (
    <section id="archive" className="bg-ink py-14 sm:py-20">
      <div className="mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label={site.archive.label}
          lines={[site.archive.heading]}
          intro={site.archive.intro}
          labelAlign="center"
        />

        <FilterBar
          filters={galleryFilters}
          active={filter}
          onChange={(id) => {
            setFilter(id);
            setIndex(null);
          }}
        />

        {filtered.length === 0 ? (
          <p className="mt-10 text-sm font-light text-paper/55">{site.archive.empty}</p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {filtered.map((item, i) => (
              <Reveal
                key={item.id}
                delay={0.03 * (i % 6)}
                className={SPAN[item.orientation] || SPAN.portrait}
              >
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-haspopup="dialog"
                  className="group relative block w-full text-left"
                >
                  <SmartImage
                    src={item.image}
                    alt={item.caption}
                    label={item.caption}
                    ratio={RATIO[item.orientation] || RATIO.portrait}
                    imgClassName="group-hover:scale-[1.05]"
                  />

                  {/* Caption on hover — desktop only, never required to use the site */}
                  <span className="pointer-events-none absolute inset-0 hidden items-end bg-gradient-to-t from-ink/80 to-transparent p-4 opacity-0 transition-opacity duration-500 ease-editorial group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
                    <span className="flex w-full items-baseline justify-between gap-3">
                      <span className="text-xs font-light text-paper">{item.caption}</span>
                      <span className="text-[10px] uppercase tracking-label text-brass">
                        View →
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        items={filtered}
        index={index}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
