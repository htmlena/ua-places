/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray': '#717173',
        'light-gray': '#d3d3d3'
      },
    }
  },
  plugins: [],
}
