// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

// module.exports = withPWA({
//   dest: 'public',
//   register: true,
//   // mode: 'production',
//   swcMinify: true,
//   disable: false,
//   reactStrictMode: true,
//   runtimeCaching,
//   images: {
//     domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy', 'cnnespanol.cnn.com', 'cdn.shopify.com', 'unsplash.com'],
//   },
// });

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  disable: false,
  runtimeCaching,
  register: true,
});

module.exports = withPWA(nextConfig);
