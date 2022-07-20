module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "url-loader",
      {
        "extensions": ["png", "jpg", "jpeg", "gif", "svg", "pdf"],
        "limit": 10000
      }
    ]
  ]
}
