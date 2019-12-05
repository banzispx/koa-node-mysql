var koa = require("koa");
var app = new koa();
// express自带路由 koa需要 自己安装

// 配置路由

// 中间件

app.use(async context => {
  context.body = "casca";
});
app.listen(3000);
