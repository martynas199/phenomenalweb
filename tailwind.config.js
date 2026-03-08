/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a65d2f',
        darkbg: '#f5f1e9'
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
