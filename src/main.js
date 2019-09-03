// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Self-host Material Design Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue';



export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'canonical',
    href: 'https://www.que-ricas.com/'
  })

  head.meta.push({
    name: 'google-site-verification',
    content: '0hx-doVB8lRgf57e9KmtL8yE4fbehtdGAybDCeBNhYs'
  })

  head.meta.push({
    name: 'keywords',
    content: 'arepas, spanish food near me, south jersey spanish food, collingswood spanish food, venezuelan food, traditional venezuelan, south american food, que ricas, quericas, que-ricas'
  })

  Vue.use(Vuetify, {
    iconfont: 'md'
  })
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
