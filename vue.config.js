const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 开发环境配置
  devServer: {
    host: "localhost",
    // 运行时自动打开浏览器
    open: true,
    port: 6103,
    // 解决热重载使用公网
    client: {
      webSocketURL: "ws://localhost:6103/ws",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 关闭eslint校验工具
  lintOnSave: false,
});
