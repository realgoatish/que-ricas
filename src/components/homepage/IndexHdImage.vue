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
      hdImage: 'https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto,w_328/honestly-delicious.jpg'
    }
  }
}

</script>

<style>
.hd-image-class {
  margin: 0 auto;
}
</style>