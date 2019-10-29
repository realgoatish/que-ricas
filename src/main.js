// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Self-host Material Design Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue';



export default function (Vue, { router, head, isClient }) {

  head.meta.push({
    property: 'og:locale',
    content: 'en-US'
  })

  head.meta.push({
    property: 'og:type',
    content: 'website'
  })

  head.meta.push({
    property: 'og:site_name',
    content: 'Que Ricas'
  })

  Vue.use(Vuetify, {
    iconfont: 'md'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
