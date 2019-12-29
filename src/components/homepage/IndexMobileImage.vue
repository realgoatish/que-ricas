<template lang="pug">
  figure
    g-image(
      src="~/../uploads/cartel.jpeg"
      class="mobile-view-img"
      alt="Que Ricas' Cartel Arepa"
    )
</template>

<script>

export default {
  name: 'IndexMobileImage',
  data () {
    return {
      mobileImage: 'https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/cartel.jpg'
    }
  }
}

</script>

<style>

.mobile-view-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0px 0px 15px 15px;
}

</style>