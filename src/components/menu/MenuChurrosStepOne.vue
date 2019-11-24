<template lang="pug">

  article
    div(
      v-for="(post, index) in $static.allGoogleSheet.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="churros-one-text-content-styles"
    )
      h3 {{ post.node.itemName }}
      h4 {{ post.node.price }}
      p {{ post.node.description }}
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      subHeader: {
        in: [
          "Step One: Choose Homemade Churro (vegan)"
        ]
      }
    }
  ) 
  {
    edges {
      node {
        itemName
        description
        price
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