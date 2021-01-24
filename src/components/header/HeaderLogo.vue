<template lang="pug">
  figure(class="header-logo")
    g-image(alt="Que Ricas Logo" src="~/../uploads/qrNewLogo.png")
    figcaption(class="order-online-link")
      a(href="https://www.clover.com/online-ordering/que-ricas") Click Here to Order Online!
</template>

<script>

export default {
  name: 'HeaderLogo'
}

</script>

<style>

.order-online-link {
  font-size: 18px;
  text-align: center;
}

@media only screen and (min-width: 959px) {
  .header-logo {
    margin-left: 9em!important;
  }
}

</style>
