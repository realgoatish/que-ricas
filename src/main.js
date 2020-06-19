// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Self-host Material Design Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue';
// import InstagramFeed from 'instagramFeed/dist/instagramFeed'



export default function (Vue, { router, head, isClient }) {

  head.meta.push({
    property: 'og:locale',
    content: 'en_US'
  })

  head.meta.push({
    property: 'og:site_name',
    content: 'Que Ricas'
  })

  // head.script.push({
  //   src: 'dist/InstagramFeed.min.js'
  // })

  Vue.use(Vuetify, {
    iconfont: 'md'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

// Object.defineProperty(Vue.prototype, 'InstagramFeed', {
//   value: InstagramFeed
// })
