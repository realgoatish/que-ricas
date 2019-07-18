// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Que Ricas',
  siteDescription: 'Traditional and inspired South American fare with a funky vibe',
  siteUrl: 'https://modest-leakey-1f0828.netlify.com/',
  icon: './src/que-ricas-logo.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/menu': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/story': {
            changefreq: 'monthly',
            priority: 0.4
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
