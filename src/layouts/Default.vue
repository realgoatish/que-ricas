<template lang="pug">
  div(
    data-app
  )
    Header
    div(
      class="parent-content-container"
    )
      slot
    LazyHydrate(when-visible)
      Footer
</template>

<script>

import Header from '~/components/header/Header.vue';
import Footer from '~/components/footer/Footer.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate,
    Header,
    Footer
  }
}

</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<style>

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

body, html {
  max-height: 100vh;
}

.parent-content-container {
  border-radius: 15px 15px 15px 15px;
}

/* Settings for background image with parallax effect */
html {
  background: url('https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/palm-tree-background.jpg');
  height: 100%; 
  width: 100%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* iOS devices are built in such a way that they can't handle the parallax background image well.  This sets a default green background only for those cases */
@supports (-webkit-overflow-scrolling: touch) {
  html {
    background: #05a831;
    background-attachment: scroll;
  }
}

</style>
