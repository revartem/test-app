module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
module.exports = {
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              // you can also read from a file, e.g. `variables.scss`
              // use `data` here if sass-loader version < 8
            }
          }
        ]
      }
    ]
  },
  // plugin omitted
}