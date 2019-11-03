<template lang="pug">

  v-card
    v-card-title(primary-title)
      div(class="container")
        div
          p(class="custom-font") {{ headerText }}
      g-image(
        src="~/../uploads/trabajador.png"
        :alt="imageAlt"
        width="150"
        height="200"
        fit="fill"
      )
      div(class="container")
        div
          p(class="sub-text") {{ mainText }}
            

</template>

<script>
export default {
  name: 'MenuNoticeWidget',
  data () {
    return {
      headerText: "Coming Soon!",
      imageAlt: "Cartoon Venezuelan worker carrying a pickaxe",
      mainText: "Our menu is still under construction..."
    }
  }
}
</script>

<style>

/* @font-face kit by Fonts2u (https://fonts2u.com) */ @font-face {font-family:"Beach Resort";src:url("../../fonts/Beach_Resort.eot?") format("eot"),url("../../fonts/Beach_Resort.woff") format("woff"),url("../../fonts/Beach_Resort.ttf") format("truetype"),url("../../fonts/Beach_Resort.svg#BeachResort") format("svg");font-weight:normal;font-style:normal;}


.custom-font {
  font-family: "Beach Resort";
  font-size: 4em;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.g-image {
  display: block;
  margin: 0 auto;
}

.container {
  display: inline-block;
}

.sub-text {
  font-size: 2.2em;
  text-align: center;
}

</style>