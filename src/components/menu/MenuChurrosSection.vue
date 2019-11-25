<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Churros
      h2(class="sub-header-text") Step One: Choose Homemade Churro (vegan)
      MenuChurrosStepOne
      h2(class="sub-header-text" id="churros-step-two-header") Step Two: Choose Dipping Sauce (included)
      MenuChurrosStepTwo

    .title.mb-3
            

</template>

<script>

import MenuChurrosStepOne from '~/components/menu/MenuChurrosStepOne.vue';
import MenuChurrosStepTwo from '~/components/menu/MenuChurrosStepTwo.vue';

export default {
  name: 'MenuPlattersSection',
  components: {
    MenuChurrosStepOne,
    MenuChurrosStepTwo
  }
}

</script>

<style>

h2#churros-step-two-header {
  padding-top: 2em;
}

</style>