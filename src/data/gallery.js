import { images, asset } from "./images";

/**
 * GALLERY  —  "The archive"
 * =========================
 * TO ADD A PHOTO:
 *   1. Put the file in public/assets/images/ (one flat folder, no sub-folders),
 *      named like reverie-gallery-04.jpg
 *   2. Add one object below.
 *   3. Save. The grid, the filters and the lightbox update on their own.
 *
 *   {
 *     id: "rev-004",
 *     club: "reverie",           // "reverie" | "merveilleux" | "" if neither
 *     category: "fashion",       // fashion | performance | backstage | events
 *     orientation: "portrait",   // portrait | landscape | square | panoramic
 *     image: asset("reverie-gallery-04.jpg"),
 *     caption: "Fashion Night"
 *   }
 *
 * `orientation` sets how much room the photo gets in the grid, so faces are
 * never squeezed into the wrong shape:
 *   portrait  3:4, one column      square     1:1, one column
 *   landscape 3:2, two columns     panoramic 21:9, full width
 */

export const galleryItems = [
  {
    id: "rev-001",
    club: "reverie",
    category: "fashion",
    orientation: "portrait",
    image: images.gallery.reverie.one,
    caption: "Reverie — on the ramp",
  },
  {
    id: "mer-001",
    club: "merveilleux",
    category: "fashion",
    orientation: "portrait",
    image: images.gallery.merveilleux.one,
    caption: "Merveilleux — on the ramp",
  },
  {
    id: "rev-002",
    club: "reverie",
    category: "performance",
    orientation: "landscape",
    image: images.gallery.reverie.two,
    caption: "Reverie — on stage",
  },
  {
    id: "mer-002",
    club: "merveilleux",
    category: "performance",
    orientation: "landscape",
    image: images.gallery.merveilleux.two,
    caption: "Merveilleux — on stage",
  },
  {
    id: "evt-001",
    club: "",
    category: "events",
    orientation: "square",
    image: images.gallery.events.bollywood,
    caption: "Bollywood Night",
  },
  {
    id: "evt-002",
    club: "",
    category: "events",
    orientation: "square",
    image: images.gallery.events.fashion,
    caption: "Fashion Night",
  },
  {
    id: "rev-003",
    club: "reverie",
    category: "backstage",
    orientation: "square",
    image: images.gallery.reverie.three,
    caption: "Reverie — before the walk",
  },
  {
    id: "mer-003",
    club: "merveilleux",
    category: "backstage",
    orientation: "square",
    image: images.gallery.merveilleux.three,
    caption: "Merveilleux — before the walk",
  },

];

export const galleryFilters = [
  { id: "all", label: "All" },
  { id: "reverie", label: "Reverie" },
  { id: "merveilleux", label: "Merveilleux" },
  { id: "events", label: "Events" },
  { id: "backstage", label: "Backstage" },
];

export { asset };
export default galleryItems;
