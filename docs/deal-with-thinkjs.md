与 ThinkJS 相关的实现
===

ThinkJS中的每个页面URL地址对应一个controller和action，但将它们都使用同一个html模版页来渲染，即 `view/admin/index_index.html` ，这样就能够将项目从传统的多页面转换成单页应用来处理。单页应用的路由使用的是 `React-Routes` 来处理。
