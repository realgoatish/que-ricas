// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Que Ricas',
  titleTemplate: 'Que Ricas - %s',
  siteUrl: 'https://www.que-ricas.com',
  permalinks: {
    trailingSlash: true
  },
  host: "0.0.0.0",
  icon: './uploads/que-ricas-logo.png',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: process.env.SHEET_ID,
        apiKey: process.env.GOOGLE_API_KEY
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    // {
    //   use: '@gridsome/plugin-sitemap',
    //   options: {
    //     cacheTime: 600000,
    //     staticUrls: [
    //       {
    //         url: '/assets/static/',
    //         img: [
    //           {
    //             url: '/assets/static/cartel.09b17d9.84cd0cf5572e6dd571ede737e6427cd5.jpeg',
    //             caption: 'chorizo, carmelized peppers, onions, smoked gouda',
    //             title: 'The Cartel Arepa',
    //             geoLocation: 'Haddon Township, New Jersey, USA'
    //           },
    //           {
    //             url: '/assets/static/hangover-bowl.09b17d9.54dbf4efe6f2dfbbd5930c10fb1a3748.jpeg',
    //             caption: 'shredded beef, yuca hash browns, fried egg, cilantro mojo',
    //             title: 'The Shredded Beef Hangover Bowl Platter',
    //             geoLocation: 'Haddon Township, New Jersey, USA'
    //           },
    //           {
    //             url: '/assets/static/sahar-our-story.09b17d9.af141ba626217e0822a79c7598953243.jpeg',
    //             caption: 'Sahar Soleymani',
    //             title: 'Que Ricas Founder Sahar Soleymani',
    //             geoLocation: 'Haddon Township, New Jersey, USA'
    //           },
    //           {
    //             url: '/assets/static/v-dar-elsie.e18b67c.e2c7e697046ee47f7693d2eade00d302.jpg',
    //             caption: 'Dar and Elsie Soleymani',
    //             title: 'Dar and Elsie Soleymani',
    //             geoLocation: 'Haddon Township, New Jersey, USA'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // },
    {
      use: '@zefman/gridsome-source-instagram',
      options: {
        username: 'quericas_haddon',
        typeName: 'InstagramPhoto'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-148334920-1'
      }
    }
  ],
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }
}
