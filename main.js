var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World D-Ocean!')
})

app.get('/user', function (req, res) {
  res.send('Hello World W-Ocean USER!')
})

app.listen(3000, function () {
  console.log('Magic at 3000!')
})