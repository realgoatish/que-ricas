<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(class="menu-section-header") Starters
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
          "Starters"
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
  name: 'MenuStartersSection',
  data () {
    return {
      dataIndexArray: [4,0,3,2,1]
    }
  }
}

</script>
