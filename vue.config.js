module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 8085,
    host: 'localhost',
    before() {},
    https: false,
    open: true,
    proxy: {
      '/eduplus-dormitory-manage': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/eduplus-safe-campus': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/bluewhale': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/gateway': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/zl_api': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/zl_image': {
        target: 'https://test.imzhiliao.com',
        changeOrigin: true,
        pathRewrite: {
          '/zl_image': ''
        }
      },
      '/xys_api': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/xys_auth_api': {
        target: 'https://testsaas.imeduplus.com',
        changeOrigin: true
      },
      '/zlweb': {
        // target: "https://testsaas.imeduplus.com/zlweb",
        target: 'http://172.31.13.48:8080/src',
        changeOrigin: true,
        pathRewrite: {
          '/zlweb': ''
        }
      },
      '/xysweb': {
        target: 'https://testsaas.imeduplus.com/xysweb',
        //target: "http://localhost/xuejiajia_xys",
        changeOrigin: true,
        pathRewrite: {
          '/xysweb': ''
        }
      },
      '/fastweb': {
        target: 'https://testsaas.imeduplus.com/fastweb',
        changeOrigin: true,
        pathRewrite: {
          '/fastweb': ''
        }
      },
      '/saas/static/': {
        target: 'https://testsaas.imeduplus.com/fastweb/static',
        changeOrigin: true,
        pathRewrite: {
          '/saas/static': ''
        }
      },
      '/campus': {
        target: 'http://172.31.1.76:8081/',
        changeOrigin: true,
        pathRewrite: {
          '/campus': ''
        }
      }
    }
  },
  lintOnSave: true, // 关闭eslint代码检查
  
}
