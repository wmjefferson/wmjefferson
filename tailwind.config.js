/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        serif: ['DM Serif Text', 'serif'],
      },
    },
  },
  plugins: [],
}