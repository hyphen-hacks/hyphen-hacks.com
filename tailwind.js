module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#E09215",
          darker: "#85560e"
        },
        gray: {
          default: "#191919",
          lighter: "#333333",
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
