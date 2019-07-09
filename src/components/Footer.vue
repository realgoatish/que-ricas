<template lang="pug">
  v-footer(
    class="white orange--text text--darken-2 text-xs-center"
    height="auto"
  )
    v-container(grid-list-xl style="max-width:1300px")
      v-layout(row wrap)
        v-flex(xs12 md4 order-xs1)
          v-card(
            flat
            tile
            class="white orange--text text--darken-2"
          )

            v-card-text(
                class="orange--text text--darken-2 pt-3"
                )
              strong CONTACT
              br
              br
              span 202 State Street Santa Barbara, California #[br] #[br] 93101 info@loquitasb.com | 805 880 3380 #[br] #[br] Sunday – Thursday 5 pm to 9 pm #[br] #[br] Friday – Saturday 5 pm to 10 pm

            v-card-text
              v-btn(
                v-for="item in icons"
                :key="item.id"
                class="white--text"
                flat
                icon
                :href="item.link"
                target="_blank"
                color="orange darken-2"
              )
                font-awesome(:icon="item.config" size="2x")

        //- v-divider(vertical inset=true)    

        v-flex(xs12 md4 order-md2 order-xs3)
          v-img(alt="Que Ricas Logo" :src="logo" :width="width" class="mx-auto")
          v-card(flat tile)
            v-card-text &copy;2019 - #[strong Que Ricas]
          
        //- v-divider(vertical inset=true)
      
        v-flex(xs12 md4 order-md3 order-xs2)
          InstagramFeed
</template>

<script>

import InstagramFeed from '~/components/InstagramFeed.vue'

export default {
    name: 'Footer',
    data () {
        return {
            logo: require("~/que-ricas-logo.png"),
            width: "300px",
            icons: {
                facebook: {
                    id: 1,
                    config: ['fab', 'facebook'],
                    link: 'https://www.facebook.com/quericashaddon/'
                },
                instagram: {
                    id: 2,
                    config: ['fab', 'instagram'],
                    link: 'https://www.instagram.com/quericas_haddon/?hl=en'
                },
            }
            
        }
    },
    components: {
        InstagramFeed
    }
}

</script>

