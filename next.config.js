/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async rewrites() {
      return [
        {
          source: '/start-game',
          destination: '/StartGame',
        },
      ];
    }
}
  