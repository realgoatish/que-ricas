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

div.v-card__title.v-card__title--primary > img {
  /* border: 2px solid #4F85F7; */
  box-shadow: 2px 2px 5px 4px #4F85F7, -2px -1px 5px 4px #6DFAFB;
}

.hd-image-class {
  margin: 0 auto;
}
</style>