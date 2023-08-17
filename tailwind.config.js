/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8ACC50",
        secondary: "#F1F4F6",
        textColorblack: "#000000",
        textColorwhite: "#FFFFFF",
        backgroundColor: "#001342",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        para: ["Montserrat"],
        title: ['Raleway','sans-serif']
      },
    },
  },
  plugins: [],
};
