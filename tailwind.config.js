/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateGrey: "#E5E7EB",
        skyBlue: "#87CEEB",
        darkSkyBlue: "#448EE4"
      },
      fontFamily: {
        mulish: "Mulish",
      },
    },
  },
  plugins: [],
}

