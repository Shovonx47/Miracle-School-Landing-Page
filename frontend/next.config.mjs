/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
        // Add any other domains you might use
      ],
    },
  };
  
  export default nextConfig;
  