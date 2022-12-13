// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     domains: ['maps.googleapis.com'],
//   },
//   outputStandalone: true,
// }

// module.exports = nextConfig

// // module.exports = {
// //   reactStrictMode: false,
// //   images: {
// //     domains: ['maps.googleapis.com'],
// //   },
// //   output: 'standalone',
// // }

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
    };
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}
