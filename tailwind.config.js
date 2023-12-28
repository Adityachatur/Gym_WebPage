
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ['Roboto', 'sans-serif'],
        "Montserrat": ['Montserrat', 'sans-serif'],
        "Oswald": ['Oswald', 'sans-serif'],
        "Lato": ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
});

