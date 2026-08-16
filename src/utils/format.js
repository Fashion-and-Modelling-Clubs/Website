/**
 * Turns whatever is typed into src/data/events.js into something printable.
 * Accepts "2026-10-17", "October 2026", or "" (which becomes TBA).
 * Nothing is guessed: an empty date stays empty.
 */
export function formatEventDate(value) {
  if (!value) return { label: "", year: "", month: "", isTBA: true };

  const iso = /^\d{4}-\d{2}-\d{2}$/.test(value);
  if (iso) {
    const d = new Date(`${value}T00:00:00`);
    return {
      label: d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      year: String(d.getFullYear()),
      month: d.toLocaleDateString("en-IN", { month: "long" }),
      isTBA: false,
    };
  }

  const yearMatch = value.match(/\b(20\d{2})\b/);
  return {
    label: value,
    year: yearMatch ? yearMatch[1] : "",
    month: "",
    isTBA: false,
  };
}

/** Groups events by year for the calendar. Undated events land in one bucket. */
export function groupByYear(events, fallbackLabel = "To be announced") {
  const groups = new Map();

  events.forEach((event) => {
    const { year } = formatEventDate(event.date);
    const key = year || fallbackLabel;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
  });

  return [...groups.entries()].sort((a, b) => {
    const aNum = Number(a[0]);
    const bNum = Number(b[0]);
    if (Number.isNaN(aNum)) return 1;
    if (Number.isNaN(bNum)) return -1;
    return bNum - aNum;
  });
}
