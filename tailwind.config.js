/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        greenn: "#8ACC50",
        blue_990: "#001342",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  }
 
};
