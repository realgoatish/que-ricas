<template lang="pug">
  v-flex(xs12)
    v-toolbar(flat color="white")
      v-toolbar-title(class="orange--text text--darken-2") FOLLOW US ON INSTAGRAM
      v-spacer
      v-btn(
        flat
        icon
        color="pink"
      )
        v-icon favorite
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
            :href="`https://www.instagram.com/p/${post.node.shortcode}/`"
            class="igImages"
          )
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
          "Bz09MVwnT1O"
          "BzdOF-0nN1_"
          "Bzj1MXlgqIu"
          "Bz0-Hoon2dl"
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

<style>

.v-toolbar__title {
  white-space: pre-wrap!important;
}

.igImages :hover {
  opacity: 0.85;
}

</style>