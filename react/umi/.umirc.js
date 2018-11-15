// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'umi',
        dll: true,
        pwa: false,
        routes: {
          exclude: [],
        },
        hardSource: true,
      },
    ],
  ],
  // base: '/dist/',   // 当路由不为hash的时候项目部署到非根目录，需要添加此配置
  // publicPath: '/dist/', // 项目部署到非根目录需添加
  history: 'hash', // 启用hash路由
  hash: true, // 打包文件名字带有hash字符串
  exportStatic: {
    // exportStatic 按路由生成文件夹，文件夹内为此路由下的入口html文件
    dynamicRoot: true, // 请求静态文件的路径设置为相对路径,存在问题：css引入的图片途径没有加入公共path
    htmlSuffix: true, // 设置后将路由直接生成html文件，而不是放在文件夹内
  },
};
