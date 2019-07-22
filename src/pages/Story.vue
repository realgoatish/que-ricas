<template lang="pug">
  layout
    .story-content-container 
      .title.mb-3
    
      main
        v-flex(xs12 md8 offset-md2)
          v-card(
            v-for="(post, index) in posts"
            :key="index"
          )
            v-card-title(primary-title)
              div(
                v-html="post.node.content"
                class="text-content-styles"
              )
</template>

<page-query>
query {
  allPost(filter: { title: { eq: "Our Story" }}) {
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
export default {
  metaInfo: {
    title: 'Our Story!'
  },
  computed: {
    posts() {
      return this.$page.allPost.edges
    }
  }
}
</script>

<style>

.text-content-styles {
  font-size:20px;
  font-family: 'Montserrat', sans-serif;
}

</style>
