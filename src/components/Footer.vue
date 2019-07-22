<template lang="pug">
  v-footer(
    class="orange--text text--darken-2 text-xs-center footer"
    height="auto"
  )
    v-container(grid-list-sm style="max-width:1300px")
      v-layout(row wrap)
        v-flex(xs12 md4 order-xs1)
          LazyHydrate(ssr-only)
            FooterContact


        v-flex(xs12 md4 order-md2 order-xs3)
          v-img(alt="Que Ricas Logo" :src="logo" :width="width" class="mx-auto")
          v-card(flat tile)
            v-card-text &copy;2019 - #[strong Que Ricas]
          
      
        v-flex(xs12 md4 order-md3 order-xs2)
          LazyHydrate(when-visible)
            FooterInstagramFeed
</template>

<script>

import FooterContact from '~/components/FooterContact.vue';
import FooterInstagramFeed from '~/components/FooterInstagramFeed.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'Footer',
    data () {
        return {
            logo: require("../../static/uploads/que-ricas-logo.png"),
            width: "300px" 
        }
    },
    components: {
      LazyHydrate,
      FooterContact,
      FooterInstagramFeed
      // FooterContact: () => import('~/components/FooterContact.vue'),
      // FooterInstagramFeed: () => import('~/components/FooterInstagramFeed.vue')
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

