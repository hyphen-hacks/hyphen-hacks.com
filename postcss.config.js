const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
    process.env.NODE_ENV === "production"? purgecss({
      content: [
        `./public/**/*.html`,
        "./src/**/*.html",
        "./src/**/*.vue"
      ],
      defaultExtractor (content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
      whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/ ]
    }): ""
  ],
}
