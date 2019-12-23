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

<page-query>

query {
  metadata {
    seoImages {
      storyPageImage
    }
  }
}

</page-query>

<script>

import StorySahar from '~/components/story/StorySahar.vue'
import StoryDar from '~/components/story/StoryDar.vue'

export default {
  metaInfo() {
    return {
      title: 'Owner Biography',
      link: [
        { rel: 'canonical', href: 'https://www.que-ricas.com/story'}
      ],
      meta: [
        { property: 'og:title', content: 'Our Story - Que Ricas' },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: 'Get to know Sahar and Dar, the owners of Que Ricas Venezuelan Street Food.  Local to Haddonfield and Collingswood' },
        { property: 'og:url', content: 'https://www.que-ricas.com/story/'},
        { property: 'og:image', content: `https://www.que-ricas.com${this.$page.metadata.seoImages.storyPageImage.src}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: 'Get to know Sahar and Dar, the owners of Que Ricas Venezuelan Street Food.  Local to Haddonfield and Collingswood' }
      ]
    }
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
