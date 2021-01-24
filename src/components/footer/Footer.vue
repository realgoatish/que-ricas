<template lang="pug">
  v-footer(
    class="orange--text text--darken-2 text-xs-center footer"
    height="auto"
  )
    v-container(grid-list-sm style="max-width:1300px")
      v-layout(row wrap)
        v-flex(xs12 md4 order-xs1)
          LazyHydrate(when-visible)
            FooterContact


        v-flex(xs12 md4 order-md2 order-xs3)
          v-img(
            :alt="$static.footerContent.logoAccessibilityCaption"
            :src="$static.footerContent.logoImage"
            width="300px"
            class="mx-auto"
          )
          v-card(flat tile)
            v-card-text(v-html="$static.footerContent.content")
          
      
        //- v-flex(xs12 md4 order-md3 order-xs2)
        //-   //- LazyHydrate(when-idle)
        //-   v-flex(xs12)
        //-     v-toolbar(flat color="white" id="igFeedTitleParent")
        //-       v-toolbar-title(
        //-         class="orange--text text--darken-3"
        //-         v-html="$static.igFeedCta.excerpt"
        //-         )
        //-       v-spacer
        //-       LazyHydrate(when-visible)
        //-         FooterIgIcon
        //-     v-container(grid-list-xs fluid xs10)    
        //-       v-layout(v-if="photos" row wrap id="igImagesParentContainer")
        //-         v-flex(
        //-           v-for="(post, index) in photos.edges"
        //-           :key="index"
        //-           xs4
        //-         )
        //-           v-card(
        //-             flat
        //-             tile
        //-             target="_blank"
        //-             rel="nofollow noopener noreferrer"
        //-             :href="`https://www.instagram.com/p/${post.node.shortcode}/`"
        //-             aria-label="Instagram Image.  Click to visit in a new Tab"
        //-           )
        //-             v-img(
        //-               :src="post.node.display_url"
        //-               :alt="post.node.accessibility_caption"
        //-               class="igImages"
        //-             )
</template>

<static-query>

query {
  footerContent (path: "/markdowns/footer/logo"){
    logoImage(
      width: 480
      height: 480
      quality: 100
      fit: contain
    )
    logoAccessibilityCaption
    content
  }
  igFeedCta: footerContent (path: "/markdowns/footer/instagram-feed"){
    excerpt
  }
}

</static-query>

<script>

import axios from 'axios'

import FooterContact from '~/components/footer/FooterContact.vue';
// import FooterInstagramFeed from '~/components/footer/FooterInstagramFeed.vue';
import FooterIgIcon from '~/components/footer/FooterIgIcon.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'Footer',
    data () {
      return {
        photos: null
      }
    },
    // async mounted () {
    //   try {
    //     const test = await axios.get(
    //       `https://www.instagram.com/quericas_haddon/?__a=1`, { headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'}}
    //     ).then(response => {
    //       console.log(response.data)
    //     })
    //     // Chop off the last 6 photos, since we only want the first 6
    //     // test.graphql.user.edge_owner_to_timeline_media.edges.splice(6, 6)
    //     // this.photos = test.graphql.user.edge_owner_to_timeline_media
    //     // console.log(this.photos)

        
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    components: {
      LazyHydrate,
      FooterContact,
      FooterIgIcon
      // FooterInstagramFeed
    }
}

</script>

<style>

.v-footer {
  background-color: white!important;
  border-top-style: outset;
  border-color: #4f86f7!important;
}

#igImagesParentContainer > div > a {
  height: 100%;
}
#igImagesParentContainer > div > a :hover {
  opacity: 0.85;
}

#igFeedTitleParent > div > div {
  white-space: pre-wrap;
  font-weight: bold;
}

.igImages {
  max-width: 100%;
  height: 100%;
}

</style>

