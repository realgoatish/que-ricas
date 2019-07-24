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
              div
                g-image(
                  :src="post.node.featuredImage"
                  class="featured-image-class"
                )
                div(
                  v-html="post.node.content"
                  class="text-content-styles"
                )
            .title.mb-3
      .title.mb-3
</template>

<page-query>

query {
  allPost(filter: { title: { in: ["Story Sahar", "Story Dar"] }}
    sort: [{ by: "title", order: DESC}]) {
    edges {
      node {
        featuredImage
        content
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


.featured-image-class {
  max-width: 40%;
  height: auto;
  float: left;
  margin: 20px 20px 10px;
}

.text-content-styles {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 10px;
  margin-left: 18px;
  text-align: left;
  line-height: 2;
}

@media only screen and (max-width: 600px) {
  .v-card__title {
  padding: 20px 20px 20px 0px;
  font-size: 14px;
  }
}

</style>
