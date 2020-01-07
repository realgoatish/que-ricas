<template lang="pug">

  article(id="menu-content-wrapper")
    div(
      v-for="(post, index) in $static.allGoogleSheet.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="platters-step-two-grid"
    )
      h3 {{ post.node.itemName }}
      p {{ post.node.description }}
      figure(v-if="post.node.itemName === 'Hangover'")
        a(href="https://www.que-ricas.com/assets/static/hangover-bowl.1b91758.54dbf4efe6f2dfbbd5930c10fb1a3748.jpeg")
          g-image(alt="Beef Hangover Platter" src="~/../uploads/hangover-bowl.jpeg" width="120" height="120" quality="90" fit="outside")
        figcaption #[strong Protein:] Beef #[br] #[strong Style:] Hangover

            

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

/* This ID #platters-step-two-grid is being added to all Menu Items in the Platters Step Two Section.  Temporary hack until we start adding images to other sections and figure out the best way to organize styles for those sections.  As it stands right now these styles may not be able to be dumped into the main class .menu-item-text-content-styles on the page-level CSS.  I'll figure it out sometime soon when I'm not so tired :) */

#platters-step-two-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: 
    ". . . image"
    "header header . image"
    "text text text image"
    ". . . image";
}

#platters-step-two-grid > figure > a > img {
  border-radius: 10px;
}

#platters-step-two-grid > figure {
  margin: 0px 0px 5px 5px;
  grid-area: image;
}

#platters-step-two-grid > figure > figcaption {
  font-size: 12px;
  line-height: 1.4;
}

#platters-step-two-grid > h3 {
  width: fit-content;
  grid-area: header;
}

#platters-step-two-grid > p {
  width: fit-content;
  grid-area: text;
}


</style>

