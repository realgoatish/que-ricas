<template lang="pug">
  div(
    class="mobile-view-img"
  )
    v-img(
      :src="mobileImage"
      alt="A banquet table of Venezuelan plantains, Arepas, cheeses, black beans and guacamole"
    )
</template>

<script>

export default {
    name: 'IndexMobileImage',
    data () {
        return {
          mobileImage: require('../../static/uploads/table.jpg')
        }
    }
}

</script>

<style lanag="scss" scoped>

.mobile-view-img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0px 0px 15px 15px;
}

</style>