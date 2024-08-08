/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      { hostname: 'api.producthunt.com' }
    ],
  },
};

export default nextConfig;
