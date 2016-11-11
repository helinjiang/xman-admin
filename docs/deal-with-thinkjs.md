与 ThinkJS 相关的实现
===

每个页面URL地址对应一个controller和action，但它们都是渲染同一个html页面，即 `view/admin/index_index.html` ，这样就能够将项目从传统的多页面转换成单页应用来处理。单页应用的路由使用的是 `React-Routes` 来处理。