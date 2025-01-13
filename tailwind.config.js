/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // Tüm Tailwind sınıflarına !important ekler
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
