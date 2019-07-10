<template lang="pug">
  layout
    Carousel
    .index-content-container 
      .title.mb-3
    

      v-flex(xs12 md8 offset-md2)
        v-card(
          v-for="(post, index) in posts"
          :key="index"
        )
          v-card-title(primary-title)
            g-image(
              :src="hdImage"
              class="hd-image-class"
              width="auto"
              height="auto"
              fit="outside"
            )
            div(
              v-html="post.node.content"
              style="font-size:20px;"
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
import Carousel from '~/components/Carousel.vue'

export default {
  metaInfo: {
    title: 'Bienvenidos!'
  },
  data () {
    return {
      hdImage: require("../hd.png")
    }
  },
  computed: {
    posts() {
      return this.$page.allPost.edges
    }
  },
  components: {
    Carousel
  }
}
</script>

<style>

.hd-image-class {
  margin: 0 auto;
}

</style>


