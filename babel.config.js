module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  rules: [
    {
      test: /\.(png|jpg|gif|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      ],
    },
  ]
}
