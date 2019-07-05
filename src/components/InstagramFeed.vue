<template lang="pug">

  //- v-flex(xs12 sm6 offset-sm3)
  //-   v-card(
  //-     v-for="(post, index) in $static.allInstagramPhoto.edges"
  //-     :key="index"
  //-   )
  //-     v-card-title(primary-title)
  //-       v-img(
  //-         :src="post.node.display_url"
  //-       )
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
  allInstagramPhoto {
    edges {
      node {
        display_url
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