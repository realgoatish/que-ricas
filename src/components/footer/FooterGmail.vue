<template>
  <v-btn
    class="white--text"
    flat
    icon
    :aria-label="$static.footerContent.gmailAccessibilityCaption"
    :href="$static.footerContent.gmailLink"
    style="margin-top:8px;"
    rel="nofollow noopener noreferrer"
  >
    <img :src="$static.footerContent.gmailIcon.src" />
  </v-btn>

</template>

<static-query>

query {
  footerContent (path: "/markdowns/footer/contact-info"){
    gmailIcon(
      width: 28
      height: 40
      quality: 10
      fit: contain
    )
    gmailLink
    gmailAccessibilityCaption
  }
}

</static-query>

<script>

export default {
    name: 'FooterGmail',
}

</script>