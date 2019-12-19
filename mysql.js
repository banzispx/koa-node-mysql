var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 50,
  host: "122.152.222.17 ",
  user: "root",
  password: "Huawei@123",
  database: "dongzhouguoshu"
});
pool.on("connection", function(connection) {
  console.log("一个链接已经创建");
});
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release(); // 到这步说明已经完成操作，释放连接
        });
      }
    });
    console.log(pool._allConnections.length); // 连接池里的连接数
    // pool.query(sql, values, (err, rows) => {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     resolve(rows);
    //   }
    //   // connection.release();
    // });
  });
};
module.exports = {
  query
};
