module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/teacher-website/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          loader: "raw-loader",
        }
      ]
    }
  }
}