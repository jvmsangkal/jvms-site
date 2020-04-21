const withOffline = require('next-offline')
const withOptimizedImages = require('next-optimized-images')

let nextConfig = {
  poweredByHeader: false,

  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: [/node_modules/, /.next/, /out/],
        loader: 'eslint-loader',
        options: {
          // Emit errors as warnings for dev to not break webpack build.
          // Eslint errors are shown in console for dev, yay :-)
          emitWarning: true,
        },
      })
    }

    return config
  },

  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/service-worker.js',
          destination: '/_next/static/service-worker.js',
        },
      ]
    },
  },
}

nextConfig = withOffline(nextConfig)
nextConfig = withOptimizedImages(nextConfig)

module.exports = nextConfig
