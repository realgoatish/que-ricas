<template lang="pug">
  layout
    .index-content-container
      .title.mb-3
    
      main
        v-flex(xs12 md8 offset-md2)
          v-card
            v-card-title(primary-title)
              v-img(
                :src="menuImage"
                alt="Image of Que Ricas Menu"
                width="auto"
                height="auto"
                fit="fill"
              )
      .title.mb-3

</template>

<script>
export default {
  metaInfo: {
    title: 'Menu'
  },
  data () {
    return {
      menuImage: 'https://res.cloudinary.com/caribou-images/image/upload/v1563934645/menu_ctermw.jpg'
    }
  }
}
</script>
