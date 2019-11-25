<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Empanadas
      article
        div(class="menu-section-header")
          p Naturally GF.  Served with cilantro mojo on the side.  Ask about our daily empanada specials!

      article
        div(
          v-for="(post, index) in $static.allGoogleSheet.edges"
          :key="index"
          class="menu-item-text-content-styles"
        )
          h3 {{ post.node.itemName }}
          h4 {{ post.node.price }}
          p {{ post.node.description }}
    .title.mb-3
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      menuSection: {
        in: [
          "Empanadas"
        ]
      }
    },
    order: ASC
  )
  {
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
  name: 'MenuEmpanadasSection'
}

</script>
