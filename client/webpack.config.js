plugins: [
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'J.A.T.E',
  }),
  new InjectManifest({
    swSrc: './src-sw.js',
    swDest: 'src-sw.js',
  }),
  new WebpackPwaManifest({
    fingerprints: false,
    inject: true,
    name: 'Just Another Text Editor',
    short_name: 'J.A.T.E',
    description: 'A simple text editor',
    background_color: '#225ca3',
    theme_color: '#225ca3',
    start_url: '/',
    publicPath: '/',
    icons: [
      {
        src: path.resolve('src/images/logo.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('assets', 'icons'),
      },
    ],
  }),
];

rules: [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
    ],
  },
];
