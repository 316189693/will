const { defineConfig } = require('@vue/cli-service')
let env = process.env.NODE_ENV !== 'production' ? 'dev':'prod';
let  { title } = require("../will-config/will-front/"+env+"/config.json");
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
