<template lang="pug">
  v-card
    v-card-title(primary-title)
      div
        g-image(
          src="~/../uploads/v-dar-elsie.jpeg"
          id="dar-featured-image-class"
          alt="Sahar's parents, Dar and Elsie Soleymani"
        )
        div(
          v-html="$static.post.content"
          class="story-text-content-styles"
        )
    .title.mb-3
</template>

<static-query>
query {
  post (path: "/posts/story-dar"){
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