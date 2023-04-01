const { description } = require('../../package')

module.exports = {
  base: "/documentation/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Filefilego',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
     
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '',
            'installation',
            'cli_usage',
            'installation_wallet',
            'consensus',
            'comparison',
            'coin',
          ]
        },
        {
          title: 'Protocols',
          collapsable: false,
          children: [
            'protocols',
            'block_downloader',
            'data_query_request',
            'data_query_response',
            'data_verification',
            'super_light_node',
          ]
        },
        {
          title: 'Data Contracts',
          collapsable: false,
          children: [
            'data_contract',
            'off_chain_data_contract',
          ]
        },
        {
          title: 'Data Verifiers',
          collapsable: false,
          children: [
            'verifiers',
            'running_verifier',
            'dvpool'
          ]
        },
        {
          title: 'Storage Providers',
          collapsable: false,
          children: [
            'providers',
            'running_provider'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
