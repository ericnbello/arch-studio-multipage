/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // domains: ['maps.googleapis.com'],
    // unoptimized: true,
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'maps.googleapis.com',
          port: '',
          pathname: '/maps/api/staticmap?&zoom=5&size=800x400&maptype=roadmap&markers=color:black%7Clabel:S%7C35.952461,-83.991531&markers=color:black%7Clabel:C%7C29.897430,-97.827507&key=AIzaSyDlF97cfMQ9dUvJgjuLAWcEvhHK0LRq46Q?imwidth=3840',
        },
      ],
  },
  outputStandalone: true,
  
}

module.exports = nextConfig