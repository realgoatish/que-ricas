<template lang="pug">
  div(
    class="mobile-view-img"
  )
    v-img(
      :src="mobileImage"
    )
</template>

<script>

export default {
    name: 'MobileHomepageImage',
    data () {
        return {
          mobileImage: require('../../static/uploads/table.jpg')
        }
    }
}

</script>

<style>

.mobile-view-img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 0px 0px 15px 15px;
}

</style>