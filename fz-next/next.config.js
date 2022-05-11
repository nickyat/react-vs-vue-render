
/** @type {import('next').NextConfig} */
//https://github.com/vercel/next.js/discussions/11267
const nextConfig = {
    compiler: {
        removeConsole: true,
        reactRemoveProperties: true,
        swcMinify: true,
    },
  webpack: (config) => {
    // camel-case style names from css modules
    config.module.rules
        .find(({oneOf}) => !!oneOf).oneOf
        .filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
        .reduce((acc, {use}) => acc.concat(use), [])
        .forEach(({options}) => {
          if (options.modules) {
            options.modules.exportLocalsConvention = 'camelCase';
          }
        });

    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig
