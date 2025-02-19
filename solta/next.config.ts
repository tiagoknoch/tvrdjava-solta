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
       {
        protocol: "http",
        hostname: "tvrdjava-solta.vercel.app",
      },
      {
        protocol: "https",
        hostname: "tvrdjava-solta.vercel.app",
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

