/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
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
        title: ["Raleway"],
      },
      // keyframes{
      //   anime{
      //     animate-fade-up animate-once animate-duration-1000 animate-delay-100 animate-ease-in-out animate-normal animate-fill-both
      //   }
      // }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
