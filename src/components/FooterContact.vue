<template lang="pug">

  v-card(
    flat
    tile
    class="white orange--text text--darken-2"
  )

    v-card-text(
      class="orange--text text--darken-2 pt-3"
      v-for="(post, index) in posts"
      :key="index"
    )
      strong(
        v-html="post.node.excerpt"
        style="font-size:18px;"
      )
      br
      br
      div(
        v-html="post.node.content"
        style="font-size:16px;"
      )

    v-card-text
      v-btn(
        v-for="item in icons"
        :key="item.id"
        class="white--text"
        flat
        icon
        :alt="item"
        :href="item.link"
        target="_blank"
        color="orange darken-2"
      )
        font-awesome(:icon="item.config" size="2x")

</template>

<static-query>

query {
  allPost(filter: { excerpt: { eq: "CONTACT" }}) {
    edges {
      node {
        id
        excerpt
        title
        content
        path
      }
    }
  }
}

</static-query>

<script>

export default {
    name: 'FooterContact',
    data () {
        return {
            icons: {
                facebook: {
                    id: 1,
                    config: ['fab', 'facebook'],
                    link: 'https://www.facebook.com/quericashaddon/'
                },
                instagram: {
                    id: 2,
                    config: ['fab', 'instagram'],
                    link: 'https://www.instagram.com/quericas_haddon/?hl=en'
                }
            }
        }
    },
    computed: {
        posts() {
            return this.$static.allPost.edges
        }
    }
}

</script>