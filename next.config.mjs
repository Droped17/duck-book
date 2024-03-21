import GenerateAwsLambda from 'next-aws-lambda-webpack-plugin';

const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, nextConfig) => {
  //   // Add GenerateAwsLambda as a plugin
  //   const newConfiguration =  config.plugins.push(new GenerateAwsLambda(nextConfig));
  //   return newConfiguration;
  // },
  env: {
    SECRET: process.env.SECRET
  }
};

export default nextConfig;
