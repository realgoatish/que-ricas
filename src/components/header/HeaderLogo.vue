<template lang="pug">
  figure(class="header-logo")
    g-image(alt="Que Ricas Logo" src="~/../uploads/qrNewLogo.png")
</template>

<script>

export default {
  name: 'HeaderLogo'
}

</script>

<style>

@media only screen and (min-width: 959px) {
  .header-logo {
    margin-left: 9em!important;
  }
}

</style>
