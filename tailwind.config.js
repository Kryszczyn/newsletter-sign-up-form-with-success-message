/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-tomato': 'hsl(4, 100%, 67%)',
        'custom-dark-slate-grey': 'hsl(234, 29%, 20%)',
        'custom-charcoal-grey': 'hsl(235, 18%, 26%)',
        'custom-grey': 'hsl(231, 7%, 60%)'
      },
    },
  },
  plugins: [],
}