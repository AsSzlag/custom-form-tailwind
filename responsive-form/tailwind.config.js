/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      h1: '2rem',
    },
    extend: {
      colors: {
        'primary':' #761BE4',
        'secondary': '#6A19CD',
        'main': '#000853',
        "main-bg": "#F0EAF8",
        'active-bg': '#FAF9FA',
        'errror': '#ED4545',
        'error-bg': '#FEECEC',
        'border': '#CBB6E5',
      },
      fontFamily: {
        'main': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

