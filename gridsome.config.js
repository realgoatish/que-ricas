// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Que Ricas',
  titleTemplate: '%s - Que Ricas',
  siteUrl: 'https://www.que-ricas.com',
  permalinks: {
    trailingSlash: true
  },
  host: "0.0.0.0",
  icon: './uploads/que-ricas-logo.png',
  plugins: [
    // Commenting out Google sheets plugin config code until new menu sourcing from MD files is tested and confirmed OK.  Remember to delete this.
    // {
    //   use: 'gridsome-source-google-sheets',
    //   options: {
    //     sheetId: process.env.SHEET_ID,
    //     apiKey: process.env.GOOGLE_API_KEY
    //   }
    // },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/home-page/*.md',
        typeName: 'HomePageContent',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/footer/**/*.md',
        typeName: 'FooterContent',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/our-story/*.md',
        typeName: 'OurStoryContent',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'markdowns/menu/**/*.md',
        typeName: 'MenuContent',
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
    //   use: '@zefman/gridsome-source-instagram',
    //   options: {
    //     username: 'quericas_haddon',
    //     typeName: 'InstagramPhoto'
    //   }
    // },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-148334920-1',
        checkDuplicatedScript: true
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
