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
    title: 'Owner Biography',
    meta: [
      { property: 'og:title', content: 'Our Story - The Owners of Que Ricas Venezuelan Street Food in Haddon Township' },
      { property: 'og:type', content: 'article' },
      { property: 'og:description', content: 'Our Story - Que Ricas Venezuelan Street Food in Haddon Township.  Local to Haddonfield and Collingswood' },
      { property: 'og:url', content: 'https://www.que-ricas.com/story/'},
      { name: 'description', content: 'Our Story - Que Ricas Venezuelan Street Food in Haddon Township.  Local to Haddonfield and Collingswood' }
    ],
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
