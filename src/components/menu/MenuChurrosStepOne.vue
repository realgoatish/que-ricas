<template lang="pug">

  article
    div(
      v-for="(item, index) in $static.allMenuContent.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="churros-one-text-content-styles"
    )
      h3 {{ item.node.itemName }}
      h4 {{ item.node.price }}
      p {{ item.node.description }}
            

</template>

<static-query>

query {
  allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/churros"
        }
      }
    }, sortBy: "number", skip: 1, limit: 3, order: ASC) {
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
  name: 'MenuChurrosStepOne'
}

</script>

<style>

#churros-one-text-content-styles {
  border-bottom: 1px solid;
  border-color: #eae7db;
}

</style>