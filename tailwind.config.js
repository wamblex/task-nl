/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'], // Scans all HTML files in the root directory
  theme: {
    extend: {
      fontFamily: {
        nonBureau: ['NonBureau', 'sans-serif'], // Add your font here
      },
      letterSpacing: {
        extraWide: '0.3em',
      },
    },
  },
  plugins: [],
};
