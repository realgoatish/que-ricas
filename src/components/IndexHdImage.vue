<template lang="pug">
  g-image(
    :src="hdImage"
    alt="Honestly Delicious.  Local.  Better ingredients.  Authentic."
    class="hd-image-class"
    width="auto"
    height="auto"
    fit="outside"
  )
</template>

<script>

export default {
    name: 'IndexHdImage',
    data () {
      return {
        hdImage: 'https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/hd_gdskbd.png'
    }
  }
}

</script>

<style>
.hd-image-class {
  margin: 0 auto;
}
</style>