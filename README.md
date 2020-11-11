# RIC 微信小程序
这是 RIC 滴微信小程序~
## 开发环境
```
NodeJS v15.2.0 or above
NPM v7.0.8 or above
Wechat Devtools Stable 1.03.2010240 or above
```
## 让我们开始吧
```
git clone https://github.com/JDScript0415/ricWechatApp.git
cd ricWechatApp
npm install
npm run dev
```
当然，嫌弃 npm 速度也可以快乐地使用 yarn~

完成上面👆的步骤过后就可以直接在微信开发者工具中导入小程序项目啦~

## 项目结构说明

```
|-- RIC
    |-- src                           D - 源码文件
    |   |-- app.wpy                       F - 项目入口文件
    |   |-- api                           D - 对接 APi 的 js 文件
    |   |-- assets                        D - 静态资源
    |   |   |-- images                        D - 静态图片资源
    |   |   |-- style                         D - 静态样式表
    |   |-- components                    D - 存放小程序组件      
    |   |-- mixins                        D - 存放 Mixin
    |   |-- pages                         D - 存放小程序页面
    |   |-- store                         D - 小程序存储相关
    |   |-- utils                         D - 封装后 js
    |       |-- auth.js                       F - Auth 相关封装
    |       |-- request.js                    F - Request 相关封装
    |-- static                            D - 框架默认静态资源
    |-- weapp                             D - 编译后目录
    |-- node_modules                      D - NPM 依赖模块
    |-- wepy.config.js                    F - 全局配置文件
```
