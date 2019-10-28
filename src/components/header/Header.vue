<template lang="pug">
  v-toolbar(class="header")
    LazyHydrate(ssr-only)
      HeaderLogo
    v-spacer
    LazyHydrate(when-idle)
      HeaderRegularMenu
    LazyHydrate(when-idle)
      HeaderHamburger

</template>



<script>

import LazyHydrate from 'vue-lazy-hydration';
import HeaderLogo from '~/components/header/HeaderLogo.vue';
import HeaderRegularMenu from '~/components/header/HeaderRegularMenu.vue';
import HeaderHamburger from '~/components/header/HeaderHamburger.vue';

export default {
    name: 'Header',
    components: {
      LazyHydrate,
      HeaderLogo,
      HeaderRegularMenu,
      HeaderHamburger
    }
}

</script>

<style>

.header {
  background-color: white!important;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  border-bottom-style: outset;
  border-color: #4f86f7;
}

.v-toolbar__content {
  height: 100%;
  width: 100%;
}

.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn--icon {
  margin-right: 0!important;
}

.v-menu--inline {
  margin-bottom: 2em;
}

div.text-md-center.hidden-sm-and-down {
  margin-right: 9em;
}

</style>