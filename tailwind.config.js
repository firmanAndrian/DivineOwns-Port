/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1' : '#FFFFFF00', 
        'color2' : '#2E1A1A'
      }
    },
  },
  plugins: [],
}

