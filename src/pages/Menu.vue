<template lang="pug">
  layout  
    .index-content-container
      .title.mb-3

      main
        v-flex(xs12 md8 offset-md2)
          MenuStartersSection
          MenuEmpanadasSection
          MenuArepaLabSection
          MenuPlattersSection
          MenuChurrosSection
          MenuSidesExtrasSection

    .title.mb-3
    

</template>

<script>

import MenuStartersSection from '~/components/menu/MenuStartersSection.vue';
import MenuEmpanadasSection from '~/components/menu/MenuEmpanadasSection.vue';
import MenuArepaLabSection from '~/components/menu/MenuArepaLabSection.vue';
import MenuSidesExtrasSection from '~/components/menu/MenuSidesExtrasSection.vue';
import MenuPlattersSection from '~/components/menu/MenuPlattersSection.vue';
import MenuChurrosSection from '~/components/menu/MenuChurrosSection.vue';


export default {
  metaInfo: {
    title: 'Menu',
    meta: [
      { property: 'og:title', content: 'Haddon Township Venezuelan Street Food Menu' },
      { property: 'og:type', content: 'article' },
      { property: 'og:description', content: 'Haddon Township Venezuelan Street Food Menu.  Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love' },
      { property: 'og:url', content: 'https://www.que-ricas.com/menu'},
      { property: 'og:image', content: 'https://res.cloudinary.com/caribou-images/image/upload/q_auto,f_auto/hangver-bowl.jpg' },
      { name: 'description', content: 'Haddon Township Venezuelan Menu.  Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love'}
    ],
    link: [
      {
        rel: 'canonical', href: 'https://wwww.que-ricas.com/menu'
      }
    ]
  },
  components: {
    MenuStartersSection,
    MenuEmpanadasSection,
    MenuArepaLabSection,
    MenuSidesExtrasSection,
    MenuPlattersSection,
    MenuChurrosSection
  }
}
</script>

<style>

.menu-section-header {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5em;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.sub-header-text {
  font-style: italic;
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  padding-top: 1em;
}

.menu-item-text-content-styles {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid;
  border-color: #eae7db;
  margin-top: 10px;
  margin-left: 18px;
  margin-right: 18px;
  text-align: left;
  line-height: 1.75;
}

.menu-item-text-content-styles:last-child {
  border-bottom: none;
}

article {
  width: 100%;
}

</style>
