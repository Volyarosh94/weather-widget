import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.weatherapi.com"],
  },
  env: {
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};

export default nextConfig;
