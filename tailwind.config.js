/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
    },
    fontFamily: {
      porsche: ['Porsche', 'sans-serif'], 
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'white',
          'color': 'transparent',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': 'white',
          'color': 'transparent',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': 'white',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}