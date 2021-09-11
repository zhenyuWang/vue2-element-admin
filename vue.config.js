"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// 端口号
const port = 8080;
// 配置项说明=>https://cli.vuejs.org/config
module.exports = {
  /**
   * 详细信息: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: "./",
  // 项目打包输出目录
  outputDir: "dist",
  // 项目静态文件打包输出目录
  assetsDir: "static",
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    https: false,
    hotOnly: false,
    // 配置代理，解决跨域问题
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        // 测试环境
        target: "http://x.x.x.x:xxxx",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      // 配置快捷路径
      alias: {
        "@": resolve("src")
      }
    },
  },
};
