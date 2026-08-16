/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        coal: "#151515",
        paper: "#F4F3EF",
        ash: "#8B8B8B",
        brass: "#B69B68",
      },
      fontFamily: {
        // Headings — soft, airy, unhurried
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        // Everything else — Coolvetica, falling back to Helvetica (its ancestor)
        body: ["Coolvetica", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
        wide2: "0.14em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        page: "1500px",
      },
    },
  },
  plugins: [],
};
