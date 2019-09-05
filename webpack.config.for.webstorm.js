const path = require("path")
/**
 * 仅用以 webstorm webpack 插件
 * */
module.exports = {
  resolve: {
    alias: {
      /** jsProSrc */
      "_$$_jsProSrc": path.resolve(__dirname, "./jsProSrc")
    }
  }
}
