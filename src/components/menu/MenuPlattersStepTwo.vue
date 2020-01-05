<template lang="pug">

  article(id="menu-content-wrapper")
    div(
      v-for="(post, index) in $static.allGoogleSheet.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="platters-step-two-grid"
    )
      h3(style="width:fit-content;grid-area:header") {{ post.node.itemName }}
      p(style="width:fit-content;grid-area:text") {{ post.node.description }}
      figure(v-if="post.node.itemName === 'Hangover'" style="grid-area:image")
        a(href="https://www.que-ricas.com/assets/static/hangover-bowl.1b91758.54dbf4efe6f2dfbbd5930c10fb1a3748.jpeg")
          g-image(alt="Beef Hangover Platter" src="~/../uploads/hangover-bowl.jpeg" width="120" height="120" quality="90" fit="outside")
        figcaption(style="font-size:12px;") #[strong Protein:] Beef <br> #[strong Style:] Hangover

            

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

<style>

#platters-step-two-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: 
    ". . . image"
    "header . . image"
    "text text text image"
    ". . . image";
}



</style>

