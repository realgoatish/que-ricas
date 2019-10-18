<template lang="pug">
  layout
    LazyHydrate(when-idle)
      IndexCarousel(
        class="hidden-sm-and-down"
      )
    LazyHydrate(when-idle)
      IndexMobileImage(
        class="hidden-md-and-up"
      )
    .index-content-container 
      .title.mb-3
    
      main
        v-flex(xs12 md8 offset-md2)
          v-card
            br
            v-card-title(primary-title)
              LazyHydrate(ssr-only)
                IndexHdImage
              LazyHydrate(ssr-only)
                IndexTextContent
      .title.mb-3

</template>

<script>

import LazyHydrate from 'vue-lazy-hydration';
import IndexMobileImage from '~/components/IndexMobileImage.vue';
import IndexCarousel from '~/components/IndexCarousel.vue';
import IndexHdImage from '~/components/IndexHdImage.vue';
import IndexTextContent from '~/components/IndexTextContent.vue';

export default {
  metaInfo: {
    title: 'Venezuelan Food in Haddon Township, New Jersey',
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Restaurant", "name": "Que Ricas", "url": "https://www.que-ricas.com", "latitude": "39.9120391", "longitude": "-75.0561297", "email": "info@que-ricas.com", "address": { "@type": "PostalAddress", "streetAddress": "46A Haddon Avenue", "addressLocality": "Haddon Township", "addressRegion": "NJ", "postalCode": "08033", "addressCountry": "US" }, "servesCuisine": "South American", "priceRange": "$$", "hasMenu": "https://www.que-ricas.com/menu", "description": "Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options" }', type: 'application/ld+json' }
    ]
  },
  components: {
    LazyHydrate,
    IndexCarousel,
    IndexMobileImage,
    IndexHdImage,
    IndexTextContent
  }
}
</script>

<style>

@media only screen and (max-width: 600px) {
  .v-card__title {
  padding: 20px 16px 20px 3px;
  font-size: 14px;
  }
}

</style>


