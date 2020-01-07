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

<page-query>

query {
  metadata {
    seoImages {
      menuPageImage
    }
  }
}

</page-query>

<script>

import MenuStartersSection from '~/components/menu/MenuStartersSection.vue';
import MenuEmpanadasSection from '~/components/menu/MenuEmpanadasSection.vue';
import MenuArepaLabSection from '~/components/menu/MenuArepaLabSection.vue';
import MenuSidesExtrasSection from '~/components/menu/MenuSidesExtrasSection.vue';
import MenuPlattersSection from '~/components/menu/MenuPlattersSection.vue';
import MenuChurrosSection from '~/components/menu/MenuChurrosSection.vue';


export default {
  metaInfo() {
    return {
      title: 'Menu',
      link: [
        {
          rel: 'canonical', href: 'https://wwww.que-ricas.com/menu/'
        }
      ],
      meta: [
        { property: 'og:title', content: 'Haddon Township Venezuelan Street Food Menu' },
        { property: 'og:type', content: 'article' },
        { property: 'og:description', content: 'Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love' },
        { property: 'og:url', content: 'https://www.que-ricas.com/menu/'},
        { property: 'og:image', content: `https://www.que-ricas.com${this.$page.metadata.seoImages.menuPageImage.src}` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'description', content: 'Haddon Township Venezuelan Street Food Menu.  Whether you are in Collingswood, Audubon, Cherry Hill, Haddonfield or Pennsauken, Que Ricas has South American street food you will love'}
      ]
    }
  //   script: [
  //     { innerHTML: '{ "@context": "http://schema.org", "@type": "Menu", "mainEntityOfPage": "https://www.que-ricas.com/menu", "inLanguage": "English", "offers": { "@type": "Offer"}, "hasMenuSection": [ { "@type": "MenuSection", "name": "Starters", "hasMenuItem": [ { "@type": "MenuItem", "name": "Tajadas", "description": "sweet plantains topped with crema and cotija cheese", "offers": { "@type": "Offer", "price": "$5", "priceCurrency": "USD" }}, { "@type": "MenuItem", "name": "Yuca Fries", "description": "tender, crispy fried yuca wedges"}]}]}'}
  //   ]
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
  padding-bottom: 1em;
}

.menu-item-text-content-styles {
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid;
  border-color: #eae7db;
  margin: 10px 2px 0px 2px;
  text-align: left;
  line-height: 1.75;
}

article>div.menu-section-header {
  font-size: 1.2em;
  padding-left: 18px;
  padding-right: 18px;
}

.menu-item-text-content-styles:last-child {
  border-bottom: none;
}

article {
  width: 100%;
}

</style>
