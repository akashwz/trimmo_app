const isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //               default-src 'self';
  //               script-src 'self' 'unsafe-inline' ${
  //                 isDev ? "'unsafe-eval'" : ""
  //               } https://trimmo-acbb9.firebaseapp.com/ https://apis.google.com https://www.googletagmanager.com https://analytics.ahrefs.com;
  //               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  //               font-src 'self' https://fonts.gstatic.com;
  //               connect-src *;
  //               img-src 'self' data: https:;
  //               frame-src https://trimmo-acbb9.firebaseapp.com/;
  //               child-src https://trimmo-acbb9.firebaseapp.com/;
  //               media-src 'self' https:;
  //             `
  //             .replace(/\s{2,}/g, " ")
  //             .trim(),
  //         },
  //       ],
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pub-032c6d43db934ca6b027735e13fb15f5.r2.dev",
      },
      {
        protocol: "https",
        hostname: "cdn.shopeasy.ai",
      },
      {
        protocol: "https",
        hostname: "cdn.trimmo.bio",
      },
      {
        protocol: "https",
        hostname: "w3.org",
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml", // The public path for your sitemap
        destination: "/api/sitemap.xml", // The API route serving the sitemap
      },
    ];
  },
};

export default nextConfig;
