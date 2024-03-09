/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
      exports: {
          images: {
              remotePatterns: [
                  {
                      protocol: 'https',
                      hostname: 'aceternity.com/images/products/thumbnails/new/moonbeam.png',
                      port: '',
                      pathname: '/account123/**',
                  },
              ],
          },
      },
  },
};



export default nextConfig;
