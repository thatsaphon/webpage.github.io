const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "banner-1": "url('./img/Slide1.JPG')",
        "brand-logo": "url('./img/Slide2.JPG')",
        "blue-jsp": "url('./img/Slide4.JPG')",
      }),
    },
    colors: {
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
