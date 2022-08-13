var oracledb = require('oracledb');
v
// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// 익스프레스 객체 생성
var app = express();
 
// 기본 속성 설정
app.set('port', process.env.PORT || 3000);



// body-parser
var bodyParser = require('body-parser');
const { getSystemErrorMap } = require('util');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// 라우터 객체 참조
var router = express.Router();

// Oracle Auto Commit 설정
oracledb.autoCommit = true;


router.post('/dbinsert', function(request, response){

    oracledb.getConnection({
        user            : system,
        password        : 1234,
        connectString   : dbConfig.connectString
    },
    function(err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }

        let query = 'INSERT INTO NUTRI(TYPE,NAME,DAY,COUNT)' + 'VALUES(:TYPE, :NAME, :DAY, :COUNT)';
});
});


