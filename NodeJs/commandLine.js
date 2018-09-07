#! /usr/bin/env node
// 在Linux系统下，我们可以把JS文件当作shell脚本来运行,在shell脚本中，可以通过#!注释来指定当前脚本使用的解析器
// 我们使用以下命令赋予node-echo.js文件执行权限, chmod +x /Users/apple/Documents/my/LearningLog/NodeJs/commandLine.js
// 我们在PATH环境变量中指定的某个目录下
// sudo ln -s /Users/apple/Documents/my/LearningLog/NodeJs/commandLine.js /usr/local/bin/node-hello
console.log('hello,命令行程序')