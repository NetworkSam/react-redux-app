## 技术栈

- react react-router redux react-redux

## 安装初始化
```
yarn init
```
## webpack

```
yarn add webpack webpack-dev-server -dev
```
## babel
```
yarn add babel-core babel-loader  babel-preset-es2015 babel-preset-stage-0 babel-preset-react
css-loader style-loader less less-loader html-webpack-plugin -dev
```
## react
```
yarn add react react-dom redux react-redux react-router-dom
```
## fetch
```
yarn add es6-promise whatwg-fetch
```
## express
```
yarn add express
```
## swiper 插件
```
yarn add swipe-js-iso react-swipe

github 地址:https://github.com/voronianski/react-swipe
```

## scripts
```
"start": "webpack-dev-server --port 4000 --open --progress --color",
"build": "webpack -p"
```
## 目录结构
- components 组件 木偶组件

- containers 页面组件
    -home
        -subPage 智能组件
        -index.js

- index.js 用来控制显示哪一个页面

- store onlyOne
- actions 用户发布动作
- reducers 定义动作规则
- actionTypes action名字







