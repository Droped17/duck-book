import GenerateAwsLambda from 'next-aws-lambda-webpack-plugin';

const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  pageExtensions: ['page.tsx','page.ts','page.jsx','page.js','api.ts','api.js'],
  // webpack: (config, nextConfig) => {
  //   // Add GenerateAwsLambda as a plugin
  //   const newConfiguration =  config.plugins.push(new GenerateAwsLambda(nextConfig));
  //   return newConfiguration;
  // },
  env: {
    SECRET: process.env.SECRET
  },
};

export default nextConfig;
