<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(
        v-html="$static.menuContent.menuSectionTitle"
        class="menu-section-header"
      )
      h2(
        v-html="$static.menuContent.menuStepOneTitle"
        class="sub-header-text"
      )
      MenuChurrosStepOne
      h2(
        v-html="$static.menuContent.menuStepTwoTitle"
        class="sub-header-text"
        id="churros-step-two-header"
      )
      MenuChurrosStepTwo

    .title.mb-3
            

</template>

<static-query>

query {
  menuContent (path: "/markdowns/menu/churros/headers") {
    menuSectionTitle
    menuStepOneTitle
    menuStepTwoTitle
  }
}

</static-query>

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