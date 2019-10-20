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
    meta: [
      { property: 'og:title', content: 'Venezuelan Food in Haddown Township, NJ' },
      { property: 'og: description', content: 'Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options' },
      { property: 'og:url', content: 'https://www.que-ricas.com'},
      { property: 'og:image', content: 'https://www.que-ricas.com/uploads/cartel.JPEG' }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Restaurant", "image": "https://www.que-ricas.com/uploads/que-ricas-logo.png","name": "Que Ricas", "url": "https://www.que-ricas.com", "geo": { "@type": "GeoCoordinates", "latitude": 39.911812, "longitude": -75.053937 }, "email": "info@que-ricas.com", "address": { "@type": "PostalAddress", "streetAddress": "46A Haddon Avenue", "addressLocality": "Haddon Township", "addressRegion": "NJ", "postalCode": "08033", "addressCountry": "US" }, "servesCuisine": [ "Venezuelan", "Latin American", "South American"], "priceRange": "$", "paymentAccepted": "Cash, Credit Card", "currenciesAccepted": "USD", "acceptsReservations": "No", "hasMenu": "https://www.que-ricas.com/menu", "description": "Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options" }', type: 'application/ld+json' }
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


