// 主路由 模块
const router = require("koa-router")();
const mysql = require("mysql");
const admin = require("./admin");
var db = mysql.createPool({
  host: "122.152.222.17 ",
  user: "root",
  password: "Huawei@123",
  database: "dongzhouguoshu"
});
router.use("/admin", admin.routes(), admin.allowedMethods());

router.get("/", async (ctx, next) => {
  let query = () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM goods_table WHERE goodstatus=1 ORDER BY ordernum DESC`,
        (err, data) => {
          // console.log(JSON.stringify(data));
          if (err) {
            resolve({
              message: err.message
            });
          } else {
            resolve(data);
          }
        }
      );
    });
  };
  let result = await query();
  ctx.body = result;
});

router.get("/bar", async (ctx, next) => {
  let query = () => {
    return new Promise((resolve, reject) => {
      db.goods_table
        .find()
        .skip(24)
        .limit(8);
    });
  };
  let result = await query();
  ctx.body = result;
});

module.exports = router;
