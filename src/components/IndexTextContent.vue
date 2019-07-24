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
  /* font-size:20px;
  font-family: 'Montserrat', sans-serif;
  margin: 30px; */
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  margin-top: 10px;
  margin-left: 18px;
  text-align: left;
  line-height: 2;
}

</style>