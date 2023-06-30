/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7945FF',
        'dark-purple': '#5C2DD5',
        'red': '#FD6687',
        'yellow': '#FFCE67'
      },
      fontFamily: {
        'SpaceG': ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'darkBlack': '0px 10px 0px 0px rgb(4, 2, 9)',
        'darkPurple': '0px 10px 0px 0px rgb(87, 43, 202)',
      },
      screens: {
        lg: '1120px'
      }
    },
  },
  plugins: [],
}