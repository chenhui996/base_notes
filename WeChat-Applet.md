# 微信小程序

- 微信小程序个人学习笔记，已上传至 github，会随着学习的深入陆续补充:
  - 地址: https://github.com/chenhui996/Base-Notes/blob/master/WeChat-Applet.md

## 窥小程序框架细节 - 启动流程

- 在开发者工具中使用 help() 方法:
  - 可以查看一些指令和方法;
- 使用其中的 openVendor 方法:
  - 可以打开微信开发者工具在小程序框架所在目录;
    - 其中以包括以基础库命名的目录和其他帮助文件:
      - 如其中有两个工具 wcc，wcsc;
        - wcc:
          - 可把 wxml 转换为对应的 JS 函数 —— $gwx(path, global);
        - wcsc:
          - 可将 wxss 转换为 css;
      - 而基础库目录包括 WAService.js 和 WAWebview.js 文件;
        - 小程序框架在开发者工具中:
          - 以 WAService.js 命名
        - WAWebview.js:
          - 暂时不懂;

## 启动流程

### 初始化全局变量:

- 小程序启动的第一步是:
  - 初始化的一些全局的变量;
- 那些使用`__`开头，未在文档中提及可使用变量是不建议使用的;

### 加载框架（WAService.js）:

- 加载 '微信小程序' 的一些运行框架;
- 框架对外暴露了以下 API:
  - Behavior
  - App
  - Page
  - Component
  - getApp
  - getCurrentPages
  - definePlugin
  - requirePlugin
  - wx

### 业务代码的加载:

- 在小程序中，JavaScript 代码的 '加载方式' 和在浏览器中也有些不同;
  - 其加载顺序是:
    - 首先加载项目中其他 js 文件（非注册程序和注册页面的 js 文件）;
    - 其次是注册程序的 app.js;
    - 然后是自定义组件 js 文件;
    - 最后才是注册页面的 js 代码;

### 加载 app.js 与注册程序

- 在 app.js 加载完成后:
  - 小程序会使用 require('app.js') 注册程序:
    - 即对 App 方法进行调用;

### 加载自定义组件代码以及注册自定义组件

- 自定义组件在 app.js 之后被加载:
  - 小程序会在这个过程中:
    - 加载完所有的自定义组件;

### 加载页面代码和注册页面

- 加载页面代码的处理流程和加载自定义组件一样:
  - 都是加载完成后 '先注册页面':
    - 然后才会 '加载下一个页面';

### 等待页面 Ready 和 Page 实例化

- 等待浏览器 Ready:
  - 小程序虽然有部分原生的组件，不过本质上还是一个 web 程序;
- 在小程序中 '切换页面' 或 '打开页面'时:
  - 会触发 onAppRoute 事件:
    - 小程序框架通过 wx.onAppRoute 注册页面切换的处理程序;
    - 在所有程序就绪后，以 entryPagePath 作为入口:
      - 使用 appLaunch 的方式进入页面;

---

## 微信小程序生命周期

- 小程序主要分为两个生命周期：
  - 全局的生命周期
  - 页面的生命周期

### 小程序 App 生命周期

- App 生命周期主要在 app.js 中调用，主要是:
  - onLaunch:
    - 小程序初始化完成，全局只触发一次;
  - onShow:
    - 小程序启动时，或者从后台进入前台;
  - onHide:
    - 小程序从前台进入后台时执行;
  - onError:
    - 小程序运行脚本出错或者 api 调用失败时执行，会带上错误信息;
  - onPageNotFound :
    - 小程序页面不存在时执行;
- 执行顺序:
  - onLaunch--> onShow --> onHide

### 小程序 Pages 生命周期

- Pages 生命周期主要是指:
  - 各个文件对应的 js 中的生命周期，主要是:
    - onLoad:
      - 页面加载时执行，只执行一次
    - onReady:
      - 页面初次渲染时执行，只执行一次
    - onShow:
      - 页面展示时执行，执行多次
    - onHide:
      - 页面从前台进入后台时执行
    - onUnload:
      - 页面卸载时执行

### 运行机制

- 概念:
  - 热启动:
    - 指的是小程序启动成功后，你点了左上角的 x 或者按了 home 键离开小程序;
      - 小程序并没有直接被销毁，而是进入了后台运行机制中;
      - 当你在一定时间内再次打开该小程序时:
        - 小程序这时候从后台又重新进入前台;
          - 重新渲染页面，这个过程就是热启动;
  - 冷启动:
    - 指的是小程序初次加载（从未打开）;
    - 或者当你卸载小程序,或者被微信自动销毁的时候;
      - 当你再次进入重新加载小程序时，这个过程就是冷启动;
- 注意点:
  - 小程序只有在冷启动的时候，才会触发 onLaunch 生命周期;

## 小结

- 小程序流程:
  - 打开小程序:
    - (App)onLaunch -->
    - (App)onShow -->
    - (Pages)onLoad -->
    - (Pages)onShow -->
    - (pages)onReady;
  - 进入下一个页面:
    - (Pages)onHide -->
    - (Next)onLoad -->
    - (Next)onShow -->
    - (Next)onReady;
  - 返回上一个页面:
    - (curr)onUnload -->
    - (pre)onShow;
  - 离开小程序:
    - (App)onHide;
  - 再次进入:
    - 小程序未销毁:
      - (App)onShow(执行上面的顺序）;
    - 小程序被销毁:
      - (App)onLaunch 重新开始执行;
