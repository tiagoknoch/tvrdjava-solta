/** @type {import('next').NextConfig} */
const nextConfig = {
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

