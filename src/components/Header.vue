<template lang="pug">
  v-toolbar(class="header")
    g-image(alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width")
    v-spacer
    div(class="text-md-center hidden-sm-and-down")
      v-btn(outline large color="orange" aria-label="Home Page Icon" :to="{ path: '/' }") Home
      v-btn(outline large color="orange" aria-label="Menu Page Icon" :to="{ path: '/menu' }") Menu
      v-btn(outline large color="orange" aria-label="Our Story Page Icon" :to="{ path: '/story' }") Our Story
    LazyHydrate(when-visible)
      v-menu(class="hidden-md-and-up")
        v-toolbar-side-icon(
          slot="activator"
          aria-label="Hamburger Menu"
        )
          v-icon(
            x-large
            color="black"
          ) reorder
        v-list
          v-list-tile(:to="{ path: '/' }")
            v-list-tile-content
              v-list-tile-title Home
          v-list-tile(:to="{ path: '/story' }")
            v-list-tile-content
              v-list-tile-title Our Story
          v-list-tile(:to="{ path: '/menu' }")
            v-list-tile-content
              v-list-tile-title Menu

</template>



<script>

import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'Header',
    data () {
        return {
            width: "200px",
            logo: require("../../static/uploads/que-ricas-logo.png")
        }
    },
    components: {
      LazyHydrate
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
  height: 240px;
  border-bottom-style: outset;
  border-color: #4f86f7;
}

.header-logo {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 200px;
}

.v-toolbar__content {
  height: 100%;
  width: 100%;
}

.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn--icon {
  margin-right: 0!important;
}

.v-menu--inline {
  margin-bottom: 10em;
}

div.text-md-center.hidden-sm-and-down {
  margin-right: 10em;
}


</style>