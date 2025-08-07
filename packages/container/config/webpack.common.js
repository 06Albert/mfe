module.exports = {
  module: {
    rules: [
      {
        // Babel 로더
        test: /\.m?js$/, // .js 혹은 .mjs
        exclude: /node_modules/, // node_modules 제외
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react", // JSX 변환
              "@babel/preset-env", // ES2015+ → ES5
            ],
            plugins: [
              "@babel/plugin-transform-runtime", // async/await 등 지원
            ],
          },
        },
      },
    ],
  },
};
