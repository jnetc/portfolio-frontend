/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
    domains: ['i.stack.imgur.com'],
  },
};
