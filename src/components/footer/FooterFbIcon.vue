<template>
  <v-btn
    class="white--text"
    flat
    icon
    :aria-label="$static.footerContent.facebookAccessibilityCaption"
    :href="$static.footerContent.facebookLink"
    target="_blank"
    rel="nofollow noopener noreferrer"
    color="#3b5998"
  >
    <img :src="$static.footerContent.facebookIcon.src" />
  </v-btn>

</template>

<static-query>

query {
  footerContent (path: "/markdowns/footer/contact-info"){
    facebookIcon(
      width: 24
      height: 24
      quality: 10
      fit: contain
    )
    facebookLink
    facebookAccessibilityCaption
  }
}

</static-query>

<script>

export default {
    name: 'FooterFbIcon',
}

</script>

