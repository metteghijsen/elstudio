/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",  // This should point to all your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    // Include other file types as necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure the name matches the font-family in your @font-face
        oswald: ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
}
