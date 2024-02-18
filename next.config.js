/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_REPO_NAME,

  images: {
    domains: [
      'files.stripe.com',
    ]
  },
}

module.exports = nextConfig
