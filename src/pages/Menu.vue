<template lang="pug">
  layout
    .index-content-container
      .title.mb-3
    

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

</template>

<script>
export default {
  metaInfo: {
    title: 'Menu'
  },
  data () {
    return {
      menuImage: require("../../static/uploads/menu.jpg")
    }
  }
}
</script>
