<template lang="pug">
  layout
    LazyHydrate(
      when-idle
      v-if="userScreenWidth >= 960"
      )
      IndexCarousel(
        class="hidden-sm-and-down"
      )
    LazyHydrate(
      when-idle
      v-if="userScreenWidth <= 959")
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

<page-query>

query {
  metadata {
    seoImages {
      homePageImage
    }
  }
}

</page-query>

<script>

import LazyHydrate from 'vue-lazy-hydration';
import IndexMobileImage from '~/components/homepage/IndexMobileImage.vue';
import IndexCarousel from '~/components/homepage/IndexCarousel.vue';
import IndexHdImage from '~/components/homepage/IndexHdImage.vue';
import IndexTextContent from '~/components/homepage/IndexTextContent.vue';

export default {
  data() {
    return {
      userScreenWidth: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.userScreenWidth = window.innerWidth;
    }
  },
  metaInfo() {
    return {
      title: 'Venezuelan Street Food in Haddon Township, New Jersey',
      link: [
        { rel: 'canonical', href: 'https://www.que-ricas.com/' }
      ],
      meta: [
        { property: 'og:title', content: 'Venezuelan Street Food in Haddon Township' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options' },
        { property: 'og:url', content: 'https://www.que-ricas.com/'},
        { property: 'og:image', content: `https://www.que-ricas.com${this.$page.metadata.seoImages.homePageImage.src}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: 'Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options' }
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "http://schema.org", 
          "@type": "Restaurant", 
          "@id": "https://www.que-ricas.com/#westmont",
          "image": `https://www.que-ricas.com${this.$page.metadata.seoImages.homePageImage.src}`,
          "name": "Que Ricas", 
          "openingHours": [ "Mo-Sa 11:00-20:00" ], 
          "telephone": "856-858-8500",
          "url": "https://www.que-ricas.com",
          "sameAs": [
            "https://www.instagram.com/quericas_haddon/",
            "https://www.facebook.com/quericashaddon/",
            "https://www.yelp.com/biz/que-ricas-haddon-township"
          ],
          "hasMap": "https://goo.gl/maps/QCdVZf88xPeTprvL9",
          "email": "info@que-ricas.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "46 A Haddon Avenue",
            "addressLocality": "Haddon Township",
            "addressRegion": "NJ",
            "postalCode": "08108",
            "addressCountry": "US"
            },
          "servesCuisine": [ "Venezuelan", "South American" ], 
          // "priceRange": "$",
          // "paymentAccepted": "Cash, Credit Card",
          // "currenciesAccepted": "USD",
          // "acceptsReservations": "No",
          "hasMenu": "https://www.que-ricas.com/menu",
          "description": "Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options"
        }
      }]
    }
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

/* COME BACK AND FIX PADDING/MARGIN ISSUES ON THIS PAGE AND IndexTextContent.vue ... implement override padding on .v-card__title and .v-card__title--primary, then use margins if needed on children to clean up mess */

div.index-content-container > main > div > div > div.v-card__title.v-card__title--primary {
  padding: 24px 20px 20px 20px;
}

/* @media only screen and (max-width: 600px) {
  .v-card__title {
  padding: 20px 3px 20px 3px;
  font-size: 14px;
  }
} */

</style>


