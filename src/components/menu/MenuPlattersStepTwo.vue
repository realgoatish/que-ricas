<template lang="pug">

  article(id="menu-content-wrapper")
    div(
      v-for="(item, index) in $static.allMenuContent.edges"
      :key="index"
      class="menu-item-text-content-styles"
      id="platters-step-two-grid"
    )
      h3 {{ item.node.itemName }}
      p {{ item.node.description }}
      figure(v-if="item.node.productImage")
        a(
          :href="item.node.productImage.src"
          )
          g-image(:alt="item.node.itemName" :src="item.node.productImage")
        figcaption #[strong Protein:] {{ item.node.productImageProtein }} #[br] #[strong Style:] {{ item.node.productImageStyle }}

            

</template>

<static-query>

query {
  allMenuContent(
    filter: { 
      fileInfo: {
        directory: {
          eq: "markdowns/menu/platters"
        }
      }
    }, sortBy: "number", skip: 7, limit: 4, order: ASC) {
    edges {
      node {
        itemName
        description
        productImage(
          width: 120
          height: 120
          quality: 90
          fit: outside
        )
        productImageProtein
        productImageStyle
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

