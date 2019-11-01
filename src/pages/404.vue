<template lang="pug">
  layout  
    .index-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          v-card
            v-card-title(primary-title)
              div(class="container")
                div
                  p(class="custom-font") Woops!
              g-image(
                src="~/../uploads/woops-pusheen-cat.png"
                alt="Picture of pusheen cat who put his face through a loaf of bread trying to find a page that doesn't exist"
                width="200"
                height="200"
                fit="fill"
              )
              div(class="container")
                div
                  p(class="sub-text") The server returned a 404 error because this page doesn't exist!
                
      .title.mb-3

</template>

<script>


export default {
  metaInfo: {
    title: '404 Error | Page Not Found!'
  }
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
}

.sub-text {
  font-size: 2.2em;
  text-align: center;
}

</style>