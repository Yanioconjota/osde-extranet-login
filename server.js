var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/", express.static(__dirname + "/"));


app.get('/index.html', function (req, res) {
  res.render('../index.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
