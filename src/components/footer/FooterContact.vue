<template lang="pug">

  v-card(
    flat
    tile
    class="white orange--text text--darken-3"
  )

    v-card-text(
      class="orange--text text--darken-3 pt-3"
    )
      strong(
        v-html="$static.post.excerpt"
        style="font-size:20px;"
      )
      br
      br
      div(
        v-html="$static.post.content"
        style="font-size:17px;"
      )
      LazyHydrate(when-visible)
        FooterFbIcon
      LazyHydrate(when-visible)
        FooterGmail

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
import FooterFbIcon from '~/components/footer/FooterFbIcon.vue';
import FooterGmail from '~/components/footer/FooterGmail.vue';


export default {
    name: 'FooterContact',
    components: {
        LazyHydrate,
        FooterFbIcon,
        FooterGmail
    }
}

</script>

<style>

a {
    color: blue;
    /* text-decoration: none; */
}
a:hover {
    color: #4f86f7;
}

</style>