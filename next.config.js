// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
// };
//
// module.exports = nextConfig;
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.css$/,
//       exclude: /node_modules/,
//       loader: ['style-loader', 'css-loader'],
//     });
//     return config;
//   },
// };
const _ = require('lodash');
// const { Config } = require('./src/config/next/config');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    env: {},
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};

// const newConfig = _.merge(nextConfig, Config);
const newConfig = nextConfig;
module.exports = {
    ...newConfig,
};
