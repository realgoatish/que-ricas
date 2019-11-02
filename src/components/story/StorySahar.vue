<template lang="pug">
  v-card
    v-card-title(primary-title)
      div
        g-image(
          src="~/../uploads/sahar-our-story.jpeg"
          id="sahar-featured-image-class"
        )
        div(
          v-html="$static.post.content"
          class="story-text-content-styles"
        )
    .title.mb-3
</template>

<static-query>
query {
  post (path: "/posts/story-sahar"){
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
  margin: 20px 20px 10px;
}

.story-text-content-styles {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 10px;
  margin-left: 18px;
  text-align: left;
  line-height: 1.75;
}

</style>