/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://hackmd.io/@NQP0NSuHQSqLw6DuqCWF6w/HyW4oGKVs",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
