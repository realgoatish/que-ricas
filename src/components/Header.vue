<template lang="pug">
  v-toolbar(class="header")
    g-image(alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width")
    v-spacer
    div(class="text-xs-center hidden-sm-and-down")
      v-btn(outline color="orange" :to="{ path: '/' }") Home
      v-btn(outline color="orange" :to="{ path: '/story' }") Our Story
      v-btn(outline color="orange" :to="{ path: '/menu' }") Menu
      v-btn(outline color="orange" :to="{ path: '/contact' }") Contact Us
    v-menu(class="hidden-md-and-up")
      v-toolbar-side-icon(slot="activator" style="size:100px")
        v-icon(x-large color="#4f86f7") reorder
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
        v-list-tile(:to="{ path: '/contact' }")
          v-list-tile-content
            v-list-tile-title Contact Us
</template>



<script>

export default {
    name: 'Header',
    data () {
        return {
            width: "200px",
            logo: require("~/que-ricas-logo.png")
        }
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
  /* max-width: 100vw; */
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

.v-menu--inline {
  margin-bottom: 10em;
}


</style>