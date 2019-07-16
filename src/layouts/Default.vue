<template lang="pug">
  div
    Header
    div(class="parent-content-container")
      slot
    Footer
</template>

<script>

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
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

html {
  /* The image used */
  background: url('~@/palm-bg.jpeg');
  /* Full height */
  height: 100%; 
  width: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

@media only screen and (min-device-width : 700px) and (max-device-width : 1024px) {
  html {
    background-attachment: scroll!important;
  }
}

</style>
