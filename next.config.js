/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {implementation: 'sass-embedded',},
}

module.exports = nextConfig
