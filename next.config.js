// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     domains: ['maps.googleapis.com'],
//   },
//   outputStandalone: true,
  
// }

// module.exports = nextConfig

module.exports = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['maps.googleapis.com'],
  },
  output: 'standalone',
}

