<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Arepa Lab
      article
        div(class="menu-section-header")
          p The staple of Venezuelan cuisine.  These fluffy, hand-made corn arepas are GF, made daily with only three ingredients, and are stuffed with dynamite fillings.
      article
        div(
          v-for="(number, index) in this.dataIndexArray"
          :key="index"
          class="menu-item-text-content-styles"
        )
          h3 {{ $static.allGoogleSheet.edges[number].node.itemName }}
          h4 {{ $static.allGoogleSheet.edges[number].node.price }}
          p {{ $static.allGoogleSheet.edges[number].node.description }}
    .title.mb-3
            

</template>

<static-query>

query {
  allGoogleSheet(
    filter: {
      menuSection: {
        in: [
          "Arepa Lab"
        ]
      }
    }
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
  name: 'MenuArepaLabSection',
  data () {
    return {
      dataIndexArray: [7,6,5,4,8,3,2,1,0]
    }
  }
}

</script>
