const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    devtool: "source-map",
    entry: [
      './src/index.tsx',
    ],
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
    plugins: [new CopyPlugin([
      {
        from: './src/asset/img/favicon.ico'
      }
    ])],
    module: {
        rules: [
          
          {
            test: /(\.tsx|\.ts)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jpg|gif|ico)$/,
            use: ['file-loader']
          },
          {
            test: /\.txt$/,
            use: ['raw-loader']
          },
          {
            test: /\.json$/,
            use: ['json-loader'],
            type: 'javascript/auto'
          },
          
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
      },
  };