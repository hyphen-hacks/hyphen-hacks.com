module.exports = {
  theme: {

    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      colors: {
        primary: {
          default: "#E09215",
          darker: "#85560e"
        },
        gray: {
          default: "#191919",
          lighter: "#333333",
          form: "#5C5C5C",
          form_hover: "#515151",
          hover: "#c9c9c9",
          lightest: "#EFEFEF"
        },

      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
