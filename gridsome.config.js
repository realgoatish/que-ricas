// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Que Ricas',
  siteDescription: 'Traditional and inspired South American fare with a funky vibe',
  siteUrl: 'https://modest-leakey-1f0828.netlify.com/',
  icon: './uploads/que-ricas-logo.png',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global remark plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            // ...local remark plugins
          ]
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: `gridsome-plugin-netlify-cms-paths`,
      options: {
        contentTypes: ['Post']
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
          },
          '/posts/*': {
            changefreq: 'weekly',
            priority: 0.0
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
