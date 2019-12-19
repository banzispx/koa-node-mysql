// 主路由 模块
const router = require("koa-router")();
const admin = require("./admin");
const query = require("../mysql").query;
router.use("/admin", admin.routes(), admin.allowedMethods());

router.get("/", async (ctx, next) => {
  let resault = await query(
    "SELECT * FROM goods_table WHERE goodstatus=1 ORDER BY ordernum DESC limit 1,10"
  );

  ctx.body = resault;
});

router.get("/bar", async (ctx, next) => {
  ctx.body = {
    json: 1
  };
});

module.exports = router;
