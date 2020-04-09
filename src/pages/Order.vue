<template lang="pug">
  layout  
    .menu-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          v-card
            v-card-title(primary-title)
              h2 This is a test
              //- article
              //-   div(
              //-     v-for="(item, index) in $static.allMenuContent.edges"
              //-     :key="index"
              //-     class="menu-item-text-content-styles"
              //-   )
      .title.mb-3
    .title.mb-3
    

</template>

<script>
export default {
  metaInfo() {
  return {
    title: 'Order Online',
    meta: [
      { name: 'robots', content: 'noindex' }
    ]}
  }
}
</script>