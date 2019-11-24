<template lang="pug">

  article
    div(
      class="menu-item-text-content-styles"
      id="churros-two-text-content-styles"
    )
      h3 {{ $static.allGoogleSheet.edges[0].node.itemName }}
      h3 {{ $static.allGoogleSheet.edges[1].node.itemName }}
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      subHeader: {
        in: [
          "Step Two: Choose Dipping Sauce (included)"
        ]
      }
    }
  ) 
  {
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
}

</style>