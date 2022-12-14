// webpack默认配置文件
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//webpack中单的所有配置信息都应该写在这里面
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        //指定打包后的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件的名字
        filename: "bundle.js",
        environment: {
            //告诉webpack 不使用箭头函数
            arrowFunction: false,
            const: false,
        }
    },
    //指定webpack打包时要用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,//以ts结尾的文件\
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            //设置预定义的环境
                            presets: [
                                //指定环境插件
                                [
                                    "@babel/preset-env",
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式 usage 表示按需加载
                                        "useBuiltIns": "usage"
                                    },
                                ],
                            ]
                        }
                    },
                    'ts-loader'
                ],//要使用的loader
                exclude: /node_modules/,//要排除的文件目录
            },
            //设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                    {
                                        //每一个浏览器最新的两个版本
                                        browsers: 'last 2 versions'
                                    }
                                ]
                            }
                        }
                    },
                    "less-loader" //注 越下面的越先执行
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({title: "自定义的Title", template: "./src/index.html"}),
    ],
    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}