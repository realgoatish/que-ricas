<template lang="pug">
  layout
    .story-content-container 
      .title.mb-3
    
      main
        StorySahar
        StoryDar
      .title.mb-3
      

</template>

<script>

import StorySahar from '~/components/StorySahar.vue'
import StoryDar from '~/components/StoryDar.vue'

export default {
  metaInfo: {
    title: 'Our Story!'
  },
  components: {
    StorySahar,
    StoryDar
  }
}
</script>

<style>

@media only screen and (max-width: 600px) {
  .v-card__title {
  padding: 20px 20px 20px 0px;
  font-size: 14px;
  }
}

</style>
