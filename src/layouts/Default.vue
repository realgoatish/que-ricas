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

// import Header from '~/components/Header.vue'
// import Footer from '~/components/Footer.vue'
import LazyHydrate from 'vue-lazy-hydration';

export default {
  components: {
    LazyHydrate,
    Header: () => import('~/components/Header.vue'),
    Footer: () => import('~/components/Footer.vue')
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

 html {
  background: url('../../static/uploads/palm-bg.jpeg');
  height: 100%; 
  width: 100%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@supports (-webkit-overflow-scrolling: touch) {
  html {
  background-attachment: scroll;
  }
}

</style>
