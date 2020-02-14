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
      storyPageImage(
        quality: 90
        fit: contain
      )
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
      title: 'Meet The Owners Of Que Ricas in Westmont, NJ',
      link: [
        { rel: 'canonical', href: 'https://www.que-ricas.com/story/' }
      ],
      meta: [
        { property: 'og:title', content: 'Meet The Owners Of Que Ricas in Westmont, NJ' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: 'Get to know Sahar and Dar, the owners of Que Ricas Venezuelan Street Food.' },
        { property: 'og:url', content: 'https://www.que-ricas.com/story/' },
        { property: 'og:image', content: `https://www.que-ricas.com${this.$page.metadata.seoImages.storyPageImage.srcset[0].substr(0,76)}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: 'Get to know Sahar and Dar, the owners of Que Ricas Venezuelan Street Food.' }
      ],
      script: [{
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org", 
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://www.que-ricas.com/#website",
              "name": "Que Ricas - Venezuelan Street Food in Haddon Township, NJ",
              "url": "https://www.que-ricas.com/",
              "publisher": {
                "@type": "Restaurant", 
                "@id": "https://www.que-ricas.com/#westmont",
                "name": "Que Ricas", 
                "logo": "https://www.que-ricas.com/assets/static/qrNewLogo.e904f79.819f5522c7cd39ba76ef8cafecbbdede.png",
                "menu": "https://www.que-ricas.com/menu",
                "image": {
                  "@type": "ImageObject",
                  "@id": "https://www.que-ricas.com/#primaryimage"
              },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "11:00",
                    "closes": "20:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "00:00",
                    "closes": "00:00"
                  }
                ], 
                "telephone": "(856)-858-8500",
                "url": "https://www.que-ricas.com",
                "sameAs": [
                  "https://www.instagram.com/quericas_haddon/",
                  "https://www.facebook.com/quericashaddon/",
                  "https://www.yelp.com/biz/que-ricas-haddon-township",
                  "https://www.happycow.net/reviews/que-ricas-haddon-township-191931"
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
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "39.911812",
                  "longitude": "-75.053812"
                },
                "servesCuisine": [ "Venezuelan", "South American" ], 
                "priceRange": "$",
                "paymentAccepted": "Cash, Credit Card",
                "currenciesAccepted": "USD",
                "acceptsReservations": "No",
                "description": "Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options"
              }
            },
            {
              "@type": "ImageObject",
              "@id": "https://www.que-ricas.com/story/#primaryimage",
              "url": `https://www.que-ricas.com${this.$page.metadata.seoImages.storyPageImage.src}`
            },
            {
              "@type": "WebPage",
              "@id": "https://www.que-ricas.com/story/#webpage",
              "url": "https://www.que-ricas.com/story/",
              "inLanguage": "en-US",
              "name": "Que Ricas - Owner Biography",
              "isPartOf": {
                "@id": "https://www.que-ricas.com/#website"
              },
              "primaryImageOfPage": {
                "@id": "https://www.que-ricas.com/story/#primaryimage"
              },
              "description": "Get to know Sahar and Dar, the owners of Que Ricas Venezuelan Street Food.  Local to Haddonfield and Collingswood"
            }
          ]
        }
      }]
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

/* 1.7.2020 - Note that this media query isn't working because .story-text-content-styles is setting font to 18px.  If you want to do this font change, swap that class in instead of targeting Vuetify classes */
/* @media only screen and (max-width: 600px) {
  div.story-content-container > main > div > div > div.v-card__title.v-card__title--primary {
  font-size: 14px;
  }
} */
/* 1.8.2020 ^ commented out media query that wasn't working because we probably don't need it.  Delete later if so. */

</style>
