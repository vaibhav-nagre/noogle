/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/noogle' : '',
  assetPrefix: isProd ? 'https://vaibhav-nagre.github.io/noogle/' : '',
};

export default nextConfig;
