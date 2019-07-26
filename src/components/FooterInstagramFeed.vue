<template lang="pug">
  v-flex(xs12)
    v-toolbar(flat color="white")
      v-toolbar-title(class="orange--text text--darken-4") FOLLOW US ON INSTAGRAM
      v-spacer
      v-btn(
        flat
        icon
        color="#F57C00"
        aria-label="Heart Icon"
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
            rel="noopener"
            :href="`https://www.instagram.com/p/${post.node.shortcode}/`"
            aria-label="Instagram Image.  Click to visit in a new Tab"
            class="igImages"
          )
            v-img(
              :src="post.node.display_url"
              :alt="post.node.accessibility_caption"
              style="max-width:100%;"
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
        shortcode
        display_url
        accessibility_caption
      }
    }
  }
}

</static-query>

<script>

export default {
  name: 'FooterInstagramFeed'
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