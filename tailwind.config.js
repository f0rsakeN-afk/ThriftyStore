/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Roboto Mono,monospace",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
