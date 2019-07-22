<template lang="pug">
  div(
    v-html="$static.post.content"
    class="text-content-styles"
  )
</template>

<static-query>
query {
  post (path: "/posts/home-page-main"){
    content
  }
}
</static-query>

<script>
export default {
    name: 'IndexTextContent'
}
</script>

<style>
.text-content-styles {
  font-size:20px;
  font-family: 'Montserrat', sans-serif;
  margin: 30px;
}
</style>