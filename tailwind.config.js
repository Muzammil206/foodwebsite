/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('BG.png')",
        
       },
      fontFamily:{
        'body' : [' "Cormorant Upright", serif '],
        ade : ['Roboto']
      }
    },
  },
  plugins: [],
}
