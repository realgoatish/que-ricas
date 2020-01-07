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
        { rel: 'canonical', href: 'https://www.que-ricas.com/story/' }
      ],
      meta: [
        { property: 'og:title', content: 'Our Story - Que Ricas' },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: 'Get to know Sahar and Dar, the owners of Que Ricas Venezuelan Street Food.  Local to Haddonfield and Collingswood' },
        { property: 'og:url', content: 'https://www.que-ricas.com/story/' },
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

.story-text-content-styles {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  line-height: 1.75;
}

/* uber-specificity to override Vuetify defaults and control content layout with padding, then only use a margin or two as needed on child elements */
div.story-content-container > main > div > div > div.v-card__title.v-card__title--primary {
  padding: 24px 20px 20px 20px;
}

/* Vuetify default style: 'margin-bottom: 16px;' override; plus adding negative top margin to compensate for 1.75 line-height and pull text even with img */
div.story-text-content-styles > p {
  margin: -5px 0px 0px 0px;
}

/* 1.7.2020 - Note that this media query isn't working because .story-text-content-styles is setting font to 18px.  If you want to do this font change, swap that in instead of targeting Vuetify classes */
@media only screen and (max-width: 600px) {
  div.story-content-container > main > div > div > div.v-card__title.v-card__title--primary {
  font-size: 14px;
  }
}

</style>
