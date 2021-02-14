module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: 'Rubik, sans-serif'
      },
      container: theme => ({
        padding: theme('padding.4')
      }),
      extend: {
        typography: {
          DEFAULT: {
            css: {
              h1: {
                fontWeight: 'normal'
              }
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}