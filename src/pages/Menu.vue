<template lang="pug">
  layout  
    .index-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          MenuNoticeWidget

    .title.mb-3
    

</template>

<script>

import MenuNoticeWidget from '~/components/menu/MenuNoticeWidget.vue';

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
    MenuNoticeWidget
  }
}
</script>
