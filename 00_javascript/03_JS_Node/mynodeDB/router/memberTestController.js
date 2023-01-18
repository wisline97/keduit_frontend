// mysql 아래 명령어를 db상에서 반드시 실행해야한다.
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
var mysql = require("mysql");
var conn_info = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "_node_db_test",
  multipleStatements: true, // 여러 쿼리를 ;를 기준으로 한번에 보낼 수 있게 해줌.
};

module.exports = function (app) {};
