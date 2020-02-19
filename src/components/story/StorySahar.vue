<template lang="pug">
  v-card
    v-card-title(primary-title)
      div
        g-image(
          :src="$static.ourStoryContent.image.src"
          id="sahar-featured-image-class"
          alt="Que Ricas Founder and Head Chef, Sahar Soleymani"
        )
        div(
          v-html="$static.ourStoryContent.content"
          class="story-text-content-styles"
        )
    .title.mb-3
</template>

<static-query>
query {
  ourStoryContent (path: "/markdowns/our-story/sahar"){
    image(
      width: 480
      height: 480
      quality: 90
      fit: contain
    )
    content
  }
}

</static-query>

<script>

export default {
    name: 'StorySahar'
}

</script>

<style>

#sahar-featured-image-class {
  max-width: 40%;
  height: auto;
  float: left;
  border-radius: 8px;
  margin: 0px 20px 15px 0px;
}

</style>