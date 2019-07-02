<template lang="pug">
  layout
    Carousel
    .index-content-container 
      .title.mb-3
    

      v-flex(xs12 sm6 offset-sm3)
        v-card(
          v-for="(post, index) in posts"
          :key="index"
        )
          v-card-title(primary-title)
            div(v-html="post.node.content")
</template>

<page-query>
query {
  allPost {
    totalCount
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
import Carousel from '~/components/Carousel.vue'

export default {
  metaInfo: {
    title: 'Bienvenidos!'
  },
  computed: {
    posts() {
      return this.$page.allPost.edges
    },
    totalCount () {
      return this.$page.allPost.totalCount
    }
  },
  components: {
    Carousel
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

/* .index-content-container {
  padding-left: 20px;
  padding-right: 20px;
} */

</style>
