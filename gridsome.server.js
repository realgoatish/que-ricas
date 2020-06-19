// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const cheerio = require('cheerio')

const nodeExternals = require('webpack-node-externals');

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/, /\.css$/, /\?vue&type=style/]
        })
      ])
    }
  })

  api.loadSource(async ({ addCollection }) => {
    const options = {
      username: 'quericas_haddon',
      typeName: 'InstagramPhoto'
    }

    const INSTAGRAM_URL = 'https://www.instagram.com/';

   function parseInstagramProfileHtml(html) {
     const photos = html.graphql.user.edge_owner_to_timeline_media.edges
      .filter(edge => edge.node)
      .map(edge => edge.node);
     console.log(photos)
     return photos
   }
   

   async function getInstagramProfile(username) {
     const profileHtml = await axios
       .get(`${INSTAGRAM_URL}${username}/?__a=1`)
       .then(({ data }) => data);
       console.log(profileHtml)
      // console.info(profileHtml)
    //  console.info(cheerio.load(profileHtml))
     return parseInstagramProfileHtml(profileHtml)
   }
   

  //  function parseInstagramPhotos(instragamProfile) {
  //    const photos = instragamProfile.graphql.user.edge_owner_to_timeline_media.edges
  //      .filter(edge => edge.node)
  //      .map(edge => edge.node);
  //      console.info(`PHOTOS: ${photos}`)
  //    return photos;
  //  }
   

   async function getInstagramPhotos(username) {
     const profile = await getInstagramProfile(username);
     return profile;
   }

    const contentType = addCollection({
      typeName: options.typeName
    });

    try {
      const photos = await getInstagramPhotos(options.username);
      photos.forEach(photo => {
        contentType.addNode(photo);
      });
    } catch (error) {
      console.error('Error getting instagram photos');
      console.error(error);
    }
  });



  api.loadSource( store  => {
    store.addMetadata('seoImages', {
      homePageImage: require.resolve('./uploads/cartel.jpeg'),
      menuPageImage: require.resolve('./uploads/hangover-bowl.jpeg'),
      storyPageImage: require.resolve('./uploads/sahar-our-story.jpeg')
    })
  })

  // module.exports.defaultOptions = () => ({
  //   typeName: 'InstagramPhoto'
  // });
}
