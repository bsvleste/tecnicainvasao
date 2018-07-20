module.exports = function(app)
{
    var autenticar = require('./../middleware/autenticador');
    var contatos = app.controllers.contatos;
    app.get('/contatos',autenticar,contatos.index);
    app.get('/contato/:id',autenticar,contatos.show);
    app.get('/contato/:id/editar',autenticar, contatos.edit);
    app.post('/contatos',autenticar,contatos.create);
    app.put('/contato/:id',autenticar,contatos.update);
    app.del('/contato/:id',autenticar,contatos.destroy);
}