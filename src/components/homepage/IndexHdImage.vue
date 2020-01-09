<template lang="pug">
  figure
    g-image(
      src="~/../uploads/honestly-delicious.jpg"
      alt="Honestly Delicious.  Local.  Better ingredients.  Authentic."
      quality="100"
      fit="outside"
    )
</template>

<script>

export default {
  name: 'IndexHdImage'
}

</script>

<style>

div.v-card__title.v-card__title--primary > figure > img {
  box-shadow: 2px 2px 5px 4px #4F85F7, -2px -1px 5px 4px #6DFAFB;
  max-width: 100%;
}

div.v-card__title.v-card__title--primary > figure {
  margin: 0 auto;
}
</style>