const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
    // 开发环境配置
    devServer: {
      host: "0.0.0.0",
      // 运行时自动打开浏览器
      open:true,
      port: 9999,
      // 解决热重载使用公网
      client: {
        webSocketURL: "ws://0.0.0.0:9999/ws",
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
});
