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

module.exports = function (app) {
  //전체회원 조회 페이지
  app.get("/memberListAll", function (req, res) {
    var conn = mysql.createConnection(conn_info);
    var sql = " select * from member ";
    conn.query(sql, function (error, rows) {
      var renderData = {
        memberDB: rows,
      };
      conn.end();
      res.render("member/memberListAll.ejs", renderData);
    });
  });

  //전체회원 정렬 기능
  app.get("/memberListSort", function (req, res) {
    var sortStandard = req.query.sortStandard;

    if (sortStandard == "sortNo") {
      sortStandard = "memberNo";
    }

    if (sortStandard == "sortId") {
      sortStandard = "memberId";
    }

    if (sortStandard == "sortName") {
      sortStandard = "memberName";
    }

    if (sortStandard == "sortEmail") {
      sortStandard = "memberEmail";
    }

    var conn = mysql.createConnection(conn_info);
    var sql = " SELECT * FROM member ORDER BY " + sortStandard; // ORDER BY 는 + 로 연결해야한다.

    conn.query(sql, function (error, rows) {
      console.log(rows);
      var renderData = {
        memberDB: rows,
      };
      conn.end();

      res.render("member/memberListAll.ejs", renderData);
    });
  });

  //회원정보 수정 페이지
  app.get("/memberUpdateForm", function (req, res) {
    var memberNo = req.query.memberNo;
    var conn = mysql.createConnection(conn_info);

    // db 로 전달될 데이터는 ? 로 표시한다.
    var sql = "SELECT * FROM member WHERE memberNo=?";

    // 위 ? 에 넣을 데이터를 배열로 순서대로 저장한다.
    var inputData = [memberNo];

    // db에 넘겨줄 배열을 세팅한다.
    conn.query(sql, inputData, function (error, rows) {
      var renderData = {
        memberDB: rows,
      };
      conn.end();
      res.render("member/memberUpdateForm.ejs", renderData);
    });
  });

  //회원정보 수정 기능
  app.get("/memberUpdatePro", function (req, res) {
    var memberNo = req.query.memberNo;
    var memberId = req.query.memberId;
    var memberPw = req.query.memberPw;
    var memberName = req.query.memberName;
    var memberEmail = req.query.memberEmail;

    var conn = mysql.createConnection(conn_info);
    // 문자열을 길어서 줄바꿈할때는 반드시 양쪽에 공백을 만들어 줘야한다. 하나로 합쳐졌을때 문자가 붙어버릴수있다.
    // db 로 전달될 데이터는 ? 로 표시한다.
    var sql = " UPDATE member ";
    sql +=
      " SET memberId = ?, memberPw = ? , memberName = ? , memberEmail = ? ";
    sql += " WHERE memberNo = ? ";

    // 위 ? 에 넣을 데이터를 배열로 순서대로 저장한다.
    var inputData = [memberId, memberPw, memberName, memberEmail, memberNo];

    // db에 넘겨줄 배열을 세팅한다.
    // update 경우 는 db에 데이터를 보내고 다시 넘겨받는 값이 없다. rows는 필요하지않다.
    conn.query(sql, inputData, function (error) {
      conn.end();
      res.redirect("memberListAll");
    });
  });

  app.get("/memberAddForm", function (req, res) {
    res.render("member/memberAddForm.ejs");
  });

  app.get("/memberAddPro", function (req, res) {
    var memberId = req.query.memberId;
    var memberPw = req.query.memberPw;
    var memberName = req.query.memberName;
    var memberEmail = req.query.memberEmail;

    var conn = mysql.createConnection(conn_info);

    var sql1 = "SELECT MAX(memberNo) FROM member";

    conn.query(sql1, function (error, rows) {
      /*
                var json = JSON.stringify(rows); 
                var data = JSON.parse(json);

                위 두과정을 통해 정식 컬럼명이아닌 MAX(memberNo) 를 찾을수있다. 
                정식 컬럼 명이면 위 두과정을 할필요없다. 
            */
      var json = JSON.stringify(rows);
      console.log(`${json} JSON.stringify`);
      var data = JSON.parse(json);
      var memberNo = data[0]["MAX(memberNo)"] + 1;

      var sql2 = "INSERT INTO member VALUES(?, ?, ?, ?, ?)";
      var inputData = [memberNo, memberId, memberPw, memberName, memberEmail];

      // 두번째 연결
      conn.query(sql2, inputData, function (error) {
        conn.end();
        res.redirect("memberListAll");
      });
    });
  });

  app.get("/memberDeleteForm", function (req, res) {
    var memberNo = req.query.memberNo;

    var conn = mysql.createConnection(conn_info);

    // db 로 전달될 데이터는 ? 로 표시한다.
    var sql = "SELECT * FROM member WHERE memberNo=?";

    // 위 ? 에 넣을 데이터를 배열로 순서대로 저장한다.
    var inputData = [memberNo];

    // db에 넘겨줄 배열을 세팅한다.
    conn.query(sql, inputData, function (error, rows) {
      var renderData = {
        memberDB: rows,
      };
      conn.end();
      res.render("member/memberDeleteForm.ejs", renderData);
    });
  });

  app.get("/memberDeletePro", function (req, res) {
    /*
            삭제의 경우 아이디와 비밀번호가 맞으면 삭제한다. 
        */
    var memberId = req.query.memberId;
    var memberPw = req.query.memberPw;

    var conn = mysql.createConnection(conn_info);
    var sql = " DELETE FROM member WHERE memberId = ? and memberPw = ? ";
    var inputData = [memberId, memberPw];
    console.log(inputData);
    conn.query(sql, inputData, function (error) {
      console.log(error);
      conn.end();
      res.redirect("memberListAll");
    });
  });
};
