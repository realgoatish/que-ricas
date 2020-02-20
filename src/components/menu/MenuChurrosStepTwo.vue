<template lang="pug">

  article
    div(
      class="menu-item-text-content-styles"
      id="churros-two-text-content-styles"
    )
      h3 {{ $static.allMenuContent.edges[0].node.itemName }}
      h3 {{ $static.allMenuContent.edges[1].node.itemName }}
            

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
    }, sortBy: "number", skip: 4, order: ASC) {
    edges {
      node {
        itemName
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'MenuChurrosStepTwo'
}

</script>

<style>

#churros-two-text-content-styles {
  text-align: center;
  padding-bottom: 2em;
}

</style>