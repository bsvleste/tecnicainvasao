var express = require('express');
var load = require('express-load');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({
  secret:'keyboard cat'
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));


load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000,function(){
  console.log("Btalck in the house!!!");
})