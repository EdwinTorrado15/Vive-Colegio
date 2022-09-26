/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        64: '64px',
      },
      colors: {
        'light-orange': '#FC9D36',
        'water-blue': '#048CD4',
        'limeade2': '#38B00'
      },
      backgroundImage: {
        'login': "url('/src/assets/img/BgLogin.jpg')",
      },
      dropShadow: {
        '3xl': '5px 5px 10px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
