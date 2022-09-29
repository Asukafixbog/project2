// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  lintOnSave:false, //关闭语法检查
  // 开启代理服务器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */
  // 开启代理服务器(方式二) 解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{'^/api':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
