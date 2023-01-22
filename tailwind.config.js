/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "2xl": "2px 4px 6px black",
      },
      rotate: {
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
    },
  },
  plugins: [],
};
