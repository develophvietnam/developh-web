const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript')

module.exports = {
  important: true,
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js',
  ],
  theme: {
    fontFamily: {
      title: ['Circular Std Black', 'sans-serif'],
      body: ['Circular Std Book', 'sans-serif'],
      highlighted: ['Circular Std Medium', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        extend: {
          primary: '#08085a',
          secondary: '#27e8fb',
        },
      },
      colors: {
        primary: '#08085a',
        secondary: '#27e8fb',
        body: {
          default: 'rgba(8, 8, 90, 0.5)',
          inverted: '#ffffff',
        },
        title: {
          default: '#08085a',
          inverted: '#ffffff',
        },
      },
    },
  },
}