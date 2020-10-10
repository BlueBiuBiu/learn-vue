const path=require('path')
module.exports={
    entry:'./src/main.js',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js',
        publicPath:'dist/',
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            //从右到左加载下面的
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader','less-loader'],
          },
          {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  //当图片小于limit时，会将图片编译成base64的字符串形式
                  //当图片大于limit时，需要使用file-loader模块进行加载
                  limit: 71000,
                  name:'img/[name].[hash:8].[ext]'
                },
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ],
      },
      resolve:{
        //以后import的时候就可以不用写下面相关的扩展名
        extensions:['.js','.css','.vue'],
        //alias: 别名
        alias:{
          'vue$': 'vue/dist/vue.esm.js',
        }
      }
}