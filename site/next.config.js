/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'TBG Tech',
    description: 'Develop-Test Purposes',
    icon: '/img/logo.svg',
    listUrl: 'https://nem0n.github.io/windeploy/',
    contactUrl: 'https://www.bgtest.com',
  },
  reactStrictMode: true,
  basePath: '/windeploy/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
