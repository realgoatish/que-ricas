<template lang="pug">

  v-card
    v-card-title(primary-title)
      h2(
        class="menu-section-header"
        ) {{ sectionPrimaryTitle }}
      template(v-if="sectionPrimarySubtext")
        article
          div(class="menu-section-header")
            p {{ sectionPrimarySubtext }}
            template(
              v-if="sectionSecondarySubtext"
            )
              p #[strong #[em {{ sectionSecondarySubtext }}]]
      //
        Only render this template for Platters and Churros Sections
      template(v-if="twoSteps")
        h2(
          class="sub-header-text"
        ) {{ stepOneTitle }}
        article
          div(
            v-for="(item, index) in stepOneItems"
            :key="index"
            class="menu-item-text-content-styles"
            id="churros-one-text-content-styles"
          )
            h3 {{ item.node.itemName }}
            h4(
              v-if="item.node.price"
            ) {{ item.node.price }}
            p(
              v-if="item.node.description"
            ) {{ item.node.description }}
        h2(
          class="sub-header-text"
        ) {{ stepTwoTitle }}
        article
          div(
            v-for="(item, index) in stepTwoItems"
            :key="index"
            class="menu-item-text-content-styles"
          )
            h3 {{ item.node.itemName }}
            p(
              v-if="item.node.description"
            ) {{ item.node.description }}
            figure(v-if="item.node.productImage")
              a(
                :href="item.node.productImage.src"
              )
                g-image(:alt="item.node.itemName" :src="item.node.productImage")
              figcaption #[strong Protein:] {{ item.node.productImageProtein }} #[br] #[strong Style:] {{ item.node.productImageStyle }}
      template(v-else)
        article
          div(
            v-for="(item, index) in sectionMenuItems"
            :key="index"
            class="menu-item-text-content-styles"
          )
            h3 {{ item.node.itemName }}
            h4(
              v-if="item.node.price"
            ) {{ item.node.price }}
            p(
              v-if="item.node.description"
            ) {{ item.node.description }}

    .title.mb-3

</template>

<script>
export default {
  name: 'MenuSection',
  props: {
    twoSteps: {
      type: Boolean
    },
    stepOneTitle: {
      type: String
    },
    stepTwoTitle: {
      type: String
    },
    sectionPrimaryTitle: {
      type: String,
      required: true,
    },
    sectionPrimarySubtext: {
      type: String
    },
    sectionSecondarySubtext: {
      type: String
    },
    sectionMenuItems: {
      type: Array
    },
    stepOneItems: {
      type: Array
    },
    stepTwoItems: {
      type: Array
    }
  }
}
</script>

