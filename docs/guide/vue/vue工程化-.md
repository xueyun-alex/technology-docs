# Vue项目中文件夹详解

## node_modules
存放npm命令下载的开发环境和生产环境的依赖包

## dist
默认 npm run build 命令打包生成的静态资源文件，用于部署

## public（assets）

存放项目中需要用到的资源文件，css、js、images以及index

## src文件夹
存放项目源码及需要引用的资源文件

**src/api文件夹：**
放ajax相关操作的代码文件,封装的axios请求拦截，相应拦截，接口

**src/common文件夹：**
stylus的混合文件.styl

**src/components文件夹：**
存放vue开发中抽离的一些公共组件
**src/assets文件夹：**
存放需要用到的资源文件，css、js、images

**src/directive文件夹：**
存放需要用到的自定义全局指令

**src/store文件夹：**
存放 vue中的状态数据，用vuex集中管理

**src/icon文件夹：**
存放组件用到的图标

**src/untils文件夹：**
存放一些封装的公共的方法

**src/router文件夹：**
存放封装的Vue Router以及路由配置

**src/plugins文件夹：**
存放需要的插件

## App.vue文件
使用标签渲染整个工程的.vue组件

## main.js文件
vue-cli工程的入口文件

## package.json文件
用于 node_modules资源部 和 启动、打包项目的

## package-lock.json文件
锁定安装模块的版本号

## .env.development文件
开发环境的配置

## .env.production文件
生产部署环境的配置

## .eslintignore文件
eslint不需要匹配的文件

## babel.config.js文件
用于 配置 less、sass等css预编译库以及配置 UI 库。

## README.md文件
项目的主要信息进行描述

## vue.config.js文件
配置开发环境的 端口号、是否开启热加载或者 设置生产环境的静态资源相对路径、是否开启gzip压缩、npm run build 命令打包生成静态资源的名称和路径,webpack 相关配置和脚本.