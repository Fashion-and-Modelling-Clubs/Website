import { images } from "./images";

/**
 * CLUB DATA
 * =========
 * Both clubs use the same fields and the same components, so whatever you write
 * here is shown at the same size, in the same frame, with the same spacing.
 *
 * Empty strings are deliberate — nothing has been invented. Anything left empty
 * prints "Content to be added." Fill it in and it appears.
 *
 * `keywords` takes three words, e.g. ["Expression", "Confidence", "Movement"].
 */

export const FALLBACK_TEXT = "Content to be added.";

export const clubs = {
  reverie: {
    id: "reverie",
    name: "Reverie",
    tagline: "",
    description: "",
    ideology: "",
    keywords: [],
    instagramHandle: "@reverie_nitj",
    instagram: "https://www.instagram.com/reverie_nitj/",
    cover: images.clubs.reverie.cover,
  },

  merveilleux: {
    id: "merveilleux",
    name: "Merveilleux",
    tagline: "",
    description: "",
    ideology: "",
    keywords: [],
    instagramHandle: "@merveilleux_nitj",
    instagram: "https://www.instagram.com/merveilleux_nitj/",
    cover: images.clubs.merveilleux.cover,
  },
};

/**
 * The order the clubs appear in, set once and used everywhere.
 * Reverse this array if you ever want to swap it — every section follows.
 */
export const clubPair = [clubs.reverie, clubs.merveilleux];

export default clubs;
