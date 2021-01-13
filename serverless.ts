import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
 service: {
  name: "serverless-typescript-learn"
  // app and org for use with dashboard.serverless.com
  // app: your-app-name,
  // org: your-org-name,
 },
 frameworkVersion: "2",
 custom: {
  webpack: {
   webpackConfig: "./webpack.config.js",
   includeModules: true
  }
 },
 // Add the serverless-webpack plugin
 plugins: ["serverless-webpack", "serverless-offline"],
 provider: {
  name: "aws",
  runtime: "nodejs12.x",
  apiGateway: {
   minimumCompressionSize: 1024
  },
  environment: {
   AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1"
  }
 },
 functions: {
  hello: {
   handler: "handler.hello",
   events: [
    {
     http: {
      method: "get",
      path: "hello"
     }
    }
   ]
  },
  addUser: {
   handler: "handler.addUser",
   events: [
    {
     http: {
      method: "post",
      path: "add",
      cors: true
     }
    }
   ]
  }
 }
};

module.exports = serverlessConfiguration;
