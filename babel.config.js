module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "inline-import-data-uri",
      {
        "extensions": ["png", "jpg", "jpeg", "gif", "svg", "pdf"],
        "limit": 10000
      }
    ]
  ]
}
