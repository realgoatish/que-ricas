// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Que Ricas',
  siteDescription: 'Authentic South American fare with a funky vibe.  Featuring Empanadas, Arepas, Pabellon Bowls, Churros, local specialties, lunch specials, gluten free and vegan options',
  siteUrl: 'https://www.que-ricas.com/',
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
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 1.0
          },
          '/menu': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/story': {
            changefreq: 'monthly',
            priority: 0.6
          }
        }
      }
    },
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
