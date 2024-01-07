/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      animation: {
        'ltr-linear-infinite': 'ltr-linear-infinite 100s linear ',
      },
      keyframes: {
        'ltr-linear-infinite': {
          'from': { 'background-position': '0 0' },
          'to': { 'background-position': '400% 0%' },
        },
      },
    },
  },
  plugins: [],
}