const path = require('path')

module.exports = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales to support 
    locales: ['en-EN'],
    // This is the default locale
    defaultLocale: 'en-EN',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'www.fillmurray.com',
      'herodigital.com',
      'www.herodigital.com',
    ]
  },
}
