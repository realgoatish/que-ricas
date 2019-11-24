<template lang="pug">

  article(id="menu-content-wrapper")
    div(
      v-for="(post, index) in $static.allGoogleSheet.edges"
      :key="index"
      class="menu-item-text-content-styles"
    )
      h3 {{ post.node.itemName }}
      p {{ post.node.description }}
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      subHeader: {
        in: [
          "Step Two: Choose Your Style"
        ]
      }
    }, order: ASC
  ) 
  {
    edges {
      node {
        itemName
        description
      }
    }
  }
}

</static-query>

<script>
export default {
  name: 'MenuPlattersStepTwo'
}

</script>

