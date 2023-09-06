/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async rewrites() {
      // Konfigurasi rewrites
      return [
        {
          source: '/start-game',
          destination: '/StartGame',
        },
      ];
    }
}
  