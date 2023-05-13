var express = require("express");
var http = require("http");

var app = express();

// 시스템 환경 변수 PORT 값이 없으면 뒤에 있는 값(3000) 사용
app.set("port", process.env.PORT || 3000);

// 미들웨어 등록
app.use(function(req, res, next) {
    console.log("첫번째 미들웨어 호출됨");

    res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    res.end("<h1>서버에서 응답한 결과입니다.</h1>");
});

var server = http.createServer(app).listen(app.get("port"), function(){
    console.log("Express로 웹 서버를 실행 : " + app.get("port"));
});