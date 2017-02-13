关于
===

## 想干什么
想做一个后台管理系统，使用 Node 平台来搭建。
使用 ThinkJS 来搭建服务器，它采用的是传统 MVC 方式来开发，封装了很多的操作，尤其是数据库方面的。
需要一个数据库，用于存储数据，选择 MySQL，因为这是免费且功能强大的关系型数据库。
前端页面选择 React 技术栈，注意是它的生态好，组件化思维，开发起来非常方便。
既然是后台管理系统，则无需考虑什么服务端渲染了，但是如果使用 React-Router 来做单页路由，然后使用 ThinkJS 写 API ，前后端分离，再配合 Redux 来管理状态，这样的体验也不错。
选用 Webpack 做构建了，其实百度团队的 FIS 构建也很好，至少我们团队现在还在用 FIS 做构建，但我还是选择 webpack，国外技术栈都是这个，我们也尽量靠近主流。
React 的 UI 库，我比较喜欢蚂蚁金服的 Ant.Design ，是否适合做后台管理系统，比较阿里也有比较多的业务在使用，会更专业。之前也考虑过 Bootstrap，后来还是放弃了，主要原因是前者提供了很多成熟应用场景的解决方案，更成熟；而后者很多需要自己去写，这比较费神。

## 备注
- src-client 目录下的pages貌似定义不是那么清除，考虑换下架构
- 导航结构变更，选择左侧导航栏，可搜索（阿里云的导航系统就是这样的）
- 使用Less
- Link 中使用 `this.context.router.push(routeUrl);` 和直接使用 `to` 属性的区别在哪？为什么firekylin中要同时写呢？【一个是程序代码里面使用，一个是Link中使用】
- Link要block，否则点击区域太小了，且Menu组件选中状态会导致让用户误会。解决办法是使用Menu组件的onSelect时间回调中，手动执行 `this.context.router.push(routeUrl);` 来跳转，而不是使用 Link 组件

sidebar：非常之独立，只需要将其作为独立的container组件
React的实践中提到区分container组件和纯组件，但这个也需要依据实际情况。高度抽象有高度抽象的好处，但会导致非常复杂。

兼容性方面还未完整考虑，主要是：

- jQuery
- lodash
- Object.assign

## 需求列表

### 目录结构变更
修改之后，目录结构和view及src的目录结构保持一致：

- src
  - admin
  - common
  - home
- src-client
  - admin
    - actions
    - components
    - containers
    - pages
    - reducers
    - store
    - index.js
    - index.less
    - routes.js
  - common
    - actions
    - assets
    - components
    - middleware
    - reducers
- view
  - admin
  - common
  - home

### 新增登录校验
新增登录校验，使用打桩数据模拟登录。如果用户没有登录，则展示登录框进行登录之后才能够继续操作。

与此同时，提供退出登录的功能

既然有了登录鉴权，还需要处理登录失败、登录跳转等情况

### 新增middleware/api.js
新增一个api的中间件来处理请求。首期引入jQuery来处理ajax请求，后续再考虑其他的方式。

### 新增全局tips提示
全局提示基于 [Message](https://ant.design/components/message/) 组件来实现，用于展示一些全局的消息。