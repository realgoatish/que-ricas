<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(
        v-html="$static.menuContent.menuSectionTitle"
        class="menu-section-header"
        )
      article
        div(class="menu-section-header")
          p(v-html="$static.menuContent.menuSectionPrimarySubtext")
          p #[strong #[em {{ $static.menuContent.menuSectionSecondarySubtext }}]]
      article
        div(
          v-for="(item, index) in $static.allMenuContent.edges"
          :key="index"
          class="menu-item-text-content-styles"
        )
          h3 {{ item.node.itemName }}
          h4 {{ item.node.price }}
          p {{ item.node.description }}
    .title.mb-3
            

</template>

<static-query>

query {
  menuContent (path: "/markdowns/menu/arepa-lab/headers") {
    menuSectionTitle
    menuSectionPrimarySubtext
    menuSectionSecondarySubtext
  }
  allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/arepa-lab"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
        description
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'MenuArepaLabSection'
}

</script>
