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
      boxShadow: {
        purple: "0 0 32px 0 rgba(153, 102, 255, 0.3)",
        "purple-xl": "0 0 32px 0 rgba(153, 102, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
