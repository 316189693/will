const { defineConfig } = require('@vue/cli-service')
let env = process.env.NODE_ENV !== 'production' ? 'dev':'prod';
let  { title } = require("../will-config/will-front/"+env+"/config.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin("html")
        .tap(args=>{
          args[0].title = title;
          return args;
        })
  },
    css:{
        extract:false
    },
   configureWebpack:  {
       entry: "./src/main.js",
           module: {
           rules: [
               {
                   test: /\.s[ac]ss$/i,
                   oneOf: [
                       {
                           resourceQuery: "?dark",
                           use: [
                               MiniCssExtractPlugin.loader,
                               "css-loader",
                               {
                                   loader: "sass-loader",
                                   options: {
                                       additionalData: `@use 'dark-theme/vars' as vars;`,
                                   },
                               },
                           ],
                       },
                       {
                           resourceQuery: "?green",
                           use: [
                               MiniCssExtractPlugin.loader,
                               "css-loader",
                               {
                                   loader: "sass-loader",
                                   options: {
                                       additionalData: `@use 'green-theme/vars' as vars;`,
                                   },
                               },
                           ],
                       },
                       {
                           resourceQuery: "?red",
                           use: [
                               MiniCssExtractPlugin.loader,
                               "css-loader",
                               {
                                   loader: "sass-loader",
                                   options: {
                                       additionalData: `@use 'red-theme/vars' as vars;`,
                                   },
                               },
                           ],
                       },
                       {
                           use: [
                               MiniCssExtractPlugin.loader,
                               "css-loader",
                               {
                                   loader: "sass-loader",
                                   options: {
                                       additionalData: `@use 'light-theme/vars' as vars;`,
                                   },
                               },
                           ],
                       },
                   ],
               },
           ],
       },
       plugins: [
           new MiniCssExtractPlugin({
               filename: "[name].css",
               attributes: {
                   id: "theme",
               },
           }),
       ]

   }
})
