<template lang="pug">

  g-image(alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width" height="100px")

</template>

<script>

export default {
  name: 'HeaderLogo',
  data () {
    return {
      width: "300px",
      logo: require("~/../uploads/qrNewLogo.png")
    }
  }
}

</script>

<style>

@media only screen and (min-width: 959px) {
  .header-logo {
    margin-left: 9em!important;
  }
}

</style>
