/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f4c75',
        secondary: '#03f785ff',
        accent: '#1b262c',
        danger: '#c81912',
        warning: '#ff9a3c',
        safe: '#1fab89',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}