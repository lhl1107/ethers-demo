const { resolve } = require('path'); //node内置核心模块，用来设置路径。
module.exports = {
    entry: './src/js/app.js',   // 入口文件配置（简写）
    /*完整写法：
      entry:{
        main:'./src/js/app.js'
      }
    */
    output: {                     // 输出配置
        filename: './js/built.js',      // 输出文件名
        path: resolve(__dirname, 'build')   //输出文件路径配置
    },
    mode: 'development'   //开发环境(二选一)
};