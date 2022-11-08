/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  // swcMinify: true, // experimental feature
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  i18n: {
    locales: ['en', 'ru', 'fi'],
    defaultLocale: 'fi',
    localeDetection: true,
  },
  images: {
    deviceSizes: [640, 1080, 1920],
    formats: ['image/webp'],
    domains: ['cdn.sanity.io'],
  },
});
