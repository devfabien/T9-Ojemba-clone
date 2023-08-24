/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkPrimary:'#116355',
        primary: "#8ACC50",
        secondary: "#F1F4F6",
        textColorblack: "#000000",
        textColorwhite: "#FFFFFF",
        backgroundColor: "#001342",
        yellow:"#F4BA00"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        para: ["Montserrat","sans-serif"],
        title: ['Raleway','sans-serif']
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
