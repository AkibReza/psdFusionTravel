/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        164: "41rem",
      },
      colors: {
        primary: "#4a4a4a",
        secondary: "#b2b2b2",
        btnPrimary: "#fbad27",
        btnHover: "#ebbe35",
        navRule: "#8795a9",
        footer: "#616161",
      },
    },
  },
  plugins: [],
};
