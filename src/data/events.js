import { images } from "./images";

/**
 * EVENTS  —  "The stage"
 * ======================
 * No dates, times, venues or hosts have been invented. Anything unknown stays
 * "" and prints as TBA.
 *
 * TO ADD AN EVENT: copy a block, change the values, save. The calendar, the
 * filters and the pop-up all update by themselves.
 *
 *   {
 *     id: "unique-slug",
 *     title: "Event name",
 *     date: "",           // "2026-10-17" or "October 2026"; "" shows TBA
 *     time: "",           // "7:00 PM"
 *     venue: "",
 *     type: "cultural",   // fashion | performance | cultural | special
 *     tags: ["night"],    // extra filter tags
 *     club: "",           // "reverie" | "merveilleux" | "" if joint
 *     host: "",
 *     performance: "",
 *     image: images.events.yourEvent,   // add the path in images.js too
 *     description: "",
 *     instagram: ""
 *   }
 *
 * Empty fields are not shown in the pop-up at all, so a half-filled event still
 * looks finished.
 */

export const events = [
  {
    id: "bollywood-night",
    title: "Bollywood Night",
    date: "",
    time: "",
    venue: "",
    type: "cultural",
    tags: ["night", "performance"],
    club: "",
    host: "",
    performance: "",
    image: images.events.bollywoodNight,
    description: "",
    instagram: "",
  },
  {
    id: "fashion-night",
    title: "Fashion Night",
    date: "",
    time: "",
    venue: "",
    type: "fashion",
    tags: ["night", "performance"],
    club: "",
    host: "",
    performance: "",
    image: images.events.fashionNight,
    description: "",
    instagram: "",
  },
];

/** The filter row. Add a line here to add a filter. */
export const eventFilters = [
  { id: "all", label: "All" },
  { id: "fashion", label: "Fashion" },
  { id: "cultural", label: "Cultural" },
  { id: "performance", label: "Performance" },
  { id: "night", label: "Night events" },
];

export default events;
