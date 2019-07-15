<template lang="pug">
  div(
    class="mobile-view-img hidden-md-and-up"
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
          mobileImage: require('../table.jpg')
        }
    }
}

</script>

<style>

.mobile-view-img {
  width: 100%;
  height: 400px;
  display: block;
  border-radius: 0px 0px 15px 15px;
}

</style>