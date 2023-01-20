/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "2xl": "2px 4px 6px black",
      },
    },
  },
  plugins: [],
};
