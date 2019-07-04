<template lang="pug">
  layout
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
