<template>
  <div>
    <Header />
    <div class="parallax">
      <div class="layout">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>

import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}

</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<style>

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

body, html {
  max-height: 100vh;
}

.parallax {
  /* max-height: 100vh; */
  border-radius: 15px 15px 15px 15px;
}

html {
  /* The image used */
  background: url('~@/palm4444.jpg');
  /* Full height */
  height: 100%; 
  width: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}


.layout {
  background-color: white;
  /* background-size: cover; */
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  border-radius: 15px 15px 15px 15px;
  /* padding-left: 20px;
  padding-right: 20px; */
}

</style>
