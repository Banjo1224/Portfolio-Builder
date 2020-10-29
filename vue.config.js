console.log(__dirname)

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './server/template/public/index.html'
        return args
      })
  }
}