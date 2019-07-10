<template lang="pug">
  header(class="header")
    g-image(alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width")
    div(class="text-xs-center")
      v-btn(outline color="orange" :to="{ path: '/' }") Home
      v-btn(outline color="orange" :to="{ path: '/story' }") Our Story
      v-btn(outline color="orange" :to="{ path: '/menu' }") Menu
      v-btn(outline color="orange" :to="{ path: '/contact' }") Contact Us
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
  background-color: white;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 200px;
  border-bottom-style: outset;
  border-color: #4f86f7;
}

.header-logo {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 200px;
}

</style>