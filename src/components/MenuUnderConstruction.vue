<template lang="pug">
  .index-content-container
    .title.mb-3

    main
      v-flex(xs12 md8 offset-md2)
        v-card
          v-card-title(primary-title)
            div(class="container")
              div
                p(class="custom-font") Coming Soon!
            g-image(
              src="~/../uploads/trabajador.png"
              alt="Image of Que Ricas Menu"
              width="150"
              height="200"
              fit="fill"
            )
            div(class="container")
              div
                p(class="sub-text") Our menu is still under construction...
            
    .title.mb-3

</template>

<script>
export default {
  name: 'MenuUnderConstruction'
}
</script>

<style>

/* @font-face kit by Fonts2u (https://fonts2u.com) */ @font-face {font-family:"Beach Resort";src:url("../fonts/Beach_Resort.eot?") format("eot"),url("../fonts/Beach_Resort.woff") format("woff"),url("../fonts/Beach_Resort.ttf") format("truetype"),url("../fonts/Beach_Resort.svg#BeachResort") format("svg");font-weight:normal;font-style:normal;}


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
  /* width: 100%;
  margin: 0 auto; */
}

.sub-text {
  font-size: 2.2em;
  /* width: 100%; */
  text-align: center;
  /* margin: 0 auto; */
}

</style>