module.exports = function(app)
{
    var chat = app.controllers.chat;
    var autenticar = require('./../middleware/autenticador');
    app.get('/chat/:email',autenticar,chat.index);
}