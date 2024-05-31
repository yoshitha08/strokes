/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
    
      exports: {
          images: {
            domains: ["source.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
              remotePatterns: [
                {
                    protocol: 'https',
                      hostname: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
                      port: '',
                      pathname: '/account123/**',
                  },
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
