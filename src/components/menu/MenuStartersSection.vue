<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Starters
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
  allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/starters"
        }
      }
    }, sortBy: "name", order: ASC) {
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
  name: 'MenuStartersSection'
}

</script>
