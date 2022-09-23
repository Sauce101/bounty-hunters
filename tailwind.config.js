/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      // smd: '768px',
      md: '855px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        bhgray: '#7596a5',
        bhbg: '#c8dbe9',
        blackBlack: '#000000',
      },
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
      },
      backgroundImage: {
        bounty: "url('/src/assets/images/Home/wideScape.webp')",
      },
    },
  },
  plugins: [],
}
