/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  basePath: process.env.NODE_ENV === 'production' ? '/page_test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/page_test/' : '',
}

module.exports = withMDX(nextConfig)
