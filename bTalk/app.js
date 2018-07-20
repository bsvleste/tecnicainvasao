var express = require('express');
var load = require('express-load');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var methodOverride = require('express-method-override');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('btalk'));
app.use(session({
  secret:'keyboard cat'
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));


app.use(function(error,req,res,next){
  res.status(500);
  res.render('server-error',error);
});


load('models')
  .then('controllers')
  .then('routes')
  .into(app);

/*conexao eal time*/
io.sockets.on('connection',function(client){
  client.on('send-server',function(data){
    var msg = "<b>"+data.nome+":</b>"+data.msg+"<br>";
    client.emit('send-client',msg);
    client.broadcast.emit('send-client',msg); 
  })
})
server.listen(3000,function(){
  console.log("Btalck in the house!!!");
})