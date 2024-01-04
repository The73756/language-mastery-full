const svg = require('@neodx/svg/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Prevent doubling svg plugin, let's run it only for client build
    if (!isServer) {
      config.plugins.push(
        svg({
          root: 'assets/icons',
          group: true,
          output: 'public/sprites',
          metadata: {
            path: 'types/icon/sprite.gen.ts',
            runtime: {
              size: true,
              viewBox: true,
            },
          },
          resetColors: {
            exclude: ['assets/icons', /[a-z]*-colored\.svg$/],
            replaceUnknown: 'currentColor',
          },
        }),
      )
    }
    return config
  },
}

module.exports = nextConfig
