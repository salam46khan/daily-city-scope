/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoTitle :[ 'Berkshire Swash', 'serif'],
        newsTitle :['Playfair Display', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

