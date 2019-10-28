<template lang="pug">
  v-flex(xs12)
    v-toolbar(flat color="white" id="igFeedTitleParent")
      v-toolbar-title(class="orange--text text--darken-3") FOLLOW US ON INSTAGRAM
      v-spacer
      LazyHydrate(when-visible)
        FooterIgIcon
    v-container(grid-list-xs fluid xs10)    
      v-layout(row wrap id="igImagesParentContainer")
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
          )
            v-img(
              :src="post.node.display_url"
              :alt="post.node.accessibility_caption"
              class="igImages"
            )


</template>

<static-query>
query {
  allInstagramPhoto(limit: 6, order: ASC) {
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

#igImagesParentContainer > div > a {
  height: 100%;
}
#igImagesParentContainer > div > a :hover {
  opacity: 0.85;
}

#igFeedTitleParent > div > div {
  white-space: pre-wrap;
  font-weight: bold;
}

.igImages {
  max-width: 100%;
  height: 100%;
}

</style>