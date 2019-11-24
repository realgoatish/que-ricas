<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Sides & Extras
      article
        div(
          v-for="(post, index) in $static.allGoogleSheet.edges"
          :key="index"
          class="menu-item-text-content-styles"
        )
          h3 {{ post.node.itemName }}
          h4 {{ post.node.price }}
    .title.mb-3
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      menuSection: {
        in: [
          "Sides & Extras"
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
  name: 'MenuSidesExtrasSection'
}

</script>
