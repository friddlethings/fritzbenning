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
  },
  webpack(config /* ,{ buildId, dev, isServer, defaultLoaders, webpack }*/) {
    const rules = config.module.rules
      .find(rule => typeof rule.oneOf === 'object')
      .oneOf.filter(rule => Array.isArray(rule.use))

    rules.forEach(rule => {
      rule.use.forEach(moduleLoader => {
        if (
          moduleLoader.loader?.includes('css-loader') &&
          !moduleLoader.loader?.includes('postcss-loader')
        )
          moduleLoader.options.modules.getLocalIdent = (
            context,
            _,
            exportName
          ) => {
            const rootClass = path
              .relative(context.rootContext, path.dirname(context.resourcePath))
              .split('/')
              .slice(-1)
              .join('-')
              .toLowerCase()

            if (rootClass !== exportName) {
              return `${rootClass}-${exportName}`
            } else {
              return `${exportName}`
            }
          }
      })
    })

    return config
  }
}
