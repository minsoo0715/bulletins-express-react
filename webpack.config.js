module.exports = {
    entry: [
      './src/index.tsx',
    ],
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
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
            test: /\.(png|jpg|gif)$/,
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