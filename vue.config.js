const { defineConfig } = require('@vue/cli-service')
const { title } = require('../will-config/will-front/config.json');
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin("html")
        .tap(args=>{
          args[0].title = title;
          return args;
        })
  }
})
