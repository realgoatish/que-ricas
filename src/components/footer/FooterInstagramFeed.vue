<template lang="pug">
  v-flex(xs12)
    v-toolbar(flat color="white")
      v-toolbar-title(class="orange--text text--darken-3" style="font-weight:bold;") FOLLOW US ON INSTAGRAM
      v-spacer
      LazyHydrate(when-visible)
        FooterIgIcon
    v-container(grid-list-xs fluid xs10)    
      v-layout(row wrap)
        v-flex(
          v-for="(post, index) in $static.allInstagramPhoto.edges"
          :key="index"
          xs4
        )
          v-card(
            flat
            tile
            target="_blank"
            rel="noopener"
            :href="`https://www.instagram.com/p/${post.node.shortcode}/`"
            aria-label="Instagram Image.  Click to visit in a new Tab"
            class="igImages"
          )
            v-img(
              :src="post.node.display_url"
              :alt="post.node.accessibility_caption"
              style="max-width:100%;"
            )


</template>

<static-query>
query {
  allInstagramPhoto(
    filter: {
      shortcode: {
        in: [
          "B1rMbjunwZh"
          "By-r3OZg2lW"
          "B1kl8AGHPy3"
          "Bz09MVwnT1O"
          "B0Ka7K3Ht5A"
          "Bzj1MXlgqIu"
        ]
      }
    }
  )
  {
    edges {
      node {
        shortcode
        display_url
        accessibility_caption
      }
    }
  }
}

</static-query>

<script>

import LazyHydrate from 'vue-lazy-hydration';
import FooterIgIcon from '~/components/footer/FooterIgIcon.vue';

export default {
  name: 'FooterInstagramFeed',
  components: {
    LazyHydrate,
    FooterIgIcon
  }
}

</script>

<style>

.v-toolbar__title {
  white-space: pre-wrap!important;
}

.igImages :hover {
  opacity: 0.85;
}

</style>