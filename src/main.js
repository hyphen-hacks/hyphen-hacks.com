// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.scss')
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,700;0,900;1,400&family=Space+Mono:ital,wght@0,700;1,400&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
}
