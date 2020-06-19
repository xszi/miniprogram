# weChat-miniprogram-p

微信小程序demo+总结

## 小程序 course1

微信/支付宝/百度 小程序

三款小程序的对比

kbone(h5展现在小程序端)
mpvue(vue语法)
remax(react语法)
taro(react)

kbone 运行时框架
kbone-cli

npx 和 npm 的区别又忘记了

kbone+vue 与 mpvue 的区别

webpack 是一个基础设施建设工具

kbone 的原理

## 小程序 course2

uni-app

1. 数据同步机制

uni-app 将数据的控制权完全交给了 vue ，由vue来控制 data 的修改，最火再同步给小程序的 AppData，小程序负责页面的展示。

2. 事件代理机制

当用户在小程序上进行操作，出发了一些事件，比如click，会经过uni-app转发给vue

3. 生命周期

uni-app 直接将小程序的生命周期代理到了 vue 中

小程序的冷启动和热启动
热启动会加载已有缓存，小程序打开恢复原样
加TODO是一个好习惯可以知道你下一步具体要写生命逻辑

自动脚本的实现

uni-app 项目

关于优化实现展现每页list项目
实现一个装饰器
