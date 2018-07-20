module.exports = function(app)
{
    var ContatoController = {
        index: function(req,res)
        {
            var usuario = req.session.usuario;
            var contatos = usuario.contatos;
            var params = {usuario: usuario, contatos:contatos};
            res.render('contatos/index',params);
        },
        create: function(req,res)
        {
            const { contato } = req.body;
            const { usuario } = req.session;
            usuario.contatos.push(contato);
            res.redirect('/contatos');
        },
        show:function(req,res)
        {
            const { id } =req.params;
            const {usuario} = req.session;
            const contato = usuario.contatos[id];
             
            res.render('./contatos/show',{id,contato});
        },
        edit:function(req,res)
        {
            var id = parseInt(req.params.id),
                usuario = req.session.usuario,
                contato = usuario.contatos[id],
                params = {  usuario:usuario,
                            contato:contato,
                            id:id};                            
            res.render('./contatos/edit',params);
        },
        update:function(req,res)
        {
            var contato = req.body.contato,
                usuario = req.session.usuario;
            usuario.contatos[req.params.id] = contato;
            res.redirect('/contatos');
        },
        destroy:function(req,res)
        {
            var usuario = req.session.usuario,
                id = req.params.id;
            usuario.contatos.splice(id,1);
            res.redirect('/contatos');
        }
    }
    return ContatoController;
}