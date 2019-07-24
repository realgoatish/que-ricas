<template lang="pug">

  v-card(
    flat
    tile
    class="white orange--text text--darken-2"
  )

    v-card-text(
      class="orange--text text--darken-2 pt-3"
    )
      strong(
        v-html="$static.post.excerpt"
        style="font-size:18px;"
      )
      br
      br
      div(
        v-html="$static.post.content"
        style="font-size:16px;"
      )
      v-btn(
        v-for="item in icons"
        :key="item.id"
        class="white--text"
        flat
        icon
        :aria-label="item.a11yTitle"
        :href="item.link"
        target="_blank"
        rel="noopener"
        color="orange darken-2"
    )
        font-awesome(:icon="item.config" size="2x")

</template>

<static-query>

query {
  post (path: "/posts/footer-contact-info"){
    excerpt
    content
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
                    link: 'https://www.facebook.com/quericashaddon/',
                    a11yTitle: "Click to visit Que Ricas on Facebook"
                },
                instagram: {
                    id: 2,
                    config: ['fab', 'instagram'],
                    link: 'https://www.instagram.com/quericas_haddon/?hl=en',
                    a11yTitle: "Click to visit Que Ricas on Instagram"
                }
            }
        }
    }
}

</script>