/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#116355",
        yellow0: "#F4BA00",
        primary: "#8ACC50",
        secondary: "#F1F4F6",
        textColorblack: "#000000",
        textColorwhite: "#FFFFFF",
        backgroundColor: "#001342",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        para: ["Montserrat"],
        title: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
