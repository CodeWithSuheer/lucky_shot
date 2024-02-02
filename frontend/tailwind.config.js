// tailwind.config.js
module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

