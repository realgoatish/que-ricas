<template>
  <header class="header">
    <g-image alt="Que Ricas Logo" class="header-logo" :src="logo" :width="width" />  
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/story">Our Story</g-link>
      <g-link class="nav__link" to="/menu">Menu</g-link>
      <g-link class="nav__link" to="/contact">Contact Us</g-link>
    </nav>
  </header>
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
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 200px;
  border-radius: 0px 0px 15px 15px;
}

.header-logo {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 200px;
}

.nav {
  margin-right: 37px;
}

.nav__link {
  margin-left: 20px;
}

</style>