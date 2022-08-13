import  path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import nodeExternals from "webpack-node-externals";

const __dirname = ".";

export default {
  target: 'node',
  entry: {
    app: './src/index.ts',
  },
  mode: "production",
  plugins: [

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  //devtool: "source-map",
  
  optimization: {
    minimize: true
  },
  externals: ['_http_common', 'encoding', nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      /*
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: "unambiguous",
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                helpers: false,
                regenerator: true
              }],
            ],
          }
        }
      },
      */
      {
        test: /\.test\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts)$/,
        use: [{
            loader: 'ts-loader',
            options: {
                onlyCompileBundledFiles: true,
                allowTsInNodeModules: true
            }
        }]
      },
      {
        test: /\.js?$/,
        use: "source-map-loader",
      }
    ],
  },
};
