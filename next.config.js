/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ikramtel.in',
            port: '',
            pathname: '/webapp/img/**',
          },
        ],
      },
}

module.exports = nextConfig
