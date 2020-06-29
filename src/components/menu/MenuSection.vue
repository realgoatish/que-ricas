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
        Template for the Menu Nav which displays links to show the different menu sections onclick
      template(v-if="menuNav")
        article(class="row text-center")
          a(
            v-on:click="showSection"
            v-for="(item, index) in sectionNames"
            :key="index"
            :class="{ highlighted: isActive === item }"
            href="#"
          ) {{ item }}
      //
        For Platters and Churros Sections, this template renders their subsections with menu info
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
      //
        For Starters, Empanadas, Arepas, and Sides & Extras Sections, the below displays each menu item
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
  data() {
    return {
      isActive: null
    }
  },
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
    menuNav: {
      type: Boolean
    },
    sectionNames: {
      type: Array
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
  },
  methods: {
    showSection(item) {
      this.$emit('show-section', item.target.childNodes[0].data)
      this.isActive = item.target.childNodes[0].data
    }
  }
}
</script>

<style scoped>

.row {
  display: flex;
  flex-flow: row wrap;
}

.text-center {
  justify-content: space-around;
  align-items: center;
}

.row a {
  border: 1px solid rgb(245, 124, 0);
  color: #225A8C;
  background-color: inherit;
  transition: background-color .3s cubic-bezier(0.25, 0.8, 0.5, 1);
  border-radius: 2px;
  padding: 0.2rem;
  width: 10rem;
  text-align: center;
  margin-top: 0.7rem;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
}

.row a:hover {
  background-color: #FEEFE6;
}

a.highlighted {
  background-color: #FEEFE6;
}

</style>

