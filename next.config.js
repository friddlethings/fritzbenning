const path = require('path')

module.exports = {
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
    localeDetection: false
  },
  sassOptions: {
    prependData: `@import "${path.resolve(
      __dirname,
      'src/styles/application.scss'
    )}";`
  },
  reactStrictMode: false,
  eslint: {
    dirs: ['react-bricks', 'components', 'pages', 'utils']
  }
}
