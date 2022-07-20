module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  rules: [
    {// remove the block
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        // eslint-disable-next-line no-undef
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
  ]
}
