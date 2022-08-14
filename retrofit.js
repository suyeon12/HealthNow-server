var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'admin123',
    database: 'NUTRI'
});

connection.connect();


router.get('/recommand', function(req, res) {

    if (req.query.data == 10) {
        connection.query(
        "SELECT * FROM NUTRI WHERE TYPE LIKE '비타민%' ORDER BY TYPE ASC" ,
        (err, results, fields) => {
            if (err) throw err;
            console.log('results: ', results);
            res.send(results);
        }
        )}

    else if (req.query.data == 20) {
        connection.query(
         "SELECT * FROM NUTRI WHERE TYPE LIKE '비타민%' OR TYPE = '유산균' OR TYPE = '마그네슘' ORDER BY TYPE ASC",
          (err, results, fields) => {
             if (err) throw err;
             console.log('results: ', results);
             res.send(results);
            }
        )}

    else if (req.query.data == 40) {
        connection.query(
        "SELECT * FROM NUTRI WHERE TYPE = '비타민B' OR TYPE = '코엔자임Q10' ORDER BY TYPE ASC",
        (err, results, fields) => {
            if (err) throw err;
            console.log('results: ', results);
            res.send(results);
            }
        )}

    else if (req.query.data == 60) {
        connection.query(
        "SELECT * FROM NUTRI WHERE TYPE = '오메가3' OR TYPE = '루테인' OR TYPE = '셀레늄' ORDER BY TYPE ASC",
        (err, results, fields) => {
                if (err) throw err;
            console.log('results: ', results);
                res.send(results);
            }
        )}
        
                

    else if (req.query.data == 1) {
        connection.query(
        "SELECT * FROM NUTRI WHERE TYPE LIKE '비타민%' ORDER BY TYPE ASC",
        (err, results, fields) => {
            if (err) throw err;
            console.log('results: ', results);
            res.send(results);
            }
        )}

    else if (req.query.data == 2) {
        connection.query(
        "SELECT * FROM NUTRI WHERE TYPE = '오메가3' ORDER BY TYPE ASC",
        (err, results, fields) => {
            if (err) throw err;
            console.log('results: ', results);
            res.send(results);
            }
        )}

    else if (req.query.data == 3) {
        connection.query(
        "SELECT * FROM NUTRI WHERE TYPE = '코엔자임Q10' ORDER BY TYPE ASC",
        (err, results, fields) => {
            if (err) throw err;
            console.log('results: ', results);
            res.send(results);
            }
        )}

    else if (req.query.data == 'userdb') {
        connection.query(
        "SELECT * FROM USER",
        (err, results, fields) => {
            if (err) throw err;
            console.log('results: ', results);
            res.send(results);
            }
        )}
    


    else if ((req.query.data).charAt(0) == '0') {
        connection.query(
            "DELETE FROM USER WHERE NAME = ?", [(req.query.data).substring(1)],
            function(err, results, fields){
                if(err){
                    console.log(err);
                } else {
                    console.log(results);
                }
            })
    }

    else {
        var name = req.query.data;
        var sql = "INSERT INTO USER SELECT * FROM NUTRI WHERE NAME = ?";
        connection.query(sql, [name], function(err, results, fields){
            if(err){
                console.log(err);
            } else {
                console.log(results);
            }
        })
        }
})


module.exports = router;