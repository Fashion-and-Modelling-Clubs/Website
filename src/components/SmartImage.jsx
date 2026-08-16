import { useState } from "react";
import { site } from "../data/site";

/**
 * SmartImage
 * ----------
 * Shows the photo if it exists. If the file has not been added yet it shows a
 * styled placeholder that names the exact filename to drop in — never a broken
 * image icon, and never a random stock photo.
 *
 * props:
 *   src         path from src/data/images.js
 *   alt         alt text (required for accessibility)
 *   label       what this image is, shown on the placeholder
 *   ratio       CSS aspect-ratio, e.g. "4 / 5"
 *   eager       true only for the hero image; everything else lazy-loads
 *   tone        "dark" on black sections, "light" on the off-white section
 */
export default function SmartImage({
  src,
  alt,
  label = "",
  ratio = "4 / 5",
  eager = false,
  tone = "dark",
  className = "",
  imgClassName = "",
}) {
  const [status, setStatus] = useState(src ? "loading" : "missing");
  const filename = src ? src.split("/").pop() : "";

  const isLight = tone === "light";
  const frame = isLight
    ? "bg-paper text-ink ring-1 ring-inset ring-ink/12"
    : "bg-coal text-paper ring-1 ring-inset ring-paper/10";
  const tick = isLight ? "bg-ink/25" : "bg-paper/25";

  return (
    <div
      className={`relative overflow-hidden ${frame} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src && status !== "missing" && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          fetchpriority={eager ? "high" : "auto"}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("missing")}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ease-editorial ${
            status === "ready" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}

      {status === "missing" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center">
          {/* corner ticks — a quiet frame instead of a grey box */}
          <span className={`absolute left-3 top-3 h-3 w-px ${tick}`} aria-hidden="true" />
          <span className={`absolute left-3 top-3 h-px w-3 ${tick}`} aria-hidden="true" />
          <span className={`absolute bottom-3 right-3 h-3 w-px ${tick}`} aria-hidden="true" />
          <span className={`absolute bottom-3 right-3 h-px w-3 ${tick}`} aria-hidden="true" />

          <span
            className={`text-[10px] uppercase tracking-label ${
              isLight ? "text-ink/40" : "text-paper/40"
            }`}
          >
            {site.placeholder.line1}
          </span>

          {label && (
            <span className="font-display text-lg font-light leading-tight sm:text-xl">
              {label}
            </span>
          )}

          <span
            className={`text-[10px] uppercase tracking-label ${
              isLight ? "text-ink/40" : "text-paper/40"
            }`}
          >
            {site.placeholder.line3}
          </span>

          {filename && (
            <span
              className={`mt-1 max-w-full truncate text-[10px] tracking-wide ${
                isLight ? "text-ink/35" : "text-paper/30"
              }`}
              title={filename}
            >
              {filename}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
