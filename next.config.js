/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")(["react-countup"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,
    SendEmailApi: process.env.SendEmailApi,
  },
};

module.exports = nextConfig;
