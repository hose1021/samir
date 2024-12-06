/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B00',  // Orange color
        'secondary': '#1E3A8A', // Dark blue color
      },
    },
  },
  plugins: [],
} 