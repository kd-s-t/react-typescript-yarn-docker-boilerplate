const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: '[name][contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.?tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true,
    port: 8080,
    open: true,
    host: '0.0.0.0',
    compress: true,
    liveReload: true,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      client: path.resolve(__dirname, 'src/') // added this
    },
    extensions: ['.tsx', '.js', '.jsx', '.ts', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cebu Pacific Air React Boilerplater 6.2022',
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}