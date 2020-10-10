const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseconfig = require('./base.config')
const webpackMerge = require('webpack-merge')
module.exports=webpackMerge(baseconfig,{
  plugins:[
    //将bundle.js里面的代码进行压缩
    new UglifyJsPlugin(),
  ]
})