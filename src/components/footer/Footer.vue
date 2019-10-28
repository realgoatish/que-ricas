<template lang="pug">
  v-footer(
    class="orange--text text--darken-2 text-xs-center footer"
    height="auto"
  )
    v-container(grid-list-sm style="max-width:1300px")
      v-layout(row wrap)
        v-flex(xs12 md4 order-xs1)
          LazyHydrate(when-visible)
            FooterContact


        v-flex(xs12 md4 order-md2 order-xs3)
          v-img(alt="Que Ricas Logo" :src="logo" :width="width" class="mx-auto")
          v-card(flat tile)
            v-card-text &copy;2019 - #[strong Que Ricas]
          
      
        v-flex(xs12 md4 order-md3 order-xs2)
          LazyHydrate(when-idle)
            FooterInstagramFeed
</template>

<script>

import FooterContact from '~/components/footer/FooterContact.vue';
import FooterInstagramFeed from '~/components/footer/FooterInstagramFeed.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'Footer',
    data () {
        return {
            logo: "https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/que-ricas-logo_zzg9p4.png",
            width: "300px" 
        }
    },
    components: {
      LazyHydrate,
      FooterContact,
      FooterInstagramFeed
    }
}

</script>

<style>

.v-footer {
  background-color: white!important;
  border-top-style: outset;
  border-color: #4f86f7!important;
}

</style>

