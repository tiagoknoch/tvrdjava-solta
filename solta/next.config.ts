/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This allows serving static images from the public directory
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sr",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig

