/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-web': "url('/imgs/bgweb.png')",
      
      }
    },
  },
  plugins: [],
}