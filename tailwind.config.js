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
      widescreen: { raw: '(min-aspect-ratio: 16/9)' },
      iPadW: { raw: '(aspect-ratio: 4/3)' },
      iPadH: { raw: '(aspect-ratio: 3/4)' },
      surfaceProW: { raw: '(aspect-ratio: 3/2)' },
      surfaceProH: { raw: '(aspect-ratio: 2/3)' },
      galaxyW: { raw: '(aspect-ratio: 16/10)' },
      galaxyH: { raw: '(aspect-ratio: 10/16)' },
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
