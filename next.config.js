const API_URL = process.env.API_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.onlyusedtesla.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "stimg.cardekho.com",
        port: "",
        pathname: "/images/carexteriorimages/**",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        port: "",
        pathname: "/get-autoru-vos/4211548/**",
      },
      {
        protocol: "https",
        hostname: "getwallpapers.com",
        port: "",
        pathname: "/wallpaper/full/**",
      },
      {
        protocol: "https",
        hostname: "sportishka.com",
        port: "",
        pathname: "/uploads/posts/**",
      },
    ],
  },
};

module.exports = nextConfig;
