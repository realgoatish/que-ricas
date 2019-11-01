<template lang="pug">
  layout  
    .index-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          MenuUnderConstruction

    .title.mb-3
    

</template>

<script>

import MenuUnderConstruction from '~/components/menu/MenuUnderConstruction.vue';

export default {
  metaInfo: {
    title: 'Menu - Venezuelan Food in Haddon Township, NJ',
    link: [
      {
        rel: 'canonical', href: 'https://wwww.que-ricas.com/menu'
      }
    ]
  },
  components: {
    MenuUnderConstruction
  }
}
</script>
