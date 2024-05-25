/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'carmo': 'Cormorant Garamond',
      'styledFont': 'Lobster'
    },
    extend: {
      colors:{
        "myGrean":"[#27AE60]"
      }
    },

  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}