/**
 * IMAGE MANIFEST
 * ==============
 * Every photo on the website lives in ONE folder:
 *
 *     public/assets/images/
 *
 * No sub-folders. Drop all your photos in there using the filenames listed in
 * public/assets/images/README.md and the site picks them up.
 *
 * To change a photo you never open a component — replace the file, keep the
 * name, refresh.
 *
 * asset() prefixes each path with Vite's base URL so images keep working when
 * the site is served from https://user.github.io/nitj-fashion/ rather than the
 * domain root. Never write "/assets/images/..." by hand.
 *
 * JPG, PNG, WebP and AVIF all work. Prefer WebP — much smaller files. If you
 * save as .webp, change the extension on that one line here.
 */

export const asset = (file) => `${import.meta.env.BASE_URL}assets/images/${file}`;

export const images = {
  hero: {
    main: asset("hero-main.jpg"),
  },

  clubs: {
    reverie: { cover: asset("reverie-club-cover.jpg") },
    merveilleux: { cover: asset("merveilleux-club-cover.jpg") },
  },

  coordinators: {
    faculty: {
      shefali: asset("faculty-shefali-arora-chouhan.jpg"),
      manjeet: asset("faculty-manjeet-singh.jpg"),
    },
    students: {
      reverie: { vikram: asset("reverie-student-coordinator-vikram-singh.jpg") },
      merveilleux: { pushpendra: asset("merveilleux-student-coordinator-pushpendra.jpg") },
    },
  },

  events: {
    bollywoodNight: asset("event-bollywood-night.jpg"),
    fashionNight: asset("event-fashion-night.jpg"),
  },

  gallery: {
    reverie: {
      one: asset("reverie-gallery-01.jpg"),
      two: asset("reverie-gallery-02.jpg"),
      three: asset("reverie-gallery-03.jpg"),
    },
    merveilleux: {
      one: asset("merveilleux-gallery-01.jpg"),
      two: asset("merveilleux-gallery-02.jpg"),
      three: asset("merveilleux-gallery-03.jpg"),
    },
    events: {
      bollywood: asset("event-gallery-bollywood-01.jpg"),
      fashion: asset("event-gallery-fashion-01.jpg"),
    },
    backstage: {
      one: asset("backstage-01.jpg"),
      two: asset("backstage-02.jpg"),
    },
  },

  /** Preview image shown when the site link is shared on WhatsApp, Instagram, X. */
  shared: {
    ogCover: asset("og-cover.jpg"),
  },
};

export default images;
