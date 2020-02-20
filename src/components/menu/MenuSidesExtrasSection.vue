<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(
        v-html="$static.menuContent.menuSectionTitle"
        class="menu-section-header"
      )
      article
        div(
          v-for="(item, index) in $static.allMenuContent.edges"
          :key="index"
          class="menu-item-text-content-styles"
        )
          h3 {{ item.node.itemName }}
          h4 {{ item.node.price }}
    .title.mb-3
            

</template>

<static-query>

query {
  menuContent (path: "/markdowns/menu/sides-and-extras/headers") {
    menuSectionTitle
  }
  allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/sides-and-extras"
        }
      }
    }, sortBy: "number", skip: 1, order: ASC) {
    edges {
      node {
        itemName
        price
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'MenuSidesExtrasSection'
}

</script>
