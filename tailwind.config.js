/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A6FA5',    // Calm Blue
        'secondary': '#FFB347',  // Soft Orange
        'accent': '#47B881',     // Mint Green
        'dark': '#333333',
        'medium': '#666666',
        'light': '#999999',
        'off-white': '#F8F9FA',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}