/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      colors: {
        main: "#fd6b2a",
        background: "#121418",
        textGray: "#6f7074",
        headingOrange: "#ea6f38",
      },
    },
  },
  plugins: [],
};
