const router = require("koa-router")();
const mysql = require("mysql");
var db = mysql.createPool({
  host: "122.152.222.17 ",
  user: "root",
  password: "Huawei@123",
  database: "dongzhouguoshu"
});
// router.prefix("/user"); // 设置前缀 当前路由请求的前缀

router.get("/", function(ctx, next) {
  db.query(
    `SELECT * FROM goods_table WHERE goodstatus=1 ORDER BY ordernum DESC`,
    (err, data) => {
      if (err) {
        ctx.body = {
          code: 0,
          data: "data",
          msg: "登陆成功"
        };
      } else {
        ctx.body = {
          code: 0,
          data: "data",
          msg: "登陆成功"
        };
      }
    }
  );
});

router.get("/bar", function(ctx, next) {
  ctx.body = {
    code: 0,
    data: "data",
    msg: "登陆成功"
  };
});

module.exports = router;
