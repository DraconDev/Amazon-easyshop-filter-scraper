/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require("dotenv").config();

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["m.media-amazon.com"],
    },
    env: {
        AWS_ACCESS_KEY_ID: localEnv.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: localEnv.AWS_SECRET_ACCESS_KEY,
        ASSOCIATE_TAG: localEnv.ASSOCIATE_TAG,
    },
};

module.exports = nextConfig;
