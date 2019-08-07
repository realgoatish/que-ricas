<template lang="pug">
  .index-content-container
    .title.mb-3

    main
      v-flex(xs12 md8 offset-md2)
        v-card
          v-card-title(primary-title)
            g-image(
              src="~/../static/uploads/trabajador.png"
              alt="Image of Que Ricas Menu"
              width="150"
              height="200"
              fit="fill"
            )
    .title.mb-3

</template>

<script>
export default {
  name: 'MenuUnderConstruction',
  data () {
    return {
      menuImage: require('~/../static/uploads/trabajador.png')
    }
  }
}
</script>