<template lang="pug">
  layout
    .story-content-container 
      .title.mb-3
    
      main
        v-flex(xs12 md8 offset-md2)
          StorySahar
          StoryDar
      .title.mb-3
      

</template>

<script>

import StorySahar from '~/components/story/StorySahar.vue'
import StoryDar from '~/components/story/StoryDar.vue'

export default {
  metaInfo: {
    title: 'Our Story - Owner Biography',
    link: [
      { rel: 'canonical', href: 'https://www.que-ricas.com/story'}
    ]
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
