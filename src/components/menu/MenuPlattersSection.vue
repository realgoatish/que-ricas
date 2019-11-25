<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Platters
      article
        div(class="menu-section-header")
          p Customize your own delicious platter with your choice of protein and style!
      h2(class="sub-header-text") Step One: Choose Your Protein
      MenuPlattersStepOne
      h2(class="sub-header-text" id="platters-step-two-header") Step Two: Choose Your Style
      MenuPlattersStepTwo

    .title.mb-3
            

</template>

<script>

import MenuPlattersStepOne from '~/components/menu/MenuPlattersStepOne.vue';
import MenuPlattersStepTwo from '~/components/menu/MenuPlattersStepTwo.vue';

export default {
  name: 'MenuPlattersSection',
  components: {
    MenuPlattersStepOne,
    MenuPlattersStepTwo
  }
}

</script>

<style>

h2#platters-step-two-header {
  padding-top: 2em;
}

</style>

