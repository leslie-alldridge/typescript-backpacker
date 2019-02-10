let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let webpack = require("webpack");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
    app: "./index.tsx",
    appStyles: "./css/site.css",
    vendor: [
      "react",
      "react-dom",
      "react-router-dom",
      "toastr",
      "lc-form-validation",
      "redux",
      "react-redux",
      "redux-thunk"
    ],
    vendorStyles: [
      "../node_modules/bootstrap/dist/css/bootstrap.css",
      "../node_modules/toastr/build/toastr.css"
    ]
  },
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
