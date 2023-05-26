/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./*.html"],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
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
