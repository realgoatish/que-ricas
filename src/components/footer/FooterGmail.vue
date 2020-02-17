<template>
  <v-btn
    class="white--text"
    flat
    icon
    :aria-label="$static.footerIcons.accessibilityCaption"
    :href="$static.footerIcons.link"
    style="margin-top:8px;"
    rel="nofollow noopener noreferrer"
  >
    <img :src="$static.footerIcons.image.src" />
  </v-btn>

</template>

<static-query>

query {
  footerIcons (path: "/markdowns/footer/icons/gmail"){
    image(
      width: 28
      height: 40
      quality: 10
      fit: contain
    )
    link
    accessibilityCaption
  }
}

</static-query>

<script>

export default {
    name: 'FooterGmail',
}

</script>