/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lumen-blue': '#13a4ec',
        'lumen-light': '#f6f7f8',
        'lumen-dark': '#1a2a33',
        'lumen-gold': '#FFD700',
        'lumen-primary': '#13a4ec',
        'lumen-secondary': '#1a2a33',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
