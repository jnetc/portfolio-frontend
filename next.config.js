/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
  // swcMinify: true, // experimental feature
  i18n: {
    locales: ['en', 'ru', 'fi'],
    defaultLocale: 'fi',
    localeDetection: true,
  },
  images: {
    deviceSizes: [640, 1080, 1920],
    formats: ['image/webp', 'image/avif'],
    domains: ['cdn.sanity.io'],
  },
});
