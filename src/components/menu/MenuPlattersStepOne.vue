<template lang="pug">

  article(id="menu-content-wrapper")
    div(
      v-for="(post, index) in $static.allGoogleSheet.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="platters-one-text-content-styles"
    )
      h3 {{ post.node.itemName }}
      h4 {{ post.node.price }}
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      subHeader: {
        in: [
          "Step One: Choose Your Protein"
        ]
      }
    }, order: ASC
  ) 
  {
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