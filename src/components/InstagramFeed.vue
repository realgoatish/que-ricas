<template lang="pug">

  v-flex(xs12 sm6 offset-sm3)
    v-card
      v-container( v-bind="{ [`grid-list-md`]: true }" fluid)
        v-layout(row wrap)
          v-flex(
            v-for="(post, index) in $static.allInstagramPhoto.edges"
            :key="index"
            xs4
          )
            v-card(flat tile)
              v-img(
                :src="post.node.display_url"
              )
</template>

<static-query>
query {
  allInstagramPhoto(
    filter: {
      shortcode: {
        in: [
          "By-p7czAsLe"
          "By-r3OZg2lW"
          "BzdN3uUHjWT"
          "BzdOF-0nN1_"
          "Bzj1MXlgqIu"
        ]
      }
    }
  )
  {
    edges {
      node {
        id
        shortcode
        display_url
        thumbnail_src
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>

export default {
  name: 'InstagramFeed'
}

</script>