/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
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

