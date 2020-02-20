<template lang="pug">

  article(id="menu-content-wrapper")
    div(
      v-for="(item, index) in $static.allMenuContent.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="platters-one-text-content-styles"
    )
      h3 {{ item.node.itemName }}
      h4 {{ item.node.price }}
            

</template>

<static-query>

query {
  allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/platters"
        }
      }
    }, sortBy: "number", skip: 1, limit: 6, order: ASC) {
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
  name: 'MenuPlattersStepOne'
}

</script>

<style>

#platters-one-text-content-styles {
  border-bottom: 1px solid;
  border-color: #eae7db;
}

</style>