/**
 * ACHIEVEMENTS
 * ============
 * Shown inside each club's block. NOTHING HERE HAS BEEN INVENTED — both lists
 * start empty. Only add results a club representative has confirmed.
 *
 *   { year: "2025", event: "Name of the festival", result: "What was achieved" }
 *
 * Newest first. An empty list shows a short neutral note instead.
 */

export const achievements = {
  reverie: {
    club: "reverie",
    achievements: [
      { year: "2026", event: "Utkansh", result: "Showstopper" },
      { year: "2023", event: "Antaragni", result: "Finalist" },
      { year: "2019", event: "Utkansh", result: "Winner" },
      { year: "2019", event: "Techniti", result: "Winner" },
    ],
  },

  merveilleux: {
    club: "merveilleux",
    achievements: [
      { year: "2026", event: "Utkansh", result: "Ms. Nirvana" },
      { year: "2025", event: "Utkansh", result: "Winner" },
      { year: "2024", event: "Utkansh", result: "Winner" },
      { year: "2024", event: "Utkansh / IIT Kanpur", result: "Finalist & Mr. Ritambhara" },
      { year: "2023", event: "Utkansh", result: "Winner" },
      { year: "2019", event: "Utkansh", result: "Winner" },
    ],
  },
};

export default achievements;