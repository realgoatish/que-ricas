<template lang="pug">

  v-card(
    flat
    tile
    class="white orange--text text--darken-4"
  )

    v-card-text(
      class="orange--text text--darken-4 pt-3"
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
      LazyHydrate(when-visible)
        FooterFbIcon
      LazyHydrate(when-visible)
        FooterIgIcon

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

import LazyHydrate from 'vue-lazy-hydration';
import FooterFbIcon from '~/components/FooterFbIcon.vue';
import FooterIgIcon from '~/components/FooterIgIcon.vue';


export default {
    name: 'FooterContact',
    components: {
        LazyHydrate,
        FooterFbIcon,
        FooterIgIcon
    }
}

</script>