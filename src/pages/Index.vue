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
          v-card(
            v-for="(post, index) in posts"
            :key="index"
          )
            br
            v-card-title(primary-title)
              g-image(
                :src="hdImage"
                alt="Honestly Delicious.  Local.  Better ingredients.  Authentic."
                class="hd-image-class"
                width="auto"
                height="auto"
                fit="outside"
              )
              div(
                v-html="post.node.content"
                class="text-content-styles"
              )

</template>

<page-query>
query {
  allPost(filter: { title: { eq: "Honestly Delicious" }}) {
    edges {
      node {
        id
        title
        content
        path
      }
    }
  }
}
</page-query>

<script>

import LazyHydrate from 'vue-lazy-hydration';
import IndexMobileImage from '~/components/IndexMobileImage.vue';
import IndexCarousel from '~/components/IndexCarousel.vue';

export default {
  metaInfo: {
    title: 'Bienvenidos!'
  },
  data () {
    return {
      hdImage: require("../../static/uploads/hd.png")
    }
  },
  computed: {
    posts() {
      return this.$page.allPost.edges
    }
  },
  components: {
    LazyHydrate,
    IndexCarousel,
    IndexMobileImage
  }
}
</script>

<style>

.hd-image-class {
  margin: 0 auto;
}

.text-content-styles {
  font-size:20px;
  font-family: 'Montserrat', sans-serif;
  margin: 30px;
}

</style>


