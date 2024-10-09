/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
