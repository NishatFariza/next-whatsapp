/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#02A676",
          DEFAULT: "#008C72",
          dark:"#007369",
        }
      }
    },
  },
  plugins: [],
}
