module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        customBreakPoint: '850px',
        customBreakPoint2: '1280px',
      },
      fontFamily: { customFont: ['Zilla Slab'] },
      width: {
        500: '500px',
        100: '100px',
      },
      colors: {
        customBlackFontColor: '#1F1F1F',
        customWhiteFontColor: '#F2F2F2',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      pictureBg: '#EBEEEF',
      main: '#F2F2F2',
      customBlackBgColor: '#1F1F1F',
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderWidth: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
