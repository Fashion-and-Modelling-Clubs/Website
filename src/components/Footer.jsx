import { site } from "../data/site";
import { clubPair } from "../data/clubs";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="grain relative border-t border-paper/10 bg-ink pb-9 pt-16 sm:pt-20">
      <div className="relative mx-auto max-w-page px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow">{site.brand.line1}</p>
          <h2 className="display mt-3 text-[clamp(2.4rem,10vw,8rem)]">
            <span className="block">Fashion</span>
            <span className="block">
              <span className="font-display italic text-brass">&amp;</span> Modelling
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-paper/10 pt-8 lg:grid-cols-4">
          <div>
            <h3 className="eyebrow">Sections</h3>
            <ul className="mt-4 space-y-2">
              {site.footer.columns.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="link-underline text-sm font-light text-paper/70 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Instagram</h3>
            <ul className="mt-4 space-y-2">
              {clubPair.map((club) => (
                <li key={club.id}>
                  <a
                    href={club.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm font-light text-paper/70 hover:text-paper"
                  >
                    {club.instagramHandle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="eyebrow">Institute</h3>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-paper/70">
              {site.brand.institute}
            </p>
            <p className="mt-3 max-w-sm text-xs font-light leading-relaxed text-ash">
              {site.footer.note}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-paper/10 pt-5 text-[10px] uppercase tracking-label text-ash">
          © {site.brand.year} NITJ Fashion &amp; Modelling
        </p>
      </div>
    </footer>
  );
}
