module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'spartan': 'League Spartan'
    },
    extend: {
      colors: {
        'veryDarkBlue': '#1B1D23',
        'darkGrey': '#60636D',
        'mediumGrey': '#7D828F',
        'lightGrey': '#C8CCD8',
        'veryLightGrey': '#EEEFF4',
        'red': '#DF5656'
      },
    },
  },
  plugins: [],
}
