const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'sp0okys services',
    siteDescription: 'MW & WZ & VG Tools',
    siteKeywords: 'vanguard, warzone, tools',
    siteUrl: 'https://sp0oky.wtf',
    siteImagePreviewUrl: '',
    twitterHandle: ''
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
