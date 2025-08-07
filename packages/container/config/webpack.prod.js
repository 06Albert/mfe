const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN; // CI 파이프라인에서 ENV 주입

const prodConfig = {
  mode: "production", // 코드 난독화·최적화 활성화
  output: {
    filename: "[name].[contenthash].js", // 캐시 무력화를 위한 해시 포함
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", // 호스트이므로 필수는 아
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
