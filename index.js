var retrofitRouter = require('./retrofit');
var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();
const port = 3000


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/retrofit', retrofitRouter);
app.use("/", (req, res) => {
    res.send(200)
})


app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`)
  })
