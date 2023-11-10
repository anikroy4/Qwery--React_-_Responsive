/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sans': ['Open Sans'],
      },
      letterSpacing: {
        'wide':"6px",
        'tight' : "-0.3px",
        'tighter' : "-0.205px",
      }
    },
  },
  plugins: [],
}
