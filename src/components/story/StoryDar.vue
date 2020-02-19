<template lang="pug">
  v-card
    v-card-title(primary-title)
      div
        g-image(
          :src="$static.ourStoryContent.image.src"
          id="dar-featured-image-class"
          alt="Sahar's parents, Dar and Elsie Soleymani"
        )
        div(
          v-html="$static.ourStoryContent.content"
          class="story-text-content-styles"
        )
    .title.mb-3
</template>

<static-query>
query {
  ourStoryContent (path: "/markdowns/our-story/dar"){
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
    name: 'StoryDar'
}

</script>

<style>

#dar-featured-image-class {
  max-width: 40%;
  height: auto;
  float: right;
  border-radius: 8px;
  margin: 0px 0px 15px 20px;
}

</style>