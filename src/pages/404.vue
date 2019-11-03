<template lang="pug">
  layout  
    .index-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          ErrorWidget             
      .title.mb-3

</template>

<script>

import ErrorWidget from '~/components/404/ErrorWidget.vue';

export default {
  metaInfo: {
    title: "404 Error | Page Not Found!"
  },
  components: {
    ErrorWidget
  }
}
</script>

<style>

/* @font-face kit by Fonts2u (https://fonts2u.com) */ 
/* @font-face {font-family:"Beach Resort";src:url("../fonts/Beach_Resort.eot?") format("eot"),url("../fonts/Beach_Resort.woff") format("woff"),url("../fonts/Beach_Resort.ttf") format("truetype"),url("../fonts/Beach_Resort.svg#BeachResort") format("svg");font-weight:normal;font-style:normal;}


.custom-font {
  font-family: "Beach Resort";
  font-size: 4em;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.g-image {
  display: block;
  margin: 0 auto;
}

.container {
  display: inline-block;
}

.sub-text {
  font-size: 2.2em;
  text-align: center;
} */

</style>