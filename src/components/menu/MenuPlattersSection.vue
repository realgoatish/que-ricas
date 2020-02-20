<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(
        v-html="$static.menuContent.menuSectionTitle"
        class="menu-section-header"
      )
      article
        div(class="menu-section-header")
          p(v-html="$static.menuContent.menuSectionPrimarySubtext")
      h2(
        v-html="$static.menuContent.menuStepOneTitle"
        class="sub-header-text"
      )
      MenuPlattersStepOne
      h2(
        v-html="$static.menuContent.menuStepTwoTitle"
        class="sub-header-text"
        id="platters-step-two-header"
      )
      MenuPlattersStepTwo

    .title.mb-3
            

</template>

<static-query>

query {
  menuContent (path: "/markdowns/menu/platters/headers") {
    menuSectionTitle
    menuSectionPrimarySubtext
    menuStepOneTitle
    menuStepTwoTitle
  }
}

</static-query>

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

