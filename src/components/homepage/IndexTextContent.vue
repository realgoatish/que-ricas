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
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  /* margin: 10px 12px 0px 12px; */
  text-align: left;
  line-height: 1.75;
}

h1, h2 {
  text-align: center;
  color: #225A8C;
  text-shadow: 1px 1px 2px #4F85F7;
}

</style>