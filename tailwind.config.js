/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      // xs: '360px',
      sm: '480px',
      // md: '768px',
      md: '855px',
      lg: '976px',
      xl: '1200px',
      // xl: '1440px',
      tabletWide: {
        raw: [
          '(aspect-ratio: 3/2)',
          '(aspect-ratio: 4/3)',
          '(aspect-ratio: 16/10)',
          '(aspect-ratio: 1138/712)',
          '(aspect-ratio: 1180/820)',
          '(aspect-ratio: 1366/1024)',
        ],
      },
      tabletTall: {
        raw: [
          '(aspect-ratio: 2/3)',
          '(aspect-ratio: 3/4)',
          '(aspect-ratio: 10/16)',
          '(aspect-ratio: 712/1138)',
          '(aspect-ratio: 820/1180)',
          '(aspect-ratio: 1024/1366)',
        ],
      },
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
    },
  },
  plugins: [],
}
