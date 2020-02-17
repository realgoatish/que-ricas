<template>
  <v-btn
    class="white--text"
    flat
    icon
    :aria-label="$static.footerIcons.accessibilityCaption"
    :href="$static.footerIcons.link"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    <img :src="$static.footerIcons.image.src" />
  </v-btn>

</template>

<static-query>

query {
  footerIcons (path: "/markdowns/footer/icons/ig"){
    image(
      width: 24
      height: 24
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
    name: 'FooterIgIcon',
}

</script>