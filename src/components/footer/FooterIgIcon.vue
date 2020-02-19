<template>
  <v-btn
    class="white--text"
    flat
    icon
    :aria-label="$static.footerContent.instagramAccessibilityCaption"
    :href="$static.footerContent.instagramLink"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    <img :src="$static.footerContent.instagramIcon.src" />
  </v-btn>

</template>

<static-query>

query {
  footerContent (path: "/markdowns/footer/instagram-feed"){
    instagramIcon(
      width: 24
      height: 24
      quality: 10
      fit: contain
    )
    instagramLink
    instagramAccessibilityCaption
  }
}

</static-query>

<script>

export default {
    name: 'FooterIgIcon',
}

</script>